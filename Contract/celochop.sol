// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./ChopToken.sol";

contract ChopConnect is ReentrancyGuard, ERC721URIStorage {

    AggregatorV3Interface internal priceFeed;
    IERC20 public cUSD;
    uint256 public nextTokenId;
    mapping(uint256 => uint256) public restaurantToNFT;
    mapping(uint256 => address) private _owners;

    constructor(address _cUSD) ERC721("ChopNFT", "CHN") {
        cUSD = IERC20(_cUSD);
        priceFeed = AggregatorV3Interface(0x642Abc0c069dC5041dEA5bFC155D38D844779274);
    }

    struct Item {
        string name;
        uint256 price;
        bool disabled;
        string ipfsHash; // IPFS hash of the food image
    }

    struct Restaurant {
        address payable owner;
        uint256 fund;
        string name;
        string addr;
        string ipfsHash; // IPFS hash of the restaurant image
        uint256 areaId;
        uint256 itemId;
        mapping(uint256 => Item) items;
        uint256 voteCount;
        bool highlighted;
    }

    struct User {
        string name;
        string addr;
        uint256 loyaltyPoints;
        string ipfsHash; // IPFS hash of the profile image
    }

    enum OrderStatus { Placed, Approved, PickedUp, Delivered, Canceled, Reclaimed }

    struct Order {
        address payable orderer;
        address payable deliverer;
        uint256 fund;
        uint256 restaurantId;
        uint256[] items;
        uint256[] quantities;
        uint256 areaId;
        string fullAddress;
        OrderStatus status;
        uint256 orderTime;
        string verificationCode;
    }

    struct Governance {
        mapping(uint256 => uint256) restaurantVotes;
        mapping(address => bool) hasVoted;
        address[] voters;
        uint256 totalVotes;
    }

    Governance public governance;

    address admin = msg.sender;
    uint256 public commissionRate = 10;
    uint256 public maxDeliveryTime = 60;

    event NewRestaurant(uint256 restaurantId);
    event NewOrder(uint256 orderId, address restaurant);
    event OrderCanceled(uint256 orderId, address orderer);
    event OrderApproved(uint256 orderId, address orderer);
    event OrderAccepted(uint256 orderId, address deliverer, address restaurant);
    event OrderPickedup(uint256 orderId, address orderer);
    event OrderDelivered(uint256 orderId, address orderer);
    event UserRegistered(address userAddress, string userId);
    event VoteCast(address user, uint256 restaurantId);
    event WinnerDeclared(uint256 restaurantId, string restaurantName);
    event NFTAwarded(uint256 tokenId, uint256 restaurantId);
    event FoodListed(uint256 restaurantId, uint256 itemId, string name, uint256 price, string ipfsHash);
    event RestaurantListed(uint256 restaurantId, string name, string addr, string ipfsHash);

    modifier isAdmin() {
        require(msg.sender == admin, "Access denied: Admin only");
        _;
    }

    mapping(address => User) public users;
    Restaurant[] public restaurants;
    Order[] public orders;

    // Register a user
    function register(string memory name, string memory addr, string memory ipfsHash) external {
        User memory user = User(name, addr, 0, ipfsHash);
        users[msg.sender] = user;
        emit UserRegistered(msg.sender, name);
    }

    // Get user details
    function getUserDetails(address userAddress) external view returns (string memory, string memory, uint256, string memory) {
        User storage user = users[userAddress];
        return (user.name, user.addr, user.loyaltyPoints, user.ipfsHash);
    }

    // Add a restaurant
    function addRestaurant(string memory _name, string memory _addr, uint256 _areaId, string memory _ipfsHash) external {
        Restaurant storage restaurant = restaurants.push();
        restaurant.owner = payable(msg.sender);
        restaurant.fund = 0;
        restaurant.name = _name;
        restaurant.addr = _addr;
        restaurant.areaId = _areaId;
        restaurant.highlighted = false;
        restaurant.ipfsHash = _ipfsHash;

        emit NewRestaurant(restaurants.length - 1);
    }

    // Get restaurant details
    function getRestaurant(uint256 _id) external view returns (
        string memory name,
        string memory addr,
        uint256 areaId,
        uint256 itemCount,
        uint256 voteCount,
        bool highlighted,
        string memory ipfsHash
    ) {
        Restaurant storage restaurant = restaurants[_id];
        return (
            restaurant.name,
            restaurant.addr,
            restaurant.areaId,
            restaurant.itemId,
            restaurant.voteCount,
            restaurant.highlighted,
            restaurant.ipfsHash
        );
    }

    // List restaurant details
    function listRestaurant(uint256 _id) external {
        Restaurant storage restaurant = restaurants[_id];
        emit RestaurantListed(_id, restaurant.name, restaurant.addr, restaurant.ipfsHash);
    }

    // Add item to restaurant's menu
    function addItem(uint256 restid, string memory name, uint256 price, string memory ipfsHash) external nonReentrant {
        require(restid < restaurants.length, "Restaurant does not exist");
        Restaurant storage restaurant = restaurants[restid];
        require(restaurant.owner == msg.sender, "Access denied: Owner only");

        emit FoodListed(restid, restaurant.itemId, name, price, ipfsHash);
        
        restaurant.items[restaurant.itemId] = Item(name, price, false, ipfsHash);
        restaurant.itemId++;

        emit FoodListed(restid, restaurant.itemId - 1, name, price, ipfsHash);
    }

    // Get item details from restaurant
    function getItem(uint256 restId, uint256 itemId) external view returns (string memory name, uint256 price, string memory ipfsHash) {
        Item storage item = restaurants[restId].items[itemId];
        return (item.name, item.price, item.ipfsHash);
    }

    // List food item for sale
    function listFoodForSale(uint256 restId, uint256 itemId) external {
        Item storage item = restaurants[restId].items[itemId];
        emit FoodListed(restId, itemId, item.name, item.price, item.ipfsHash);
    }

    // Award NFT to a user
    function awardNFT(address _to, string memory tokenURI, uint256 restaurantId) external nonReentrant {
        uint256 tokenId = nextTokenId;
        _mint(_to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        restaurantToNFT[restaurantId] = tokenId;
        nextTokenId++; // Post-increment nextTokenId

        emit NFTAwarded(tokenId, restaurantId);
    }

    // Place an order
    function placeOrder(
        uint256 restaurantId,
        uint256[] memory items,
        uint256[] memory quantities,
        uint256 areaId,
        string memory fullAddress,
        string memory verificationCode
    ) external nonReentrant {
        //Restaurant storage restaurant = restaurants[restaurantId];
        uint256 totalAmount = calculateOrderPrice(items, quantities, restaurantId);

        require(cUSD.transferFrom(msg.sender, address(this), totalAmount), "Payment failed");

        Order memory order = Order(
            payable(msg.sender),
            payable(address(0)),
            totalAmount,
            restaurantId,
            items,
            quantities,
            areaId,
            fullAddress,
            OrderStatus.Placed,
            block.timestamp,
            verificationCode
        );
        orders.push(order);

        emit NewOrder(orders.length - 1, msg.sender);
    }

    // Cancel an order
    function cancelOrder(uint256 orderId) external nonReentrant {
        Order storage order = orders[orderId];
        require(msg.sender == order.orderer, "Access denied");
        require(order.status == OrderStatus.Placed, "Order cannot be canceled");

        order.status = OrderStatus.Canceled;
        require(cUSD.transfer(order.orderer, order.fund), "Refund failed");

        emit OrderCanceled(orderId, order.orderer);
    }

    // Accept an order
    function acceptOrder(uint256 orderId) external nonReentrant {
        Order storage order = orders[orderId];
        require(order.status == OrderStatus.Placed, "Order not available");

        order.deliverer = payable(msg.sender);
        order.status = OrderStatus.Approved;

        emit OrderAccepted(orderId, msg.sender, restaurants[order.restaurantId].owner);
    }

    // Mark an order as delivered
    function markOrderAsDelivered(uint256 orderId, string memory verificationCode) external nonReentrant {
        Order storage order = orders[orderId];
        require(msg.sender == order.orderer, "Access denied");
        require(order.status == OrderStatus.PickedUp, "Order not picked up yet");
        require(keccak256(abi.encodePacked(verificationCode)) == keccak256(abi.encodePacked(order.verificationCode)), "Invalid verification code");

        order.status = OrderStatus.Delivered;

        uint256 commission = (order.fund * commissionRate) / 100;
        uint256 remainingFund = order.fund - commission;

        require(cUSD.transfer(order.deliverer, remainingFund), "Transfer to deliverer failed");
        require(cUSD.transfer(admin, commission), "Transfer to admin failed");

        emit OrderDelivered(orderId, order.orderer);
    }

    // Vote for a restaurant
    function vote(uint256 restaurantId) external nonReentrant {
        require(!governance.hasVoted[msg.sender], "Already voted");

        governance.restaurantVotes[restaurantId]++;
        governance.totalVotes++;
        governance.voters.push(msg.sender);
        governance.hasVoted[msg.sender] = true;

        users[msg.sender].loyaltyPoints++;

        emit VoteCast(msg.sender, restaurantId);
    }

    // Declare winner based on votes
    function declareWinner() external isAdmin nonReentrant {
        uint256 highestVotes = 0;
        uint256 winningRestaurantId;

        for (uint256 i = 0; i < restaurants.length; i++) {
            if (governance.restaurantVotes[i] > highestVotes) {
                highestVotes = governance.restaurantVotes[i];
                winningRestaurantId = i;
            }
        }

        restaurants[winningRestaurantId].highlighted = true;

        emit WinnerDeclared(winningRestaurantId, restaurants[winningRestaurantId].name);
    }

    // Calculate total order price
    function calculateOrderPrice(uint256[] memory items, uint256[] memory quantities, uint256 restId) public view returns (uint256 totalPrice) {
        Restaurant storage restaurant = restaurants[restId];
        require(items.length == quantities.length, "Mismatched items and quantities");

        for (uint256 i = 0; i < items.length; i++) {
            Item storage item = restaurant.items[items[i]];
            totalPrice += item.price * quantities[i];
        }
    }

    // Override tokenURI function to return token URI from ERC721URIStorage
    function tokenURI(uint256 tokenId) public view override(ERC721URIStorage) returns (string memory) {
        require(_exists(tokenId), "ERC721URIStorage: URI query for nonexistent token");
        return super.tokenURI(tokenId);
    }

    // // Alternative to _exists
    // function tokenExists(uint256 tokenId) public view returns (bool) {
    //     return _owners[tokenId] != address(0);
    // }

    // Fix for _owners mapping
    function _exists(uint256 tokenId) internal view virtual  returns (bool) {
        return _owners[tokenId] != address(0);
    }

    // function _burn(uint256 tokenId) internal virtual override(ERC721URIStorage) {
    //     super._burn(tokenId);
    // }
}
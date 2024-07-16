# Chop Connect: A Decentralized Food Delivery Platform for SMEs in Nigeria

**Direct to your Door, Direct to your Heart ❤️**

## Description

Chop Connect is a decentralized food delivery platform tailored for small towns in Nigeria. Leveraging the Celo blockchain and integrating with the Minipay wallet, it aims to provide seamless transactions, a rewarding user experience, and decentralization where each restaurant manages its delivery services.

### Problem Statement

Most major food delivery companies operate in a highly centralized manner, collecting significant charges and primarily partnering with large, well-known restaurants. This model excludes many small and medium-sized enterprises (SMEs) from participating in the latest tech trends, limiting their reach and potential growth. In Nigeria, major food delivery platforms like Uber Eats and Glovo focus their operations in major cities such as Lagos and Abuja, partnering with large restaurant chains like Chicken Republic and Kilimanjaro. This leaves smaller localities and towns, like Eket, underserved. Users in these areas are left behind, and local SMEs struggle to gain visibility and access to modern delivery solutions.

### Objective

Chop Connect aims to address this gap by creating a decentralized food delivery platform that connects users directly to local restaurants. Our goal is to provide a personalized and efficient food delivery service that reaches the heart of smaller communities, bringing modern convenience to users and empowering local SMEs.

### Methodology

* **Decentralization:** Utilize the Celo blockchain to decentralize the platform, reducing intermediary costs and providing transparency.
* **Minipay Integration:** Implement Minipay for secure and convenient transactions using CUSD, making it accessible even in areas with limited internet connectivity.
* **Local Empowerment:** Allow each restaurant to manage its own deliveries, fostering a personalized connection between the restaurant and the customer.
* **AI Assistance:** Integrate an AI-powered chatbot to assist users with meal recommendations, healthy recipes, and fitness tips, enhancing the overall user experience.
* **Loyalty and Rewards:** Implement a system of loyalty points and custom coupon rewards to incentivize users and promote customer retention.
* **Geolocation Services:** Enhance user experience with geolocation services to find nearby restaurants, optimize deliveries, and provide localized recommendations using Google Maps API.

### Scope of the Solution

Chop Connect aims to serve small towns and localities in Nigeria, starting with Eket. By decentralizing the food delivery process, the platform will:

* Enable local restaurants to participate in modern food delivery services without the high costs associated with centralized platforms.
* Provide users with a seamless, secure, and personalized food delivery experience.
* Promote local SMEs, increasing their visibility and customer base.
* Ensure secure transactions through blockchain technology and Minipay integration.
* Offer loyalty programs and AI assistance to enhance user engagement and satisfaction.
* Leverage geolocation services to improve delivery efficiency and user convenience.

### Additional Relevant Details

#### Key Features

Decentralized escrow service, delivery code verification, OTP payment with Minipay, custom coupon rewards, loyalty points, referral program with Soul-Bound Tokens, contest feature, AI chatbot assistance, and geolocation services with Google Maps API integration.

### Target Audience

Local residents of small towns in Nigeria, starting with Eket, and local SMEs seeking to expand their reach and modernize their delivery services.

By implementing Chop Connect, we aim to transform the food delivery landscape in small towns across Nigeria, providing convenience, quality, and economic growth to local communities.

## How it was Built

Our journey began with a brainstorming session during the hackathon, where we aligned our idea with the event's theme and developed a Project Requirements Document (PRD) outlining the MVP features and additional functionalities to build after the hack phase.

### Technical Solution

#### Technologies Used

##### Frontend Development

* **React.js and Vite:** For building a responsive and dynamic user interface.
* **Viem and Third.js:** For enhanced performance and visualizations.
* **Android Studio:** To ensure the website is mobile-friendly.

#### Design

* **Figma:** Used for creating the UI/UX designs.

#### Blockchain Integration

* **Celo Composer:** To integrate Minipay for seamless OTP payments.
* **Solidity:** For writing the smart contracts.
* **Metamask Wallet:** For testing and interactions with the blockchain.
* **Remix IDE:** For developing and deploying smart contracts.
* **Celo cUSD Testnet:** For simulating real-world transactions during development.
* **Oracle Chainlink Pricefeed:** For obtaining reliable price data.
* **OpenZeppelin Library:** For secure and standardized smart contract development.

#### Geolocation Services

* **Google Maps API:** For providing geolocation services to find nearby restaurants, optimize deliveries, and provide localized recommendations.

### Features Developed

* User Registration
* Add Items to Cart
* Search Restaurants
* Place Orders
* Declare Contest Winners
* Award Restaurant NFT Badges
* Reward Voters

### Architecture

#### How Technologies are Pieced Together

* **Frontend:** Built using React.js, Vite, Viem, and Third.js, the frontend communicates with the smart contracts deployed on the Celo blockchain. Android Studio ensures the mobile compatibility of the website.
* **Smart Contracts:** Written in Solidity and deployed using Remix IDE, the smart contracts handle core functionalities like payments, order management, and reward systems. OpenZeppelin libraries ensure security and standardization.
* **Blockchain Integration:** Celo cUSD Testnet facilitates secure and transparent transactions. Metamask Wallet is used for interactions, and Chainlink Pricefeed provides accurate pricing data.
* **Geolocation Services:** Google Maps API is integrated to enhance user experience by providing accurate location data for restaurants and optimizing delivery routes.

### Challenges

* **Gas Fees:** High gas fees on the Testnet led us to streamline our initial list of functions, focusing on the seven most critical features.
* **Smart Contract Issues:** We almost lost our smart contract code on Gist but managed to recover it in time.
* **Deployment Blockers:** Encountered challenges with viewing transaction details post-deployment, which were resolved with mentor assistance.
* **Frontend Issues:** Faced compatibility issues with Android Studio and initial problems interacting with the smart contract, which were resolved using the ABI.

### Roadmap

* **Phase 1:** MVP Development
  * Complete the seven core features: registration, cart management, restaurant search, order placement, contest management, NFT badges, and voter rewards.

* **Phase 2:** Feature Expansion
  * Introduce additional features such as enhanced loyalty programs, AI-powered chatbot, and more complex reward systems.

* **Phase 3:** Testing and Optimization
  * Conduct thorough testing on the Testnet to ensure stability and performance.
  * Optimize the smart contracts for lower gas fees and higher efficiency.

* **Phase 4:** Launch and Scale
  * Deploy Chop Connect on the mainnet.
  * Begin operations in Eket, followed by expansion to other small towns in Nigeria.
  * Continuously gather user feedback and iterate on the platform to enhance user experience and functionality.

# Try Out Links
* **[Figma File]((https://www.figma.com/design/YUj8bvy1ZOHFuZWoGo5vvn/Food-Hackerthon-stuff?node-id=0-1&t=2vj1VCUIffRyPl9K-1))**

### Lessons Learned

* **Working Together:** We learned how to work effectively in cross-functional teams, enhancing collaboration and communication.
* **Prioritization:** We learned the importance of prioritizing tasks and features, realizing that getting things done is often better than seeking perfection.

Despite facing various challenges, our team has successfully developed a robust MVP for Chop Connect. We are committed to empowering local SMEs and bringing modern food delivery services to underserved areas. With a clear roadmap and continuous innovation, we aim to make Chop Connect a leading decentralized food delivery platform in Nigeria.

---

By focusing on decentralization, local empowerment, and innovative technology, Chop Connect is set to revolutionize the food delivery landscape in small towns across Nigeria. We invite investors and stakeholders to join us in making this vision a reality, supporting local businesses, and providing modern conveniences to communities that need them most.

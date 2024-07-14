import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link  } from 'react-router-dom'
import CeloAbi   from '../Utils/CeloABI'
import ContractAddress from '../Utils/ContractAddress'
import { publicClient, walletClient, account } from '../Utils/Client'
import { useNavigate } from 'react-router-dom'


const AddItem = () => {
  const contractAddress = ContractAddress;
  const [foodName, setFoodName] = useState('');
  const [foodPrice, setFoodPrice] = useState('');
  const [foodImage, setFoodImage] = useState(null);
  const navigate = useNavigate();
  
  const addItemToContract = async (e) => {
  e.preventDefault();
  console.log('foodName:', foodName, 'account:', account, 'foodPrice:', foodPrice); // Debugging line
  try {
    // Ensure foodPrice is a BigInt
    const bigIntFoodPrice = BigInt(foodPrice);
    const { request } = await publicClient.simulateContract({
      address: contractAddress,
      abi: CeloAbi, 
      functionName: 'addItem', 
      args: [account,foodName, bigIntFoodPrice], 
      account, 
    });

    const response = await walletClient.writeContract(request);
    console.log('Item added to contract:', response);
    alert('Item added to contract');
    navigate('/homepage');
  } catch (error) {
    console.error('Failed to add item to contract:', error);
  }
}

  
    return (  
      <form onSubmit={addItemToContract} className="min-h-screen flex flex-col items-center justify-center px-4 -mt-5 sm:px-6 lg:px-8">
        <div className='max-w-3xl px-4 py-10 bg-[#F0F5FA] bg-opacity-10 backdrop-blur-lg rounded-xl'>
          <div className='flex flex-row-reverse justify-between'>
            <h1 className=' mr-16 tracking-wider'> LIST FOOD FOR SALE </h1>
              <Link to='/homepage'>
                <button className='flex items-center justify-center w-[40px] h-[40px] bg-[#ECF0F4] text-[#181C2E] rounded-full'>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </Link>
          </div>
          <div className="mb-4">
            <label htmlFor="foodName" className="block text-[#FF7622] text-left text-md font-bold mb-2 tracking-wider">Food Name</label>
            <input
              type="text"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              id="foodName"
              placeholder='jollof'
              required
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="foodPrice" className="block text-[#FF7622] text-left text-md font-bold mb-2 tracking-wider">Food Price</label>
            <input
              type="number"
              id="foodPrice"
              value={foodPrice}
              placeholder='$10'
              onChange={(e) => setFoodPrice(e.target.value)}
              required
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="foodImage" className="block text-[#FF7622] text-left text-md font-bold mb-2 tracking-wider">Food Image</label>
           <div className='border w-32 h-24 pr-5 py-5'>
           <input
              type="file"
              id="foodImage"
              onChange={handleImageChange}
              accept="image/*"
              required
              className=" rounded w-80 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
           </div>
          </div> */}
          <div className='flex justify-center'>
            <button
              type="submit"
              className="bg-[#FF7622] hover:bg-[#FF7622] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Item
            </button>
          </div>
        </div>
      </form>
    );
  };

  export default AddItem;
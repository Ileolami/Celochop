import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link  } from 'react-router-dom'
import CeloAbi   from '../Utils/CeloABI'
import ContractAddress from '../Utils/ContractAddress'
import { publicClient, walletClient, account } from '../Utils/Client'
import { useNavigate } from 'react-router-dom'
import { parseEther } from 'viem'


const AddItem = () => {
  const contractAddress = ContractAddress;
  const [foodName, setFoodName] = useState('');
  const [foodPrice, setFoodPrice] = useState('');
  const [foodAddress, setFoodAddress] = useState('');
  const [foodImage, setFoodImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoodImage(file);
    }
  }
  
  const addItemToContract = async (e) => {
  e.preventDefault();
  console.log('foodName:', foodName, 'account:', account, 'foodPrice:', foodPrice); // Debugging line
  try {
    const { request } = await publicClient.simulateContract({
      account,
      address: contractAddress,
      abi: CeloAbi,
      functionName: 'addItem',
      args: [1, 'new york', 20, 'www.image.com'],
    });

    const response = await walletClient.writeContract(request);
    console.log('Item added to contract:', response);
    // alert('Item added to contract');
    // navigate('/homepage');
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
            <label htmlFor="foodSelection" className="block text-[#FF7622] text-left text-md font-bold mb-2 tracking-wider">Select Food</label>
            <select
              value={foodName} // Assuming foodName holds the value in the format "FoodName - ID"
              onChange={(e) => setFoodName(e.target.value)}
              id="foodSelection"
              required
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>Select your food</option>
              {/* Example options, replace these with your actual data */}
              <option value="01">Jollof and goat meat</option>
              <option value="02">Native Rice and smoked fish</option>
              <option value="03">Ogbono and fufu</option>
              <option value="04">Yam and Egg </option>
              <option value="05">Fried Rice and turkey </option>
              <option value="06">Amala and Ewedu </option>
            </select>
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
          <div className="mb-4">
            <label htmlFor="foodDescription" className="block text-[#FF7622] text-left text-md font-bold mb-2 tracking-wider">Food Description</label>
            <textarea
            type="text"
              id="foodDescription"
              value={foodAddress}
              onChange={(e) => setFoodAddress(e.target.value)}
              placeholder='This is jollof made with tomatoes, cucumbers, and onions.'
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
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
          </div>
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
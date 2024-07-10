import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Rating from'./Rating';

const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
	<div className="fixed inset-1/4 bg-black bg-opacity-50 z-50 flex justify-center items-center leading-7 ">
	<div className="bg-white p-6 rounded-lg shadow-lg space-y-1">
		<button onClick={onClose} className="float-right font-bold bg-[#A0A5BA] pb-4 text-white rounded-full h-[24px] w-[20px] "><FontAwesomeIcon icon={faXmark} className='w-[10px]'/></button>
		<h2 className="text-lg ">Filter your search</h2>
		
		<div className="flex flex-col space-y-2">
			<div>
            <h1 className='tracking-wider'>OFFERS</h1>
              <div className='grid grid-cols-3 gap-3 text-sm'>
                <button className='border w-[80px] p-2 rounded-2xl border-[#EDEDED] hover:bg-[#ff7622] hover:text-white'>Delivery</button>
                <button className='border w-[80px] p-2 rounded-2xl border-[#EDEDED] hover:bg-[#ff7622] hover:text-white'>Offer</button>
                <button className='border w-[80px] p-2 rounded-2xl border-[#EDEDED] hover:bg-[#ff7622] hover:text-white'>Pick-up</button>
                <button className='border w-[200px] p-2 rounded-2xl border-[#EDEDED] hover:bg-[#ff7622] hover:text-white'>Online Payment Service</button>
              </div>
            </div>
			<div>
                <h1 className='tracking-wider'> DELIVERY TIME</h1>
                <div className='grid grid-cols-3 gap-3 text-sm'>
                    <button className='border w-[80px] p-1 rounded-2xl border-[#EDEDED] hover:bg-[#F58D1D] hover:text-white'>10-15 mins</button>
                    <button className='border w-[80px] p-1 rounded-2xl border-[#EDEDED] hover:bg-[#F58D1D] hover:text-white'>20 mins</button>
                    <button className='border w-[80px] p-1 rounded-2xl border-[#EDEDED] hover:bg-[#F58D1D] hover:text-white'>35 mins</button>
                </div>
            </div>
			<div>
                <h1 className='tracking-wider'>PRICING</h1>
                <div className='grid grid-cols-3 gap-3 text-sm'>
                    <button className='border w-[80px] p-1 rounded-2xl border-[#EDEDED] hover:bg-[#F58D1D] hover:text-white'>Below $10</button>
                    <button className='border w-[80px] p-1 rounded-2xl border-[#EDEDED] hover:bg-[#F58D1D] hover:text-white'>$10-$20</button>
                    <button className='border w-[80px] p-1 rounded-2xl border-[#EDEDED] hover:bg-[#F58D1D] hover:text-white'>Above $20</button> 
                </div>    
            </div>
            <div>
                <h1 className='tracking-wider'>RATING</h1>
                <Rating totalStars={5} />
            </div>
		</div>
		<div className='flex justify-center '>
        <button type="submit" className="mt-4 bg-[#FF7622] text-white px-14 py-2 rounded-md tracking-widest">FILTER</button>
		
        </div>
	</div>
	</div>,
	document.body
  );
};

export default FilterModal;
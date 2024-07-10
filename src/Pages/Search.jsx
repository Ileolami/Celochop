import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronLeft, faCartShopping, faXmark, faFilter} from '@fortawesome/free-solid-svg-icons'
import Creamy from '../assets/image 2234.png'
import Visaco from '../assets/image 2235.png'
import Oliver from '../assets/image 2236.png'
import Start from '../assets/Star 1.png'
import Cruchies from '../assets/image.png'
import Desirable from '../assets/imageD.png'
import Modal from '../Features/FilterModal'

const Search = () => {
     // State to control the visibility of the filter modal
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Function to toggle the filter modal visibility
  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };
  return (
    <div className='p-5 min-h-screen lg:p-20 bg-white rounded-2xl mx-5 lg:mx-10 flex flex-col gap-2 lg:gap-5'>
       <div className={isFilterModalOpen ? 'blur-effect' : ''}>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <button className='flex items-center justify-center w-[40px] h-[40px] bg-[#ECF0F4] text-[#181C2E] rounded-full'>
                <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className='text-[17px] font-bold mt-2'>Search</h1>
            </div>
            <div className='relative '>
                <button className='flex items-center justify-center w-[40px] h-[40px] bg-[#181C2E] rounded-full'>
                <FontAwesomeIcon icon={faCartShopping} className='text-white'/>
                </button>
                <span className='absolute -top-1 right-1 w-[15px] h-[16px] bg-[#FF7622] text-white rounded-full flex items-center justify-center'>2</span>
            </div>
        </div>
       <div className='flex justify-between '>
            <div className='flex gap-3  w-[250px] h-[40px] bg-[#EFEFEF] rounded-md shadow-md mt-5'>
                    <button><FontAwesomeIcon icon={faSearch} className='flex justify-center m-3 text-white'/></button>
                <input type='text' placeholder='Search' className='w-full px-5 py-2 text-sm outline-none bg-transparent' />
                <button className='flex justify-center m-3 bg-[#A0A5BA] text-white rounded-full w-[20px] h-[20px] px-2 pt-1 '>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
            <button onClick={toggleFilterModal} className='self-end p-2 bg-[#ECF0F4] rounded-full'>
             <FontAwesomeIcon icon={faFilter} />
            </button>
           <Modal isOpen={isFilterModalOpen} onClose={toggleFilterModal} />
       </div>
       <div className=' mt-5'>
        <h1>Recent Search</h1>
        <div className='flex flex-col sm:flex-row gap-3 mt-3'>
            <p className='border rounded-2xl border-[#181C2E] px-4 py-2'>Burger</p>
            <p className='border rounded-2xl border-[#181C2E] px-4 py-2'>Pizza</p>
            <p className='border rounded-2xl border-[#181C2E] px-4 py-2'>Sushi</p>
            <p className='border rounded-2xl border-[#181C2E] px-4 py-2'>Salad</p>
        </div>
       </div>
        <div className='mt-5'>
            <h1>Suggested Restaurants</h1>
            <div className='mt-5'>
                <div className='flex gap-4 my-5 border-b-2 pb-1'>
                    <img src={Creamy} alt='Creamy' className='w-[100px] h-[80px] rounded-md' />
                    <div>
                        <h2 className='text-lg font-bold'>Creamy Cafe</h2>
                        <p className='text-xs'>123 Main St, Los Angeles, CA</p>
                        <div className='flex gap-2'>
                            <span className='flex items-center justify-center  '>
                                <img src={Start} alt='star' className='' />
                            </span>
                            <p>4.5</p>
                        </div>        
                    </div>
                </div>
                <div className='flex gap-4 my-5 border-b-2 pb-1'>
                    <img src={Visaco} alt='Visaco' className='w-[100px] h-[80px] rounded-md' />
                    <div>
                        <h2 className='text-lg font-bold'>Visaco</h2>
                        <p className='text-xs'>123 Main St, Los Angeles, CA</p>
                        <div className='flex gap-2'>
                            <span className='flex items-center justify-center  '>
                                <img src={Start} alt='star' className='' />
                            </span>
                            <p>4.5</p>
                        </div>        
                    </div>
                </div> 
                <div className='flex gap-4 mt-5'>
                    <img src={Oliver} alt='Oliver' className='w-[100px] h-[80px] rounded-md' />
                    <div>
                        <h2 className='text-lg font-bold'>Oliver&apos;s</h2>
                        <p className='text-xs'>123 Main St, Los Angeles, CA</p>
                        <div className='flex gap-2'>
                            <span className='flex items-center justify-center  '>
                                <img src={Start} alt='star' className='' />
                            </span>
                            <p>4.5</p>
                        </div>        
                    </div>
                </div>    
            </div>
        </div>
       <div className=''>
            <h1>Popular Fast Food</h1>
            <div className='flex gap-14'>
                <div>
                    <img src={Cruchies} alt='Cruchies' className='w-[150px] h-[100px] rounded-md' />
                    <div className='text-center'>
                        <h2 className='text-xl font-bold'>Cruchies</h2>
                        <p className='text-[15px] text-[#646982] font-semibold'>Fast Food Restaurant</p>       
                    </div>
                </div>
                <div>
                    <img src={Desirable} alt='Desirable' className='w-[150px] h-[100px] rounded-md' />
                    <div className='text-center'>
                        <h2 className='text-xl font-bold'>Desirable</h2>
                        <p className='text-[15px] text-[#646982] font-semibold'>Fast Food Restaurant</p>       
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Search
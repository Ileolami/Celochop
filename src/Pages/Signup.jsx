import React, { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col justify-end items-center'>
      <form action="" className='mx-20 my-10 bg-white text-[#32343E] rounded-lg w-96'>
        <div className='flex flex-col m-5 gap-2'>
         
         <label htmlFor="Name" className=' ml-5'>NAME</label>
          <input type="text" name="Name" id="Name" className=' px-5 bg-[#F0F5FA] rounded-md m-2 outline-none h-16'/>
          
          <label htmlFor="Email" className='ml-5'>EMAIL</label>
          <input type="email" name="Email" id="Email" className=' px-5 bg-[#F0F5FA] rounded-md m-2 outline-none h-16'/>
          
          <label htmlFor="Password" className='ml-5'>PASSWORD</label>
          <div className="relative bg-[#F0F5FA] rounded-md">
            <input type={showPassword ? 'text' : 'password'}
              name="Password" 
              id="Password" 
              className=' px-5 bg-transparent m-1 outline-none h-14'/>
            <button type="button" onClick={togglePassword} className="absolute inset-y-0 right-0 pr-5 flex items-center">
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <label htmlFor="Confirm Password" className='ml-5'>CONFIRM PASSWORD</label>
          <div className="relative bg-[#F0F5FA] rounded-md">
            <input type={showConfirmPassword ? 'text' : 'password'}
              name="Password" 
              id="Password" 
              className=' px-5 bg-transparent m-1  outline-none h-14'/>
            <button type="button" onClick={toggleConfirmPassword} className="absolute inset-y-0 right-0 pr-5 flex items-center">
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <div className='text-center'>
          <button type='submit' className='w-72  px-5 py-3 text-white bg-[#FF7622] rounded-md m-2'>SIGN UP</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Signup
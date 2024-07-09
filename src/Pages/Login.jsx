import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FcGoogle } from "react-icons/fc"
import { SiFacebook } from "react-icons/si";
import { IoLogoApple } from "react-icons/io5";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className='flex flex-col justify-end items-center shadow-lg shadow-white'>
        <form action="" className='mx-20 my-10 bg-white text-[#32343E] rounded-2xl w-96'>
          <div className='flex flex-col m-5 gap-2'>        
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
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <input type="checkbox" name="" id=""  />
                    <label htmlFor="Remember">Remember Me</label>
                </div>
                <a href="#" className="text-[#FF7622]">Forgot Password?&amp;apos;</a>
            </div>
  
            <div className='text-center'>
            <button type='submit' className='w-72 tracking-[10px] px-5 py-3 text-white bg-[#FF7622] rounded-md m-2 '>LOGIN</button>
            </div>
            <p className='text-center'>Don&apos;t You have an account? <a href='/signup' className='text-[#FF7622] font-bold'>Sign up</a></p>
          </div>
          <h2 className='text-center tracking-wider text-xl font-bold'>or</h2>
          <div className="flex justify-center gap-6 m-5">
            <SiFacebook className='h-[40px] w-[40px]' />
            <FcGoogle className='h-[40px] w-[40px]' />
            <IoLogoApple className='h-[40px] w-[40px]' />
        </div>
        </form>
      </div>
    )
}

export default Login
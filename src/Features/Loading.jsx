import React from 'react'
import Picture from '../assets/Group 8266.png'

const Loading = () => {
  return (
    <div className='bg-[#121223] bg-cover min-h-screen'>
        <div className='flex justify-center items-center py-[170px]'>
        <img src={Picture} alt='loading' className='w-[100px] h-[100px] animate-moveRight' />
        </div>
    </div>
  )
}

export default Loading
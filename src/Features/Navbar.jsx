import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'; 

const Navbar = () => { 

    const [close, setClose] = useState(false);
    const CloseNavbar = () => {
        setClose(!close);
    }

    if (close) return null;

  return (
    <div className="h-full fixed left-0 top-0 w-2/4 bg-[#FF7622] text-white">
      <div className="flex justify-end p-2">
        <AiOutlineClose size={24} className="cursor-pointer border py-1 rounded-full hover:bg-[#181C2E]" onClick={CloseNavbar}/>
      </div>
      <nav>
        <ul className="flex flex-col p-4">
          <li className="mb-4">
            <Link to='/homepage' className="hover:bg-[#181C2E] hover:bg-opacity-25 border-none py-2 px-4 rounded-xl tracking-wide">Home</Link>
          </li>
          <li className="mb-4">
            <Link to='/profile' className="hover:bg-[#181C2E] hover:bg-opacity-25 border-none py-2 px-4 rounded-xl tracking-wide">Profile</Link>
          </li>
          <li className="mb-4">
            <Link to='/additem' className="hover:bg-[#181C2E] hover:bg-opacity-25 border-none py-2 px-4 rounded-xl tracking-wide">Add Item</Link>
          </li> 
          <li className="mb-4">
            <Link to='/search' className="hover:bg-[#181C2E] hover:bg-opacity-25 border-none py-2 px-4 rounded-xl tracking-wide">Search</Link>
          </li>   
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
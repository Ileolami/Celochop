import React, {useState} from "react";
import { CgMenuLeft } from "react-icons/cg";
import { RiShoppingBag3Line } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import Navbar from "./Navbar";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNavbar = () => setShowNavbar(!showNavbar);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-5">
       <div onClick={toggleNavbar} className=" cursor-pointer">
       <span className="rounded-full w-16 h-16 mx-auto flex items-center justify-center bg-gray-400 hover:bg-[#FF7622]">
          <CgMenuLeft size={30}  />
          {showNavbar && <Navbar />}
        </span>
       </div>

        <div className="">
          <p className="text-orange-500">DELIVER TO</p>
          <p className="text-gray-400 flex items-center gap-x-1">
            NEW YORK, NY{" "}
            <span className="text-gray-900">
              <RiArrowDownSFill size={24} />
            </span>
          </p>
        </div>
      </div>

      <div className="relative">
        <span className="bg-black w-16 h-16 mx-auto rounded-full flex items-center justify-center">
          <RiShoppingBag3Line size={30} />
        </span>
        <span className="absolute -top-2 right-1 bg-orange-500 h-7 w-7 flex items-center justify-center text-center rounded-full">
          0
        </span>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { GrSearch } from "react-icons/gr";

const Search = () => {
  return (
    <div className="my-6">
      <div className="space-y-3">
        <p className="text-gray-800 text-base sm:text-lg md:text-xl">
          Hey James, <span className="font-semibold">Good Afternoon!</span>
        </p>
        <div className=" flex border-2 rounded-xl px-3 ">
          <GrSearch size={24} className="mt-3 sm:bottom-4 left-3 sm:left-4 text-black" />
          <input
            type="text"
            placeholder="Search dishes, restaurant"
            className=" outline-none w-full p-3 sm:p-4 pl-10 sm:pl-14 rounded-md text-black text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

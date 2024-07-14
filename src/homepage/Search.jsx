import React from "react";
import { GrSearch } from "react-icons/gr";

const Search = () => {
  return (
    <div className="my-6">
      <div className="space-y-3">
        <p className="text-gray-800 text-base sm:text-lg md:text-xl">
          Hey James, <span className="font-semibold">Good Afternoon!</span>
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search dishes, restaurant"
            className="border-2 border-gray-400 w-full p-3 sm:p-4 pl-10 sm:pl-14 rounded-md text-black text-sm sm:text-base"
          />
          <GrSearch size={24} className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-black" />
        </div>
      </div>
    </div>
  );
};

export default Search;

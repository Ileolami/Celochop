import React from "react";
import { GrSearch } from "react-icons/gr";

const Search = () => {
  return (
    <div className="my-6">
      <div className="space-y-3">
        <p className="text-gray-800">
          Hey James, <span className="font-semibold">Good Afternoon!</span>
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search dishes, restaurant"
            className="border-2 border-gray-400 w-full p-4 pl-14 rounded-md text-black"
          />
          <GrSearch size={24} className="absolute bottom-4 left-4 text-black" />
        </div>
      </div>
    </div>
  );
};

export default Search;

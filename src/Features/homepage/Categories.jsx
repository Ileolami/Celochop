import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const CategoryCard = ({ food }) => {
  return (
    <div className="flex items-center gap-x-3 py-2 pl-3 pr-6 rounded-full hover:bg-orange-200 shadow-lg">
      <p className="rounded-full h-12 w-12 bg-black"></p>
      <p className="text-gray-900 font-semibold">{food}</p>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="my-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-gray-800">All Categories</p>
          <Link
            to="/categories"
            className="flex items-center gap-x-1 text-gray-700 font-medium hover:border-b-[1px] border-b-gray-700 pb-[0.5px] w-fit"
          >
            See all{" "}
            <span className="">
              <RiArrowRightSLine size={24} />
            </span>
          </Link>
        </div>

        <div className="flex justify-between items-center gap-x-4 -pr-4 overflow-auto py-3">
          {["All", "Soups", "Pastas", "Pizza"].map((item) => (
            <CategoryCard food={item} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import RecommendedCard from "../reusables/Cards/RecommendedCard";
import foodData from "../../data/recommended";

const Recommended = () => {
  return (
    <div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-gray-800">Recommended</p>
          <Link
            to="/recommended"
            className="flex items-center gap-x-1 text-gray-700 font-medium hover:border-b-[1px] border-b-gray-700 pb-[0.5px] w-fit"
          >
            See all{" "}
            <span>
              <RiArrowRightSLine size={24} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center w-full overflow-auto py-3">
          {foodData.map((restaurant) => (
            <RecommendedCard item={restaurant} key={restaurant.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;

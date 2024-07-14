import React from "react";
import { Link } from "react-router-dom";
import MostOrderedCard from "../reusables/Cards/MostOrderedCard";
import foodData from "../../data/food";

import { CiFilter } from "react-icons/ci";

const MostOrdered = () => {
  return (
    <div className="my-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-gray-800">Most ordered</p>
          <Link
            to="/restaurants"
            className="flex items-center gap-x-1 text-gray-700 font-medium hover:border-b-[1px] border-b-gray-700 pb-[0.5px] w-fit"
          >
            <span>
              <CiFilter size={24} />
            </span>
          </Link>
        </div>

        <div className="flex items-cente gap-x-4 w-full overflow-auto py-3">
          {foodData.map((restaurant) => (
            <MostOrderedCard item={restaurant} key={restaurant.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostOrdered;

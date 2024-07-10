import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import restaurantData from "../../data/restuarant";
import RestuarantCard from "../reusables/Cards/RestuarantCard";

const Restuarant = () => {
  return (
    <div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-gray-800">Restaurants</p>
          <Link
            to="/restaurants"
            className="flex items-center gap-x-1 text-gray-700 font-medium hover:border-b-[1px] border-b-gray-700 pb-[0.5px] w-fit"
          >
            See all{" "}
            <span>
              <RiArrowRightSLine size={24} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-x-4 w-full overflow-auto py-3">
          {restaurantData.map((restaurant) => (
            <RestuarantCard item={restaurant} key={restaurant.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restuarant;

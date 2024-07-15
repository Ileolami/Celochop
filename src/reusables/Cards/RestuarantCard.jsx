import React from "react";
import { FaRegStar } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const RestuarantCard = ({ item }) => {
  return (
    <div className="space-y-3 py-2">
      <div className="w-full bg-black h-40 rounded"></div>

      <div className="space-y-3">
        <p className="text-gray-900 font-bold text-lg">{item.name}</p>
        <p className="text-gray-700 font-medium">
          {item.foods.replace(",", " - ")}
        </p>
        <div className="flex gap-x-5">
          <p className="flex gap-x-2 text-gray-800 font-semibold">
            <FaRegStar size={20} className="text-orange-500" />
            {item.rating}
          </p>
          <p className="flex gap-x-2 text-gray-800 font-semibold">
            <TbTruckDelivery size={24} className="text-orange-500" />
            {item.delivery}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestuarantCard;

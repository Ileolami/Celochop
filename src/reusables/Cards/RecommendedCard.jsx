import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import celo from "../../../../public/cello.svg";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <p className="flex">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={index} className="text-orange-500" />
        ))}
      {halfStar && <FaStarHalfAlt className="text-orange-500" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={index} className="text-orange-500" />
        ))}
    </p>
  );
};

const RecommendedCard = ({ item }) => {
  return (
    <div className="w-full flex  gap-x-5 py-2">
      <div className="w-1/2 bg-red-400 rounded-lg"></div>
      <div className="space-y-2 py-1">
        <p className="text-gray-800 font-bold text-xl">{item.name}</p>
        <p className="text-gray-800 font-medium text-lg">{item.region}</p>
        <div className="mb-2">{renderStars(item.rating)}</div>
        <div className="flex gap-x-5">
          <p className="flex gap-x-2 text-gray-800 font-semibold">
            <img src={celo} alt="celo logo" className="" />
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

export default RecommendedCard;

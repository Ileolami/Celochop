import React from "react";

const MostOrderedCard = ({ item }) => {
  return (
    <div className="rounded-lg p-3 shadow-md space-y-3 w-56">
      <div className="rounded-lg h-24 w-48 bg-green-400"></div>
      <p className="text-gray-900 text-lg font-bold">{item.name}</p>
      <p className="text-gray-700 font-medium flex item-center justify-betweeen w-full">
        starting <span className="font-semibold ml-auto">{item.price}</span>
      </p>
    </div>
  );
};

export default MostOrderedCard;

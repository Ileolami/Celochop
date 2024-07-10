import React from "react";
import Header from "../Features/Header";
import Search from "../Features/homepage/Search";
import Categories from "../Features/homepage/Categories";
import Restuarant from "../Features/homepage/Restuarant";
import MostOrdered from "../Features/homepage/MostOrdered";
import Recommended from "../Features/homepage/Recommended";

const HomePage = () => {
  return (
    <div className="bg-white mx-5 mb-10 p-5 min-h-screen rounded-2xl shadow-xl shadow-black">
      <Header />
      <Search />
      <Categories />
      <Restuarant />
      <MostOrdered />
      <Recommended />
    </div>
  );
};

export default HomePage;

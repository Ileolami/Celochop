import React from "react";
import Header from "../Features/Header";
import Search from "../homepage/Search";
import Categories from "../homepage/Categories";
import Restuarant from "../homepage/Restuarant";
import MostOrdered from "../homepage/MostOrdered";
import Recommended from "../homepage/Recommended";

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

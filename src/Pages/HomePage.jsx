import React, { useEffect } from "react";
import { useModal } from "../context/modal";
import Header from "../Features/Header";
import Search from "../homepage/Search";
import Categories from "../homepage/Categories";
import Restuarant from "../homepage/Restuarant";
import MostOrdered from "../homepage/MostOrdered";
import Recommended from "../homepage/Recommended";
import Modal from "../Features/reusables/modal/modal";
import { IoClose } from "react-icons/io5";

const HomePage = () => {
  const { modal, setModal } = useModal();

  useEffect(() => {
    setModal(true);

    // const timer = setTimeout(() => {
    //   setModal(false);
    // }, 3000);

    // return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white mx-5 mb-10 p-5 min-h-screen rounded-2xl shadow-xl shadow-black">
      <Header />
      <Search />
      <Categories />
      <Restuarant />
      <MostOrdered />
      <Recommended />

      {/* Modal */}
      <Modal>
        <div className="relative rounded-xl px-6 py-8 h-full">
          <span className="absolute -top-10 right-4 h-8 w-8 rounded-full bg-orange-200 text-orange-600 flex items-center justify-center">
            <IoClose size={24} />
          </span>

          <div className="homeModal bg-gradient-to-b from-[#E76F00] to-[#FFEB34] h-full"></div>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;

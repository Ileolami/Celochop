import React from "react";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className="p-6 my-5">
      <Outlet />
    </div>
  );
};

export default PageLayout;

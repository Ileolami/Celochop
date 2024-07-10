import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="house bg-[#121223]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;

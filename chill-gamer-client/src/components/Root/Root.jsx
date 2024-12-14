import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
  const location = useLocation();
  const is404Page = location.pathname === "*";

  return (
    <div>
      {!is404Page && <Navbar></Navbar>}
      <div className="min-h-12 md:min-h-[336px] lg:min-h-[415px]">
        <Outlet></Outlet>
      </div>
      {!is404Page && <Footer></Footer>}
    </div>
  );
};

export default Root;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      {/*Body */}
      <div>
        <Outlet />
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;

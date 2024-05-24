import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import useAuth from "../../hooks/useAuth";

const DashboardHome = () => {
  const { admin } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if(admin){
        navigate("/dashboard/adminHome");
    }else{
        navigate("/dashboard/userHome");
    }
    
  }, []);
  return (
    <div>
      <div className="flex">
        <div className="md:w-1/5 h-screen md:bg-amber-500 p-5">
          <Sidebar />
        </div>
        <div className="md:w-4/5 p-5">
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardHome;

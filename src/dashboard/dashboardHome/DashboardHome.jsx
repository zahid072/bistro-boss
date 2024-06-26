import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import { useEffect } from "react";
import userUsersData from "../../hooks/userUsersData";
import useAuth from "../../hooks/useAuth";

const DashboardHome = () => {
  const { user, setAdmin } = useAuth();
  const [data] = userUsersData();

  useEffect(() => {
    const findUser = data.find((matchUser) => matchUser.email === user.email);
    findUser?.role === "admin" ? setAdmin(true) : setAdmin(false);
  }, [data]);

  return (
    <div>
      <div className="flex">
        <div className="md:w-1/5 h-screen md:bg-amber-500 p-5">
          <Sidebar />
        </div>
        <div className="md:w-4/5 p-5 bg-slate-100">
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

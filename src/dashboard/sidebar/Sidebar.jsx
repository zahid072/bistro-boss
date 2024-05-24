import React, { useState } from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [admin, setAdmin] = useState(false);
  return (
    <div>
      <div>
        <div className="py-10 text-center">
          <h1 className="text-2xl font-semibold">Bistro Boss Restaurant</h1>
        </div>
        {/* user menu */}
        {!admin && (
          <ul className="flex flex-col gap-3 font-semibold uppercase text-xl">
            <li>
              <Link to={"/dashboard"} className="flex items-center gap-1">
                <FaHome /> User Home
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1">
                <FaCalendarAlt /> reservation
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1">
                <FaMoneyCheckDollar /> Payment History
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1">
                <MdOutlineShoppingCart /> my cart
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1">
                <BsFillCalendarDateFill /> my booking
              </Link>
            </li>
          </ul>
        )}
        {/* admin menu */}
        {admin && (
          <ul className="flex flex-col gap-2 font-semibold">
            <li>
              <Link to={"/dashboard"} className="flex items-center gap-1">
                <FaHome /> Admin Home
              </Link>
            </li>
          </ul>
        )}
        <div className="divider divide-x-2"></div>
        <ul className="text-xl font-semibold flex flex-col gap-3 mt-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li className="">
            <Link to={"/ourMenu"}>Menu</Link>
          </li>
          <li className="">
            <Link to={"/ourShop"}>Shop</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

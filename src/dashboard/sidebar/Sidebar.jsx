import React, { useState } from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaHome,
  FaRegCalendarCheck,
  FaShoppingCart,
} from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiAlignItemLeftFill } from "react-icons/ri";

const Sidebar = () => {
  const { admin } = useAuth();
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
              <NavLink
                to={"/dashboard/userHome"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white flex items-center gap-1"
                    : "flex items-center gap-1"
                }
              >
                <FaHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/reservation"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white flex items-center gap-1"
                    : "flex items-center gap-1"
                }
              >
                <FaCalendarAlt /> reservation
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/dashboard/paymentHistory"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white flex items-center gap-1"
                    : "flex items-center gap-1"
                }
              >
                <FaMoneyCheckDollar /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/dashboard/myCart"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white flex items-center gap-1"
                    : "flex items-center gap-1"
                }
              >
                <MdOutlineShoppingCart /> my cart
              </NavLink>
            </li>
            <li>
              <NavLink
              to={"/dashboard/myBooking"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white flex items-center gap-1"
                    : "flex items-center gap-1"
                }
              >
                <BsFillCalendarDateFill /> my booking
              </NavLink>
            </li>
          </ul>
        )}
        {/* admin menu */}
        {admin && (
          <ul className="flex flex-col gap-2 font-semibold uppercase text-xl">
            <li>
              <NavLink
                to={"/dashboard/adminHome"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white flex items-center gap-1"
                    : "flex items-center gap-1"
                }
              >
                <FaHome /> Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/addItem"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white flex items-center gap-1"
                    : "flex items-center gap-1"
                }
              >
                <ImSpoonKnife /> Add Item
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/manageItem"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white flex items-center gap-1"
                    : "flex items-center gap-1"
                }
              >
                <RiAlignItemLeftFill /> Manage Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/manageBooking"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white flex items-center gap-1"
                    : "flex items-center gap-1"
                }
              >
                <FaRegCalendarCheck /> Manage Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/allUser"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white flex items-center gap-1"
                    : "flex items-center gap-1"
                }
              >
                <HiOutlineUserGroup /> All User
              </NavLink>
            </li>
          </ul>
        )}
        <div className="divider divide-x-2"></div>
        <ul className="text-xl font-semibold flex flex-col gap-3 mt-4">
          <li>
            <Link className="flex gap-1 items-center" to={"/"}>
              <FaHome></FaHome>Home
            </Link>
          </li>
          <li className="">
            <Link className="flex gap-1 items-center" to={"/ourMenu"}>
              <GiHamburgerMenu /> Menu
            </Link>
          </li>
          <li className="">
            <Link className="flex gap-1 items-center" to={"/ourShop"}>
              <FaShoppingCart></FaShoppingCart>Shop
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

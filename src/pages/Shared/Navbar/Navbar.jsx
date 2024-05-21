import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/outMenu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/ourShop"}>Our Shop</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-50 bg-[#3a3a3a44] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">Restaurant</Link>
        </div>
        
        <div className="navbar-end">
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

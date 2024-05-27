import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useMyCartData from "../../../hooks/useMyCartData";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const cartData = useMyCartData();
  const email = user?.email;
  const handleLogout = () => {
    logOut();
  };

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/ourMenu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/ourShop"}>Our Shop</NavLink>
      </li>
      <li className="relative">
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        {cartData.length > 0 && (
          <p className="absolute -top-3 left-5 text-white bg-red-500 rounded-full p-1 ">
            {cartData?.length}
          </p>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-50 bg-[#38747958] backdrop-blur-sm text-white">
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
            <ul className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            Restaurant
          </Link>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
          {!user ? (
            <Link to={"/signIn"}>
              <button className="btn btn-outline text-white border-white">
                Sign In
              </button>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="btn btn-outline text-white border-white"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

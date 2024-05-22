import React from "react";
import menuBg from "../../assets/menu/banner3.jpg";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizza from "../../assets/menu/pizza-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import PopularMenu from "../popularMenu/PopularMenu";
import MenuBanner from "./menuBanner/MenuBanner";
import { Link } from "react-router-dom";

const OurMenu = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${menuBg})`,
        }}
        className="w-full bg-cover bg-no-repeat bg-center h-[400px] flex justify-center items-center"
      >
        <h1 className="text-4xl font-bold text-center text-white">Our Menu</h1>
      </div>
      <div>
        <PopularMenu menuCategory={"offered"} menuTitle={"Today Offer"} />
        <div className="w-full flex justify-center mt-6">
          <button className="btn btn-outline border-0 border-b-4 mx-auto">
            Order Your favorite food
          </button>
        </div>
        {/* menu section */}
        <div className="mt-10 py-2 border-y-2 border-yellow-400">
          <MenuBanner menuImg={dessert} menuTitle={"Dessert"} />
          <PopularMenu menuCategory={"popular"} />
          <div className="w-full flex justify-center mt-6">
          <Link to={`/ourShop?menu=3`}>
              <button className="btn btn-outline border-0 border-b-4 mx-auto">
                Order Your favorite food
              </button>
            </Link>
          </div>
        </div>
        {/* menu section */}
        <div className="mt-10 py-2 border-y-2 border-yellow-400">
          <MenuBanner menuImg={pizza} menuTitle={"Pizza"} />
          <PopularMenu menuCategory={"pizza"} />
          <div className="w-full flex justify-center mt-6">
          <Link to={`/ourShop?menu=1`}>
              <button className="btn btn-outline border-0 border-b-4 mx-auto">
                Order Your favorite food
              </button>
            </Link>
          </div>
        </div>
        {/* menu section */}
        <div className="mt-10 py-2 border-y-2 border-yellow-400">
          <MenuBanner menuImg={soup} menuTitle={"Soup"} />
          <PopularMenu menuCategory={"soup"} />
          <div className="w-full flex justify-center mt-6">
          <Link to={`/ourShop?menu=2`}>
              <button className="btn btn-outline border-0 border-b-4 mx-auto">
                Order Your favorite food
              </button>
            </Link>
          </div>
        </div>
        {/* menu section */}
        <div className="mt-10 py-2 border-y-2 border-yellow-400">
          <MenuBanner menuImg={salad} menuTitle={"Salad"} />
          <PopularMenu menuCategory={"salad"} />
          <div className="w-full flex justify-center mt-6">
            <Link to={`/ourShop?menu=0`}>
              <button className="btn btn-outline border-0 border-b-4 mx-auto">
                Order Your favorite food
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;

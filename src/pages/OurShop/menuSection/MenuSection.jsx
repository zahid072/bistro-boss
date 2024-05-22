import React, { useEffect, useState } from "react";
import useMenuData from "../../../hooks/useMenuData";
import { Link } from "react-router-dom";
import { MdLineStyle } from "react-icons/md";

const MenuSection = ({ menuCategory }) => {
  const [categoryMenu, setCategoryMenu] = useState([]);
  const menuData = useMenuData();
  useEffect(() => {
    const filteredMenu = menuData.filter(
      (menu) => menu.category === menuCategory
    );
    if (filteredMenu) {
      setCategoryMenu(filteredMenu);
    }
  }, [menuData]);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5">
        {categoryMenu.map((menu, index) => (
          <div key={index} className="w-full h-[300px] relative border rounded">
            <Link>
              <div
                className=" size-full cursor-pointer rounded bg-cover bg-no-repeat bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `url(${menu?.image})`,
                }}
              >
                <div
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`,
                  }}
                  className="absolute p-5 z-10 top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center"
                >
                  <h1 className="text-white text-2xl z-20 font-semibold">
                    {menu?.name}
                  </h1>
                  <p className="text-white mt-2">
                    {menu?.recipe.slice(0, 50)}...
                  </p>
                </div>
                <h1
                  id="parent"
                  className="hover:bg-[#3e3c3c68] z-50 rounded transition-all size-full text-center flex items-center justify-center"
                >
                  <MdLineStyle
                    id="child"
                    className="text-white text-3xl scale-0"
                  />
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;

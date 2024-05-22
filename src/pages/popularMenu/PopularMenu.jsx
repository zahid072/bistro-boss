import React, { useEffect, useState } from "react";
import useMenuData from "../../hooks/useMenuData";
import PopularMenuCard from "../../components/popularMenuCard/PopularMenuCard";

const PopularMenu = ({ menuCategory, menuTitle }) => {
  const [popularMenu, setPopularMenu] = useState([]);
  const menuData = useMenuData();
  useEffect(() => {
    const filteredMenu = menuData.filter(
      (menu) => menu.category === menuCategory
    );
    if (filteredMenu) {
      setPopularMenu(filteredMenu);
    }
  }, [menuData]);
  console.log(popularMenu);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col justify-center w-full mb-4">
        {menuTitle && (
          <h1 className="text-3xl font-bold text-center py-4 border-b-2 w-96 mx-auto border-yellow-400">
            {menuTitle}
          </h1>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {popularMenu.slice(0, 6).map((menu, index) => (
          <div key={index}>
            <PopularMenuCard menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;

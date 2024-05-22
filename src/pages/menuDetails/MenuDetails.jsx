import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMenuData from "../../hooks/useMenuData";

const MenuDetails = () => {
  const [menu, setMenu] = useState({});
  const menuData = useMenuData();
  const { id } = useParams();
  useEffect(() => {
    const findMenu = menuData.find((menus) => menus._id === id);
    if (findMenu) {
      setMenu(findMenu);
    }
  }, [menuData, id]);
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${menu?.image})`,
        }}
        className="w-full bg-cover bg-no-repeat bg-center h-[400px] flex justify-center items-center"
      >
        <h1 className="text-4xl font-bold text-center text-white">
          {menu?.name}
        </h1>
      </div>
    </div>
  );
};

export default MenuDetails;

import  { useEffect, useState } from "react";

const useMenuData = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuData(data);
      });
  }, []);
  return menuData
};

export default useMenuData;

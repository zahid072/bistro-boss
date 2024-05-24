import  { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenuData = () => {
  const [menuData, setMenuData] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    axiosSecure.get("/allMenu")
      .then((res) => {
        setMenuData(res.data);
      });
  }, []);
  return menuData
};

export default useMenuData;

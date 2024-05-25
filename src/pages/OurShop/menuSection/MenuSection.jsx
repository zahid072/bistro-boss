import React, { useEffect, useState } from "react";
import useMenuData from "../../../hooks/useMenuData";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMyCartData from "../../../hooks/useMyCartData";

const MenuSection = ({ menuCategory }) => {
  const [categoryMenu, setCategoryMenu] = useState([]);
  const data = useMyCartData();
  const { user, setRefetch } = useAuth();
  const navigate = useNavigate();
  const menuData = useMenuData();
  const axiosSecure = useAxiosSecure();
  const [cartIds, setCartIds] = useState([]);

  useEffect(() => {
    const availableIds = [];
    for (let menu of data) {
      availableIds.push(menu.menuId);
    }
    if (availableIds) {
      setCartIds(availableIds);
    }
  }, [data.length > 0]);
  useEffect(() => {
    const filteredMenu = menuData.filter(
      (menu) => menu.category === menuCategory
    );
    if (filteredMenu) {
      setCategoryMenu(filteredMenu);
    }
  }, [menuData]);

  const handleAddCart = (menu) => {
    // const cartMenu = {
    //   name: menu?.name,
    //   image: menu?.image,
    //   menuId: menu?._id,
    //   quantity: 1,
    //   email: user?.email,
    // };

    if (cartIds.includes(menu?._id)) {
      axiosSecure.patch(`/myCart/${menu?._id}`).then((res) => {
        if (res.data.updatedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${menu?.name} Successfully Add To Cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          setRefetch(true);
        }
      });
    }
    // if (user) {
    //   axiosSecure.post("/myCart", cartMenu).then((res) => {
    //     if (res.data.insertedId) {
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: `${menu?.name} Successfully Add To Cart`,
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //       setRefetch(true);
    //     }
    //   });
    // } else {
    //   navigate("/signIn");
    // }
  };
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5">
        {categoryMenu.map((menu, index) => (
          <div key={index} className="w-full h-[300px] relative border rounded">
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
                <button
                  onClick={() => {
                    handleAddCart(menu);
                  }}
                  className="btn btn-outline bg-slate-900 mt-5 text-white border-white border-0 border-b-2 uppercase"
                >
                  Add to cart
                </button>
                <Link
                  className="btn btn-link mt-5 text-white font-bold"
                  to={`/menuDetails/${menu?._id}`}
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;

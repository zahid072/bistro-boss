import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import useMyCartData from "../../../hooks/useMyCartData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyCart = () => {
  const cartData = useMyCartData();
  const { setRefetch } = useAuth();
  const axiosSecure = useAxiosSecure();
  // -------------total price-------------
  let totalPrice = 0;
  for (let menu of cartData) {
    totalPrice += menu?.price * menu?.quantity;
  }

  // ------------------handle delete------------------
  const handleDelete = (id) => {
    axiosSecure.delete(`/myCart/${id}`).then((res) => {
      if (res.data.deletedCount) {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: `Successfully Deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
        setRefetch(true);
      }
    });
  };
  // --------------------handle quantity increase or decrease--------------------
  const handleIncrease = (id) => {
    const findCartMenu = cartData?.find((userMenu) => userMenu?.menuId === id);
    if (findCartMenu.quantity < 5) {
      axiosSecure
        .patch(`/myCart/${id}`, { quantity: findCartMenu?.quantity + 1 })
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount) {
            setRefetch(true);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  // -----------------------------------
  const handleDecrease = (id) => {
    const findCartMenu = cartData?.find((userMenu) => userMenu?.menuId === id);
    if (findCartMenu.quantity > 1) {
      axiosSecure
        .patch(`/myCart/${id}`, { quantity: findCartMenu?.quantity - 1 })
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount) {
            setRefetch(true);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div>
      <h1 className="text-center text-xl font-semibold font-gilda">My Cart</h1>
      <div className="divider divide-x-2"></div>
      <div className="bg-white p-6 rounded-lg lg:w-4/6 mx-auto md:w-4/5 w-full shadow">
        <div className="flex justify-between items-center text-xl uppercase">
          <h1>Total Order: ( {cartData.length} ) </h1>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          {cartData.length > 0 ? (
            <Link to={"/dashboard/payment"}>
              <button className="btn btn-outline px-3 py-2">Pay</button>
            </Link>
          ) : (
            <button disabled className="btn btn-outline px-3 py-2">Pay</button>
          )}
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Item Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cartData.map((menu, index) => (
                  <tr className="hover" key={index}>
                    <th>
                      <button
                        onClick={() => {
                          handleDecrease(menu?.menuId);
                        }}
                        className="border px-2 py-1 text-xl font-bold rounded-sm hover:bg-slate-700 hover:text-white"
                      >
                        -
                      </button>
                      <label className="mx-2">{menu?.quantity}</label>
                      <button
                        onClick={() => {
                          handleIncrease(menu?.menuId);
                        }}
                        className="border px-2 py-1 text-xl font-bold  rounded-sm hover:bg-slate-700 hover:text-white"
                      >
                        +
                      </button>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={menu?.image} alt="Item Image" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h3>{menu?.name}</h3>
                    </td>
                    <td>$ {(menu?.price * menu?.quantity).toFixed(2)}</td>
                    <th>
                      <button
                        onClick={() => {
                          handleDelete(menu?._id);
                        }}
                        className="btn btn-ghost btn-xs"
                      >
                        <FaTrashAlt />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

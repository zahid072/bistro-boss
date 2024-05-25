import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import useMyCartData from "../../../hooks/useMyCartData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const MyCart = () => {
  const data= useMyCartData();
  const {setRefetch}=useAuth()
  const axiosSecure = useAxiosSecure()
  const handleDelete = (id) => {
     axiosSecure.delete(`/myCart/${id}`)
     .then(res =>{
      if(res.data.deletedCount){
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: `Successfully Deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
        setRefetch(true)
      }
     })
  };
  return (
    <div>
      <h1 className="text-center text-xl font-semibold font-gilda">My Cart</h1>
      <div className="divider divide-x-2"></div>
      <div className="bg-white p-6 rounded-lg lg:w-4/6 mx-auto md:w-4/5 w-full shadow">
        <div className="flex justify-between items-center text-xl uppercase">
          <h1>Total Order: ( {0} ) </h1>
          <h2>Total Price: ${0}</h2>
          <button className="btn btn-outline px-3 py-2">Pay</button>
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
                {data.map((menu, index) => (
                  <tr className="hover">
                    <th>
                      <label>{menu?.quantity}</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={menu?.image}
                              alt="Item Image"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h3>{menu?.name}</h3>
                    </td>
                    <td>$ {menu?.price}</td>
                    <th>
                      <button onClick={()=>{
                        handleDelete(menu?._id)
                      }} className="btn btn-ghost btn-xs">
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

import React, { useEffect, useState } from "react";
import userUsersData from "../../../hooks/userUsersData";
import useAuth from "../../../hooks/useAuth";
import { CiMenuKebab } from "react-icons/ci";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { ref } from "firebase/database";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(0);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [data, refetch] = userUsersData();
  useEffect(() => {
    const filterUser = data.filter((logUser) => logUser?.email !== user?.email);
    if (filterUser) {
      setUsers(filterUser);
    }
  }, [data, user]);
  const handlePopUp = (e,id) => {
    e.stopPropagation();
    setModal(id);
  };
  const handleAdmin = (id) => {
    axiosSecure.patch(`/allUsers/${id}`, { role: "admin" }).then((res) => {
        console.log(res.data)
        if(res.data.modifiedCount){
            refetch()
        }
    });
  };
  const handleDelete = (id) => {
    axiosSecure.delete(`/allUsers/${id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.deletedCount){
            refetch()
        }
    })
  };
  return (
    <div>
      <h1 className="text-center text-xl font-semibold font-gilda">
        All Users
      </h1>
      <div className="divider divide-x-2"></div>
      <div
        onClick={
          modal > 0
            ? () => {
                setModal(0);
              }
            : ""
        }
        className="bg-white p-6 rounded-lg lg:w-4/6 mx-auto md:w-4/5 w-full z-10 shadow "
      >
        <div className="text-xl uppercase">
          <h1>Total Users: ( {users?.length} ) </h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users?.map((user, index) => (
                  <tr className="hover" key={index}>
                    <th>
                      <label className="mx-2">{index + 1}</label>
                    </th>
                    <td>
                      <h1>{user?.name}</h1>
                    </td>
                    <td>
                      <h3>{user?.email}</h3>
                    </td>
                    <td>{user?.role}</td>
                    <th className="relative">
                      <button
                        onClick={(e) => {
                          handlePopUp(e, index + 1);
                        }}
                        className="btn btn-ghost btn-xs text-xl"
                      >
                        <CiMenuKebab />
                     
                      </button>
                      {modal === index + 1 && (
                          <div className="absolute shadow-modal p-2 rounded-md right-20 -top-10 bg-slate-100 z-50 w-36 flex flex-col gap-2">
                            <button
                              onClick={() => {
                                handleAdmin(user?._id);
                              }}
                              className="btn btn-outline btn-xs"
                            >
                              Make Admin
                            </button>
                            <button
                              onClick={() => {
                                handleDelete(user?._id);
                              }}
                              className="btn btn-outline btn-xs"
                            >
                              Remove User
                            </button>
                          </div>
                        )}
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

export default AllUsers;

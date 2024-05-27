import React, { useEffect, useState } from "react";
import userUsersData from "../../../hooks/userUsersData";
import useAuth from "../../../hooks/useAuth";
import { CiMenuKebab } from "react-icons/ci";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loggedAdmin, setLoggedAdmin] = useState({});
  const [modal, setModal] = useState(0);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [data, refetch] = userUsersData();
  useEffect(() => {
    const findAdmin = data.find(
      (logAdmin) =>
        logAdmin?.email === user?.email && logAdmin?.main_admin === true
    );
    const filterUser = data.filter(
      (logUser) =>
        logUser?.email !== user?.email && logUser.main_admin === false
    );
    if (filterUser) {
      setUsers(filterUser);
    }
    if (findAdmin) {
      setLoggedAdmin(findAdmin);
    }
  }, [data, user]);
  const handlePopUp = (e, id) => {
    e.stopPropagation();
    setModal(id);
    if(modal=== id){setModal(0);}
  };
  const handleAdmin = (id) => {
    axiosSecure.patch(`/allUsers/${id}`, { role: "admin" }).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        setModal(0);
        refetch();
      }
    });
  };
  const handleUser = (id) => {
    axiosSecure.patch(`/allUsers/${id}`, { role: "user" }).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        setModal(0);
        refetch();
      }
    });
  };
  const handleDelete = (id) => {
    axiosSecure.delete(`/allUsers/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount) {
        setModal(0);
        refetch();
      }
    });
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
          <div className="">
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
                    <th>
                      <div className="relative inline">
                        <button
                          onClick={(e) => {
                            handlePopUp(e, index + 1);
                          }}
                          className="btn btn-ghost btn-xs text-xl"
                        >
                          <CiMenuKebab />
                        </button>
                        {modal === index + 1 && (
                          <div className="absolute tooltip-shape w-48 right-[36px] -top-[96px] z-50 ">
                            <div onClick={(e)=>{e.stopPropagation()}} className="p-3">
                              {user?.role === "user" ? (
                                <button
                                  onClick={() => {
                                    handleAdmin(user?._id);
                                  }}
                                  className="btn btn-outline text-white border-white btn-xs mb-2"
                                >
                                  Make Admin
                                </button>
                              ) : (
                                <button
                                  onClick={() => {
                                    handleUser(user?._id);
                                  }}
                                  className="btn btn-outline text-white border-white btn-xs mb-2"
                                >
                                  Make User
                                </button>
                              )}

                              {loggedAdmin?.main_admin === true ? (
                                <button
                                  onClick={() => {
                                    handleDelete(user?._id);
                                  }}
                                  className={`btn btn-outline text-white border-white btn-xs`}
                                >
                                  Remove User
                                </button>
                              ) : (
                                <>
                                  {user?.role === "user" && (
                                    <button
                                      onClick={() => {
                                        handleDelete(user?._id);
                                      }}
                                      className={`btn btn-outline text-white border-white btn-xs`}
                                    >
                                      Remove User
                                    </button>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
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

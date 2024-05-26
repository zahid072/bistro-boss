import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import userUsersData from "../../../hooks/userUsersData";

const SignUp = () => {
  const { signUpUser, updateUserProfile } = useAuth();
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [data] = userUsersData();
  let usersEmail = [];
  for (let user of data) {
    usersEmail.push(user?.email);
  }
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = { name, email, image: photo, role: "user" };
    setErr("");

    if (usersEmail.includes(email)) {
      setErr("Email Already In Exist.");
    } else {
      axiosSecure.post("/allUsers", newUser).then((res) => {
        if (res.data.insertedId) {
          signUpUser(email, password).then((res) => {
            updateUserProfile(name, photo);
            toast.success("Account created.");
            form.reset();
            navigate("/");
          });
        }
      });
    }
  };
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg")`,
      }}
      className="bg-cover bg-center bg-no-repeat w-full h-screen"
    >
      <div className="size-full flex justify-center items-center">
        <div className="max-w-2xl bg-[#47434358] p-6 rounded-lg space-y-4 text-white backdrop-blur-lg">
          <h1 className="text-3xl font-bold font-gilda text-center">Sign In</h1>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex w-full items-center gap-4">
              <div>
                <label className="font-semibold">Name</label>
                <input
                  required
                  className="input input-bordered w-full mt-2 text-black"
                  type="text"
                  name="name"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="font-semibold">Email</label>
                <input
                  required
                  className="input input-bordered w-full mt-2 text-black"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            {err && (
              <p className="text-red-400 px-3 py-1 rounded bg-white mt-1">
                {err}
              </p>
            )}
            <div>
              <label className="font-semibold">Photo URL</label>
              <input
                required
                className="input input-bordered w-full mt-2 text-black"
                type="text"
                name="photo"
                placeholder="Your Photo URL"
              />
            </div>

            <div>
              <label className="font-semibold">Password</label>
              <input
                required
                className="input input-bordered w-full mt-2 text-black"
                type="Password"
                name="password"
                placeholder="Your password"
              />
            </div>
            <div className="flex justify-center">
              <button className="btn btn-outline border-0 border-y-2 text-white border-white w-full">
                Sign Up
              </button>
            </div>
          </form>
          <p>
            Don't have an account ?{" "}
            <Link className="font-semibold underline" to={"/signIn"}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

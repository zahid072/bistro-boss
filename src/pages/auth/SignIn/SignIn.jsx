import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate()
  const {signInUsers}= useAuth()
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUsers(email, password)
   .then(res =>{
    toast.success("Log In successful.")
    form.reset()
    navigate("/")
   })
  };
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://png.pngtree.com/thumb_back/fw800/background/20230718/pngtree-contemporary-authentic-3d-renderings-of-web-login-page-templates-image_3904126.jpg")`,
      }}
      className="bg-cover bg-center bg-no-repeat w-full h-screen"
    >
      <div className="size-full flex justify-center items-center">
        <div className="max-w-md bg-[#472b5b58] p-6 rounded-lg space-y-4 text-white backdrop-blur-lg">
          <h1 className="text-3xl font-bold font-gilda text-center">Sign In</h1>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="font-semibold">Email</label>
              <input
                className="input input-bordered w-full mt-2"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="font-semibold">Password</label>
              <input
                className="input input-bordered w-full mt-2 text-black"
                type="Password"
                name="password"
                placeholder="Your password"
              />
            </div>
            <div className="flex justify-center">
              <button className="btn btn-outline border-0 border-b-2 text-white border-white">
                Sign In
              </button>
            </div>
          </form>
          <p>
            Don't have an account ?{" "}
            <Link className="font-semibold underline" to={"/signUp"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

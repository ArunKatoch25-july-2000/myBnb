import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaHome } from "react-icons/fa";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div className="w-[98%] h-[80%] rounded-2xl shadow-lg border bg-white sm:w-[30rem]">
        <div className="w-full py-10 flex items-center justify-center">
          <img src={logo} alt="logo" className="w-6" />
          <span className="text-xl text-mainColor font-semibold">
            myBnb Login
          </span>
        </div>
        <div className="w-full py-5">
          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col items-center justify-center gap-5"
          >
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="text:sm sm:text-base lg:text-lg w-[85%] border p-4 outline-mainColor"
            />
            <input
              type="text"
              name="password"
              placeholder="Enter your password"
              className="text:sm sm:text-base lg:text-lg w-[85%] border p-4 outline-mainColor"
            />
            <button className="w-[85%] flex items-center justify-center py-3 border-none bg-mainColor text-base font-semibold text-white cursor-pointer rounded-md outline-mainColor hover:shadow-md">
              Login
            </button>
          </form>
          <div className="w-full flex items-center justify-center gap-3 py-10">
            <Link
              to="/signup"
              className="text-base text-gray-700 hover:cursor-pointer hover:text-black"
            >
              SignUp
            </Link>
            <span className="text-base text-gray-700 hover:cursor-pointer hover:text-black">
              |
            </span>
            <Link
              to="/forgot"
              className="text-base text-gray-700 hover:cursor-pointer hover:text-black"
            >
              forgot password
            </Link>
            <span className="text-base text-gray-700 hover:cursor-pointer hover:text-black">
              |
            </span>
            <Link
              to="/"
              className="text-base text-gray-700 hover:cursor-pointer hover:text-black"
            >
              <FaHome className="text-gray-700 text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

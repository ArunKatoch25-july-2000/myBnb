import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaHome } from "react-icons/fa";

const Signup = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div className="w-[98%] h-[80%] rounded-2xl shadow-lg border bg-white sm:w-[30rem]">
        <div className="w-full py-5 flex items-center justify-center">
          <img src={logo} alt="logo" className="w-6" />
          <span className="text-xl text-mainColor font-semibold">
            myBnb SignUp
          </span>
        </div>
        <div className="w-full py-5">
          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col items-center justify-center gap-5"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="text:sm sm:text-base lg:text-lg w-[85%] border p-4 outline-mainColor"
            />
            <input
              type="text"
              name="number"
              placeholder="Enter your phone"
              className="text:sm sm:text-base lg:text-lg w-[85%] border p-4 outline-mainColor"
            />
            <input
              type="text"
              name="password"
              placeholder="Enter your password"
              className="text:sm sm:text-base lg:text-lg w-[85%] border p-4 outline-mainColor"
            />
            <input
              type="text"
              name="confirmPassword"
              placeholder="Confirm password"
              className="text:sm sm:text-base lg:text-lg w-[85%] border p-4 outline-mainColor"
            />
            <button className="w-[85%] flex items-center justify-center py-3 border-none bg-mainColor text-base font-semibold text-white cursor-pointer rounded-md outline-mainColor hover:shadow-md">
              SignUp
            </button>
          </form>
          <div className="flex items-center justify-center gap-3 py-5">
            <Link
              to="/login"
              className="text-base text-gray-700 hover:cursor-pointer hover:text-black"
            >
              Already signed up Login
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

export default Signup;

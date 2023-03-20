import React, { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom";

const UserComp = () => {
  const [isopen, setIsOpen] = useState({
    open: "w-[15rem] rounded-[1.5rem] h-[16rem] shadow-lg bg-white absolute right-0 border bottom-[-16.5rem] z-50",
  });
  let userRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      e.stopPropagation();
      if (!userRef.current.contains(e.target)) {
        setIsOpen({ open: "hidden" });
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  },[]);

  return (
    <>
      <div className={isopen.open} ref={userRef}>
        {/* login Signup container  */}
        <div className="flex flex-col w-full border-b py-2">
          <Link to="/signup" className="text-lg font-extralight pl-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
            Signup
          </Link>
          <Link to="/login" className="text-lg font-extralight  pl-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
            Login
          </Link>
        </div>
        {/* Other Links Container  */}
        <div className="flex flex-col w-full py-2">
          <span className="text-lg font-extralight  pl-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
            Airbnb your home
          </span>
          <span className="text-lg font-extralight  pl-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
            Host an experience
          </span>
          <span className="text-lg font-extralight  pl-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
            Help
          </span>
        </div>
      </div>
    </>
  );
};

export default UserComp;

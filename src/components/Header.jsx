import React from "react";

const Header = () => {
  return (
    <header className="hidden sm:w-screen sm:flex items-center justify-center p-4 border-b bg-gray-100">
      <span className="text-lg font-mainFont tracking-wide font-bold">
        Show total prices up front
      </span>
      <button className="border-none pl-2">
        <span className="cursor-pointer underline text-lg font-mainFont tracking-wide font-bold">
          Learn more
        </span>
      </button>
    </header>
  );
};

export default Header;

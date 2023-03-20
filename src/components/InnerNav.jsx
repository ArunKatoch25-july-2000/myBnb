import React from "react";

const InnerNav = ({ experienceTabClickHandler, staysTabClickHandler }) => {
  return (
    <>
      <div className="h-14 flex items-center justify-center sm:ml-36 sm:py-1 sm:px-2 ">
        <div className=" flex items-center justify-between gap-2 pl-2 pr-2 sm:gap-5">
          <button
            type="button"
            className="font-mainFont cursor-pointer text-lightBlack text-sm -tracking-tighter py-1 sm:text-base"
            onClick={staysTabClickHandler}
          >
            Stays
          </button>
          <span className="text-gray-500">|</span>
          <button
            type="button"
            className="font-mainFont text-sm cursor-pointer text-lightBlack -tracking-tighter py-1 sm:text-base"
            onClick={experienceTabClickHandler}
          >
            Experiences
          </button>
          <span className="text-gray-500">|</span>
          <button
            type="button"
            className="font-mainFont text-sm cursor-pointer text-lightBlack -tracking-tighter  py-1 sm:text-base"
          >
            Online Experiences
          </button>
        </div>
      </div>
    </>
  );
};

export default InnerNav;

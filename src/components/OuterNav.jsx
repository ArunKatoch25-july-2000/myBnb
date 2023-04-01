import React from "react";
import { BiSearch } from "react-icons/bi";

const OuterNav = ({
  tab1ClickHandler,
  tab2ClickHandler,
  tab3ClickHandler,
  tab4ClickHandler,
  placeDetailsOuterNav,
}) => {
  return (
    <div className="border h-14 flex items-center justify-center rounded-full shadow-sm hover:shadow-md sm:py-1 sm:px-2 sm:ml-16 ">
      {!placeDetailsOuterNav && (
        <div className=" flex items-center justify-between gap-3 px-8 sm:px-4 sm:gap-5">
          <button
            type="button"
            name="select location"
            className="font-mainFont hover:cursor-pointer text-lightBlack text-xs -tracking-tighter sm:text-base"
            onClick={tab1ClickHandler}
          >
            Anywhere
          </button>
          <span className="text-gray-500">|</span>
          <button
            type="button"
            name="select dates"
            className="font-mainFont text-xs cursor-pointer text-lightBlack -tracking-tighter sm:text-base"
            onClick={tab2ClickHandler}
          >
            Any Week
          </button>
          <span className="text-gray-500">|</span>
          <button
            type="button"
            name="select guests"
            className="font-mainFont text-xs cursor-pointer -tracking-tighter text-gray-500 sm:text-base"
            onClick={tab3ClickHandler}
          >
            Any guests
          </button>

          <button type="button" name="search">
            <div
              className="p-1 border bg-mainColor rounded-full sm:p-2"
              onClick={tab4ClickHandler}
            >
              <BiSearch className="text-white " />
            </div>
          </button>
        </div>
      )}
      {placeDetailsOuterNav && (
        <div
          className=" flex items-center cursor-pointer justify-between gap-3 px-8 sm:px-2 sm:pl-5 sm:gap-36"
          onClick={tab3ClickHandler}
        >
          <button
            type="button"
            name="select guests"
            className="font-mainFont text-xs cursor-pointer -tracking-tighter text-gray-500 sm:text-base"
          >
            Start your search
          </button>

          <button type="button" name="search">
            <div
              className="p-1 border bg-mainColor rounded-full sm:p-2"
              onClick={tab4ClickHandler}
            >
              <BiSearch className="text-white " />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default OuterNav;

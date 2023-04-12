import React from "react";
import { BiSearch } from "react-icons/bi";

const BottomNav = ({
  navBg,
  bottomNavTab1Details,
  setBottomNavTab1Details,
  searchInputClickHandler,
  setSearchsuggestionsDiv,
  bottomNavTab2Details,
  setBottomNavTab2Details,
  bottomNavTab3Details,
  setBottomNavTab3Details,
  experienceTab,
  setNavBg,
  input,
  checkIn,
  checkOut,
  fullDate,
  guests,
}) => {
  return (
    <div className="w-screen absolute py-3 z-20 bg-white">
      <div className="w-full flex flex-col justify-center items-center gap-2 border  bg-gray-200 transition ease-linear duration-1000 sm:w-[55rem] sm:flex-row sm:h-16 sm:mx-auto sm:rounded-full ">
        <div
          className={navBg.navTab1}
          onClick={() => {
            bottomNavTab1Details === "hide"
              ? setBottomNavTab1Details("show")
              : setBottomNavTab1Details("hide");
            setBottomNavTab2Details("hide");
            setBottomNavTab3Details("hide");
            setNavBg({
              navTab1:
                "w-80 h-full shadow-md pl-4 border flex flex-col rounded-full justify-center bg-white sm:pl-10",
              navTab2:
                "w-80 flex flex-col cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 justify-center sm:w-32",
              navTab3:
                "w-80 flex flex-col cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 justify-center sm:w-32",
              navTab4:
                "w-80 flex gap-2 cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 py-2 sm:w-64",
              experienceNavTab:
                "w-80 flex flex-col cursor-pointer  hover:bg-gray-300 h-full rounded-full pl-4 justify-center bg-transparent sm:w-64",
            });
          }}
        >
          <span
            className="pl-2 cursor-pointer text-sm"
            onClick={() => {
              setSearchsuggestionsDiv(false);
              setBottomNavTab1Details("show");
            }}
          >
            Where
          </span>
          <input
            type="text"
            name="search"
            value={input}
            onChange={searchInputClickHandler}
            placeholder="Search destinations"
            className="w-3/4 pl-2 text-sm text-gray-600 border-none outline-none bg-transparent"
          />
        </div>

        {/* -------Nav Tab2-----  */}

        {experienceTab === "show experience tab details" && (
          <div
            className={navBg.experienceNavTab}
            onClick={() => {
              setBottomNavTab1Details("hide");
              bottomNavTab2Details === "hide"
                ? setBottomNavTab2Details("show")
                : setBottomNavTab2Details("hide");
              setBottomNavTab3Details("hide");
              setNavBg({
                navTab1:
                  "w-80 h-full pl-4 hover:bg-gray-300 border flex flex-col rounded-full justify-center bg-transparent sm:pl-10",
                navTab2:
                  "w-80 flex flex-col cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 justify-center bg-transparent sm:w-32",
                navTab3:
                  "w-80 flex flex-col cursor-pointer h-full rounded-full pl-4 justify-center bg-white sm:w-32",
                navTab4:
                  "w-80 flex gap-2 cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 py-2 sm:w-64",
                experienceNavTab:
                  "w-80 flex flex-col cursor-pointer h-full rounded-full pl-4 justify-center bg-white sm:w-64",
              });
            }}
          >
            <span className="pl-2 cursor-pointer text-sm">Date</span>
            <input
              type="text"
              readOnly
              className="w-3/4 border-none outline-none bg-transparent pl-2 text-sm  text-gray-600"
              name="date"
              value={fullDate}
            />
          </div>
        )}

        {/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- */}

        {experienceTab === "" && (
          <div
            className={navBg.navTab2}
            onClick={() => {
              setBottomNavTab1Details("hide");
              setBottomNavTab2Details("show");
              setBottomNavTab3Details("hide");

              setNavBg({
                navTab1:
                  "w-80 h-full pl-4 hover:bg-gray-300 border flex flex-col rounded-full justify-center bg-transparent  sm:pl-10",
                navTab2:
                  "w-80 flex flex-col cursor-pointer h-full rounded-full pl-4 justify-center bg-white sm:w-32",
                navTab3:
                  "w-80 flex flex-col cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 justify-center sm:w-32",
                navTab4:
                  " w-80 flex gap-2 cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 py-2 sm:w-64",
                experienceNavTab:
                  "w-80 flex flex-col cursor-pointer  hover:bg-gray-300 h-full rounded-full pl-4 justify-center bg-transparent hidden sm:w-64",
              });
            }}
          >
            <span className="pl-2 cursor-pointer text-sm">Check in</span>
            <input
              type="text"
              readOnly
              className="w-3/4 border-none outline-none bg-transparent pl-2 text-sm  text-gray-600"
              name="date"
              value={checkIn}
            />
          </div>
        )}
        {/* -------Nav Tab3-----  */}
        {experienceTab === "" && (
          <div
            className={navBg.navTab3}
            onClick={() => {
              setBottomNavTab1Details("hide");
              setBottomNavTab2Details("show");
              setBottomNavTab3Details("hide");
              setNavBg({
                navTab1:
                  "w-80 h-full pl-4 hover:bg-gray-300 border flex flex-col rounded-full justify-center bg-transparent  sm:pl-10",
                navTab2:
                  "w-80 flex flex-col cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 justify-center bg-transparent sm:w-32",
                navTab3:
                  "w-80 flex flex-col cursor-pointer h-full rounded-full pl-4 justify-center bg-white sm:w-32",
                navTab4:
                  "w-80 flex gap-2 cursor-pointer hover:bg-gray-300h-full rounded-full pl-4 py-2 sm:w-64",
                experienceNavTab:
                  "w-80 flex flex-col cursor-pointer  hover:bg-gray-300 h-full rounded-full pl-4 justify-center bg-transparent hidden sm:w-64",
              });
            }}
          >
            <span className="pl-2 cursor-pointer text-sm">Check out</span>
            <input
              type="text"
              readOnly
              className="w-3/4 border-none outline-none bg-transparent pl-2 text-sm  text-gray-600"
              name="date"
              value={checkOut}
            />
          </div>
        )}

        {/* -------Nav Tab4-----  */}

        <div
          className={navBg.navTab4}
          onClick={() => {
            bottomNavTab3Details === "hide"
              ? setBottomNavTab3Details("show")
              : setBottomNavTab3Details("hide");
            setBottomNavTab1Details("hide");
            setBottomNavTab2Details("hide");

            setNavBg({
              navTab1:
                "w-80 h-full pl-4 hover:bg-gray-300 border flex flex-col rounded-full justify-center bg-transparent sm:pl-10",
              navTab2:
                "w-80 flex flex-col cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 justify-center bg-transparent sm:w-32",
              navTab3:
                "w-80 flex flex-col cursor-pointer  hover:bg-gray-300 h-full rounded-full pl-4 justify-center bg-transparent sm:w-32",
              navTab4:
                "w-80 flex gap-2 cursor-pointer h-full rounded-full pl-4 py-2 bg-white sm:w-64",
              experienceNavTab:
                "w-80 flex flex-col cursor-pointer  hover:bg-gray-300 h-full rounded-full pl-4 justify-center bg-transparent sm:w-64",
            });
          }}
        >
          <div className="flex flex-col h-full justify-center">
            <span className="pl-2 cursor-pointer text-sm">Who</span>
            <input
              type="text"
              readOnly
              className="w-[85%] border-none outline-none px-2 text-sm bg-transparent  text-gray-600"
              name="guests"
              value={guests}
            />
          </div>
          <button
            type="search"
            name="search Btn"
            className="px-3 bg-mainColor border-none rounded-full flex justify-center items-center gap-5 text-white text-lg font-bold sm:gap-2 "
          >
            <BiSearch className="text-white" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;

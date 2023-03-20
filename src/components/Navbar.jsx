import React, { useState } from "react";
import { BiGlobe, BiMenu } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import OuterNav from "./OuterNav";
import InnerNav from "./InnerNav";
import BottomNavDestinationTabDetails from "./BottomNavDestinationTabDetails";
import BottomNav from "./BottomNav";
import UserComp from "./UserComp";
import BottomNavCheckInOut from "./BottomNavCheckInOut";
import BottomNavAddGuests from "./BottomNavAddGuests";
import PlacesNav from "./PlacesNav";
import SearchSuggestions from "./SearchSuggestions";
import format from "date-fns/format";
import { addDays } from "date-fns";

const Navbar = () => {
  const [userContainer, setUserContainer] = useState(false);
  const [innerNav, setInnerNav] = useState(false);
  const [experienceTab, setExperienceTab] = useState("");
  const [showBottomNav, setShowBottomNav] = useState("don't show");
  const [bottomNavTab1Details, setBottomNavTab1Details] = useState("hide");
  const [searchsuggestionsDiv, setSearchsuggestionsDiv] = useState(false);
  const [input, setInput] = useState("");
  const [bottomNavTab2Details, setBottomNavTab2Details] = useState("hide");
  const [bottomNavTab3Details, setBottomNavTab3Details] = useState("hide");
  const [checkIn, setCheckIn] = useState("Add dates");
  const [checkOut, setCheckOut] = useState("Add dates");
  const [fullDate, setFullDate] = useState("Add dates");
  const [guests, setGuests] = useState("Add guests");
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [navBg, setNavBg] = useState({
    navTab1:
      "w-80 h-full shadow-md pl-4 border flex flex-col rounded-full justify-center sm:pl-10",
    navTab2:
      "w-80 flex flex-col cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 justify-center sm:w-32",
    navTab3:
      "w-80 flex flex-col cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 justify-center sm:w-32",
    navTab4:
      "w-80 flex gap-2 cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 py-2 sm:w-64",
    experienceNavTab:
      "w-80 flex flex-col cursor-pointer  hover:bg-gray-300 h-full rounded-full pl-4 justify-center sm:w-64",
  });

  window.onscroll = () => {
    setUserContainer(false);
    setInnerNav(false);
    setExperienceTab("");
    setShowBottomNav("don't show");
    setBottomNavTab1Details("hide");
    setInput("");
    setSearchsuggestionsDiv(false);
    setBottomNavTab2Details("hide");
    setBottomNavTab3Details("hide");
  };

  const tab1ClickHandler = () => {
    setInnerNav(true);
    setShowBottomNav("show");
    setBottomNavTab1Details("show");
    setNavBg({
      navTab1:
        "w-80 h-full shadow-md pl-4 border flex flex-col rounded-full justify-center bg-white  sm:pl-10",
      navTab2:
        "w-80 flex flex-col cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 justify-center sm:w-32",
      navTab3:
        "w-80 flex flex-col cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 justify-center sm:w-32",
      navTab4:
        "w-80 flex gap-2 cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 py-2 sm:w-64",
    });
  };

  const searchInputClickHandler = (e) => {
    setInput(e.target.value);
    setSearchsuggestionsDiv(true);
    setBottomNavTab1Details("hide");
  };

  const tab2ClickHandler = () => {
    setInnerNav(true);
    setBottomNavTab2Details("show");
    setShowBottomNav("show");
    setNavBg({
      navTab1:
        "w-80 h-full pl-4 hover:bg-gray-300 border flex flex-col rounded-full justify-center bg-transparent sm:pl-10",
      navTab2:
        "w-80 flex flex-col cursor-pointer h-full rounded-full pl-4 justify-center bg-white sm:w-32",
      navTab3:
        "w-80 flex flex-col cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 justify-center sm:w-32",
      navTab4:
        "w-80 flex gap-2 cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 py-2 sm:w-64",
    });
  };
  const tab3ClickHandler = () => {
    setInnerNav(true);
    setShowBottomNav("show");
    setBottomNavTab3Details("show");
    setNavBg({
      navTab1:
        "w-80 h-full pl-4 hover:bg-gray-300 border flex flex-col rounded-full justify-center bg-transparent sm:pl-10",
      navTab2:
        "w-80 flex flex-col cursor-pointer hover:bg-gray-300  h-full rounded-full pl-4 justify-center bg-transparent sm:w-32",
      navTab3:
        "w-80 flex flex-col cursor-pointer h-full rounded-full pl-4 justify-center bg-white sm:w-32",
      navTab4:
        "w-80 flex gap-2 cursor-pointer hover:bg-gray-300  h-full rounded-full pl-4 py-2 sm:w-64",
    });
  };
  const tab4ClickHandler = () => {
    setInnerNav(true);
    setShowBottomNav("show");
    setNavBg({
      navTab1:
        "w-80 h-full pl-4 hover:bg-gray-300 border flex flex-col rounded-full justify-center bg-transparent sm:pl-10",
      navTab2:
        "w-80 flex flex-col cursor-pointer hover:bg-gray-300  h-full rounded-full pl-4 justify-center bg-transparent sm:w-32",
      navTab3:
        "w-80 flex flex-col cursor-pointer  hover:bg-gray-300  h-full rounded-full pl-4 justify-center bg-transparent sm:w-32",
      navTab4:
        "w-80 flex gap-2 cursor-pointer h-full rounded-full pl-4 py-2 bg-white sm:w-64",
    });
  };
  const staysTabClickHandler = () => {
    setExperienceTab("");
    setBottomNavTab1Details("hide");
    setBottomNavTab2Details("hide");
    setBottomNavTab3Details("hide");
    setNavBg({
      navTab1:
        "w-80 h-full pl-4 border flex flex-col rounded-full justify-center bg-white sm:pl-10",
      navTab2:
        "w-80 flex flex-col cursor-pointer  hover:bg-gray-300 h-full rounded-full pl-4 justify-center bg-transparent sm:w-32",
      navTab3:
        "w-80 flex flex-col cursor-pointer  hover:bg-gray-300 h-full rounded-full pl-4 justify-center bg-transparent sm:w-32",
      navTab4:
        "w-80 flex gap-2 cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 py-2 bg-transparent sm:w-64",
      experienceNavTab:
        "w-80 flex flex-col cursor-pointer h-full rounded-full pl-4 justify-center bg-white hidden sm:w-64",
    });
  };
  const experienceTabClickHandler = () => {
    setExperienceTab("show experience tab details");
    setBottomNavTab1Details("hide");
    setBottomNavTab2Details("hide");
    setBottomNavTab3Details("hide");
    setNavBg({
      navTab1:
        "w-80 h-full pl-4 hover:bg-gray-300 border flex flex-col rounded-full justify-center bg-transparent  sm:pl-10",
      navTab2:
        "w-80 flex flex-col cursor-pointer hover:bg-gray-300  h-full rounded-full pl-4 justify-center hidden sm:w-32",
      navTab3:
        "w-80 flex flex-col cursor-pointer h-full rounded-full pl-4 justify-center bg-white hidden sm:w-32",
      navTab4:
        "w-80 flex gap-2 cursor-pointer hover:bg-gray-300 h-full rounded-full pl-4 py-2 bg-transparent sm:w-64",
      experienceNavTab:
        "w-80 flex flex-col cursor-pointer h-full rounded-full pl-4 justify-center bg-white sm:w-64",
    });
  };

  return (
    <div className="w-screen border-b relative  ">
      <nav className="px-0 w-full h-20 flex items-center justify-center sm:justify-between sm:px-10">
        {/*  -----------------------------  Left Portion  -----------------------------   */}
        <div className="hidden lg:flex items-center justify-center gap-2 ">
          <img src={logo} alt="myBnb" className="w-8" />
          <span className="text-xl text-mainColor -tracking-tighter font-secondaryFont font-bold pl-1">
            mybnb
          </span>
        </div>
        {/* ----------------------------- Middle Portion---------------------------  */}
        {innerNav === false ? (
          <OuterNav
            tab1ClickHandler={tab1ClickHandler}
            tab2ClickHandler={tab2ClickHandler}
            tab3ClickHandler={tab3ClickHandler}
            tab4ClickHandler={tab4ClickHandler}
          />
        ) : (
          <InnerNav
            staysTabClickHandler={staysTabClickHandler}
            experienceTabClickHandler={experienceTabClickHandler}
          />
        )}

        {/*  ----------------------------- Right Portion  -----------------------------  */}
        <div className="hidden items-center justify-center gap-4 relative h-14 sm:flex">
          <button
            type="button"
            name="bnB your home Btn"
            className="hidden font-mainFont text-base  text-lightBlack hover:bg-gray-100 px-2 py-2 rounded-full lg:flex"
          >
            Mybnb your home
          </button>
          <button
            type="button"
            name="bnB your home Btn icon"
            className="text-xl text-lightBlack hover:bg-gray-100 px-2 py-2 rounded-full"
          >
            <BiGlobe />
          </button>

          <div
            className="border cursor-pointer rounded-full p-1 flex items-center justify-center gap-3 hover:shadow-md"
            onClick={() => {
              userContainer === true
                ? setUserContainer(false)
                : setUserContainer(true);
              setBottomNavTab1Details("hide");
              setBottomNavTab2Details("hide");
              setBottomNavTab3Details("hide");
            }}
          >
            <BiMenu className="text-2xl text-gray-600 cursor-pointer" />
            <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
          </div>
          {/* ------------------------ User Details [Login-signup] -------------------- */}
          {userContainer && <UserComp />}
        </div>
      </nav>

      {/* ----------------------------- Bottom Navigation ----------------------------- */}
      {showBottomNav === "show" && (
        <BottomNav
          navBg={navBg}
          bottomNavTab1Details={bottomNavTab1Details}
          setBottomNavTab1Details={setBottomNavTab1Details}
          searchInputClickHandler={searchInputClickHandler}
          input={input}
          setSearchsuggestionsDiv={setSearchsuggestionsDiv}
          bottomNavTab2Details={bottomNavTab2Details}
          setBottomNavTab2Details={setBottomNavTab2Details}
          bottomNavTab3Details={bottomNavTab3Details}
          setBottomNavTab3Details={setBottomNavTab3Details}
          experienceTab={experienceTab}
          setNavBg={setNavBg}
          checkIn={checkIn}
          checkOut={checkOut}
          fullDate={fullDate}
          guests={guests}
        />
      )}

      {/* ------------------------ Bottom Navigation Details -------------------- */}
      {bottomNavTab1Details === "show" && <BottomNavDestinationTabDetails />}
      {searchsuggestionsDiv && <SearchSuggestions input={input} />}
      {bottomNavTab2Details === "show" && (
        <BottomNavCheckInOut
          range={range}
          setRange={setRange}
          setFullDate={setFullDate}
          setCheckIn={setCheckIn}
          setCheckOut={setCheckOut}
        />
      )}
      {bottomNavTab3Details === "show" && (
        <BottomNavAddGuests setGuests={setGuests} />
      )}

      {/* ------------------------ Places Navigation --------------------------*/}
      <PlacesNav />
    </div>
  );
};

export default Navbar;

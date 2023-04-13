import React, { useState } from "react";
import data from "../data";
import logo from "../assets/logo.png";
import CardsBodyComp from "./CardsBodyComp";
import { BiBuildingHouse, BiHomeAlt } from "react-icons/bi";
import { IoCloseCircle } from "react-icons/io5";
import {
  AiFillFire,
  AiFillFormatPainter,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from "react-icons/ai";
import { HiOutlinePhotograph } from "react-icons/hi";
import { CiSliderHorizontal } from "react-icons/ci";
import { GiLightningDome, GiIsland } from "react-icons/gi";
import {
  MdOutlinePool,
  MdOutlineChair,
  MdOutlineFoundation,
  MdCottage,
  MdOutlineSportsCricket,
} from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { FaBed } from "react-icons/fa";

const PlacesNav = ({ apiData, setApiData }) => {
  // const [apiData, setApiData] = useState(data);
  const [displayFilterDiv, setDisplayFilterDiv] = useState(false);

  const filterDivBtnsCss =
    "text-lg px-3 py-2 m-3 bg-gray-200 flex items-center justify-center border rounded-xl hover:shadow-lg hover:cursor-pointer hover:bg-gray-200";

  const filterData = (catagoryItem) => {
    if (catagoryItem === "trending") {
      return setApiData(data);
    }
    const catagorizedData = data.filter((currElm) => {
      return currElm.catagory === catagoryItem;
    });
    setApiData(catagorizedData);
  };

  //  Filter Button
  const showFilters = () => {
    setDisplayFilterDiv(true);
  };
  const leftScrollHandler = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 100;
  };
  const rightScrollHandler = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 100;
  };

  const styles = {
    icon: "text-lg sm:text-2xl",
    iconHeading:
      "text-sm font-light text-left flex items-center flex-col px-2 pb-2 gap-1 cursor-pointer text-gray-500  hover:text-gray-800 hover:border-b hover:border-black sm:px-5",
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-24 relative border sm:px-2 lg:px-10">
        {/* Places Icons container  */}
        <div
          className=" w-[100%] h-full pl-5 pr-8 flex items-center overflow-x-scroll scrollbar-h-0 scrollbar-w-full whitespace-nowrap sm:w-[90%]"
          id="slider"
        >
          <div className="h-full text-gray-400 hidden items-center justify-center absolute  left-12 bg-white shadow-[-8px_0px_5px_#ffffff] lg:flex">
            <AiOutlineLeftCircle
              className="text-3xl cursor-pointer hover:text-gray-600"
              onClick={leftScrollHandler}
            />
          </div>

          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("trending");
            }}
          >
            <AiFillFire className={styles.icon} />
            trending
          </span>
          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Farms");
            }}
          >
            <BiBuildingHouse className={styles.icon} />
            Farms
          </span>
          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Swimming pools");
            }}
          >
            <MdOutlinePool className={styles.icon} />
            Amazing pools
          </span>

          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Beaches");
            }}
          >
            <TbBeach className={styles.icon} />
            Beaches
          </span>

          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Private Rooms");
            }}
          >
            <MdOutlineChair className={styles.icon} />
            Private rooms
          </span>

          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Hill Stations");
            }}
          >
            <MdOutlineFoundation className={styles.icon} />
            Hill Stations
          </span>

          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Cabins");
            }}
          >
            <FaBed className={styles.icon} />
            Cabins
          </span>

          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Amazing views");
            }}
          >
            <HiOutlinePhotograph className={styles.icon} />
            Amazing views
          </span>

          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("OMG");
            }}
          >
            <MdCottage className={styles.icon} />
            OMG
          </span>

          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Domes");
            }}
          >
            <GiLightningDome className={styles.icon} />
            Domes
          </span>

          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Islands");
            }}
          >
            <GiIsland className={styles.icon} />
            Islands
          </span>
          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Creative spaces");
            }}
          >
            <AiFillFormatPainter className={styles.icon} />
            Creative spaces
          </span>

          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Play");
            }}
          >
            <MdOutlineSportsCricket className={styles.icon} />
            Play
          </span>

          <span
            className={styles.iconHeading}
            onClick={() => {
              filterData("Countryside");
            }}
          >
            <BiHomeAlt className={styles.icon} />
            Countryside
          </span>

          {/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- */}

          {/* Right -> button */}
          <div className="h-full border-none text-gray-400 hidden items-center justify-center absolute right-[12.3%] bg-white shadow-[-8px_0px_5px_#ffffff] lg:flex">
            <AiOutlineRightCircle
              className="text-3xl cursor-pointer hover:text-gray-600"
              onClick={rightScrollHandler}
            />
          </div>
          {/* ********************************* */}
        </div>
        {/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- */}
        <div className="h-full hidden justify-center items-center sm:w-[10%] lg:flex">
          <button
            className="border rounded-xl flex gap-2 items-center justify-center px-5 py-3 text-base text-gray-500 hover:shadow-lg"
            onClick={() => {
              showFilters();
            }}
          >
            <CiSliderHorizontal className="text-black" />
            Filters
          </button>
        </div>
        {displayFilterDiv && (
          <div className="w-[95%] h-[35rem] flex flex-col items-center bg-gray-100 rounded-2xl shadow-2xl border z-50 absolute -top-14 px-2 py-2">
            <div className="w-full px-2 flex  items-center justify-end relative">
              <IoCloseCircle
                className="text-2xl hover:cursor-pointer text-gray-600 hover:text-black"
                onClick={() => {
                  setDisplayFilterDiv(false);
                }}
              />
            </div>
            <div className="w-full flex items-center justify-center py-2">
              <img src={logo} alt="myBnb" className="w-8" />
              <span className="text-xl text-mainColor -tracking-tighter font-secondaryFont font-bold pl-1">
                mybnb
              </span>
            </div>
            <div className="w-[80%] h-[60rem] flex items-center justify-center my-5">
              <div className="w-full flex items-center justify-center flex-wrap">
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("trending");
                    setDisplayFilterDiv(false);
                  }}
                >
                  trending
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Farms");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Farms
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Swimming pools");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Swimming pools
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Beaches");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Beaches
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Private Rooms");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Private Rooms
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Hill Stations");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Hill Stations
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Cabins");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Cabins
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Amazing views");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Amazing views
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("OMG");
                    setDisplayFilterDiv(false);
                  }}
                >
                  OMG
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Domes");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Domes
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Islands");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Islands
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Creative spaces");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Creative spaces
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Play");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Play
                </button>
                <button
                  className={filterDivBtnsCss}
                  onClick={() => {
                    filterData("Countryside");
                    setDisplayFilterDiv(false);
                  }}
                >
                  Countryside
                </button>
              </div>
            </div>
            <div className="w-full flex px-5 items-center justify-center">
              <span className="text-base text-gray-800">
                Developed by Arun Katoch
              </span>
            </div>
          </div>
        )}
      </div>
      <CardsBodyComp apiData={apiData} />
    </>
  );
};

export default PlacesNav;

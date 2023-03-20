import React from "react";
import { BiBuildingHouse, BiHomeAlt } from "react-icons/bi";
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

const PlacesNav = () => {
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
          <span className={styles.iconHeading}>
            <BiBuildingHouse className={styles.icon} />
            Farms
          </span>
          <span className={styles.iconHeading}>
            <MdOutlinePool className={styles.icon} />
            Amazing pools
          </span>

          <span className={styles.iconHeading}>
            <TbBeach className={styles.icon} />
            Beaches
          </span>

          <span className={styles.iconHeading}>
            <MdOutlineChair className={styles.icon} />
            Private rooms
          </span>

          <span className={styles.iconHeading}>
            <MdOutlineFoundation className={styles.icon} />
            Historical Homes
          </span>

          <span className={styles.iconHeading}>
            <FaBed className={styles.icon} />
            Cabins
          </span>

          <span className={styles.iconHeading}>
            <HiOutlinePhotograph className={styles.icon} />
            Amazing views
          </span>

          <span className={styles.iconHeading}>
            <MdCottage className={styles.icon} />
            OMG
          </span>

          <span className={styles.iconHeading}>
            <GiLightningDome className={styles.icon} />
            Domes
          </span>

          <span className={styles.iconHeading}>
            <GiIsland className={styles.icon} />
            Islands
          </span>

          <span className={styles.iconHeading}>
            <AiFillFire className={styles.icon} />
            trending
          </span>

          <span className={styles.iconHeading}>
            <AiFillFormatPainter className={styles.icon} />
            Creative spaces
          </span>

          <span className={styles.iconHeading}>
            <MdOutlineSportsCricket className={styles.icon} />
            Play
          </span>

          <span className={styles.iconHeading}>
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
          <button className="border rounded-xl flex gap-2 items-center justify-center px-5 py-3 text-base text-gray-500 hover:shadow-lg">
            <CiSliderHorizontal className="text-black" />
            Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default PlacesNav;

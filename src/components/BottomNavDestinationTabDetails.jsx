import React from "react";
import Australia from "../assets/Australia.png";
import Canada from "../assets/Canada.png";
import Europe from "../assets/Europe.png";
import SouthEastAsia from "../assets/SouthEastAsia.png";
import UnitedKingdom from "../assets/UnitedKingdom.png";
import WorldMap from "../assets/WorldMap.png";
const BottomNavDestinationTabDetails = () => {
  return (
    <>
      <div className="w-[97%] h-[28rem] flex flex-col gap-2 border rounded-[2.5rem] absolute   bg-white z-30 bottom-[-36rem] shadow-xl p-1 sm:w-[90%] sm:h-[28rem] sm:left-[2.5rem]   sm:bottom-[-28rem] lg:w-[31rem] lg:bottom-[-27.8rem] lg:p-10">
        <div className="w-full pl-5">
          <span className="text-sm  font-bold">Search by region</span>
        </div>
        <div className=" w-full gap-4 p-1 flex flex-wrap items-center justify-center">
          <div className="w-[29%] h-[10rem] flex flex-col items-center rounded-xl">
            <div className="w-full h-[80%] rounded-xl cursor-pointer">
              <img
                src={WorldMap}
                alt="WorldMap"
                className="w-full h-full rounded-xl border border-gray-300 hover:border-black hover:transition-all"
              />
            </div>
            <div className="w-full h-[20%] flex justify-center items-center">
              <span className="text-sm">I'm flexible</span>
            </div>
          </div>
          <div className="w-[29%] h-[10rem] flex flex-col items-center rounded-xl">
            <div className="w-full h-[80%] rounded-xl cursor-pointer">
              <img
                src={Europe}
                alt="Europe"
                className="w-full h-full rounded-xl border border-gray-300 hover:border-black hover:transition-all"
              />
            </div>
            <div className="w-full h-[20%] flex justify-center items-center">
              <span className="text-sm">Europe</span>
            </div>
          </div>
          <div className="w-[29%] h-[10rem] flex flex-col items-center rounded-xl">
            <div className="w-full h-[80%] rounded-xl cursor-pointer">
              <img
                src={Canada}
                alt="Canada"
                className="w-full h-full rounded-xl border border-gray-300 hover:border-black hover:transition-all"
              />
            </div>
            <div className="w-full h-[20%] flex justify-center items-center">
              <span className="text-sm">Canada</span>
            </div>
          </div>
          <div className="w-[29%] h-[10rem] flex flex-col items-center rounded-xl">
            <div className="w-full h-[80%] rounded-xl cursor-pointer">
              <img
                src={SouthEastAsia}
                alt="SouthEastAsia"
                className="w-full h-full rounded-xl border border-gray-300 hover:border-black hover:transition-all"
              />
            </div>
            <div className="w-full h-[20%] flex justify-center items-center">
              <span className="text-sm">SouthEastAsia</span>
            </div>
          </div>
          <div className="w-[29%] h-[10rem] flex flex-col items-center rounded-xl">
            <div className="w-full h-[80%] rounded-xl cursor-pointer">
              <img
                src={UnitedKingdom}
                alt="UnitedKingdom"
                className="w-full h-full rounded-xl border border-gray-300 hover:border-black hover:transition-all"
              />
            </div>
            <div className="w-full h-[20%] flex justify-center items-center">
              <span className="text-sm">UnitedKingdom</span>
            </div>
          </div>
          <div className="w-[29%] h-[10rem] flex flex-col items-center rounded-xl">
            <div className="w-full h-[80%] rounded-xl cursor-pointer">
              <img
                src={Australia}
                alt="Australia"
                className="w-full h-full rounded-xl border border-gray-300 hover:border-black hover:transition-all"
              />
            </div>
            <div className="w-full h-[20%] flex justify-center items-center">
              <span className="text-sm">Australia</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavDestinationTabDetails;

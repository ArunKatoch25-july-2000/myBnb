import React from "react";
import { BsStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import data from "../data";

const Placedetails = () => {
  const { id } = useParams();

  return (
    <section className="w-screen  min-h-screen">
      <Navbar
        hidePlacesNav={true}
        placeDetailsOuterNav={true}
        bottomNavStyles={true}
      />
      <div className="w-full flex flex-col border sm:px-2 lg:px-10">
        <div className="w-full flex flex-col gap-2  py-5">
          <h1 className="text-sm lg:text-2xl">{data[id].locationDetails}</h1>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2">
              <BsStarFill className="text-gray-700" /> {data[id].rating}
            </span>
            <span className="underline">{data[id].location}</span>
          </div>
        </div>
        <div className="flex flex-col w-full h-[100vh] gap-3 sm:flex-row sm:h-96">
          {data[id].imgSrc[0] && (
            <div className="w-full h-[40%] sm:w-[50%] sm:h-full">
              <img
                src={data[id].imgSrc[0]}
                alt="myBmb_rentals"
                className="h-full w-full hover:opacity-90 hover:cursor-pointer"
              />
            </div>
          )}
          <div className="w-full h-[55%] flex flex-wrap items-center justify-center gap-3 sm:w-[50%] sm:h-full sm:items-start sm:justify-start">
            {data[id].imgSrc[1] && (
              <div className="w-[45%] h-[47.5%]">
                <img
                  src={data[id].imgSrc[1]}
                  alt="myBnb_Rentals"
                  className="h-full w-full hover:opacity-90 hover:cursor-pointer"
                />
              </div>
            )}
            {data[id].imgSrc[2] && (
              <div className="w-[45%] h-[47.5%]">
                <img
                  src={data[id].imgSrc[2]}
                  alt="myBnb_Rentals"
                  className="h-full w-full hover:opacity-90 hover:cursor-pointer"
                />
              </div>
            )}
            {data[id].imgSrc[3] && (
              <div className="w-[45%] h-[47.5%]">
                <img
                  src={data[id].imgSrc[3]}
                  alt="myBnb_Rentals"
                  className="h-full w-full hover:opacity-90 hover:cursor-pointer"
                />
              </div>
            )}
            {data[id].imgSrc[4] && (
              <div className="w-[45%] h-[47.5%]">
                <img
                  src={data[id].imgSrc[4]}
                  alt="myBnb_Rentals"
                  className="h-full w-full hover:opacity-90 hover:cursor-pointer"
                />
              </div>
            )}
          </div>
          {/* {data[id].imgSrc.map((currElm, index) => {
            return (
              <div key={index}>
                <img src={currElm} alt="airBnb_Rentals" />
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default Placedetails;

import React from "react";
import Card from "./Card";

const CardsBodyComp = ({ apiData }) => {
  return (
    <div className="h-[100vh] w-screen px-0 py-8 flex flex-wrap items-center justify-center gap-4 overflow-y-scroll whitespace-nowrap -z-50 sm:px-10 sm:h-[75vh]">
      {apiData.length <= 0 ? (
        <div>
          <span className="text-sm sm:text-base lg:text-lg">Oops..! No related data found</span>
        </div>
      ) : (
        apiData.map((elem, index) => {
          return <Card elem={elem} key={index} />;
        })
      )}
    </div>
  );
};

export default CardsBodyComp;

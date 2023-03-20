import React from "react";
import data from "../data";
import Card from "./Card";

const CardsBodyComp = () => {
  return (
    <>
      <div className="h-[100vh] w-screen px-0 py-8 flex flex-wrap items-center justify-center gap-4 overflow-y-scroll whitespace-nowrap -z-10 sm:px-10 sm:h-[75vh]">
        {data.map((elem, index) => {
          return <Card elem={elem} key={index} />;
        })}
      </div>
    </>
  );
};

export default CardsBodyComp;

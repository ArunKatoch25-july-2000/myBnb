import React, { useState, useEffect } from "react";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";

const BottomNavAddGuests = ({ setGuests, bottomNavStyles }) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const addAdultsClickHandler = () => {
    if (adults >= 0 && adults <= 14) {
      setAdults(adults + 1);
    }
  };

  const substractAdultsClickHandler = () => {
    if (adults > 0 && adults <= 15) {
      setAdults(adults - 1);
    }
  };

  const addChildrenClickHandler = () => {
    setAdults(1);
    if (children >= 0 && children <= 14) {
      setChildren(children + 1);
    }
  };
  const substractChildrenClickHandler = () => {
    if (children > 0 && children <= 15) {
      setChildren(children - 1);
    }
  };
  const addInfantsClickHandler = () => {
    setAdults(1);
    if (infants >= 0 && infants <= 4) {
      setInfants(infants + 1);
    }
  };
  const substractInfantsClickHandler = () => {
    if (infants > 0 && infants <= 5) {
      setInfants(infants - 1);
    }
  };
  const addPetsClickHandler = () => {
    setAdults(1);
    if (pets >= 0 && pets <= 4) {
      setPets(pets + 1);
    }
  };
  const substractPetsClickHandler = () => {
    if (pets > 0 && pets <= 5) {
      setPets(pets - 1);
    }
  };

  useEffect(() => {
    setGuests(`${adults + children + infants + pets}  guests`);
  }, [adults, infants, children, pets]);

  return (
    <>
      <div
        className={
          !bottomNavStyles
            ? "w-full h-[20rem] flex flex-col border bg-white shadow-lg  absolute right-0 bottom-[17rem] rounded-[2.5rem] pt-1 px-1 z-30 select-none sm:right-[1rem] sm:w-[26.5rem] sm:px-10 sm:bottom-[32rem] lg:bottom-[13.8rem] xl:right-[15rem]"
            : "w-full h-[20rem] flex flex-col border bg-white shadow-lg  absolute right-0 bottom-[-33.5rem] rounded-[2.5rem] pt-1 px-1 z-30 select-none sm:right-[1rem] sm:w-[26.5rem] sm:px-10 sm:bottom-[-24.8rem] xl:right-[15rem]"
        }
        onClick={(e) => {
          e.stopPropagation();
          setGuests(`${adults + children + infants + pets}  guests`);
        }}
      >
        <div className="w-full flex flex-col relative justify-center border-b py-3">
          <span className="text-lg font-semibold">Adults</span>
          <span className="text-base text-gray-500">Ages 13 or above</span>
          <div className=" flex gap-4 items-center justify-center absolute right-0">
            <BsDashCircle
              className={
                adults === 0
                  ? "text-3xl text-gray-100 hover:cursor-not-allowed"
                  : "text-3xl text-gray-300 hover:text-gray-600 hover:cursor-pointer"
              }
              onClick={substractAdultsClickHandler}
            />
            <span className="text-2xl text-gray-600">{adults}</span>
            <BsPlusCircle
              className={
                adults === 15
                  ? "text-3xl text-gray-100 hover:cursor-not-allowed"
                  : "text-3xl text-gray-300 hover:text-gray-600 hover:cursor-pointer"
              }
              onClick={addAdultsClickHandler}
            />
          </div>
        </div>
        <div className="w-full flex flex-col relative justify-center border-b py-3">
          <span className="text-lg font-semibold">Children</span>
          <span className="text-base text-gray-500">Ages 2 - 12</span>
          <div className=" flex gap-4 items-center justify-center absolute right-0">
            <BsDashCircle
              className={
                children === 0
                  ? "text-3xl text-gray-100 hover:cursor-not-allowed"
                  : "text-3xl text-gray-300 hover:text-gray-600 hover:cursor-pointer"
              }
              onClick={substractChildrenClickHandler}
            />
            <span className="text-2xl text-gray-600">{children}</span>
            <BsPlusCircle
              className={
                children === 15
                  ? "text-3xl text-gray-100 hover:cursor-not-allowed"
                  : "text-3xl text-gray-300 hover:text-gray-600 hover:cursor-pointer"
              }
              onClick={addChildrenClickHandler}
            />
          </div>
        </div>
        <div className="w-full flex flex-col relative justify-center border-b py-3">
          <span className="text-lg font-semibold">Infants</span>
          <span className="text-base text-gray-500">Under 2</span>
          <div className=" flex gap-4 items-center justify-center absolute right-0">
            <BsDashCircle
              className={
                infants === 0
                  ? "text-3xl text-gray-100 hover:cursor-not-allowed"
                  : "text-3xl text-gray-300 hover:text-gray-600 hover:cursor-pointer"
              }
              onClick={substractInfantsClickHandler}
            />
            <span className="text-2xl text-gray-600">{infants}</span>
            <BsPlusCircle
              className={
                infants === 5
                  ? "text-3xl text-gray-100 hover:cursor-not-allowed"
                  : "text-3xl text-gray-300 hover:text-gray-600 hover:cursor-pointer"
              }
              onClick={addInfantsClickHandler}
            />
          </div>
        </div>
        <div className="w-full flex flex-col relative justify-center py-3">
          <span className="text-lg font-semibold">Pets</span>
          <span className="text-base text-gray-500">
            Bringing a service animal?
          </span>
          <div className=" flex gap-4 items-center justify-center absolute right-0">
            <BsDashCircle
              className={
                pets === 0
                  ? "text-3xl text-gray-100 hover:cursor-not-allowed"
                  : "text-3xl text-gray-300 hover:text-gray-600 hover:cursor-pointer"
              }
              onClick={substractPetsClickHandler}
            />
            <span className="text-2xl text-gray-600">{pets}</span>
            <BsPlusCircle
              className={
                pets === 5
                  ? "text-3xl text-gray-100 hover:cursor-not-allowed"
                  : "text-3xl text-gray-300 hover:text-gray-600 hover:cursor-pointer"
              }
              onClick={addPetsClickHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavAddGuests;

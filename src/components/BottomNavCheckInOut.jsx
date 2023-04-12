import React, { useState } from "react";
import DatesPickerComp from "./DatesPickerComp";

const BottomNavCheckInOut = ({
  range,
  setRange,
  setFullDate,
  setCheckIn,
  setCheckOut,
  bottomNavStyles,
}) => {
  const [toogleDates, setToogleDates] = useState({
    chooseDates:
      "text-base py-2 px-1 w-[48%]  font-mainFont rounded-full bg-white",
    flexibleDates:
      "text-base py-2 px-1 w-[48%]  font-mainFont rounded-full bg-transparent hover:bg-gray-100",
  });

  return (
    <>
      <div
        className={
          !bottomNavStyles
            ? "w-full h-[29rem] flex flex-col border shadow-lg absolute bottom-[8rem] bg-white rounded-[2.5rem] px-1 z-30 sm:bottom-[5rem] lg:w-[51rem] lg:left-[17rem] lg:px-10"
            : "w-full h-[29rem] flex flex-col border shadow-lg absolute bottom-[-41.6rem] bg-white rounded-[2.5rem] px-1 z-30 sm:bottom-[-33.6rem] lg:w-[51rem] lg:left-[17rem] lg:px-10"
        }
      >
        {/* toggle choose Dates and Flexible Dates  */}
        <div className="w-full flex items-center justify-center">
          <div className="w-[20rem] rounded-full flex bg-gray-200 p-1 my-2 items-center justify-center gap-1">
            <button
              className={toogleDates.chooseDates}
              onClick={() => {
                setToogleDates({
                  chooseDates:
                    "text-base py-2 px-1 w-[48%] font-mainFont rounded-full bg-white",
                  flexibleDates:
                    "text-base py-2 px-1 w-[48%] font-mainFont rounded-full bg-transparent hover:bg-gray-100",
                });
              }}
            >
              Choose dates
            </button>
            <button
              className={toogleDates.flexibleDates}
              onClick={() => {
                setToogleDates({
                  chooseDates:
                    "text-base py-2 px-1 w-[48%] font-mainFont rounded-full bg-transparent hover:bg-gray-100",
                  flexibleDates:
                    "text-base py-2 px-1 w-[48%] font-mainFont rounded-full bg-white ",
                });
              }}
            >
              Flexible dates
            </button>
          </div>
        </div>

        {/* ---------------------- calander div here --------------- */}
        <DatesPickerComp
          range={range}
          setRange={setRange}
          setFullDate={setFullDate}
          setCheckIn={setCheckIn}
          setCheckOut={setCheckOut}
        />
        {/* +--+-+-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ */}
      </div>
    </>
  );
};

export default BottomNavCheckInOut;

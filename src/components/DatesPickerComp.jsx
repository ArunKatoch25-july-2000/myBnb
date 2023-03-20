import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";

const DatesPickerComp = ({
  range,
  setRange,
  setFullDate,
  setCheckIn,
  setCheckOut,
}) => {
  // const [range, setRange] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: addDays(new Date(), 7),
  //     key: "selection",
  //   },
  // ]);
  // const [open, setOpen] = useState(false);
  const [view, setView] = useState("horizontal");

  useEffect(() => {
    if (window.innerWidth >= 250 && window.innerWidth <= 640) {
      setView("vertical");
    }
  }, []);
  return (
    <div className="w-full h-[25rem] py-1 flex flex-col items-center overflow-y-auto lg:overflow-y-hidden">
      {/* <input
        type="text"
        value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
          range[0].endDate,
          "MM/dd/yyyy"
        )}`}
        readOnly
        onClick={() => {
          setOpen((open) => !open);
        }}
      /> */}
      <div
        className="w-full h-full flex items-center justify-center"
        onClick={() => {
          setFullDate(
            `${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
              range[0].endDate,
              "dd/MM/yyyy"
            )}`
          );
          setCheckIn(`${format(range[0].startDate, "dd/MM/yyyy")}`);
          setCheckOut(`${format(range[0].endDate, "dd/MM/yyyy")}`);
        }}
      >
        <DateRangePicker
          onChange={(item) => {
            setRange([item.selection]);
            // setFullDate(
            //   `${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
            //     range[0].endDate,
            //     "dd/MM/yyyy"
            //   )}`
            // );
            // setCheckIn(`${format(range[0].startDate, "dd/MM/yyyy")}`);
            // setCheckOut(`${format(range[0].endDate, "dd/MM/yyyy")}`);
          }}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={2}
          direction={view}
          fixedHeight={true}
          className="h-full"
        />
      </div>
    </div>
  );
};

export default DatesPickerComp;

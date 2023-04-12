import React from "react";

const SearchSuggestions = ({ input }) => {
  return (
    <div className="w-[97%] h-[28rem] flex items-center justify-center flex-col gap-3 border rounded-[2.5rem] absolute   bg-white z-30 bottom-[8rem] shadow-xl p-5 overflow-y-auto sm:w-[90%] sm:h-[28rem] sm:left-[2.5rem]  sm:bottom-[5rem] lg:w-[22rem] lg:left-[15rem] lg:bottom-[5rem] lg:p-10">
      <span className="text-base text-gray-600">Oops... no suggestions for now</span>
    </div>
  );
};

export default SearchSuggestions;

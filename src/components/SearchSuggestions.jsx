import React from "react";

const SearchSuggestions = ({ searchFilter, autocompleteSearchValue }) => {
  return (
    <div className="w-[97%] h-[28rem] flex items-center flex-col gap-3 border rounded-[2.5rem] absolute   bg-white z-30 bottom-[8rem] shadow-xl p-5 overflow-y-auto sm:w-[90%] sm:h-[28rem] sm:left-[2.5rem]  sm:bottom-[5rem] lg:w-[22rem] lg:left-[15rem] lg:bottom-[5rem] lg:p-10">
      {searchFilter.map((currElm, index) => {
        return (
          <span
            key={index}
            className="text-base text-gray-600 py-2 cursor-pointer hover:text-gray-400"
            onClick={() => {
              autocompleteSearchValue(currElm.location);
            }}
          >
            {currElm.location}
          </span>
        );
      })}
    </div>
  );
};

export default SearchSuggestions;

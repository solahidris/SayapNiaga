// directory: src/components/SearchFilterBody.tsx (SearchFilterBody)

import React, { useState, useEffect } from "react";
import Image from "next/image";

const SearchFilterBody = () => {
  const bodyTypeList = [
    "Sedan",
    "MPV",
    "Coupe",
    "Hatchback",
    "SUV",
    "Sports",
    "4WD",
    "Others",
  ];

  return (
    <div className="flex flex-col text-white w-full">
      {/* white line divider */}
      <div className="bg-white/10 mb-14 mt-10 py-1"></div>
      {/* content */}
      <div className="flex flex-col w-full px-2">
        <div className="mb-8">
          <span className="mb-20 font-semibold text-sm lg:text-xl border border-orange-500 text-white px-6 py-3 rounded">Search by Body Type</span>
        </div>
        <div className="pt-4 lg:pt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center lg:w-[800px] mx-auto">
          {bodyTypeList.map((body, index) => (
            <button key={index} className="bg-white hover:bg-white/80 text-black text-xs lg:text-base text-center shadow-md shadow-white px-4 py-4 rounded-lg">{body}</button>
          ))}
        </div>
      </div>
      {/* white line divider */}
      <div className="bg-white/10 my-8 py-1 mt-20"></div>
    </div>
  );
};

export default SearchFilterBody;

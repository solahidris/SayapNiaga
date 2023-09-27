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
    <div className="flex flex-col bg-sky-3000 text-white w-full">
      {/* white line divider */}
      <div className="bg-white/10 my-20 py-1"></div>
      {/* content */}
      <div className="flex flex-col bg-red-4000 w-full">
        <p className="mx-4 font-semibold italic text-lg">Search by Body Type</p>
        <div className="grid grid-cols-3 gap-8 justify-center w-[800px] mx-auto bg-green-4000">
          {bodyTypeList.map((body, index) => (
            <button key={index} className="bg-white hover:bg-white/80 text-black text-center shadow-md shadow-white px-4 py-4 rounded-lg">{body}</button>
          ))}
        </div>
      </div>
      {/* white line divider */}
      <div className="bg-white/10 my-8 py-1 mt-24"></div>
    </div>
  );
};

export default SearchFilterBody;

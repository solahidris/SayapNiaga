// directory: src/components/SearchFilterGeneral.tsx (SearchFilterGeneral)

import React, { useState, useEffect } from "react";
import Image from "next/image";

const SearchFilterGeneral = () => {
  return (
    <div className="flex bg-red-300 text-white">
      <div className="flex flex-col">
        <p>Search Your Next Car</p>
        <div className="flex">
          <p>Search Car by Brand / Model / ID</p>
          <p>Select Brand</p>
          <p>Select Model</p>
          <p>Select Year</p>
          <p>Select Price Range</p>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterGeneral;

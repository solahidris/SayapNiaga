// directory: src/components/SearchFilterBody.tsx (SearchFilterBody)

import React, { useState, useEffect } from "react";
import Image from "next/image";

const SearchFilterBody = () => {
  return (
    <div className="flex bg-red-300 text-white">
      <div className="flex flex-col">
        <p>Search by Body Type</p>
        <div className="flex">
          <p>Sedan</p>
          <p>MPV</p>
          <p>Coupe</p>
          <p>Hatchback</p>
          <p>SUV</p>
          <p>Sports</p>
          <p>4WD</p>
          <p>Others</p>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBody;

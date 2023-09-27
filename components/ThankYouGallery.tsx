// directory: src/components/ThankYouGallery.tsx (ThankYouGallery)

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ThankYouGallery = () => {
  return (
    <div className="flex bg-red-300 text-white">
      <div className="flex flex-col">
        <p>Thank You For Buying With Us</p>
        <div className="flex">
          <p>Image 1</p>
          <p>Image 2</p>
          <p>Image 3</p>
          <p>Image 4</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouGallery;

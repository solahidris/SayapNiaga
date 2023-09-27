// directory: src/components/HomepageCarousel.tsx (HomepageCarousel)

import React, { useState, useEffect } from "react";
import Image from "next/image";

const HomepageCarousel = () => {

  const imageSources = [
    "/homepagecarousel001.png",
    "/homepagecarousel002.png",
    "/homepagecarousel003.png",
    "/homepagecarousel004.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentImageIndex < imageSources.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        setCurrentImageIndex(0);
      }
    }, 4000);

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(timeout);
    };
  }, [currentImageIndex]);

  return (
    <div className="flex bg-black text-white">
      <div className="w-[100vw] h-[500px] relative">
        {imageSources.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            width={1000}
            height={1000}
            className={`w-[100vw] h-[500px] object-cover object-top absolute transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomepageCarousel;

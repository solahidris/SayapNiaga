// directory: src/components/ThankYouGallery.tsx (ThankYouGallery)

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const ThankYouGallery = () => {

  // Check if on Gallery Page
  const router = useRouter();
  const isGalleryPage = router.pathname === "/gallery";

  const imageGalleryPage = [
    "/gallery001.jpeg", "/gallery002.jpeg", "/gallery003.jpeg", "/gallery004.jpeg", "/gallery005.jpeg",
    "/gallery006.jpeg", "/gallery007.jpeg", "/gallery008.jpeg", "/gallery009.jpeg", "/gallery010.jpeg",
    "/gallery011.jpeg", "/gallery012.jpeg", "/gallery013.jpeg", "/gallery014.jpeg", "/gallery015.jpeg",
    "/gallery016.jpeg", "/gallery017.jpeg", "/gallery018.jpeg", "/gallery019.jpeg", "/gallery020.jpeg",
    "/gallery021.jpeg", "/gallery022.jpeg", "/gallery023.jpeg", "/gallery024.jpeg", "/gallery025.jpeg",
    "/gallery026.jpeg", "/gallery027.jpeg", "/gallery028.jpeg", "/gallery029.jpeg", "/gallery030.jpeg",
    "/gallery031.jpeg", "/gallery032.jpeg", "/gallery033.jpeg", "/gallery034.jpeg", "/gallery035.jpeg",
    "/gallery036.jpeg", "/gallery037.jpeg", "/gallery038.jpeg"
  ];
  const imageGalleryHome = [
    "/gallery001.jpeg", "/gallery002.jpeg", "/gallery003.jpeg", "/gallery004.jpeg", "/gallery005.jpeg",
    "/gallery006.jpeg", "/gallery007.jpeg", "/gallery008.jpeg", "/gallery009.jpeg", "/gallery010.jpeg"
  ];

  const ImageToRender = isGalleryPage ? imageGalleryPage : imageGalleryHome;

  return (
    <div className="flex text-white">
      <div className="flex flex-col">
        <p className="text-[36px] lg:text-[48px] font-semibold py-6 tracking-wide text-center uppercase">Thank You For Buying With Us</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {ImageToRender.map((src, index)=>{
            return(
                <Image
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                width={1000}
                height={1000}
                className="h-auto max-w-full rounded-lg aspect-square object-cover"
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ThankYouGallery;

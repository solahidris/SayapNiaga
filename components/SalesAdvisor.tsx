// directory: src/components/SalesAdvisor.tsx (SalesAdvisor)

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";

const SalesAdvisor = () => {
  const salesAdvisorList = [
    {
      name: "fauzi",
      phone: "0108982114",
      image: "/sa-fauzi.jpeg",
    },
    {
      name: "rashidi",
      phone: "0183788487",
      image: "/sa-rashidi.jpeg",
    },
    {
      name: "zailani",
      phone: "0166789733",
      image: "/sa-zailani.jpeg",
    },
    {
      name: "pauzi",
      phone: "01120998650",
      image: "/sa-pauzi.jpeg",
    },
    {
      name: "ben",
      phone: "0102313014",
      image: "/sa-ben.jpeg",
    },
    {
      name: "hazimin",
      phone: "0129581373",
      image: "/sa-hazimin.jpeg",
    },
    {
      name: "jack",
      phone: "0122535889",
      image: "/sa-jack.jpeg",
    },
    {
      name: "jye",
      phone: "0166789733",
      image: "/sa-jye.jpeg",
    },
    {
      name: "eric",
      phone: "0123200638",
      image: "/sa-eric.jpeg",
    },
    {
      name: "kenny",
      phone: "0108462773",
      image: "/sa-kenny.jpeg",
    },
    {
      name: "riduan",
      phone: "0183131175",
      image: "/sa-riduan.jpeg",
    },
  ];

  return (
    <div className="flex text-white  justify-center">
      <div className="flex flex-col">
        <p className="pt-12 lg:pt-0 text-[16px] lg:text-[36px] font-semibold py-6 tracking-wide text-center uppercase">
          Feel free to ask us any questions
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {salesAdvisorList.map((src, index) => {
            return (
              <div>
                <Image
                  key={index}
                  src={src.image}
                  alt={`Image ${index + 1}`}
                  width={250}
                  height={250}
                  className="h-auto max-w-full rounded-lg object-cover"
                />
                <p className="pt-4 capitalize text-center text-base lg:text-xl font-semibold tracking-wide">
                  {src.name}
                </p>
                <p className="text-center text-[10px] lg:text-sm tracking-wide">{src.phone}</p>
                <div className="pt-4 grid grid-cols-2">
                  <a href={`tel:${src.phone}`} className="bg-blue-500 flex rounded-l-xl">
                    <button className="grow flex justify-center items-center py-3">
                      <BsFillTelephoneFill className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]" />
                    </button>
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?phone=6${src.phone}`}
                    className="bg-green-500 flex rounded-r-xl"
                  >
                    <button className="grow flex justify-center items-center py-3">
                      <BsWhatsapp className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]" />
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default SalesAdvisor;

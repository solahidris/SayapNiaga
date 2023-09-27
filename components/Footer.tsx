// directory: src/components/Footer.tsx (Footer)

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrFacebook, GrInstagram, GrYoutube } from "react-icons/gr";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex bg-black text-white">
      <div className="flex flex-grow justify-between gap-8 mx-8 py-8">
        
        {/* Address - Most Left */}
        <div className="flex flex-col gap-0 items-start">
          <div className="flex items-center gap-2 pb-2 bg-orange-500 px-4 py-2 rounded mb-4">
            <p>ADDRESS</p>
            <FaMapLocationDot className="text-white w-[20px] h-[20px]" />
          </div>
          <p className="font-semibold pb-2">Sayap Niaga Sdn. Bhd.</p>
          <p>Lot 17303, Jalan Ayer Jernih 1,</p>
          <p>Taman Ayer Panas, Setapak,</p>
          <p>53200, Kuala Lumpur.</p>
          <p>(Opposite Plaza Tol Ayer Panas)</p>
          <br />
          <p className="font-semibold pb-2">Opening Hours</p>
          <p>Monday - Saturday (9.30am - 6.30pm)</p>
          <p>Sunday (11.00am - 5.00pm)</p>
        </div>
        
        {/* Contact - 2nd from Left */}
        <div className="flex flex-col gap-0 items-start">
          <div className="flex items-center gap-2 pb-2 bg-orange-500 px-4 py-2 rounded mb-4">
            <p>Contact</p>
            <BsFillTelephoneInboundFill className="text-white w-[15px] h-[15px]" />
          </div>
          <p className="font-semibold pb-2">Email:</p>
          <p>mysniaga@gmail.com</p>
          <br />
          <p className="font-semibold pb-2">Contact No.:</p>
          <p>+603-40310092</p>
        </div>

        {/* Socials - 2nd from Right */}
        <div className="flex gap-8 items-center">
          <a href="https://www.facebook.com/sayapcars/">
            <GrFacebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/sayapniagacars">
            <GrInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/channel/UCZEzgzAbjUlzwIC1P-eycYQ">
            <GrYoutube className="w-6 h-6" />
          </a>
        </div>

        {/* Logo - Most Right */}
        <div>
          <Image
            src="/sayap-logo-header.png"
            alt="header-logo"
            width={400}
            height={100}
          />
          <p className="text-zinc-600">© Sayap Niaga Sdn. Bhd. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

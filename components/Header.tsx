// directory: src/components/Header.tsx (Header)

import React from "react";
import Link from "next/link";
import { GrFacebook, GrInstagram, GrYoutube } from "react-icons/gr";


const Header = () => {
  return(
    <div className="flex justify-between bg-blue-600 text-white">
      <div className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/carlisting">Car Listing</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/salesteam">Sales Team</Link>
        <Link href="/aboutus">About Us</Link>
      </div>
      <div className="flex gap-4">
        <a href="https://www.facebook.com/sayapcars/"><GrFacebook /></a>
        <a href="https://www.instagram.com/sayapniagacars"><GrInstagram /></a>
        <a href="https://www.youtube.com/channel/UCZEzgzAbjUlzwIC1P-eycYQ"><GrYoutube /></a>
      </div>
    </div>
  )
};

export default Header;
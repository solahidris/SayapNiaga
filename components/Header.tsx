// directory: src/components/Header.tsx (Header)

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrFacebook, GrInstagram, GrYoutube } from "react-icons/gr";
import { useState } from "react";


const Header = () => {

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpened(!isMenuOpened);
    console.log(isMenuOpened); // delayed
  }

  return(
    <div>

      {/* Content for screens with a width less than 668px */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between">
          <button onClick={handleOpenMenu} className="mx-8 px-5 py-3 bg-orange-500 rounded">≡</button>
          <Image src="/sayap-logo-header.png" alt="header-logo" width={100} height={100} className="w-[200px] h-[auto] mr-4"/>
        </div>
        {isMenuOpened &&
                <div className="flex flex-col">
                <Link href="/" className="bg-orange-500 hover:bg-orange-600 px-8 py-2 drop-shadow">Home</Link>
                <Link href="/carlisting" className="bg-orange-500 hover:bg-orange-600 px-8 py-2 drop-shadow">Car Listing</Link>
                <Link href="/gallery" className="bg-orange-500 hover:bg-orange-600 px-8 py-2 drop-shadow">Gallery</Link>
                <Link href="/salesteam" className="bg-orange-500 hover:bg-orange-600 px-8 py-2 drop-shadow">Sales Team</Link>
                <Link href="/aboutus" className="bg-orange-500 hover:bg-orange-600 px-8 py-2 drop-shadow">About Us</Link>
              </div>
        }
      </div>

      {/* Content for screens with a width of 668px or more */}
      <div className="hidden lg:block">
        <div className="sticky top-0 flex justify-between bg-black text-white z-10 shadow-lg shadow-zinc-800">
          <div className="flex flex-grow justify-between gap-8 mx-20 py-8">
            <div className="flex gap-8 items-center">
              <Link href="/" className="bg-orange-500 rounded px-4 py-2">Home</Link>
              <Link href="/carlisting" className="bg-orange-500 rounded px-4 py-2">Car Listing</Link>
              <Link href="/gallery" className="bg-orange-500 rounded px-4 py-2">Gallery</Link>
              <Link href="/salesteam" className="bg-orange-500 rounded px-4 py-2">Sales Team</Link>
              <Link href="/aboutus" className="bg-orange-500 rounded px-4 py-2">About Us</Link>
            </div>
            <div className="flex gap-8 items-center">
              <a href="https://www.facebook.com/sayapcars/"><GrFacebook className="w-6 h-6"/></a>
              <a href="https://www.instagram.com/sayapniagacars"><GrInstagram className="w-6 h-6"/></a>
              <a href="https://www.youtube.com/channel/UCZEzgzAbjUlzwIC1P-eycYQ"><GrYoutube className="w-6 h-6"/></a>
            </div>
          </div>
          <div className="pr-20 flex items-center">
            <Image src="/sayap-logo-header.png" alt="header-logo" width={100} height={100} className="w-[200px] h-[auto]"/>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Header;
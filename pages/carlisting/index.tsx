// directory: src/pages/carlisting/index.tsx (Car Listing Page)

import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";

const CarListingPage = () => {
  return (
    <div className="bg-white min-h-[100vh] text-black">
      <Header />
      <p>---</p>
      <p>this is the</p>
      <p>Car Listing</p>
      <p>Page</p>
      <p>---</p>
      <Link href="/">Return To Home</Link>
    </div>
  );
};

export default CarListingPage;
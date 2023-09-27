// directory: src/pages/aboutus/index.tsx (About Us Page)

import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div className="bg-white min-h-[100vh] text-black">
      <Header />
      <p>---</p>
      <p>this is the</p>
      <p>About Us</p>
      <p>Page</p>
      <p>---</p>
      <Link href="/">Return To Home</Link>
    </div>
  );
};

export default AboutUsPage;
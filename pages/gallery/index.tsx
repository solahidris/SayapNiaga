// directory: src/pages/gallery/index.tsx (Gallery Page)

import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";

const GalleryPage = () => {
  return (
    <div className="bg-white min-h-[100vh] text-black">
      <Header />
      <p>---</p>
      <p>this is the</p>
      <p>Gallery</p>
      <p>Page</p>
      <p>---</p>
      <Link href="/">Return To Home</Link>
    </div>
  );
};

export default GalleryPage;
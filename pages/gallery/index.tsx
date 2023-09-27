// directory: src/pages/gallery/index.tsx (Gallery Page)

import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import ThankYouGallery from "@/components/ThankYouGallery";

const GalleryPage = () => {

  return (
    <div className="bg-black min-h-[100vh] text-black">
      <Header />
      <div className="p-8">
        <span className="font-semibold text-3xl bg-orange-500 text-white px-6 py-2 rounded">Gallery</span>
        <ThankYouGallery />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
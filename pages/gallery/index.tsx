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
      <div className="p-8 mt-6">
        <span className="font-semibold text-xl border border-orange-500 text-white px-6 py-3 rounded">Gallery</span>
        <ThankYouGallery />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
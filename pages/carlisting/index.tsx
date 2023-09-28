// directory: src/pages/carlisting/index.tsx (Car Listing Page)

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CarListingPage = () => {
  return (
    <div className="bg-black min-h-[100vh] text-black">
      <Header />
      <div className="p-6 mt-6 lg:ml-12">
        <span className="font-semibold text-sm lg:text-xl border border-orange-500 text-white px-6 py-3 rounded">Car Listing</span>
        <div className="flex flex-col pt-10 gap-4">
          <span className="font-semibold text-sm lg:text-xl border border-orange-500 text-white px-6 py-3 rounded">Under Construction</span>
          <span className="font-semibold text-sm lg:text-xl border border-orange-500 text-white px-6 py-3 rounded">Please Visit our Showroom</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarListingPage;
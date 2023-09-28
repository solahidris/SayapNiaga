// directory: src/pages/salesteam/index.tsx (Sales Team Page)

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SalesAdvisor from "@/components/SalesAdvisor";

const SalesTeamPage = () => {
  return (
    <div className="bg-black min-h-[100vh] text-black">
    <Header />
   <div className="p-6 mt-6 lg:ml-12">
      <span className="font-semibold text-sm lg:text-xl border border-orange-500 text-white px-6 py-3 rounded">Sales Team</span>
      <SalesAdvisor />
      </div>
    <Footer />
     </div>
  );
};

export default SalesTeamPage;
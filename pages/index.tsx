// directory: src/pages/index.tsx (Home)

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomepageCarousel from "@/components/HomepageCarousel";
import SearchFilterGeneral from "@/components/SearchFilterGeneral";
import SearchFilterBody from "@/components/SearchFilterBody";
import ThankYouGallery from "@/components/ThankYouGallery";

export default function Home() {
  return (
    <div className="bg-black min-h-[100vh] text-black">
      <Header />
      <HomepageCarousel />

      <div className="p-8">
        <SearchFilterGeneral />     
        <br/>

        <SearchFilterBody />
        
        <div className="lg:px-12">
          <ThankYouGallery />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

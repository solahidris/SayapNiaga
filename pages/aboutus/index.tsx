// directory: src/pages/aboutus/index.tsx (About Us Page)

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div className="bg-black min-h-[100vh] text-black">
      <Header />

      <div className="p-8 mt-6 lg:ml-12">
        <span className="font-semibold text-sm lg:text-xl border border-orange-500 text-white px-6 py-3 rounded">About Us</span>
        <div className="text-xs lg:text-xl leading-5 lg:leading-10 text-white pt-8 pb-16">
          <p>Sayap Niaga Sdn Bhd is a Japanese and Continental Cars Importer and have been operating since 2011 with commitment to qualities.</p>
          <p>We are one of the many best Cars Importers and Distributors in Kuala Lumpur to serve car lovers.</p>
          <p>Strategically located in Setapak, opposite Plaza Tol Ayer Panas, easily accessible with DUKE Highway and Jalan Genting Klang.</p>
          <p>We offer the most popular Family MPV's car such as Alphard, Vellfire, Wish, Estima, Voxy and Odyssey.</p>
          <p>As we value our customer passion towards cars, hence we also offer varieties such as Hatch, Fastback, Sports Sedan and Continental Cars.</p>
          <p>As Customer Satisfaction is always our mission, we offer the best price based on Grade, Mileage and Condition, and with warranty up to 7 years.</p>
          <p>We want to be one of the standout Cars Importers and Distributors. We will continue to grow our business with the mission that suits the lifestyle</p>
          <p>of our precious customers with the most luxurious and economical supercars. We are here for the customers 7 days a week.</p>
        </div>
        <span className="font-semibold text-sm lg:text-xl border border-orange-500 text-white px-6 py-3 rounded">Showroom Location</span>
        <div className="text-xs lg:text-xl leading-5 lg:leading-10 text-white pt-8 pb-16">
          <p>Lot 17303 Jalan Ayer Jernih 1</p>
          <p>Taman Ayer Panas</p>
          <p>53200 Setapak</p>
          <p>Kuala Lumpur</p>
          <p>Email: mysniaga@gmail.com</p>
          <p>Sales: sayapniagasales@gmail.com</p>
        </div>
        <span className="font-semibold text-sm lg:text-xl border border-orange-500 text-white px-6 py-3 rounded">Business Hours</span>
        <div className="text-xs lg:text-xl leading-5 lg:leading-10 text-white pt-8 pb-16">
          <p>Monday - Friday: 9.30am - 6.00pm</p>
          <p>Saturday - Sunday: 10.30am - 5.00pm</p>
        </div>
        <span className="font-semibold text-sm lg:text-xl border border-orange-500 text-white px-6 py-3 rounded">Map Location</span>
        <div className="text-white py-8"></div>
      {/* Content for screens with a width less than 668px */}
      <div className="lg:hidden">
        <div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.655222146703!2d101.71229191492827!3d3.185052053818671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc376c4d5e0817%3A0x551c174a1d5529aa!2sSayap%20Niaga%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1624682862891!5m2!1sen!2smy"
            width={300}
            height={300}
            className="border-0 rounded-xl"
            loading="lazy">
          </iframe>
        </div>
      </div>
      {/* Content for screens with a width of 668px or more */}
      <div className="hidden lg:block">
      <div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.655222146703!2d101.71229191492827!3d3.185052053818671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc376c4d5e0817%3A0x551c174a1d5529aa!2sSayap%20Niaga%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1624682862891!5m2!1sen!2smy"
            width={1000}
            height={600}
            className="border-0 rounded-xl"
            loading="lazy">
          </iframe>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
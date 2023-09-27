// directory: src/pages/salesteam/index.tsx (Sales Team Page)

import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";

const SalesTeamPage = () => {
  return (
    <div className="bg-white min-h-[100vh] text-black">
      <Header />
      <p>---</p>
      <p>this is the</p>
      <p>Sales Team</p>
      <p>Page</p>
      <p>---</p>
      <Link href="/">Return To Home</Link>
    </div>
  );
};

export default SalesTeamPage;
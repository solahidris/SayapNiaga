// directory: src/pages/index.tsx (Home)

import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-[100vh] text-black">
      <Header />
      <p>---</p>
      <p>this is the</p>
      <p>Home</p>
      <p>Page</p>
      <p>---</p>
    </div>
  );
}

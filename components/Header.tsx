import Image from "next/image";
import {FaShoppingCart} from "react-icons/fa"

import Navbar from "./Navbar";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="h-[15vh] px-12 flex justify-between items-center bg-red-600 text-white sticky top-0">
      <div className="flex-1 flex items-center">
        <a href="tel:18005555555" className="bg-white border border-red-500 rounded-[50%] w-[50px] h-[50px] flex justify-center items-center mr-3">
          <Image src="/images/telephone.png" alt="" width={32} height={32} />
        </a>
        <div className="flex flex-col items-center">
          <p className="uppercase text-3xl text-center">order now!</p>
          <p className="text-xl text-center font-bold">(800) 555-5555</p>
        </div>
      </div>
      <div className="flex-[3]">
        <Navbar />
      </div>
      <div className="flex-1 flex justify-end">
        <button className="text-3xl relative hover:scale-110">
          <FaShoppingCart />
          <span className="absolute top-[-10px] right-[-10px] text-base font-bold bg-white border border-red-600 rounded-full text-red-600 w-6 h-6 flex items-center justify-center">2</span>
        </button>
      </div>
    </header>
  );
}

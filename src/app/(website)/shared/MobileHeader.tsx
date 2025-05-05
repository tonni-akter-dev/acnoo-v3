import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductsMegamenu from "./ProductsMegamenu";
import user from "/public/icon/user.png";
import next from "/public/icon/next.png";
import AddonsMegamenu from "./AddonsMegamenu";
import WhyAcnoomenu from "./WhyAcnoomenu";

const MobileHeader = () => {
  return (
    <div className="flex flex-col gap-5">
      <ul className=" gap-7 bg-white absolute items-center justify-center lg:px-0 px-4 w-full lg:pb-0 pb-10">
        <li className="py-6 lg:py-11 lg:border-none border-b border-b-[#E5E7EB]  ">
          <Link
            href="#"
            className="hover:border-b-[2.5px] border-[#673DE6] hover:text-[#673DE6] transition-all duration-75 ease-in-out relative block  text-sm lg:text-lg font-bold"
          >
            Home
          </Link>
        </li>

        <li className="hoverable py-6 lg:py-11 flex justify-between items-center lg:border-none border-b border-b-[#E5E7EB]   ">
          <Link
            href="#"
            className="hover:border-b-[2.5px] border-[#673DE6] hover:text-[#673DE6] transition-all duration-75 ease-in-out relative block text-sm lg:text-base font-bold"
          >
            Products    
          </Link>  
          <ProductsMegamenu />
        </li>
        <li className="hoverable py-6 lg:py-11 relative group">
          <Link
            href="#"
            className="hover:border-b-[2.5px] border-[#673DE6] hover:text-[#673DE6] transition-all duration-75 ease-in-out relative block text-sm lg:text-base font-bold"
          >
            Add-ons
          </Link>
          <AddonsMegamenu />
        </li>
        <li className="py-6 lg:py-11 lg:border-none border-b border-b-[#E5E7EB]   ">
          <Link
            href="#"
            className="hover:border-b-[2.5px] border-[#673DE6] hover:text-[#673DE6] transition-all duration-75 ease-in-out relative block  text-sm lg:text-lg font-bold"
          >
            Services
          </Link>
        </li>
         <li className="hoverable py-6 lg:py-11 relative group">
          <Link
            href="#"
            className="hover:border-b-[2.5px] border-[#673DE6] hover:text-[#673DE6] transition-all duration-75 ease-in-out relative block text-sm lg:text-base font-bold"
          >
          Why Acnoo
          </Link>
          <WhyAcnoomenu />
        </li>
        <li className="py-6 lg:py-11 lg:border-none border-b border-b-[#E5E7EB]   ">
          <Link
            href="#"
            className="hover:border-b-[2.5px] border-[#673DE6] hover:text-[#673DE6] transition-all duration-75 ease-in-out relative block  text-sm lg:text-lg font-bold"
          >
            Hire us
          </Link>
        </li>

        <div className="gap-5 mt-6 flex flex-col items-center justify-center">
          <div className="lg:flex hidden gap-2.5 items-center">
            <Image src={user} alt="" />
            <p className="opacity-[0.5] text-base font-bold">Login</p>
          </div>
          <div className="lg:w-fit w-full flex justify-center">
            <button className="w-full flex gap-2 justify-center items-center bg-[#E2DBFC] rounded-[10px]  px-[33px]  py-4 text-[#311E7A] text-base font-bold">
              Free resource
              <Image src={next} alt="" />
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default MobileHeader;

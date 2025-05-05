"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "/public/logo.png";
import user from "/public/icon/user.png";
import next from "/public/icon/next.png";
import Image from "next/image";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import play from "/public/admindashboard/play.png";
import cart from "/public/home/cart.png";
import ProductsMegamenu from "./ProductsMegamenu";
import AddonsMegamenu from "./AddonsMegamenu";
import MobileHeader from "./MobileHeader";
import WhyAcnoomenu from "./WhyAcnoomenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative z-50 ">
      <nav className="lg:px-[150px] relative bg-white ">
        <div className="container mx-auto flex items-center justify-between lg:py-0 py-5 lg:px-0 px-6">
          <div className="lg:hidden mt-2">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>
          <div className=" block  text-xl  font-bold">
            <Link href="#" className="hover:text-teal-900">
              <Image src={logo} alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden gap-3 ">
            <div className="relative">
              <Image src={cart} alt="" />
              <p className="bg-[#F52366] rounded-full absolute top-[-2px] right-[-7px] flex justify-center items-center text-white text-[10px] font-bold size-[16px]">
                10
              </p>
            </div>
            <Image src={user} alt="" />
          </div>

          {/*  */}
          <ul className=" gap-7 items-center lg:flex hidden ">
            <li className="py-6 lg:py-11  ">
              <Link
                href="#"
                className="hover:border-b-[2.5px] border-[#673DE6] hover:text-[#673DE6] transition-all duration-75 ease-in-out relative block  text-sm lg:text-lg font-bold"
              >
                Home
              </Link>
            </li>

            <li className="hoverable py-6 lg:py-11 ">
              <Link
                href="produtcs"
                className=" hover:border-b-[2.5px] border-[#673DE6] hover:text-[#673DE6] transition-all duration-75 ease-in-out relative block text-sm lg:text-base font-bold"
              >
                Products
              </Link>
              {/* /products mega menu */}
              <ProductsMegamenu />
            </li>
            <li className="group hoverable py-6 lg:py-11 relative group">
              <Link
                href="#"
                className="hover:border-b-[2.5px] border-[#673DE6] hover:text-[#673DE6] transition-all duration-75 ease-in-out relative block text-sm lg:text-base font-bold"
              >
                Add-ons
              </Link>
              <AddonsMegamenu />
            </li>
            <li className="py-6 lg:py-11  ">
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
            <li className="py-6 lg:py-11  ">
              <Link
                href="#"
                className="hover:border-b-[2.5px] border-[#673DE6] hover:text-[#673DE6] transition-all duration-75 ease-in-out relative block  text-sm lg:text-lg font-bold"
              >
                Hire us
              </Link>
            </li>
          </ul>

          {/* login */}
          {pathname === "/adminDashboard" ? (
            <div className="lg:flex hidden gap-5 items-center">
              <div className="flex gap-2.5 items-center">
                <Image src={play} alt="" />
                <p className="opacity-[0.7] text-base font-bold">
                  Play Tutorial
                </p>
              </div>
              <div>
                <button className="flex gap-2 items-center bg-[#C521271A] rounded-[10px]  px-[33px]  py-4 text-[#CB0D26] text-base font-bold">
                  Buy now $29
                </button>
              </div>
            </div>
          ) : (
            <div className="lg:flex hidden gap-5 items-center">
              <div className="flex gap-2.5 items-center">
                <Image src={user} alt="" />
                <p className="opacity-[0.5] text-base font-bold">Login</p>
              </div>
              <div>
                <button className="flex gap-2 items-center bg-[#E2DBFC] rounded-[10px]  px-[33px]  py-4 text-[#311E7A] text-base font-bold">
                  Free resource
                  <Image src={next} alt="" />
                </button>
              </div>
            </div>
          )}

          {/* mobile menus */}
        </div>
        {menuOpen && <MobileHeader />}
      </nav>
    </div>
  );
};

export default Header;

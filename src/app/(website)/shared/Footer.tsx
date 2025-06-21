'use client'
import Image from "next/image";
import React from "react";
import logo from "/public/logo.png";
import whatsapp from "/public/home/whatsapp.png";
import chat from "/public/home/chat.png";
import men from "/public/home/footerman.png";
import {
  FaBehance,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaAnglesUp, FaXTwitter } from "react-icons/fa6";

import { IoLogoDribbble } from "react-icons/io";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="relative bg-[#F3F0FD]  py-8 px-4 md:px-8 containers footer_bg">
      <div>
        <div className="lg:pt-[90px] mb-[77px] flex flex-col md:flex-row md_flex">
          {/* Left Section */}
          <div className="mb-7 md:mb-0 company w-full md:me-12 lg:me-[108px] md:w-[328px] lg::w-1/4">
            <Image src={logo} alt="" />
            <p className="text-base pt-4 text-[#0D1224] mb-4">
              A new way to make the payments easy, reliable and 100% secure.
              Claritatem itemconse quat. Exerci tation ullamcorper.
            </p>
            <div className="mt-4 mb-8 relative">
              <input
                type="email"
                placeholder="Subscribed Newsletter"
                className="rounded-[100px] w-full py-[5px] px-7 h-[60px] bg-white"
              />
              <button className="bg-[#2F1C6A] text-white  absolute right-2 top-[5px]  size-[50px] flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M17.3404 10.1985L8.01621 19.5227L6.48438 17.9909L15.8075 8.66667H7.59046V6.5H19.5071V18.4167H17.3404V10.1985Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="flex  gap-3 items-center">
                <Image src={whatsapp} alt="" />
                <p className="text-base font-medium">+88017XXXXXXXX</p>
              </div>
              <div className="flex gap-3  items-center">
                <Image src={chat} alt="" />
                <p className="text-base font-medium">hello@acnoo.com</p>
              </div>
            </div>
          </div>

          {/* Middle Sections */}
          <div className="flex justify-between w-full md_w  md:w-1/2">
            {/* Company Section */}
            <div className="company md:me-[50px] lg:me-[107px] w-[138px]">
              <h3 className="font-bold text-[22px] mb-6 text-[#0D1224]">
                Company
              </h3>
              <ul className=" space-y-3 lg:space-y-6">
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Refund
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Quick Link Section */}
            <div className="company me-[49px] w-[130px]">
              <h3 className="font-bold text-[22px] mb-6 text-[#0D1224]  whitespace-nowrap">
                Quick Link
              </h3>
              <ul className=" space-y-3 lg:space-y-6">
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Why Acnoo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Hire Us
                  </a>
                </li>
                <li>
                  <a
                    href="/case-study"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Case Study
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    WeCare
                  </a>
                </li>
              </ul>
            </div>
            {/* Add-ons Section */}
            <div className="company lg:block  thousand_screen hidden me-[58px]">
              <h3 className="font-bold text-[22px] mb-6 text-[#0D1224]">
                Add-ons
              </h3>
              <ul className=" space-y-3 lg:space-y-6">
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    POS Pro - Advanced POS Add-on
                  </a>
                </li>
                {/* ... other add-ons */}
              </ul>
            </div>
            {/* Products Section */}
            <div className="company lg:block thousand_screen  hidden">
              <h3 className="font-bold text-[22px] mb-6 text-[#0D1224]">
                Products
              </h3>
              <ul className=" space-y-3 lg:space-y-6">
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    POS Pro - Advanced POS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    POS SAAS - Flutter POS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    SMSPro - Bulk SMS Gateway
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Acnoo Flutter Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Grocery Selling App
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    SaaS Pharmacy App
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Garments ERP
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Rentpro SaaS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                  >
                    Blog & news PHP Scripts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base font-bold leading-[19px]  text-[#282F39]"
                  >
                    My Bazar Laravel Multivendor Script
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* medium device */}
        <div className="lg:hidden md:flex md:flex-row md_flex flex-col-reverse  md:gap-0 gap-[30px] flex mb-[27px] lg:mb-[84px]">
          {/* Add-ons Section */}
          <div className="me-[20px] w-full md:w-[326px] add_ons">
            <h3 className="font-bold text-[22px] mb-6 text-[#0D1224]">
              Add-ons
            </h3>
            <ul className=" space-y-3 lg:space-y-6">
              <li>
                <a
                  href="#"
                  className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                >
                  POS Pro - Advanced POS Add-on
                </a>
              </li>
              {/* ... other add-ons */}
            </ul>
          </div>
          {/* Products Section */}
          <div className="">
            <h3 className="font-bold text-[22px] mb-6 text-[#0D1224]">
              Products
            </h3>
            <ul className=" space-y-3 lg:space-y-6">
              <li>
                <a
                  href="#"
                  className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                >
                  POS Pro - Advanced POS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                >
                  POS SAAS - Flutter POS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                >
                  SMSPro - Bulk SMS Gateway
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                >
                  Acnoo Flutter Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                >
                  Grocery Selling App
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                >
                  SaaS Pharmacy App
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                >
                  Garments ERP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                >
                  Rentpro SaaS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-bold leading-[19px] whitespace-nowrap sm_wrap text-[#282F39]"
                >
                  Blog & news PHP Scripts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-bold leading-[19px]  text-[#282F39]"
                >
                  My Bazar Laravel Multivendor Script
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center hidden_md md:hidden lg:hidden">
          <button onClick={() => scrollToTop} className="bg-[#2F1C6A] rounded-lg size-11 text-white flex justify-center items-center mb-6">
            <FaAnglesUp />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse gap-6 md_flex md:flex-row justify-between items-center">
          <p className="text-base font-bold leading-[19px] text-[#0D1224]">
            Copyright <span className="text-[#F52366] ">© 2025</span> Acnoo All
            Rights Reserved
          </p>
          <div className="flex space-x-4">
            <div
              className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
              style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
            >
              <FaFacebookF />
            </div>
            <div
              className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
              style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
            >
              <FaYoutube />
            </div>
            <div
              className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
              style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
            >
              <IoLogoDribbble />
            </div>
            <div
              className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
              style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
            >
              <FaBehance />
            </div>
            <div
              className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
              style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
            >
              <FaXTwitter />
            </div>
            <div
              className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
              style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
            >
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <Image
          className="footer_man lg:hidden md:block hidden absolute bottom-[7%] left-0 w-[162px] h-[156px] "
          src={men}
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;

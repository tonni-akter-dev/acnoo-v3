/* eslint-disable react/jsx-key */
"use client";
import bel from "/public/icon/bell.png";
import menu from "/public/icon/menu.png";
import profile from "/public/icon/profile.png";
import cart from "/public/img/cart.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileSideBar from "./MobileSideBar";
import Notification from "./Notification";
import { notifications } from "@/app/utils/data";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="main-header-section">
      <div className="header-wrapper">
        <div className="header-left gap-1 flex fkw-wrap items-center">
          <div
            id="burger-menu-icon"
            className="cursor-pointer lg:block hidden size-6 sidebar-opner"
          >
            <Image src={menu} alt="Menu" />
          </div>
          <button className="lg:hidden block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <Image src={menu} alt="Menu" />
          </button>
          <button
            type="button"
            className=" all-products-btn-1  hidden md:flex items-center gap-2"
          >
            <h4 className="btn-content">All Products</h4>
            <span className="mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15.3542 1.81592C16.1426 1.67211 16.9378 1.91832 17.5095 2.48975L17.6199 2.60791C18.1133 3.16918 18.3191 3.91162 18.1853 4.64697L18.1511 4.8042L15.4197 15.7319C15.0694 17.1314 13.9209 18.0981 12.5125 18.2134L12.2273 18.2251H12.2039C10.7527 18.2146 9.53777 17.317 9.09937 15.9634L9.02222 15.687L8.12476 11.8765L4.31421 10.98C2.9019 10.6474 1.91672 9.50246 1.78979 8.08545L1.77612 7.79834C1.76496 6.2505 2.76786 4.9569 4.26929 4.58154L15.196 1.8501H15.197L15.3542 1.81592ZM15.6687 3.23291L15.5466 3.25635L4.6189 5.98779C3.58269 6.24697 3.21962 7.11585 3.22437 7.7876L3.22925 7.91553C3.27814 8.56482 3.66892 9.33821 4.64429 9.56787L8.49878 10.4741L11.9871 6.98779L12.1003 6.89502C12.3819 6.70894 12.7645 6.73989 13.0125 6.98779L13.1052 7.10107C13.2648 7.34251 13.2648 7.65848 13.1052 7.8999L13.0125 8.01318L9.52612 11.4995L10.4333 15.355L10.4861 15.5425C10.785 16.4405 11.5828 16.7704 12.2126 16.7749L12.3464 16.772C13.0202 16.7334 13.7686 16.3527 14.0125 15.3794L16.7439 4.45264L16.7673 4.32471C16.7971 4.06908 16.7264 3.81593 16.5691 3.61279L16.4832 3.51611C16.2943 3.32728 16.0465 3.22607 15.7898 3.22607C15.7498 3.22608 15.7093 3.2279 15.6687 3.23291Z" fill="#2353F5" stroke="#2353F5" strokeWidth="0.2" />
            </svg></span>
          </button>
        </div>
        <div className="header-middle"></div>
        <div className="header-right flex items-center gap-6">
          <div className="notifications dropdown">
            <button
              type="button"
              className="hire_us_btn d-flex items-center justify-between gap-2"
            >
              Hire Us
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M15.9258 1.81592C16.7141 1.67211 17.5094 1.91832 18.0811 2.48975L18.1914 2.60791C18.6848 3.16918 18.8906 3.91162 18.7568 4.64697L18.7227 4.8042L15.9912 15.7319C15.6409 17.1314 14.4924 18.0981 13.084 18.2134L12.7988 18.2251H12.7754C11.3242 18.2146 10.1093 17.317 9.6709 15.9634L9.59375 15.687L8.69629 11.8765L4.88574 10.98C3.47343 10.6474 2.48826 9.50246 2.36133 8.08545L2.34766 7.79834C2.33649 6.2505 3.33939 4.9569 4.84082 4.58154L15.7676 1.8501H15.7686L15.9258 1.81592ZM16.2402 3.23291L16.1182 3.25635L5.19043 5.98779C4.15422 6.24697 3.79115 7.11585 3.7959 7.7876L3.80078 7.91553C3.84968 8.56482 4.24045 9.33821 5.21582 9.56787L9.07031 10.4741L12.5586 6.98779L12.6719 6.89502C12.9534 6.70894 13.3361 6.73989 13.584 6.98779L13.6768 7.10107C13.8363 7.34251 13.8364 7.65848 13.6768 7.8999L13.584 8.01318L10.0977 11.4995L11.0049 15.355L11.0576 15.5425C11.3566 16.4405 12.1543 16.7704 12.7842 16.7749L12.918 16.772C13.5917 16.7334 14.3401 16.3527 14.584 15.3794L17.3154 4.45264L17.3389 4.32471C17.3687 4.06908 17.2979 3.81593 17.1406 3.61279L17.0547 3.51611C16.8658 3.32728 16.618 3.22607 16.3613 3.22607C16.3213 3.22608 16.2808 3.2279 16.2402 3.23291Z" fill="#000D2B" stroke="#000D2B" strokeWidth="0.2" />
              </svg>
            </button>
          </div>
          <div className="notifications dropdown relative">
            <Link
              href="#"
              className="dropdown-toggleer mt-1 relative"
              data-bs-toggle="dropdown"
            >
              <i>
                <Image src={cart} alt="" />
              </i>
              <span className="bg-red absolute top-0 right-0 rounded-full px-1 text-white text-xs">
                0
              </span>
            </Link>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="notifications dropdown relative"
          >
            <Link
              href="#"
              className="dropdown-toggleer mt-1 relative"
              data-bs-toggle="dropdown"
            >
              <i>
                <Image src={bel} alt="" />
              </i>
              <span className="bg-red absolute top-0 right-0 rounded-full px-1 text-white text-xs">
                0
              </span>
            </Link>
          </div>

          {isOpen && (
            <div className="absolute top-[57px] right-[8%] p-6 mt-2 w-[425px] bg-white rounded-[16px] overflow-hidden z-50">
              <div className="notification border-b border-b-[#2E2E3E33] flex justify-between items-center pb-[20px] border-[#2E2E3E]  ">
                <h3 className="text-lg font-semibold ">Notifications</h3>
                <div className="">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="4"
                      viewBox="0 0 22 4"
                      fill="none"
                    >
                      <circle cx="20" cy="2" r="2" fill="#97979F" />
                      <circle cx="11" cy="2" r="2" fill="#97979F" />
                      <circle cx="2" cy="2" r="2" fill="#97979F" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="overflow-y-auto max-h-96">
                {notifications.map((notification) => (
                  <Notification notification={notification} />
                ))}
              </div>
            </div>
          )}

          <div className="notifications dropdown relative">
            <Link href="#">
              <Image src={profile} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <MobileSideBar />
    </header>
  );
};

export default Topbar;

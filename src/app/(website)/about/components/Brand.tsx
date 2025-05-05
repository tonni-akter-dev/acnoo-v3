import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const Brand = () => {
  return (
    <div className="lg:mt-0 mt-7 md:mb-8 lg:mb-[104px] mb-6">
      <Marquee speed={60}>
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="mr-[50px] lg:mr-[100px] min-w-fit">
            <p className="text-[#121725] text-base font-semibold mb-2">
              FOR DISPLAY 2022 <span className="text-[#2353F5]">/ 2012</span>
            </p>
            <h1 className="capitalize flex gap-10 lg:gap-[121px] items-end text-3xl lg:text-[60px] font-bold leading-8 lg:leading-[67px]">
              {item === 3 ? "site of the day" : "Brand of the year."}
             <Link href="#">  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                className="lg:size-11 size-4"
              >
                <path
                  d="M4 40L38.6875 5.3125M4 3H41V40"
                  stroke="#2353F5"
                  strokeWidth="4.5"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg></Link>
            </h1>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Brand;

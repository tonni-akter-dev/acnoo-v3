import React from "react";
import arrow from "/public/about/arrow1.png";
import work1 from "/public/about/work1.png";
import work2 from "/public/about/work2.png";
import work3 from "/public/about/work3.png";
import work4 from "/public/about/work4.png";
import Image from "next/image";

const Work = () => {
  return (
    <div className="lg:mb-[250px]">
      <div className="lg:px-[100px] lg_screen_px px-5 mt-6 lg:mt-[100px] ">
        <div className="flex lg:flex-row flex-col items-start lg:items-center">
          <div className="flex items-center lg:mr-[95px]">
            <h1 className="me-[100px] uppercase work_heading text-[35px] md:text-[60px] lg:text-[191px] font-medium text-primary
             work_title">
              Work
            </h1>
            <Image className="me-[95px]" src={arrow} alt="" />
          </div>
          <p className="text-primary desc_text  text-lg lg:text-[40px] font-medium ld:mb-0 mb-4">
            We <span className="font-bold">provide</span> brilliant idea to grow
            the{" "}
            <span className="font-bold">
              startup <br className="hidden md:block about_blockbr lg:hidden" /> — agency
            </span>{" "}
            with your sharp brand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 work_bg lg:gap-x-[108px] md:gap-x-[18px]">
          <div className="lg:mt-0  md:mt-0 mt-5">
            <Image src={work1} alt="" />
            <p className=" text-lg lg:text-2xl font-bold text-black mt-7 mb-4">
              Acnoo Admin - Flutter Admin Panel & Dashboard
              <br className="lg:block hidden" />
              Template | PWA Ready
            </p>
            <ul className="flex gap-5 wrap_button">
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                Banding
              </li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                UI/UX
              </li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                UI/UX
              </li>
            </ul>
          </div>
          <div className=" mt-5 md:mt-10 work_m lg:mt-[100px]">
            <Image src={work2} alt="" />
            <p className=" text-lg lg:text-2xl font-bold text-black mt-7 mb-4">
              Business card design{" "}
            </p>
            <ul className="flex gap-5 wrap_button">
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                Banding
              </li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                UI/UX
              </li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                UI/UX
              </li>
            </ul>
          </div>
          <div className="lg:mt-0 md:mt-0  mt-5">
            <Image src={work3} alt="" />
            <p className=" text-lg lg:text-2xl font-bold text-black mt-7 mb-4">
              PosPro Saas Project
            </p>
            <ul className="flex gap-5 wrap_button">
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                Banding
              </li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                UI/UX
              </li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                UI/UX
              </li>
            </ul>
          </div>
          <div className=" mt-5 md:mt-10 work_m lg:mt-[100px]">
            <Image src={work4} alt="" />
            <p className=" text-lg lg:text-2xl font-bold text-black mt-7 mb-4">
              Business card design
            </p>
            <ul className="flex gap-5 wrap_button">
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                Banding
              </li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                UI/UX
              </li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">
                UI/UX
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

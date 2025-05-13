import React from "react";
import globe from "/public/home/globe.png";
import Image from "next/image";
const IncreaseRevenue = () => {
  return (
    <div className="increase_revenue lg_screen_px pt-6 pb-[34px] lg:pt-[93px] lg:pb-[118px] text-center lg:px-[150px] px-5">
      <div className="text-black text-lg font-medium mb-4">
        <span className="bg-[#F52366] text-base font-bold text-white px-3 h-[25px] py-1 rounded-full w-fit me-[11px]">
          New
        </span>
        Something new coming soon!
      </div>
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-center mb-7 lg:mb-[60px] w-full lg:text-[65px]  text-[26px] lg:leading-[65px] leading-[32px] font-bold text-primary md:whitespace-nowrap">
          We Makes <span className="gradient_text1">Globally</span> Growth <br className="md:block hidden" />
          & Increase Revenue
        </h2>
        {/* <Image
          className="lg:size-[454px]  md:size-[267px] size-[223px] mb-12"
          src={globe}
          alt=""
        /> */}
        <div
          style={{
            perspective: '1000px',
            display: 'inline-block',
          }}
        >
          <Image
            src={globe}
            alt="Rotating Globe"
            className="lg:size-[454px] md:size-[267px] size-[223px] mb-12"
            style={{
              animation: 'rotateY 10s linear infinite',
              transformStyle: 'preserve-3d',
            }}
          />
        </div>
        <div className="increase_wrapper hidden lg:flex justify-center gap-[70px] items-center">
          <div className="flex gap-8 items-center  increase_card  pe-[70px] lg:border-r border-[#64607C40]">
            <div
              className="w-[100px] h-[100px] rounded-full ps-[25px] pt-[25px] rounded_card"
              style={{
                background:
                  "linear-gradient(145deg, rgba(221, 134, 212, 0.50) 15.55%, rgba(255, 255, 255, 0.09) 86.81%)",
              }}
            >
              <p className="text-primary text-[50px] font-medium"> 07+</p>
            </div>
            <p className="text-[#141125] text-base font-semibold text-start">
              Years <br />
              Of Experience
            </p>
          </div>
          <div className="flex gap-8 items-center  increase_card pe-[70px] lg:border-r border-[#64607C40]">
            <div
              className="w-[100px] h-[100px] rounded-full ps-[25px] pt-[25px] rounded_card"
              style={{
                background:
                  "linear-gradient(145deg, rgba(221, 134, 212, 0.50) 15.55%, rgba(255, 255, 255, 0.09) 86.81%)",
              }}
            >
              <p className="text-primary text-[50px] font-medium"> 20+</p>
            </div>
            <p className="text-[#141125] text-base font-semibold text-start">
              Team <br />
              Members
            </p>
          </div>
          <div className="flex gap-8 items-center  increase_card pe-[70px] lg:border-r border-[#64607C40]">
            <div
              className="w-[100px] h-[100px] rounded-full ps-[25px] pt-[25px] rounded_card"
              style={{
                background:
                  "linear-gradient(145deg, rgba(221, 134, 212, 0.50) 15.55%, rgba(255, 255, 255, 0.09) 86.81%)",
              }}
            >
              <p className="text-primary text-[50px] font-medium"> 2k+</p>
            </div>
            <p className="text-[#141125] text-base font-semibold text-start">
              Happy <br />
              Clients
            </p>
          </div>
          <div className="flex gap-8 items-center increase_card">
            <div
              className="w-[100px] h-[100px] rounded-full ps-[25px] pt-[25px] rounded_card"
              style={{
                background:
                  "linear-gradient(145deg, rgba(221, 134, 212, 0.50) 15.55%, rgba(255, 255, 255, 0.09) 86.81%)",
              }}
            >
              <p className="text-primary text-[50px] font-medium"> 40+</p>
            </div>
            <p className="text-[#141125] text-base font-semibold text-start">
              Country using our application
            </p>
          </div>
        </div>

        {/* mobile */}
        <div className="lg:hidden xs_screen grid grid-cols-2 justify-center gap-5 md:gap-[70px] items-center">
          <div className="flex md:gap-8 gap-4 items-center pe-[70px] lg:border-r border-[#64607C40]">
            <div
              className="md:size-[100px] size-[64px] rounded-full ps-[19px] md:ps-[25px]  pt-2 md:pt-[25px]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(221, 134, 212, 0.50) 15.55%, rgba(255, 255, 255, 0.09) 86.81%)",
              }}
            >
              <p className="text-primary text-[30px] md:text-[50px] font-medium">
                {" "}
                07+
              </p>
            </div>
            <p className="text-[#141125] text-sm md:text-base font-semibold text-start">
              Years <br className="md:block hidden" />
              Of Experience
            </p>
          </div>
          <div className="flex md:gap-8 gap-4 items-center pe-[70px] lg:border-r border-[#64607C40]">
            <div
              className="md:size-[100px] size-[64px] rounded-full ps-[19px] md:ps-[25px]  pt-2 md:pt-[25px]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(221, 134, 212, 0.50) 15.55%, rgba(255, 255, 255, 0.09) 86.81%)",
              }}
            >
              <p className="text-primary text-[30px] md:text-[50px] font-medium">
                {" "}
                20+
              </p>
            </div>
            <p className="text-[#141125] text-sm md:text-base font-semibold text-start">
              Team <br className="md:block hidden" />
              Members
            </p>
          </div>
          <div className="flex md:gap-8 gap-4 items-center pe-[70px] lg:border-r border-[#64607C40]">
            <div
              className="md:size-[100px] size-[64px] rounded-full ps-[19px] md:ps-[25px]  pt-2 md:pt-[25px]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(221, 134, 212, 0.50) 15.55%, rgba(255, 255, 255, 0.09) 86.81%)",
              }}
            >
              <p className="text-primary text-[30px] md:text-[50px] font-medium">
                {" "}
                2k+
              </p>
            </div>
            <p className="text-[#141125] text-sm md:text-base font-semibold text-start">
              Happy <br className="md:block hidden" />
              Clients
            </p>
          </div>
          <div className="flex md:gap-8 gap-4 items-center">
            <div
              className="md:size-[100px] size-[64px] rounded-full ps-[19px] md:ps-[25px]  pt-2 md:pt-[25px]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(221, 134, 212, 0.50) 15.55%, rgba(255, 255, 255, 0.09) 86.81%)",
              }}
            >
              <p className="text-primary text-[30px] md:text-[50px] font-medium">
                {" "}
                40+
              </p>
            </div>
            <p className="text-[#141125] text-sm md:text-base font-semibold text-start">
              Country using <br className="md:block hidden" /> our application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncreaseRevenue;

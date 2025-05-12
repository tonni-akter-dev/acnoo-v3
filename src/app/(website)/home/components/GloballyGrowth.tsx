import Image from "next/image";
import React from "react";
import globe from "/public/home/globe1.png";
import cartoon from "/public/home/fun-cartoon-kid-with-rain-gear.png";
import { growthItems } from "@/app/utils/data";

const GloballyGrowth = ({ text, color }: { text?: string; color?: string }) => {
  return (
    <div>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="lg:py-0 py-6 globally_growth text-white md:pt-7 lg:pt-[152px] lg:ps-[150px] lg:pb-10 ps-5 lg:pe-[50px]">
            <div className="flex gap-1 items-center text-white text-lg font-medium mb-4 text-start">
              <span
                className="bg-[#F52366] rounded-[14px] text-base font-bold text-center text-white
                px-3 h-[25px] py-1 w-fit me-[11px] flex justify-center items-center"
              >
                New
              </span>
              {text ? (
                text
              ) : (
                <p>
                  We&apos;ve Raised <span className="text-[#2353F5]">$6</span>million!
                </p>
              )}
            </div>
            <h3 className="lg:text-[65px] md:text-[30px] text-[24px] lg:leading-[72px] leading-[30px] font-bold mb-7 text-white">
              We Makes Globally Growth & Increase Revenue
            </h3>
            <p className="text-lg font-medium text-[#D1D5DB] md:mb-[22px] lg:mb-11">
              Download free & premium PHP Scripts, WordPress Theme, Flutter app, UI, UX design HTML, bootstrap template, & graphic assets for your project.
            </p>
            <button
              style={{ backgroundColor: `${color ? color : "#2353F5"}` }}
              className="lg:flex md:flex hidden gap-1.5 items-center text-white text-base font-bold px-[36px] py-[21px] rounded-[10px] w-fit"
            >
              Browse all Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14.5874 7.25574L10.0899 2.75824C9.96869 2.6412 9.8064 2.57644 9.63794 2.57791C9.46947 2.57937 9.30833 2.64694 9.1892 2.76606C9.07008 2.88519 9.00251 3.04634 9.00104 3.2148C8.99958 3.38326 9.06434 3.54556 9.18138 3.66673L12.5821 7.06749H1.28312C1.11272 7.06749 0.949301 7.13518 0.828809 7.25567C0.708317 7.37616 0.640625 7.53958 0.640625 7.70999C0.640625 7.88039 0.708317 8.04381 0.828809 8.1643C0.949301 8.28479 1.11272 8.35249 1.28312 8.35249H12.5821L9.18138 11.7532C9.12001 11.8125 9.07106 11.8834 9.03739 11.9618C9.00372 12.0402 8.98599 12.1245 8.98525 12.2098C8.98451 12.2951 9.00077 12.3797 9.03307 12.4587C9.06538 12.5376 9.11309 12.6094 9.17341 12.6697C9.23374 12.73 9.30547 12.7777 9.38444 12.81C9.4634 12.8423 9.548 12.8586 9.63331 12.8579C9.71862 12.8571 9.80293 12.8394 9.88132 12.8057C9.95971 12.772 10.0306 12.7231 10.0899 12.6617L14.5874 8.16423C14.7078 8.04375 14.7755 7.88035 14.7755 7.70999C14.7755 7.53962 14.7078 7.37622 14.5874 7.25574Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* Right Section */}
          <div
            className="relative md:ps-4 lg:ps-[137px] py-6 lg:py-[63px] globally_items"
            style={{ background: "linear-gradient(180deg, #F4F1FF 0%, #E7E0FF 100%)" }}
          >
            <Image className="absolute bottom-0 right-0 object-contain lg:block hidden cartoon" src={cartoon} alt="" />
            {growthItems.map((item, index) => (
              <div
                key={index}
                className={` md:max-w-[327px] lg:max-w-[521px] w-full flex ${item.margin} ${item.align} mt-4 lg:mt-7 justify-center`}
              >
                <div
                  className={`flex items-center py-4 gap-2 px-5 ${item.background} rounded-[100px] md:max-w-[306px] lg:max-w-[394px] w-full`}
                  style={{ boxShadow: item.shadow }}
                >
                  <div className="flex items-center justify-center">
                    <Image src={globe} alt="Globe" className="md:w-[64px]  lg:w-[96px] h-12" />
                  </div>
                  <div>
                    <h3 className={`text-sm lg:text-lg font-semibold ${item.textColor}`}>
                      {item.title.split("<br />").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < item.title.split("<br />").length - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GloballyGrowth;
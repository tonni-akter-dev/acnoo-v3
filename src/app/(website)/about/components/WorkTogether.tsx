import React from "react";
import letswork from "/public/about/letsworl.png";
import Image from "next/image";

const WorkTogether = () => {
  return (
    <div className="lg:px-[100px] lg_screen_px ">
      <div className=" mb-6 md:mb-[72px] lg:mb-[190px] mt-6 md:mt-[30px] lg:mt-[117px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[124px] w-full items-center  rounded-lg overflow-hidden">
          {/* Form Section */}
          <div className="lg:px-0 px-5">
            <h1 className="text-[30px] lg:text-[60px] uppercase font-bold mb-4 lg:mb-12 whitespace-nowrap">{`LET'S`} <span className="font-normal"> WORK TOGETHER</span></h1>
            <form>
              <div className="mb-4">
                <label
                  className="block text-[#000D2B] text-base font-bold mb-2"
                  htmlFor="fullName"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter full name"
                  className="bg-[#F8F8FC] border border-[#E5E7EB] h-12 lg:h-[59px] w-full px-[18px] rounded-[5px] lg:rounded-[9px] text-[#6B7280] text-base"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#000D2B] text-base font-bold mb-2"
                  htmlFor="email"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                  className="bg-[#F8F8FC] border border-[#E5E7EB] h-12 lg:h-[59px] w-full px-[18px] rounded-[5px] lg:rounded-[9px] text-[#6B7280] text-base"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-[#000D2B] text-base font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter Subject"
                  className="bg-[#F8F8FC] border border-[#E5E7EB] h-12 lg:h-[59px] w-full px-[18px] rounded-[5px] lg:rounded-[9px] text-[#6B7280] text-base"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-[#000D2B] text-base font-bold mb-2"
                  htmlFor="description"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  placeholder="Enter Description..."
                  className="bg-[#F8F8FC] border border-[#E5E7EB] h-[162px] w-full px-[18px] rounded-[5px] lg:rounded-[9px] text-[#6B7280] text-base resize-none py-5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="lg:px-[55px] px-6 py-[14px] lg:py-[22px] bg-[#2353F5] text-white font-bold rounded-[4px] lg:rounded-full  transition duration-300 "
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="">
            <Image
              src={letswork}
              alt="Person on escalator"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;

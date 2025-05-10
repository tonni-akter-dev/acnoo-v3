import React from "react";

const CompanyInside = () => {
  return (
    <div className="company_bg lg:pt-[142px] relative">
      <h1 className="lg:pt-0 md:pt-11 pt-6 text-[40px] md:text-[55px] lg:text-[90px] font-bold text-primary text-center uppercase leading-10 lg:leading-[99px] lg:mb-[181px]">
        company <br />
        <span className="text-[30px] md:text-[40px] lg:text-[80px] font-medium">
          inside..
        </span>
      </h1>
      {/* mobile section */}
      <div className="lg:px-[277px] lg_screen_px px-8 lg:hidden md:hidden flex mt-[58px]  justify-between">
        <div className="text-center mt-[60px]">
          <p className="text-black text-sm leading-6 font-bold  ">
            Team Members
          </p>
          <h1 className="text-primary text-[36px] font-bold leading-10">22+</h1>
        </div>
        <div className="text-center absolute top-[160px] left-[133px] ">
          <p className="text-black text-sm leading-6 font-bold  ">
          Years of experience
          </p>
          <h1 className="text-primary text-[36px] font-bold leading-10">07+</h1>
        </div>
        <div className="text-center mt-[60px]">
          <p className="text-black text-sm leading-6 font-bold  ">
          Happy Customers
          </p>
          <h1 className="text-primary text-[36px] font-bold leading-10">25k</h1>
        </div>
      </div>
      {/* lg screen */}
      <div className="lg:px-[277px] lg_screen_px px-8 lg:flex md:flex hidden lg:mt-0 mt-[190px] justify-between">
        <div className="text-center">
          <p className="text-black text-lg lg:text-[26px] font-bold  ">
            Team Members
          </p>
          <h1 className="text-primary  text-[50px] lg:leading-[100px] leading-[60px] lg:text-[107px] font-bold mt-4 lg:mt-[22px]">22+</h1>
        </div>
        <div className="text-center">
          <p className="text-black text-lg lg:text-[26px] font-bold  ">
          Years of experience
          </p>
          <h1 className="text-primary  text-[50px] lg:leading-[100px] leading-[60px] lg:text-[107px] font-bold mt-4 lg:mt-[22px]">07+</h1>
        </div>
        <div className="text-center">
          <p className="text-black text-lg lg:text-[26px] font-bold  ">
          Happy Customers
          </p>
          <h1 className="text-primary  text-[50px] lg:leading-[100px] leading-[60px] lg:text-[107px] font-bold mt-4 lg:mt-[22px]">25k</h1>
        </div>
      </div>
    </div>
  );
};

export default CompanyInside;

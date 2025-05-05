"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import acnoo from "/public/home/acnoo.png";

const RotatingIcons = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const icons = [
    { src: "/home/react.png", alt: "React Icon" },
    { src: "/home/java.png", alt: "Java Icon" },
    { src: "/home/bootstrap.png", alt: "Bootstrap Icon" },
  ];

  const secondaryLogos = [
    { src: "/home/js.png", alt: "Logo 1" },
    { src: "/home/js2.png", alt: "Logo 2" },
    { src: "/home/html.png", alt: "Logo 4" },
    { src: "/home/figma.png", alt: "Logo 4" },
    { src: "/home/flutter.png", alt: "Logo 4" },
    { src: "/home/html.png", alt: "Logo 4" },
    { src: "/home/sass.png", alt: "Logo 4" },
    { src: "/home/php.png", alt: "Logo 4" },
  ];

  const iconRadius = 150;
  const secondaryLogoRadius = 220;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="rounded-full bg-white flex items-center justify-center">
        <div className="acno_4 flex justify-center items-center">
          <div className="acno_3 flex justify-center items-center">
            <div className="acno_2 size-[286px] border flex justify-center items-center rounded-full border-[#E6E6E8]">
              <div className="size-[185px] acno_1">
                <Image src={acnoo} alt="Acnoo Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {icons.map((icon, index) => {
        const angle = (360 / icons.length) * index + rotation;
        const x = iconRadius * Math.cos((angle * Math.PI) / 180);
        const y = iconRadius * Math.sin((angle * Math.PI) / 180);
        return (
          <Image
            key={index}
            src={icon.src}
            width={134}
            height={129}
            alt={icon.alt}
            className="absolute rotating-icon"
            style={{
              width: "134px",
              height: "129px",
              left: `calc(48% + ${x}px - 50px)`,
              top: `calc(48% + ${y}px - 50px)`,
              transform: `rotate(${angle}deg)`,
            }}
          />
        );
      })}
      {secondaryLogos.map((logo, index) => {
        const angle = (360 / secondaryLogos.length) * index - rotation;
        const x = secondaryLogoRadius * Math.cos((angle * Math.PI) / 180);
        const y = secondaryLogoRadius * Math.sin((angle * Math.PI) / 180);
        return (
          <Image
            key={index}
            src={logo.src}
            width={100}
            height={100}
            alt={logo.alt}
            className="absolute rotating-icon"
            style={{
              left: `calc(50% + ${x}px - ${100 / 2}px)`,
              top: `calc(50% + ${y}px - ${100 / 2}px)`,
              transform: `rotate(${angle}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};

const MobileRotatingIcons = () => {
    const [rotation, setRotation] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 1);
      }, 50);
  
      return () => clearInterval(interval);
    }, []);
  
    const icons = [
      { src: "/home/react.png", alt: "React Icon" },
      { src: "/home/java.png", alt: "Java Icon" },
      { src: "/home/bootstrap.png", alt: "Bootstrap Icon" },
    ];
  
    const secondaryLogos = [
      { src: "/home/js.png", alt: "Logo 1" },
      { src: "/home/js2.png", alt: "Logo 2" },
      { src: "/home/html.png", alt: "Logo 4" },
      { src: "/home/figma.png", alt: "Logo 4" },
      { src: "/home/flutter.png", alt: "Logo 4" },
      { src: "/home/html.png", alt: "Logo 4" },
      { src: "/home/sass.png", alt: "Logo 4" },
      { src: "/home/php.png", alt: "Logo 4" },
    ];
  
    // Adjusted for mobile screens
    const iconRadius = 80; // Reduced radius for mobile
    const secondaryLogoRadius = 120; // Reduced radius for mobile
  
    return (
      <div className="relative w-full h-full flex items-center justify-center z-10">
        <div className="rounded-full bg-white flex items-center justify-center">
          <div className="acno_4 flex justify-center items-center">
            <div className="acno_3 flex justify-center items-center">
              <div className="acno_2 size-[200px] border flex justify-center items-center rounded-full border-[#E6E6E8]">
                <div className="size-[120px] acno_1">
                  <Image src={acnoo} alt="Acnoo Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {icons.map((icon, index) => {
          const angle = (360 / icons.length) * index + rotation;
          const x = iconRadius * Math.cos((angle * Math.PI) / 180);
          const y = iconRadius * Math.sin((angle * Math.PI) / 180);
          return (
            <Image
              key={index}
              src={icon.src}
              width={80}
              height={80}
              alt={icon.alt}
              className="absolute rotating-icon"
              style={{
                width: "80px",
                height: "80px",
                left: `calc(48% + ${x}px - 40px)`, // Adjusted for smaller icon size
                top: `calc(48% + ${y}px - 40px)`,
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}
        {secondaryLogos.map((logo, index) => {
          const angle = (360 / secondaryLogos.length) * index - rotation;
          const x = secondaryLogoRadius * Math.cos((angle * Math.PI) / 180);
          const y = secondaryLogoRadius * Math.sin((angle * Math.PI) / 180);
          return (
            <Image
              key={index}
              src={logo.src}
              width={60}
              height={60}
              alt={logo.alt}
              className="absolute rotating-icon"
              style={{
                width: "60px",
                height: "60px",
                left: `calc(50% + ${x}px - 30px)`, // Adjusted for smaller icon size
                top: `calc(50% + ${y}px - 30px)`,
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}
      </div>
    );
  };

const Banner = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center w-full  banner_bg min-h-screen lg:px-[150px] lg:gap-0 md:gap-10 gap-6 lg:pt-0 pt-6 px-5 overflow-hidden">
      <div className="lg:w-1/2  flex flex-col justify-center">
        <div className=" text-black  text-lg font-medium mb-4">
          <span className="bg-[#F52366] text-base font-bold text-white px-3 h-[25px] py-1 rounded-full w-fit me-[11px]">
            New
          </span>
          {`We've`} Raised <span className="text-[#2353F5]">$6</span>million!
        </div>
        <h1 className="text-[26px] md:text-[40px] lg:text-[72px] text-primary leading-[34px] !md:leading-[50px]  lg:leading-[73px]  font-bold mb-6">
          Elevating Brand Strategy With Acno 
          <span className="gradient_text"> Products</span>
        </h1>
        <p className="mb-8 text-[#6B7280] text-lg ">
          Download free & premium PHP Scripts, WordPress Theme, flutter app, UI,
          UX design HTML bootstrap template, & graphic assets for your project.
        </p>
        <div className="">
          <div
            className="flex w-[343px] md:w-full lg:w-[486px]  h-12 lg:h-[64px] rounded-[8px] bg-white"
            style={{ boxShadow: " 0px 4px 8px 0px rgba(0, 0, 0, 0.10)" }}
          >
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow px-4 py-3 text-[#0A2C3D8A]  bg-white rounded-[8px] focus:outline-none"
            />
            <button className=" h-10  lg:h-[56px] my-1 me-1 flex items-center  px-2.5 lg:px-5 py-4 text-white bg-[#2F1C6A] rounded-[6px] focus:outline-none">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="lg:block md:block hidden">
        <RotatingIcons />
        </div>
        <div className="lg:hidden md:hidden sm:block">
        <MobileRotatingIcons></MobileRotatingIcons>
        </div>
      </div>
    </div>
  );
};

export default Banner;


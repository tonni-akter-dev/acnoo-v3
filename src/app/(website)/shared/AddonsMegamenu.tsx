// components/AddonsMegamenu.jsx
"use client";
import React from "react";
import next1 from "/public/home/next.png";
import m1 from "/public/home/m13.png";
import m2 from "/public/icon/posicon.png";
import m3 from "/public/icon/posicon.png";
import Image from "next/image";

const products = [
  {
    title: "POS Pro - Advanced POS Add-on",
    description: "Build your dream multi vendor marketplace",
    icon: m1,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "POS SAAS - Flutter POS",
    description: "Build your dream multi vendor marketplace",
    icon: m2,
    category: "Powerful and Simple Analytics",
  },
  {
    title: "SMSPro - Bulk SMS Gateway",
    description: "Build your dream multi vendor marketplace",
    icon: m3,
    category: "Powerful and Simple Analytics",
  },
];

const AddonsMegamenu = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="mb-12 rounded-2xl pt-5 lg:Lpt-[61px] pb-10 px-5 lg:px-10 flex justify-center  mega-menu-addons lg:max-w-[1015px] mx-auto w-full bg-white !md:group-hover:top-[190px]"
        style={{
          boxShadow: "0px 24px 56px 0px rgba(167, 174, 186, 0.16)",
        }}
      >
        <div className="container mx-auto ">
          <ul className="w-full  grid lg:grid-cols-3 grid-cols-1 pb-6 pt-6 lg:pt-3 gap-x-10">
            {products.map((product, i) => (
              <div key={i} className="flex items-start gap-3 mb-[25px]">
                <Image src={product.icon} alt={product.title} />
                <div>
                  <h3 className="font-bold text-[#282F39] text-base mb-2 whitespace-nowrap">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] font-medium">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </ul>
          <button className="lg:flex hidden justify-center py-6  gap-3 items-center text-white text-base font-bold bg-[#2F1C6A] rounded-xl  w-full">
            Browse All Addons
            <Image src={next1} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddonsMegamenu;

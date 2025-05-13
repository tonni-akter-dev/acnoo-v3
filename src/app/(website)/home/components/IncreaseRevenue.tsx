'use client'
import { motion } from 'framer-motion';
import React from "react";
import globe from "/public/home/globe.png";
import Image from "next/image";

const cardVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.3,
    },
  }),
};

const IncreaseRevenue = () => {
  return (
    <div className="increase_revenue lg_screen_px pt-6 pb-[34px] lg:pt-[93px] lg:pb-[118px] text-center lg:px-[150px] px-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="text-black text-lg font-medium mb-4">
          <span className="bg-[#F52366] text-base font-bold text-white px-3 h-[25px] py-1 rounded-full w-fit me-[11px]">
            New
          </span>
          Something new coming soon!
        </div>
        <h2 className="heading_text text-center mb-7 lg:mb-[60px] w-full lg:text-[65px]  text-[26px] lg:leading-[65px] leading-[32px] font-bold text-primary md:whitespace-nowrap">
          We Makes <span className="gradient_text1">Globally</span> Growth <br className="md:block hidden" />
          & Increase Revenue
        </h2>
      </motion.div>
      <div className="text-center flex flex-col justify-center items-center">
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
          {[{ value: "07+", label: "Years<br/>Of Experience" },
          { value: "20+", label: "Team<br/>Members" },
          { value: "2k+", label: "Happy<br/>Clients" },
          { value: "40+", label: "Country using our application" }
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
              className={`flex gap-8 items-center increase_card pe-[70px] ${i !== 3 ? "lg:border-r border-[#64607C40]" : ""}`}
            >
              <div
                className="w-[100px] h-[100px] rounded-full ps-[25px] pt-[25px] rounded_card"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(221, 134, 212, 0.50) 15.55%, rgba(255, 255, 255, 0.09) 86.81%)",
                }}
              >
                <p className="text-primary text-[50px] font-medium">{item.value}</p>
              </div>
              <p
                className="text-[#141125] text-base font-semibold text-start"
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            </motion.div>
          ))}
        </div>
        {/* mobile */}
        <div className="lg:hidden xs_screen grid grid-cols-2 justify-center gap-5 md:gap-[70px] items-center">
          {[{ value: "07+", label: "Years<br/>Of Experience" },
          { value: "20+", label: "Team<br/>Members" },
          { value: "2k+", label: "Happy<br/>Clients" },
          { value: "40+", label: "Country using our application" }
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
              className="flex revenue_tab md:gap-8 gap-4 items-center"
            >
              <div
                className="revenue_tab_card md:size-[100px] size-[64px] rounded-full ps-[19px] md:ps-[25px] pt-2 md:pt-[25px]"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(221, 134, 212, 0.50) 15.55%, rgba(255, 255, 255, 0.09) 86.81%)",
                }}
              >
                <h3 className="text-primary text-[30px] md:text-[50px] font-medium">{item.value}</h3>
              </div>
              <p
                className="text-[#141125] text-sm md:text-base font-semibold text-start"
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default IncreaseRevenue;

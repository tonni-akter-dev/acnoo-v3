'use client'
import Image from "next/image";
import React from "react";
import globe from "/public/home/globe1.png";
import cartoon from "/public/home/fun-cartoon-kid-with-rain-gear.png";
import { growthItems } from "@/app/utils/data";
import { motion } from "framer-motion";


const GloballyGrowth = ({ text, color }: { text?: string; color?: string }) => {

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.3, // Staggered delay
      },
    }),
  };

  return (
    <div>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 globally md:grid-cols-2">
          {/* Left Section */}
          <motion.div
            className="lg:py-0 py-6 globally_growth text-white md:pt-7 lg:pt-[152px] lg:ps-[150px] lg:pb-10 ps-5 lg:pe-[50px]"
            initial="hidden"
            animate="visible"
            variants={{}}
          >
            <motion.div
              custom={0}
              variants={fadeLeft}
              className="flex gap-1 items-center text-white text-lg font-medium mb-4 text-start"
            >
              <span className="bg-[#F52366] rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px] flex justify-center items-center">
                New
              </span>
              {text ? (
                text
              ) : (
                <p>
                  We&apos;ve Raised <span className="text-[#2353F5]">$6</span>million!
                </p>
              )}
            </motion.div>

            <motion.h3
              custom={1}
              variants={fadeLeft}
              className="heading_text lg:text-[65px] md:text-[30px] text-[24px] lg:leading-[72px] leading-[30px] font-bold mb-7 text-white"
            >
              We Makes Globally Growth & Increase Revenue
            </motion.h3>

            <motion.p
              custom={2}
              variants={fadeLeft}
              className="text-lg font-medium text-[#D1D5DB] md:mb-[22px] lg:mb-11"
            >
              Download free & premium PHP Scripts, WordPress Theme, Flutter app, UI, UX design HTML, bootstrap template, & graphic assets for your project.
            </motion.p>

            <motion.button
              custom={3}
              variants={fadeLeft}
              style={{ backgroundColor: `${color ? color : "#2353F5"}` }}
              className="md:flex hidden globally_btn gap-1.5 items-center text-white text-base
               font-bold px-[36px] py-[21px] rounded-[10px] w-fit"
            >
              Browse all Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14.5893 7.25598L10.0918 2.75848C9.97065 2.64145 9.80835 2.57669 9.63989 2.57815C9.47143 2.57961 9.31028 2.64718 9.19116 2.76631C9.07203 2.88543 9.00446 3.04658 9.003 3.21504C9.00153 3.3835 9.06629 3.5458 9.18333 3.66698L12.5841 7.06773H1.28508C1.11468 7.06773 0.951254 7.13542 0.830762 7.25591C0.71027 7.37641 0.642578 7.53983 0.642578 7.71023C0.642578 7.88063 0.71027 8.04405 0.830762 8.16455C0.951254 8.28504 1.11468 8.35273 1.28508 8.35273H12.5841L9.18333 11.7535C9.12196 11.8127 9.07302 11.8836 9.03934 11.962C9.00567 12.0404 8.98795 12.1247 8.98721 12.21C8.98646 12.2954 9.00272 12.38 9.03503 12.4589C9.06733 12.5379 9.11504 12.6096 9.17537 12.6699C9.23569 12.7303 9.30743 12.778 9.38639 12.8103C9.46535 12.8426 9.54995 12.8588 9.63526 12.8581C9.72057 12.8574 9.80488 12.8396 9.88327 12.806C9.96166 12.7723 10.0326 12.7233 10.0918 12.662L14.5893 8.16448C14.7098 8.04399 14.7774 7.8806 14.7774 7.71023C14.7774 7.53986 14.7098 7.37647 14.5893 7.25598Z" fill="white" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative md:ps-4 lg:ps-[137px] py-6 lg:py-[63px] globally_items"
            style={{ background: "linear-gradient(180deg, #F4F1FF 0%, #E7E0FF 100%)" }}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <Image
              className="absolute bottom-0 right-0 object-contain lg:block hidden cartoon"
              src={cartoon}
              alt=""
            />

            {growthItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`md:max-w-[327px] lg:max-w-[521px] globally_items_width w-full flex ${item.margin} ${item.align} mt-4 lg:mt-7 justify-center`}
              >
                <div
                  className={`flex items-center py-4 gap-2 px-5 ${item.background} rounded-[100px] lists md:max-w-[306px] lg:max-w-[394px] w-full`}
                  style={{ boxShadow: item.shadow }}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={globe}
                      alt="Globe"
                      className="md:w-[64px]  lg:w-[96px] h-12"
                    />
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
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default GloballyGrowth;
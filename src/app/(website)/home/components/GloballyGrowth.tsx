'use client'
import Image from "next/image";
import React, { useRef } from "react";
import globe from "/public/home/globe1.png";
import cartoon from "/public/home/fun-cartoon-kid-with-rain-gear.png";
import { growthItems } from "@/app/utils/data";
import { motion, useInView } from "framer-motion";

const GloballyGrowth = ({ text, color }: { text?: string; color?: string }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

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
        delay: i * 0.3,
      },
    }),
  };

  return (
    <div ref={sectionRef}>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 globally md:grid-cols-2">
          {/* Left Section */}
          <motion.div
            className="lg:py-0 py-6 globally_growth text-white md:pt-7 lg:pt-[152px] lg:ps-[150px] lg:pb-10 ps-5 lg:pe-[50px]"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
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
              className="md:flex hidden globally_btn gap-1.5 items-center text-white text-base font-bold px-[36px] py-[21px] rounded-[10px] w-fit"
            >
              Browse all Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="..." fill="white" />
              </svg>
            </motion.button>
          </motion.div>
          {/* Right Section */}
          <motion.div
            className="relative md:ps-4 lg:ps-[137px] py-6 lg:py-[63px] globally_items"
            style={{ background: "linear-gradient(180deg, #F4F1FF 0%, #E7E0FF 100%)" }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
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

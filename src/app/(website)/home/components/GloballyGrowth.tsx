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
              className="heading_text lg:text-[65px] md:text-[30px] text-2xl lg:leading-[72px] leading-[30px] font-bold mb-7 text-white"
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
              style={{ backgroundColor: color || "#2353F5" }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.98 }}
              className="md:flex hidden globally_btn gap-1.5 transition-all duration-300 items-center text-white text-base font-bold px-[36px] py-[21px] rounded-[10px] w-fit group"
            >
              Browse all Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M14.5874 7.25598L10.0899 2.75848C9.96869 2.64145 9.8064 2.57669 9.63794 2.57815C9.46947 2.57961 9.30833 2.64718 9.1892 2.76631C9.07008 2.88543 9.00251 3.04658 9.00104 3.21504C8.99958 3.3835 9.06434 3.5458 9.18138 3.66698L12.5821 7.06773H1.28312C1.11272 7.06773 0.949301 7.13542 0.828809 7.25591C0.708317 7.37641 0.640625 7.53983 0.640625 7.71023C0.640625 7.88063 0.708317 8.04405 0.828809 8.16455C0.949301 8.28504 1.11272 8.35273 1.28312 8.35273H12.5821L9.18138 11.7535C9.12001 11.8127 9.07106 11.8836 9.03739 11.962C9.00372 12.0404 8.98599 12.1247 8.98525 12.21C8.98451 12.2954 9.00077 12.38 9.03307 12.4589C9.06538 12.5379 9.11309 12.6096 9.17341 12.6699C9.23374 12.7303 9.30547 12.778 9.38444 12.8103C9.4634 12.8426 9.548 12.8588 9.63331 12.8581C9.71862 12.8574 9.80293 12.8396 9.88132 12.806C9.95971 12.7723 10.0306 12.7233 10.0899 12.662L14.5874 8.16448C14.7078 8.04399 14.7755 7.8806 14.7755 7.71023C14.7755 7.53986 14.7078 7.37647 14.5874 7.25598Z"
                  fill="currentColor"
                />
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

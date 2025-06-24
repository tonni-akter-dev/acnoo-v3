'use client'
import React from "react";
import { motion } from "framer-motion";
import roadmap from "/public/about/roadmap.png";
import roadmaptab from "/public/about/roadmap-tab.png";
import Image from "next/image";

const timelineData = [
  {
    year: "2019",
    title: "Start Journey",
    desc: "Welcome to our portfolio website! We are printing company that offers a wide range rem ipsum dolor sit amet, consectetur",
    active: true,
  },
  {
    year: "2021",
    title: "Grow Next Level",
    desc: "Welcome to our portfolio website! We are printing company that offers a wide range rem ipsum dolor sit amet, consectetur",
    dot: true,
  },
  {
    year: "2023",
    title: "Highest Profit",
    desc: "Welcome to our portfolio website! We are printing company that offers a wide range rem ipsum dolor sit amet, consectetur",
  },
  {
    year: "2025",
    title: "New Roadmap",
    desc: "Welcome to our portfolio website! We are printing company that offers a wide range rem ipsum dolor sit amet, consectetur",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const Roadmap = () => {
  return (
    <div className="lg:py-[120px] lg_screen_px md:py-[30px] py-6 lg:px-[150px] px-5 ">
      <div className="grid grid-cols-12 justify-center">
        <motion.div
          className="col-span-12 lg:col-span-4"
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex lg:flex-col flex-row justify-between items-center lg:mb-0 md:mb-5 mb-6">
            <div className="">
              <p className="text-[#F52366] text-base font-bold flex gap-2 items-center">
                {/* SVG omitted for brevity */}
                Roadmap about company
              </p>
              <h1 className="text-[30px] md:text-[35px] lg:text-[55px] lg:mb-[63px] text-[#0B071A] font-bold leading-10 md:leading-[45px] lg:leading-[63px] uppercase">
                Our Roadmap <br /> Journey we
              </h1>
            </div>
            <Image className="lg:flex hidden" src={roadmap} alt="" />
            <Image className="lg:hidden md:block hidden tab" src={roadmaptab} alt="" />
          </div>
        </motion.div>

        <div className="col-span-12 lg:col-span-8 flex justify-center">
          <div className="lg:px-4 w-full border-t border-t-[#212324] lg:overflow-hidden md:overflow-hidden overflow-scroll">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="flex justify-between items-start gap-6 border-b border-[#212324] py-[10px] lg:py-9 relative roadmap_list lg:w-full md:w-[720px] w-[586px]"
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="text-right relative">
                  <span
                    className={`text-xl px-4 lg:text-[32px] uppercase font-bold ${item.active ? "px-2 py-0.5 rounded-sm" : ""}`}
                  >
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="w-[172px] text-lg md:text-xl lg:text-[28px] font-bold leading-[32px]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#8D8F96] text-sm lg:text-base w-[320px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

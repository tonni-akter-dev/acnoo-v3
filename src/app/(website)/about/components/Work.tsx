'use client'
import React from "react";
import { motion } from "framer-motion";
import arrow from "/public/about/arrow1.png";
import work1 from "/public/about/work1.png";
import work2 from "/public/about/work2.png";
import work3 from "/public/about/work3.png";
import work4 from "/public/about/work4.png";
import Image from "next/image";

const Work = () => {
  return (
    <div className="lg:mb-[250px]">
      <div className="lg:px-[100px] lg_screen_px px-5 mt-6 lg:mt-[100px] ">
        {/* Title Row */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex lg:flex-row flex-col items-start lg:items-center"
        >
          <div className="flex items-center lg:mr-[95px]">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="me-[100px] uppercase work_heading text-[35px] md:text-[60px] lg:text-[191px] font-medium text-primary work_title"
            >
              Work
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Image className="me-[95px]" src={arrow} alt="" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-primary desc_text  text-lg lg:text-[40px] font-medium ld:mb-0 mb-4"
          >
            We <span className="font-bold">provide</span> brilliant idea to grow the {" "}
            <span className="font-bold">
              startup <br className="hidden md:block about_blockbr lg:hidden" /> — agency
            </span>{" "}
            with your sharp brand.
          </motion.p>
        </motion.div>

        {/* Projects Grid With Left-to-Right Image Scaling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 work_bg lg:gap-x-[108px] md:gap-x-[18px]">
          {/* First Project */}
          <motion.div className="mt-5">
            {/* left-to-right scale */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              style={{ transformOrigin: 'left center', overflow: 'hidden' }}
            >
              <Image src={work1} alt="Acnoo Admin" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg lg:text-2xl font-bold text-black mt-7 mb-4"
            >
              Acnoo Admin – Flutter Admin Panel & Dashboard
              <br className="lg:block hidden" />
              Template | PWA Ready
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex gap-5 wrap_button"
            >
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">Banding</li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">UI/UX</li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">UI/UX</li>
            </motion.ul>
          </motion.div>

          {/* Second Project */}
          <motion.div className="mt-5 md:mt-10 lg:mt-[100px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.45, ease: 'easeOut' }}
              style={{ transformOrigin: 'left center', overflow: 'hidden' }}
            >
              <Image src={work2} alt="Business card design" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-lg lg:text-2xl font-bold text-black mt-7 mb-4"
            >
              Business card design
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex gap-5 wrap_button"
            >
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">Banding</li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">UI/UX</li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">UI/UX</li>
            </motion.ul>
          </motion.div>

          {/* Third Project */}
          <motion.div className="mt-5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
              style={{ transformOrigin: 'left center', overflow: 'hidden' }}
            >
              <Image src={work3} alt="PosPro Saas Project" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-lg lg:text-2xl font-bold text-black mt-7 mb-4"
            >
              PosPro Saas Project
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="flex gap-5 wrap_button"
            >
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">Banding</li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">UI/UX</li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">UI/UX</li>
            </motion.ul>
          </motion.div>

          {/* Fourth Project */}
          <motion.div className="mt-5 md:mt-10 lg:mt-[100px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.75, ease: 'easeOut' }}
              style={{ transformOrigin: 'left center', overflow: 'hidden' }}
            >
              <Image src={work4} alt="Business card design" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="text-lg lg:text-2xl font-bold text-black mt-7 mb-4"
            >
              Business card design
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex gap-5 wrap_button"
            >
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">Banding</li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">UI/UX</li>
              <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">UI/UX</li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;

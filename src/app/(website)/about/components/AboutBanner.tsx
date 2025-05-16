/* eslint-disable react/jsx-key */
// import React from "react";
// import {
//   FaBehance,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoDribbble } from "react-icons/io";
// import arrow from "/public/about/arrow.png";
// import Image from "next/image";

// const AboutBanner = () => {
//   return (
//     <div className="relative about_bg">
//       {/* Main Content */}
//       <div className="flex flex-col items-start justify-center pt-[89px] pb-[80px]  about_wrapper">
//         {/* Header */}
//         <div className="flex items-center about_banner gap-[87px] border-b pb-3 lg:pb-5 border-[#423C3C30] w-fit">
//           <div>
//             <p className="text-base lg:text-xl font-medium text-[#010101] ">
//               Creative
//               <span className="text-[#2353F5]"> Agency</span> Beside <br className="sm_br" />{" "}
//               Dhaka, Bangladesh
//             </p>
//           </div>
//           <a href="#" className="text-blue-600 hover:underline">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//               fill="none"
//             >
//               <path
//                 d="M2 16L16.0625 1.9375M2 1H17V16"
//                 stroke="#2353F5"
//                 strokeWidth="1.5"
//                 strokeLinecap="square"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </a>
//         </div>

//         {/* Main Title */}
//         <div className="flex lg:flex-row flex-col md:flex-col md:gap-6 lg:gap-[86px] md:items-start about_banner_text lg:items-end">
//           <div className="heading relative mt-3.5 lg:mt-6 text-[120px] font-bold text-primary leading-[142px] ">
//             DIGITAL <span className="font-normal">SOFTWARE</span> <br /> AGENCY
//             <Image
//               className="absolute arrow_cls right-[39%] bottom-[14px] size-[120px]"
//               src={arrow}
//               alt=""
//             />
//           </div>

//           {/* Tagline */}
//           <p className="mt-4 text-base lg:text-xl font-semibold text-[#010101] ">
//             Elevate your brand with{" "}
//             <span className="text-[#8D8F96]">the Agencyo</span> <br className="lg:block   hidden"  />
//             Agency – everything from <br className="lg:hidden about_blockbr md:block hidden"  /> strategy <br  className="lg:block hidden" />
//             to advertising & scale.
//           </p>
//         </div>
//       </div>

//       {/* Sidebar with Social Icons */}
//       <div className="absolute right-10 lg:right-[50px] social_md_icons md:top-1/2  lg:top-1/2  transform -translate-y-1/2 flex flex-row md:flex-col lg:flex-col space-y-4 space-x-4  ">
//         <div
//           className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white icons cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
//           style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
//         >
//           <FaFacebookF />
//         </div>
//         <div
//           className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white icons cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
//           style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
//         >
//           <FaYoutube />
//         </div>
//         <div
//           className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white icons cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
//           style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
//         >
//           <IoLogoDribbble />
//         </div>
//         <div
//           className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white icons cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
//           style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
//         >
//           <FaBehance />
//         </div>
//         <div
//           className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white icons cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
//           style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
//         >
//           <FaXTwitter />
//         </div>
//         <div
//           className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white icons cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
//           style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
//         >
//           <FaLinkedinIn />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutBanner;

"use client";

import React from "react";
import {
  FaBehance,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoDribbble } from "react-icons/io";
import arrow from "/public/about/arrow.png";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: "easeOut" } },
});

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const AboutBanner = () => {
  const socialIcons = [
    <FaFacebookF />,
    <FaYoutube />,
    <IoLogoDribbble />,
    <FaBehance />,
    <FaXTwitter />,
    <FaLinkedinIn />,
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="relative about_bg"
    >
      {/* Main Content */}
      <div className="flex flex-col items-start justify-center pt-[89px] pb-[80px] about_wrapper">
        {/* Header */}
        <motion.div
          variants={fadeIn(0.1)}
          className="flex items-center about_banner gap-[87px] border-b pb-3 lg:pb-5 border-[#423C3C30] w-fit"
        >
          <div>
            <p className="text-base lg:text-xl font-medium text-[#010101]">
              Creative <span className="text-[#2353F5]">Agency</span> Beside <br className="sm_br" />
              Dhaka, Bangladesh
            </p>
          </div>
          <a href="#" className="text-blue-600 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2 16L16.0625 1.9375M2 1H17V16"
                stroke="#2353F5"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* Main Title */}
        <motion.div
          variants={fadeIn(0.3)}
          className="flex lg:flex-row flex-col md:flex-col md:gap-6 lg:gap-[86px] md:items-start about_banner_text lg:items-end"
        >
          <div className="heading relative mt-3.5 lg:mt-6 text-[120px] font-bold text-primary leading-[142px]">
            DIGITAL <span className="font-normal">SOFTWARE</span> <br /> AGENCY
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Image
                className="absolute arrow_cls right-[39%] bottom-0 size-[120px]"
                src={arrow}
                alt=""
              />
            </motion.div>
          </div>

          {/* Tagline */}
          <p className="mt-4 text-base lg:text-xl font-semibold text-[#010101]">
            Elevate your brand with{" "}
            <span className="text-[#8D8F96]">the Agencyo</span> <br className="lg:block hidden" />
            Agency – everything from <br className="lg:hidden about_blockbr md:block hidden" />
            strategy <br className="lg:block hidden" />
            to advertising & scale.
          </p>
        </motion.div>
      </div>

      {/* Social Icons */}
      <motion.div
        variants={staggerContainer}
        className="absolute right-10 lg:right-[50px] social_md_icons md:top-1/2 lg:top-1/2 transform -translate-y-1/2 flex flex-row md:flex-col lg:flex-col space-y-4 space-x-4"
      >
        {socialIcons.map((Icon, index) => (
          <motion.div
            key={index}
            variants={fadeIn(index * 0.1)}
            className="text-[#9497A3] hover:bg-[#1A0B49] hover:text-white icons cursor-pointer flex justify-center items-center bg-white size-[38px] rounded-full"
            style={{ boxShadow: "0 1px 8px rgba(1, 16, 61, 0.07)" }}
          >
            {Icon}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutBanner;


"use client";
import Image from "next/image";
import React, { useState } from "react";
import blur3 from "/public/home/blur3.png";
import blur4 from "/public/home/blur4.png";
import { homefaqData } from "@/app/utils/data";
import { motion } from "framer-motion";

type IProps = {
  question?: string;
  answer?: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
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

const FaqItem: React.FC<IProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-[#E2E6ED] py-3 md_questionp md:py-4 lg:py-[30px]"
      variants={itemVariants}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg md:text-lg lg:text-xl font-medium lg:font-bold text-primary ">
          {question}
        </p>
        <button className="focus:outline-none">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#0E1B3D"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#0E1B3D"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="mt-2 lg:mt-8 transition-all duration-300 ease-in-out">
          <p className="text-[#6C6A72] text-base">{answer}</p>
        </div>
      )}
    </motion.div>
  );
};

const Faq = ({ color, btncolor }: { color?: string, btncolor?: string }) => {
  return (
    <div className="z-50 bg-transparent relative flex lg:flex-row flex-col justify-between lg_screen_px lg:px-[120px] lg:mt-[81px] px-4 lg:mb-[160px] mb-6">
      <motion.div initial="hidden"
        animate="visible"
        variants={{}} className="flex lg:flex-col flex-row lg:justify-start question_wrapper md:justify-between lg:items-start items-center">
        <div>
          <motion.div custom={0}
            variants={fadeLeft} className="text-primary text-lg font-medium mb-2 lg:mb-4 text-start">
            <span className="bg-[#F52366] rounded-[13px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]">
              New
            </span>
            Questions & Answer we give
          </motion.div>
          <motion.h3 custom={1}
            variants={fadeLeft} className="lg:text-[65px]  text-[24px] lg:leading-[72px] leading-[30px] font-bold text-start  mb-4 lg:mb-8 text-primary">
            Questions &
            <br className="lg:block hidden ms-2" />
            Quickly <br className="lg:hidden block" /> Answers
          </motion.h3>
          <motion.p custom={2}
            variants={fadeLeft} className="text-sm font-medium text-[#6C6A72] lg:mb-11 md:mb-4 mb-3 ">
            Don’t find the answer? We can help
          </motion.p>
        </div>
        <motion.button
          custom={3}
          variants={fadeLeft}
          className={`lg:flex question_btn md:flex hidden  ${btncolor ? "bg-[#C52127]" : color ? 'bg-[#7500FE]' : "bg-[#2353F5]"
            }  gap-1.5 items-center text-white text-base font-bold md:px-5 lg:px-[36px] md:py-3 lg:py-[21px] rounded-[10px] w-fit`}
        >
          Browse All Questions
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M13.0592 9.50104L9.14062 5.58247L10.2602 4.46289L15.2983 9.50104L10.2602 14.5391L9.14062 13.4196L13.0592 9.50104Z"
              fill="white"
            />
          </svg>
        </motion.button>
      </motion.div >
      {/* faq */}
      <motion.div
        className="max-w-[730px] w-full border-[#E2E6ED] border-t faq_wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {
          homefaqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))
        }
      </motion.div>

      <button
        className={`lg:hidden md_hidden md:hidden block mt-9 mx-auto  ${btncolor ? "bg-[#C52127]" : "bg-[#2353F5]"
          } flex gap-1.5 items-center text-white text-base font-bold px-5 py-3 rounded-[10px] w-fit`}
      >
        Browse All Questions{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
        >
          <path
            d="M13.0592 9.50104L9.14062 5.58247L10.2602 4.46289L15.2983 9.50104L10.2602 14.5391L9.14062 13.4196L13.0592 9.50104Z"
            fill="white"
          />
        </svg>
      </button>
      <Image
        className="lg:block hidden absolute left-0 top-[40%] lg:top-0 z-[-10]"
        src={blur3}
        alt=""
      />
      <Image
        className="lg:block hidden absolute right-0 top-[-40%] lg:top-0 z-[-10]"
        src={blur4}
        alt=""
      />
    </div >
  );
};

export default Faq;

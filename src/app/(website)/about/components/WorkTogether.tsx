'use client'
import React from "react";
import { motion } from "framer-motion";
import letswork from "/public/about/letsworl.png";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const WorkTogether = () => {
  const container = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="lg:px-[100px] lg_screen_px ">
      <div className=" mb-6 md:mb-[72px] lg:mb-[190px] mt-6 md:mt-[30px] lg:mt-[117px]">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 lg:gap-[124px] w-full items-center  rounded-lg overflow-hidden">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:px-0 px-5"
          >
            <motion.h1
              className="text-[30px] lg:text-[60px] uppercase mb-4 lg:mb-12 whitespace-nowrap flex flex-wrap"
              variants={container}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Heading split by words */}
              {["LET'S", "WORK", "TOGETHER"].map((word, wordIndex) => (
                <motion.span key={wordIndex} className="flex mr-1">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      variants={letter}
                      className={wordIndex === 0 ? "font-bold" : "font-normal"}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </motion.h1>
            <form>
              {[
                { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter full name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter email address' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Enter Subject' },
              ].map((field, idx) => (
                <motion.div
                  key={field.id}
                  className="mb-4"
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.6, delay: 0.2 * idx }}
                  viewport={{ once: true }}
                >
                  <label htmlFor={field.id} className="block text-[#000D2B] text-base font-bold mb-2">
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    required
                    className="bg-[#F8F8FC] border border-[#E5E7EB] h-12 lg:h-[59px] w-full px-[18px] rounded-[5px] lg:rounded-[9px] text-[#6B7280] text-base"
                  />
                </motion.div>
              ))}

              <motion.div
                className="mb-6"
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <label htmlFor="description" className="block text-[#000D2B] text-base font-bold mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  placeholder="Enter Description..."
                  required
                  className="bg-[#F8F8FC] border border-[#E5E7EB] h-[162px] w-full px-[18px] py-5 rounded-[5px] lg:rounded-[9px] text-[#6B7280] text-base resize-none"
                ></textarea>
              </motion.div>

              <motion.button
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                type="submit"
                className=" hover:bg-transparent border hover:text-[#2353F5] border-[#2353F5] lg:px-[55px] px-6 py-[14px] lg:py-[22px] bg-[#2353F5] text-white font-bold rounded-[4px] lg:rounded-full  transition duration-300"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src={letswork} alt="Person on escalator" className="w-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
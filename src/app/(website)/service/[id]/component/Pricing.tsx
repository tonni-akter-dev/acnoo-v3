"use client";

import { pricingData } from '@/app/utils/data';
import React, { useState } from 'react';
import { BiRevision } from 'react-icons/bi';
import { CiTimer } from 'react-icons/ci';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const leftToRightVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Basic");
  const currentPlan = pricingData.find((item) => item.type === activeTab);

  return (
    <div className="lg:max-w-[660px] md:p-0 w-full h-fit md:h-[478px] lg:h-[522px] bg-[#F3F3F4] border border-[#E5E7EB] rounded-xl shadow-xl overflow-hidden">
      {/* Tab Buttons */}
      <div className="flex border-b border-[#E5E7EB]">
        {pricingData.map((plan) => (
          <button
            key={plan.type}
            onClick={() => setActiveTab(plan.type)}
            className={`w-1/3 py-3 text-base pricing_text md:text-[20px] font-medium transition-all duration-200 border-b-2 text-center border-r border-[#D1D5DB] ${
              plan.type === activeTab
                ? "border-[#2F1C6A] text-[#2F1C6A] bg-[linear-gradient(180deg,#F5EFFF80_0%,#E6D8FF_100%)]"
                : "border-transparent text-gray-500 hover:bg-gray-50"
            }`}
          >
            {plan.type}
          </button>
        ))}
      </div>

      {/* Tab Content with AnimatePresence for tab-switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Service Title & Price */}
          <motion.div
            className="flex justify-between items-center mt-3.5 mb-3 pricing_service"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1 variants={fadeUpVariant} className="text-primary text-lg md:text-2xl font-bold ml-5 lg:ml-9">
              {currentPlan?.type} Service
            </motion.h1>
            <motion.p
              variants={fadeUpVariant}
              className="text-xl md:text-2xl font-bold text-white mb-1 flex justify-center h-10 items-center price-bg"
            >
              {currentPlan?.price}
            </motion.p>
          </motion.div>

          {/* Delivery & Revision */}
          <motion.div
            className="offer_xs flex w-fit bg-white rounded-[22px] mx-3 lg:ml-6 time_limit items-center gap-3 md:gap-[22px] px-4 md:px-6 py-3"
            variants={leftToRightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
            <h1 className="fifteen_days flex items-center gap-1 md:gap-3 whitespace-nowrap text-sm md:text-base text-[#1A0B49] border-r border-[#DDDCDC] pr-3.5">
              <CiTimer /> {currentPlan?.delivery}-day delivery
            </h1>
            <h1 className="flex items-center gap-1 md:gap-3 whitespace-nowrap text-sm md:text-base text-[#1A0B49]">
              <BiRevision /> 5 Revision
            </h1>
          </motion.div>

          {/* What’s Included & Features */}
          <div className="p-6 pricing_service">
            <motion.h1
              className="text-primary text-base md:text-2xl font-bold mb-2 md:mb-3.5"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              What’s Included
            </motion.h1>

            <motion.ul
              className="space-y-3 mb-6 lg:mb-9"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {currentPlan?.includes.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center text-[#4B5563] text-base font-medium gap-2"
                  variants={itemVariants}
                >
                  <IoCheckmarkSharp className="text-green-500 text-lg" /> {feature}
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              className="w-full bg-[#2F1C6A] text-white py-3 rounded-lg font-semibold text-base hover:bg-primary transition"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              Continue
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Pricing;

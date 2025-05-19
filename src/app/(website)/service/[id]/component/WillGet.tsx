"use client";
import React from 'react';
import { willGet } from '@/app/utils/data';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const WillGet = () => {
  return (
    <div className="lg:my-10 my-5 lg:px-0">
      <motion.h1
        className="text-2xl font-bold mb-[18px] text-primary"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        What You Will Get
      </motion.h1>

      <motion.ul
        className="grid grid-cols-1 gap-2 lg:gap-4 list-disc list-inside text-gray-700"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {willGet.map((item) => (
          <motion.li
            key={item.id}
            className="flex items-center gap-3 text-base text-[#4B5563] font-medium"
            variants={itemVariants}
          >
            <IoCheckmarkSharp /> {item.title}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default WillGet;

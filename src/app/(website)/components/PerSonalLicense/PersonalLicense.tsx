'use client';
import React, { useState } from 'react';
import TagsSection from './TagsSectionProps';
import SoftwareVersion from './SoftwareVersion';
import { licenseOptions, productDescription } from '@/app/utils/data';
import ProductDescriptionItem from './ProductDescriptionItem';
import Coupon from './Coupon';
import Features from './Features';
import Offer from './Offer';
import RecommendSerice from './RecommendSerice';
import LicenseOptions from './LicenseOptions';
import { motion } from 'framer-motion';

const PersonalLicense = ({
  finalPrice = 36,
}: {
  finalPrice?: number;
  services?: { title: string; price: number; checked?: boolean }[];
}) => {
  const [licenseType, setLicenseType] = useState('personal');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="lg-mx-0 md:mx-5 lg:col-span-1"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div
        className="border border-[#E5E7EB] rounded-md p-7"
        variants={itemVariants}
      >
        <motion.div
          className="mb-6"
          variants={containerVariants}
        >
          {licenseOptions.map((option) => (
            <motion.div
              key={option.id}
              variants={itemVariants}
            >
              <LicenseOptions
                id={option.id}
                value={option.value}
                label={option.label}
                checked={licenseType === option.value}
                onChange={() => setLicenseType(option.value)}
                price={option.price}
                originalPrice={option.originalPrice}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={itemVariants}>
          <RecommendSerice />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Coupon />
        </motion.div>
        <motion.button
          className="w-full bg-[#2F1C6A] hover:bg-purple-900 text-white py-2 px-5 rounded-md flex items-center justify-center text-lg"
          variants={itemVariants}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 mr-2"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          Buy Now - ${finalPrice}
        </motion.button>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Offer />
      </motion.div>
     <motion.div
  className="bg-white p-3.5 lg:p-6 md:p-6 mt-4 lg:mt-6 rounded-lg shadow border border-[#E5E7EB]"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
>
  <motion.h2
    className="text-xl font-semibold border-b border-[#E5E7EB] pb-2 mb-4 border-dotted"
    variants={itemVariants}
  >
    Product Description
  </motion.h2>
  <motion.ul
    className="space-y-2 font-bold text-[#000D2B]"
    variants={containerVariants}
  >
    {productDescription.map((item, index) => (
      <motion.li
        key={index}
        variants={itemVariants}
      >
        <ProductDescriptionItem
          label={item.label}
          value={item.value}
          isLink={item.isLink}
        />
      </motion.li>
    ))}
  </motion.ul>
</motion.div>

      <motion.div variants={itemVariants}>
        <Features />
      </motion.div>
      <motion.div variants={itemVariants}>
        <TagsSection onTagSelect={(tag) => console.log(`Selected tag: ${tag}`)} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SoftwareVersion />
      </motion.div>
    </motion.div>
  );
};

export default PersonalLicense;
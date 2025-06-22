'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { mobileProductFeatures, productFeatures } from '@/app/utils/data'

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const ProductsFeature = () => {
  return (
    <div className='mt-9 lg:mt-[100px] mb-8 lg:mb-[83px]'>
      <motion.div
        className='mb-9'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.div
          className="text-black text-lg font-medium mb-3 lg:mb-4 text-center"
          variants={itemVariant}
        >
          <span className='bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
          Greate features for POSpro
        </motion.div>
        <motion.h3
          className='text-2xl feature_heading md:text-3xl lg:text-[60px] lg:leading-[72px] leading-[30px] font-bold text-center lg:mb-9 md:mb-9 mb-4 text-primary'
          variants={itemVariant}
        >
          Product Features
        </motion.h3>
      </motion.div>

      {/* Desktop Features */}
      <motion.div
        className="containers lg:block md:block hidden feature_card_wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 feature_card">
          {productFeatures.map((feature, index) => (
            <motion.div
              variants={itemVariant}

              key={index}
              style={{ background: feature.color }}
              className="group md:h-[100px] lg:h-[191px] flex flex-col items-center justify-center transition-shadow lg:py-11 py-[15px]"
            >
              <div className="lg:size-[60px] size-[35px] mb-1 md:mb-2 lg:mb-[18px] transform transition-transform duration-300 group-hover:-translate-y-2">
                <Image src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
              </div>
              <span className="text-[15px] md:text-base lg:text-lg font-bold text-[#404040]">
                {feature.title}
              </span>
            </motion.div>

          ))}
        </div>
      </motion.div>

      {/* Mobile Features */}
      <motion.div
        className="containers px-5 lg:hidden md:hidden block md_hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {mobileProductFeatures.map((feature, index) => (
              <motion.div
              variants={itemVariant}

              key={index}
              style={{ background: feature.color }}
              className="group md:h-[100px] lg:h-[191px] flex flex-col items-center justify-center transition-shadow lg:py-11 py-[15px]"
            >
              <div className="lg:size-[60px] size-[35px] mb-1 md:mb-2 lg:mb-[18px] transform transition-transform duration-300 group-hover:-translate-y-2">
                <Image src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
              </div>
              <span className="text-[15px] md:text-base lg:text-lg font-bold text-[#404040]">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ProductsFeature


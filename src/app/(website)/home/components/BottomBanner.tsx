'use client';
import React, { useRef } from 'react';
import women from '/public/home/buisnesswomen.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useInView } from 'framer-motion';

const BottomBanner = () => {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // animate when visible, only once

  return (
    <div className={`containers lg_screen_px bg-transparent bg-blend-color lg:mx-0 md:mx-5 bottom_wrapper`}>
      <motion.div
        ref={ref}
        className={`bottom_banner relative z-50 h-[368px] py-[34px] lg:py-[54px] ps-[13px] md:ps-5 lg:ps-[110px] pe-[32px] lg:pe-[90px] lg:rounded-[30px] rounded-0 ${
          pathname === '/' ? '' : 'mb-[-70px] z-[99]'
        }`}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="text-primary text-base lg:text-lg font-medium mb-4 text-start">
            <span className='bg-[#F52366] rounded-[13px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>
              New
            </span>
            Custom projects we already done
          </div>
          <h3 className='lg:text-[65px] text-[24px] lg:leading-[72px] leading-[30px] font-bold text-start text-primary'>
            Ready to create some <br />
            custom products?
          </h3>

          <motion.button
            className="mt-5 lg:mt-6 bg-[#2F1C6A] flex gap-1.5 items-center text-white text-base font-bold px-5 lg:px-[36px] py-4 lg:py-[21px] rounded-[10px] w-fit"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Browse Free Resources{' '}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
              <path d="M13.0592 9.50104L9.14062 5.58247L10.2602 4.46289L15.2983 9.50104L10.2602 14.5391L9.14062 13.4196L13.0592 9.50104Z" fill="white" />
            </svg>
          </motion.button>

          {/* Mobile Image Animation */}
          <motion.div
            className='lg:hidden md:hidden women_image block mt-6'
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Image src={women} alt="" />
          </motion.div>
        </motion.div>

        {/* Desktop Image Animation */}
        <motion.div
          className='lg:block women md:block hidden absolute md:right-5 lg:right-[90px] md:top-4 lg:top-[-44px] md:w-[201px]  lg:w-[400px] md:h-[208px] lg:h-[412px]'
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image src={women} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BottomBanner;

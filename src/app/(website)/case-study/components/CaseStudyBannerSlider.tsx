/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import profiloe from '/public/png/StudyBanner.png';
import type { Swiper as SwiperType } from 'swiper';

const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];

const AdminSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex - 1);
    }
  }, [activeIndex]);

  return (
    <div className="relative w-full case_banner_wraper mt-4 md:mt-8 lg:mt-30 overflow-visible">
      <div className=" max-w-6xl mx-auto flex items-center justify-start relative">
        <Swiper
          modules={[Pagination]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
          className="rounded-xl w-full"
          spaceBetween={20}
          onSwiper={(swiper: any) => (swiperRef.current = swiper)}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <Image
                  src={profiloe}
                  className="md:w-[600px] md_lg_screen ps-4 pe-10 mx-auto md:px-0 lg:w-full object-contain h-auto rounded-xl"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-1/2  case_banner right-2.5 md:right-8 lg:-right-20  transform -translate-y-1/2 z-10 flex flex-col gap-2">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setActiveIndex(num)}
              className={`lg:size-9 size-6 flex items-center justify-center rounded-full border text-sm cursor-pointer transition-all ${activeIndex === num
                ? 'border-[#FD5B38] text-black bg-white'
                : 'border-black text-black'
                }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute sm_screen_position bottom-[100px] right-0 flex items-center justify-center z-10">
        <Marquee speed={40} gradient={false}>
          <h1
            className="text-4xl md:text-[80px] lg:text-[110px]  grad2_text uppercase font-bold">
            Admin Dashboard
          </h1>
        </Marquee>
      </div>
     <div className="max-w-6xl mx-auto mt-[30px]">
      <motion.h2
        className="text-base md:text-xl acnoo_admin_text md:ms-22 lg:ms-[87px] ms-5 lg:text-[28px] font-bold text-black border-l-4 border-l-[#2353F5] pl-3.5 lg:ml-[52px]"
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }} 
        whileHover={{ scale: 1.02 }} 
        viewport={{ once: true, amount: 0.2 }} >
        Acnoo Admin - Flutter Admin Panel & Dashboard 
        <br className="hidden md:block md_block lg:block" />
        Template | PWA Ready
      </motion.h2>
    </div>
    </div>
  );
};

export default AdminSlider;
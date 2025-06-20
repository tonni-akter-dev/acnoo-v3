'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import r1 from '/public/ecommerce/r1.png'
import r2 from '/public/ecommerce/r2.png'
import r3 from '/public/ecommerce/r3.png'
import r4 from '/public/ecommerce/r4.png'
import r5 from '/public/ecommerce/r5.png'
import r6 from '/public/ecommerce/r6.png'
const images = [r1, r2, r3, r4, r5, r6, r3, r4, r1, r2, r3, r4];

import { Autoplay } from 'swiper/modules'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const UniqueAdminSlider = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div>
            <div className='md:mt-[70px] containers md:px-5 px-4 flex lg:flex-row md_flex_row1 md:flex-row flex-col gap-2 justify-between items-start md:items-center'>
                <div>
                    <div className="text-black text-lg font-medium mb-2 lg:mb-4">
                        <span className='bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                        Unique admin pages
                    </div>
                    <h1 className='text-primary heading_text max-w-[503px] w-full lg:text-[65px]  text-[24px] lg:leading-[65px] leading-[24px] font-bold'>Mix and match. <br className='lg:block md:block hidden' />
                        Jump- <br className='lg:hidden md:hidden block' /> start your
                        design.</h1></div>
                <h1 className='onezero_text' ref={ref}>
                    {inView && <CountUp end={110} duration={2} suffix="+" />}
                </h1>
            </div>
            <div className='responsive'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                     loop={true} 
                    autoplay={true}
                    className='mb-[10.5px] lg:mb-10'
                    modules={[Autoplay]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        744: {
                            slidesPerView: 4,
                        },
                        425:{
                             slidesPerView: 3,
                        },
                        375: {
                            slidesPerView: 3,
                        },
                         320: {
                            slidesPerView: 3,
                        },
                    }}>
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                className="h-[115px] md:h-[145px] lg:h-[381px] admin_slider_img"
                                alt={`r${index + 1}`}
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    dir="rtl"
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={4} 
                    autoplay={true}
                    direction="horizontal"
                    modules={[Autoplay]}
                    breakpoints={{
                         1024: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        744: {
                            slidesPerView: 4,
                        },
                        425:{
                             slidesPerView: 3,
                        },
                        375: {
                            slidesPerView: 3,
                        },
                         320: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                className="h-[115px] md:h-[145px] lg:h-[381px] admin_slider_img"
                                alt={`r${index + 1}`}
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default UniqueAdminSlider
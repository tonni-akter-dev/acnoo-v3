'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import peoplethink from '/public/home/peoplethink.png'
import star from '/public/home/star1.png'
import blur1 from '/public/home/blur1.png'
import blur2 from '/public/home/blur2.png'
import Image from 'next/image';
import { motion } from "framer-motion";

const WhatPeopleThink = () => {

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };
    return (
        <div className="lg:py-16 md:py-8 py-6 whatpeoplethink_wrapper relative  z-50">
            <Image className='absolute top-[-30%] md:top-[-87%] lg:top-[-48%]  z-[-10]' src={blur1} alt="" />
            <Image className='absolute top-[-30%] md:top-[-87%] lg:top-[-48%] z-[-10] right-0' src={blur2} alt="" />
            <motion.div className="mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}>
                <div className="flex justify-between items-center mb-8 lg_screen_px lg:px-[150px] px-5">
                    <motion.div variants={itemVariants}>
                        <div className="text-primary text-[15px] lg:text-lg font-medium mb-4 text-start">
                            <span className="bg-[#F52366] rounded-[13px] text-[15px] lg:text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]">
                                5 star
                            </span>
                            Our Client’s Are Very Satisfied
                        </div>
                        <h3 className="lg:text-[65px] text-[24px] lg:leading-[72px] leading-[30px] font-bold text-start mb-4 lg:mb-8 text-primary">
                            What People Think <br />
                            About Our Products
                        </h3>
                    </motion.div>
                    <motion.button
                        variants={itemVariants} className="cursor-pointer bg-[#2F1C6A] hidden lg:flex gap-1.5 items-center text-white text-base font-bold px-[36px] py-[21px] rounded-[10px] w-fit">
                        Contact with us <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14.5874 7.25574L10.0899 2.75824C9.96869 2.6412 9.8064 2.57644 9.63794 2.57791C9.46947 2.57937 9.30833 2.64694 9.1892 2.76606C9.07008 2.88519 9.00251 3.04634 9.00104 3.2148C8.99958 3.38326 9.06434 3.54556 9.18138 3.66673L12.5821 7.06749H1.28312C1.11272 7.06749 0.949301 7.13518 0.828809 7.25567C0.708317 7.37616 0.640625 7.53958 0.640625 7.70999C0.640625 7.88039 0.708317 8.04381 0.828809 8.1643C0.949301 8.28479 1.11272 8.35249 1.28312 8.35249H12.5821L9.18138 11.7532C9.12001 11.8125 9.07106 11.8834 9.03739 11.9618C9.00372 12.0402 8.98599 12.1245 8.98525 12.2098C8.98451 12.2951 9.00077 12.3797 9.03307 12.4587C9.06538 12.5376 9.11309 12.6094 9.17341 12.6697C9.23374 12.73 9.30547 12.7777 9.38444 12.81C9.4634 12.8423 9.548 12.8586 9.63331 12.8579C9.71862 12.8571 9.80293 12.8394 9.88132 12.8057C9.95971 12.772 10.0306 12.7231 10.0899 12.6617L14.5874 8.16423C14.7078 8.04375 14.7755 7.88035 14.7755 7.70999C14.7755 7.53962 14.7078 7.37622 14.5874 7.25574Z" fill="white" />
                        </svg>
                    </motion.button>
                </div>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                    centeredSlides={true}
                    initialSlide={2}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        744: { slidesPerView: 2, spaceBetween: 30 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 50 },
                    }}
                >
                    {[1, 2, 3, 4, 5, 6].map(data => (
                        <SwiperSlide key={data}>
                            <div className="bg-white border lg:mx-0 md:mx-0 mx-4 border-[#838BB424]  md:max-w-[616px] lg:max-w-[888px]  flex md:flex-row lg:flex-row flex-col-reverse  md:justify-between  gap-2.5 md:gap-[31px] lg:gap-[38px] rounded-[12px] lg:rounded-[30px] shadow-md items-stretch md:items-center lg:items-center md:px-6 md:py-[17px] lg:p-7 p-2 what_people_tab ">
                                <div className='ps-0 md:ps-2 lg:ps-[23px]'>
                                    <blockquote className="text-primary text-base lg:text-[26px] font-medium">
                                        <span className='#2353F5'> {`"`}</span> Software hires great people from  <br /> of backgrounds, which simply makes <br />  stronger, and we {`couldn't`} be proud <br />  elevating your optimizing Business
                                    </blockquote>
                                    <div className='h-[1px] w-full bg-[#F3F3F3] mt-[30px]'></div>
                                    <div className="text-center  items-center flex justify-between mt-6 lg:mt-4">
                                        <div>
                                            <p className="font-semibold text-primary">James Anderson</p>
                                            <p className=" text-primary text-base   "><span className='text-[#1351D8]'>Ceo</span> and Founder</p>
                                        </div>
                                        <div className="mt-2 flex justify-center">
                                            <Image src={star} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <Image
                                        src={peoplethink} // Replace with your image URL
                                        alt="James Anderson"
                                        className="w-full md:w-[188px] lg:w-[307px] rounded-[18px] h-[232px] md:h-[209px] lg:h-[350px]"
                                    />
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </motion.div>
        </div>
    );
}

export default WhatPeopleThink
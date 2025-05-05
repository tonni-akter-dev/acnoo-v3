import React from 'react'
import reslayout from '../../../../../public/ecommerce/reslay.png'
import desktop from '../../../../../public/ecommerce/monitor.png'
import laptop from '../../../../../public/ecommerce/laptop.png'
import tab from '../../../../../public/ecommerce/tab.png'
import phone from '../../../../../public/ecommerce/phone.png'
import onezero from '../../../../../public/ecommerce/110.png'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import r1 from '../../../../../public/ecommerce/r1.png'
import r2 from '../../../../../public/ecommerce/r2.png'
import r3 from '../../../../../public/ecommerce/r3.png'
import r4 from '../../../../../public/ecommerce/r4.png'
import r5 from '../../../../../public/ecommerce/r5.png'
import r6 from '../../../../../public/ecommerce/r6.png'
const images = [r1, r2, r3, r4, r5, r6, r3, r4, r1, r2, r3, r4]; // Array of image imports

import { Autoplay } from 'swiper/modules'

const ResponsiveLayout = () => {
    return (
        <div className='res_body'>
            <div className='mb-5 text-center'>
                <div className="text-black text-lg font-medium mb-4 text-center">
                    <span className='bg-[#F52366] rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                    {` We've`} added <span className='text-[#2353F5]'>30+</span>new!
                </div>
                <h3 className='text-[60px] lg:leading-[72px] leading-[30px] font-bold text-center mb-7 text-primary'>
                    Responsive layout <br />
                    for any device
                </h3>

                <div className='flex justify-center '>
                    <Image src={reslayout} alt="" />
                </div>
            </div>
            <div className='flex gap-[102px] justify-center mb-20'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <Image src={desktop} alt="" />
                    <p className='text-primary text-sm font-bold mt-5 mb-3'>1920 X 1080px</p>
                    <span className='text-[#898282] text-sm font-medium leading-4'>Full Screen <br />
                        Layout</span>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                    <Image src={laptop} alt="" />
                    <p className='text-primary text-sm font-bold mt-5 mb-3'>1364 X 768px</p>
                    <span className='text-[#898282] text-sm font-medium leading-4'>Laptop Screen

                        <br /> Layout</span>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                    <Image src={tab} alt="" />
                    <p className='text-primary text-sm font-bold mt-5 mb-3'>1024 X 768px</p>
                    <span className='text-[#898282] text-sm font-medium leading-4'>Tablet Screen <br />
                        Layout</span>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                    <Image src={phone} alt="" />
                    <p className='text-primary text-sm font-bold mt-5 mb-3'>767 X 365px</p>
                    <span className='text-[#898282] text-sm font-medium leading-4'>Mobile Screen <br />
                        Layout</span>
                </div>
            </div>

            <div className='lg:px-[220px] px-5 flex justify-between items-center'>
                <div>
                    <div className="text-black text-lg font-medium mb-4">
                        <span className='bg-[#F52366] rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                        Unique admin pages
                    </div>
                    <h1 className='text-primary lg:text-[65px]  text-[24px] lg:leading-[65px] leading-[24px] font-bold'>Mix and match. <br />
                        Jump-start your
                        design.</h1></div>
                <Image src={onezero} alt="" />
            </div>

            <div className='responsive mt-[62px]'>
                <Swiper
                    spaceBetween={20} // Adjust space between slides
                    slidesPerView={4} // Adjust based on your design
                    autoplay={true}
                    className='mb-10'
                    modules={[Autoplay]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                className="h-[381px]"
                                alt={`r${index + 1}`}
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    dir="rtl"
                    loop={true}
                    spaceBetween={20} // Adjust space between slides
                    slidesPerView={4} // Adjust based on your design
                    autoplay={true}
                    direction="horizontal"
                    modules={[Autoplay]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                className="h-[381px]"
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

export default ResponsiveLayout
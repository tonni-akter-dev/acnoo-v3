'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import view from '/public/about/viewimg.png';
import pinkstar from '/public/about/pinkstar.png';
import vector1 from '/public/about/vector1.png';

const services = [
    { number: "01", title: "SaaS Product Development", image: view },
    { number: "02", title: "Web Development", image: view },
    { number: "03", title: "Custom Software Developer", image: view },
    { number: "04", title: "Mobile App Development Android/iOS", image: view },
    { number: "05", title: "UI/UX Design", image: view },
    { number: "06", title: "Digital Marketing", image: view },
];

const ServicesWeProvide = () => {
    return (
        <div className="bg-primary">
            <div className="lg:px-[303px] lg_screen_px px-4 mx-auto pt-6 lg:pt-[111px] pb-6 lg:pb-[138px] text-center">
                {/* Title Section with animations */}
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center text-base gap-2 items-center link_style text-[#F52366]"
                >
                    <Image src={vector1} alt="vector" />
                    Trusted web design agency
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-2xl service_heading md:text-[35px] lg:text-[55px] font-bold leading-8 md:leading-11 lg:leading-[63px] uppercase text-white mb-4 md:mb-6 lg:mb-14"
                >
                    Most <span className="font-normal">experienced</span>  <br className='lg:hidden md:hidden block' /> services <br className='lg:block md:block hidden' />
                    we provided
                </motion.h1>

                {/* Service List */}
                <div className="lg:border-b border-[#FDFDFD29]">
                    {services.map((service, index) => {
                        const baseDelay = 0.2 + index * 0.1;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: baseDelay, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="service-hover-bg group relative flex items-center justify-between pt-[18px] lg:pt-[47px] lg:pb-[41px] lg:ps-5 lg:pe-[65px] rounded-lg lg:border-t border-[#FDFDFD29] transition-all duration-500 ease-in-out"
                            >
                                {/* Left Section: Number, Icon, and Text */}
                                <div className="flex items-center space-x-2 lg:space-x-4">
                                    <div className="text-lg lg:text-xl">
                                        <motion.span
                                            initial={{ opacity: 0, y: -20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: baseDelay + 0.1 }}
                                            viewport={{ once: true }}
                                            className="group-hover:hidden text-white text-lg lg:text-[28px] font-semibold"
                                        >
                                            {service.number}.
                                        </motion.span>
                                        <Image
                                            src={pinkstar}
                                            className="transform group-hover:block hidden transition-all duration-500 scale-110"
                                            alt="star"
                                        />
                                    </div>
                                    <div className="relative lg:pl-8">
                                        <motion.h2
                                            initial={{ opacity: 0, y: -20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: baseDelay + 0.15 }}
                                            viewport={{ once: true }}
                                            className="text-white text-lg text-start font-semibold"
                                        >
                                            {service.title}
                                        </motion.h2>
                                    </div>
                                </div>

                                {/* Right Section: Arrow and Image */}
                                <div className="flex items-center space-x-4">
                                    {/* Arrow Icon with animation */}
                                    <motion.svg
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: baseDelay + 0.2 }}
                                        viewport={{ once: true }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="23"
                                        height="23"
                                        viewBox="0 0 23 23"
                                        fill="none"
                                        className="transition-transform duration-300 transform group-hover:translate-x-1 lg:size-[23px] size-4"
                                    >
                                        <path d="M2 21L20.75 2.25M2 1H22V21" stroke="#F52366" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                                    </motion.svg>

                                    {/* Floating Image on Hover */}
                                    <div className="lg:block hidden absolute z-50 right-[37%] top-[-101%] h-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:-translate-y-2">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            className="object-cover h-[446px] w-[350px] rounded-lg shadow-xl"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServicesWeProvide;

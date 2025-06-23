'use client'
import React from 'react'
import hero from '/public/admindashboard/heropic.png'
import tab from '/public/admindashboard/tab-heropic.png'
import flutter from '/public/flutter-app.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 1, ease: 'easeInOut' } }
}

const Hero = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className='lg:pt-0 md:pt-8 pt-6 overflow-x-hidden flex lg:flex-row flex-col justify-between gap-[34px] md:gap-4 lg:gap-[66px] items-center lg:ps-[150px] ps-5 hero_bg'
        >
            {/* Text Section */}
            <motion.div variants={itemVariants} className='md:px-0 px-4'>
                <motion.h1
                    variants={itemVariants}
                    className='text-[26px] md:text-[40px] lg:text-[72px] font-bold md:leading-[50px] lg:leading-[72px] leading-[34px] whitespace-nowrap mb-3 md:mb-4 lg:mb-5 admin_heading'
                >
                    POS SAAS
                    <motion.span
                        variants={itemVariants}
                        className='text-red ms-2 relative inline-block'
                    >
                        Flutter APP
                        <motion.span
                            variants={underlineVariants}
                            initial="hidden"
                            animate="visible"
                            className="absolute bottom-0 left-0 overflow-hidden"
                        >
                            <Image src={flutter} alt="underline" className='w-full' />
                        </motion.span>
                    </motion.span>
                    <br />
                    web for Super Shop
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className='text-[#6B7280] text-base lg:text-lg font-medium mb-6 lg:mb-[30px] admin_hero_desc'
                >
                    Acnoo is a fully featured dashboard and admin template comes with tones of well designed
                    <br className='xl:block lg:hidden md:hidden hidden admin_hero_br' />
                    Awesome elements, components, widgets and applications and secondary pages.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={itemVariants}
                    className='flex gap-[11px] md:gap-4 lg:gap-6'
                >
                    {/* Button 1 */}
                    <button className="bg-red flex gap-1.5 items-center text-white text-sm lg:text-base font-bold px-5 lg:px-[36px] py-[14px] lg:h-[60px] h-12 whitespace-nowrap rounded-[10px] w-fit border border-red transition-all duration-300 group hover:bg-transparent hover:text-red">
                        Browse Frontend
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            className="transition-all duration-300"
                        >
                            <path
                                d="M4.42639 5.50055L0.507812 1.58199L1.6274 0.462402L6.66554 5.50055L1.6274 10.5386L0.507812 9.41906L4.42639 5.50055Z"
                                className="fill-white group-hover:fill-red transition-all duration-300"
                            />
                        </svg>
                    </button>

                    {/* Button 2 */}
                    <button className="flex gap-1.5 items-center bg-white text-black text-sm lg:text-base font-bold px-5 lg:px-[36px] py-[14px] lg:h-[60px] h-12 whitespace-nowrap rounded-[10px] w-fit transition-all duration-300 group hover:bg-red hover:text-white">
                        Browse Admin
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            className="transition-all duration-300"
                        >
                            <path
                                d="M12.4264 9.50055L8.50781 5.58199L9.6274 4.4624L14.6655 9.50055L9.6274 14.5386L8.50781 13.4191L12.4264 9.50055Z"
                                className="fill-black group-hover:fill-white transition-all duration-300"
                            />
                        </svg>
                    </button>
                </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                variants={itemVariants}
                className='lg:pt-20'
            >
                <Image className='lg:block hidden' src={hero} alt="hero" />
                <Image className='lg:hidden block' src={tab} alt="tab" />
            </motion.div>
        </motion.div>
    )
}

export default Hero

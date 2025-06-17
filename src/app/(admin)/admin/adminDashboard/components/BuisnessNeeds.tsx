'use client'
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
// import buisnessneeds from '/public/admindashboard/buisnessneeds.png'
import buisnessneeds11 from '/public/admindashboard/buisnessneeds11.png'
// import buisnessneeds1 from '/public/admindashboard/buisnessneeds1.png'
// import buisnessneeds2 from '/public/admindashboard/buisnessneeds2.png'

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};
const fadeLeftToRight = {
    hidden: { opacity: 0, x: -30 },
    visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

const BuisnessNeeds = () => {
    return (
        <div className='pb-8 lg:pb-[123px] lg:px-0 md:px-0 px-4 lg:pt-0 pt-9 lg:mt-20 text-center buisness-bg' style={{ fill: ' linear-gradient(180deg, #FFF 0%, #FFEFEF 100%)' }}>

            <div className='mb-5 lg:mb-16'>
                <motion.div
                    className="text-[#0B071A] text-base lg:text-lg font-medium mb-2 lg:mb-4 text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={0}
                >
                    <motion.span
                        className='bg-red rounded-[14px] text-sm lg:text-base font-bold text-center text-white px-3 h-[25px] w-fit me-[11px] inline-block'
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0.2}
                    >
                        New
                    </motion.span>
                    Greate features for POSpro
                </motion.div>
                <motion.h3
                    className='heading_text text-2xl md:text-[30px] lg:text-[60px] lg:leading-[72px] md:leading-10 leading-6 font-bold text-center text-black'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={0.4}
                >
                    POSpro Solve All Business <br className='lg:hidden block' /> Needs
                </motion.h3>
            </div>
            <div>
                <div>
                    <Image className=' mx-auto' src={buisnessneeds11} alt="" />
                </div>
                <div>
                    <ul className='flex lg:flex-row md:flex-row buisness_wrapper flex-col gap-3 md:gap-6 lg:gap-[70px] items-start md:items-center lg:items-center justify-center'>
                        {[
                            'One Click Installation',
                            'Mix and Match Section Blocks',
                            'No Coding Required.',
                        ].map((text, index) => (
                            <motion.li
                                key={index}
                                className='text-[#0B071A] text-base font-medium flex gap-4 items-center'
                                variants={fadeLeftToRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={index}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                    <circle cx="13" cy="13" r="13" fill="white" />
                                    <path d="M19 9L11.4375 16.5625L8 13.125" stroke="#C52127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>{text}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BuisnessNeeds
'use client'
import { motion } from "framer-motion";
import React from 'react';
import react from '/public/react.png'
import laravel from '/public/laravel.png'
import android from '/public/android.png'
import php from '/public/php.png'
import node from '/public/node.png'
import bootstrap from '/public/bootstrap.png'
import figma from '/public/figma.png'
import apple from '/public/apple.png'
import flutter from '/public/flutter.png'
import firebase from '/public/firebase.png'
import react1 from '/public/react1.png'
import laravel1 from '/public/laravel1.png'
import android1 from '/public/android1.png'
import php1 from '/public/php1.png'
import node1 from '/public/node1.png'
import bootstrap1 from '/public/bootstrap1.png'
import figma1 from '/public/figma1.png'
import apple1 from '/public/apple1.png'
import flutter1 from '/public/flutter1.png'
import firebase1 from '/public/firebase1.png'
import react2 from '/public/react2.png'
import laravel2 from '/public/laravel2.png'
import android2 from '/public/android2.png'
import php2 from '/public/php2.png'
import node2 from '/public/node2.png'
import bootstrap2 from '/public/bootstrap2.png'
import figma2 from '/public/figma2.png'
import apple2 from '/public/apple2.png'
import flutter2 from '/public/flutter2.png'
import firebase2 from '/public/firebase2.png'
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';



const HireUsForProjects = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
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
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    return (
        <div className=' bg-white relative shape_bg lg:pt-[96px] pt-5'>
            <div className='mx-4 sm:mx-auto  pb-6    relative overflow-hidden'>
                <div className='text-center lg:px-0 relative  flex flex-col  items-center justify-center '>
                    <h1 className='tenk_text' ref={ref}>
                        {inView && <CountUp end={10} duration={2} suffix="k" />}
                    </h1>

                    {/* <div className='z-50 flex flex-col lg:mt-0 mt-[80px] hire_text_wrap items-center justify-center '>
                        <div className="text-black text-sm lg:text-lg font-medium mb-4 text-center">
                            <span className='bg-[#F52366] rounded-[13px]  text-sm lg:text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>10K+</span>
                            Custom projects we already done
                        </div>
                        <h3 className='heading_text lg:text-[65px]  text-[24px] lg:leading-[72px] leading-[30px] font-bold text-center mb-8 text-primary'>
                            Hire Us For Your Next <br />
                            Projects
                        </h3>
                        <button className="bg-[#2353F5] flex gap-1.5 items-center text-white text-base font-bold px-6 lg:px-[36px] py-3 lg:py-[21px] rounded-[10px] w-fit">
                            Contact with us <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14.5874 7.25574L10.0899 2.75824C9.96869 2.6412 9.8064 2.57644 9.63794 2.57791C9.46947 2.57937 9.30833 2.64694 9.1892 2.76606C9.07008 2.88519 9.00251 3.04634 9.00104 3.2148C8.99958 3.38326 9.06434 3.54556 9.18138 3.66673L12.5821 7.06749H1.28312C1.11272 7.06749 0.949301 7.13518 0.828809 7.25567C0.708317 7.37616 0.640625 7.53958 0.640625 7.70999C0.640625 7.88039 0.708317 8.04381 0.828809 8.1643C0.949301 8.28479 1.11272 8.35249 1.28312 8.35249H12.5821L9.18138 11.7532C9.12001 11.8125 9.07106 11.8834 9.03739 11.9618C9.00372 12.0402 8.98599 12.1245 8.98525 12.2098C8.98451 12.2951 9.00077 12.3797 9.03307 12.4587C9.06538 12.5376 9.11309 12.6094 9.17341 12.6697C9.23374 12.73 9.30547 12.7777 9.38444 12.81C9.4634 12.8423 9.548 12.8586 9.63331 12.8579C9.71862 12.8571 9.80293 12.8394 9.88132 12.8057C9.95971 12.772 10.0306 12.7231 10.0899 12.6617L14.5874 8.16423C14.7078 8.04375 14.7755 7.88035 14.7755 7.70999C14.7755 7.53962 14.7078 7.37622 14.5874 7.25574Z" fill="white" />
                            </svg>
                        </button>
                    </div> */}
                    <motion.div
                        className='z-50 flex flex-col lg:mt-0 mt-[80px] hire_text_wrap items-center justify-center'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div
                            className="text-black text-sm lg:text-lg font-medium mb-4 text-center"
                            variants={itemVariants}
                        >
                            <span className='bg-[#F52366] rounded-[13px] text-sm lg:text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>
                                10K+
                            </span>
                            Custom projects we already done
                        </motion.div>

                        <motion.h3
                            className='heading_text lg:text-[65px] text-[24px] lg:leading-[72px] leading-[30px] font-bold text-center mb-8 text-primary'
                            variants={itemVariants}
                        >
                            Hire Us For Your Next <br />
                            Projects
                        </motion.h3>

                        <motion.button
                            variants={itemVariants}
                            className="bg-[#2353F5] flex gap-1.5 items-center text-white text-base font-bold px-6 lg:px-[36px] py-3 lg:py-[21px] rounded-[10px] w-fit"
                        >
                            Contact with us
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path d="M14.5874 7.25574L10.0899 2.75824C9.96869 2.6412 9.8064 2.57644 9.63794 2.57791C9.46947 2.57937 9.30833 2.64694 9.1892 2.76606C9.07008 2.88519 9.00251 3.04634 9.00104 3.2148C8.99958 3.38326 9.06434 3.54556 9.18138 3.66673L12.5821 7.06749H1.28312C1.11272 7.06749 0.949301 7.13518 0.828809 7.25567C0.708317 7.37616 0.640625 7.53958 0.640625 7.70999C0.640625 7.88039 0.708317 8.04381 0.828809 8.1643C0.949301 8.28479 1.11272 8.35249 1.28312 8.35249H12.5821L9.18138 11.7532C9.12001 11.8125 9.07106 11.8834 9.03739 11.9618C9.00372 12.0402 8.98599 12.1245 8.98525 12.2098C8.98451 12.2951 9.00077 12.3797 9.03307 12.4587C9.06538 12.5376 9.11309 12.6094 9.17341 12.6697C9.23374 12.73 9.30547 12.7777 9.38444 12.81C9.4634 12.8423 9.548 12.8586 9.63331 12.8579C9.71862 12.8571 9.80293 12.8394 9.88132 12.8057C9.95971 12.772 10.0306 12.7231 10.0899 12.6617L14.5874 8.16423C14.7078 8.04375 14.7755 7.88035 14.7755 7.70999C14.7755 7.53962 14.7078 7.37622 14.5874 7.25574Z" fill="white" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
                {/* lg device */}
                <div className='lg:block hidden hire_us_image'>
                    {[
                        { img: laravel, top: '5%', left: '0%', className: "laravel" },
                        { img: php, top: '-7%', left: '15%', className: "php" },
                        { img: android, top: '-11%', right: '14%', className: "android" },
                        { img: figma, top: '0%', right: '-2%', className: "figma" },
                        { img: apple, top: '23%', right: '8%', className: "apple" },
                        { img: flutter, bottom: '-15%', right: '12%', className: "flutters" },
                        { img: firebase, bottom: '-17%', right: '0%', className: "firebase" },
                        { img: react, bottom: '-8%', left: '17%', className: "react" },
                        { img: bootstrap, bottom: '-14%', left: '3%', className: "bootstrap" },
                        { img: node, top: '24%', left: '10%', className: "node" },
                    ].map((icon, i) => (
                        <div
                            key={i}
                            className={`absolute  jump ${icon.className}`}
                            style={{
                                top: icon.top,
                                bottom: icon.bottom,
                                left: icon.left,
                                right: icon.right,
                            }}
                        >
                            <Image src={icon.img} alt="tech" />
                        </div>
                    ))}
                </div>

                {/* md: device */}
                <div className='lg:hidden hidden  hire_us_image_md md:block'>
                    {[
                        { img: laravel1, top: '0%', left: '2%' },
                        { img: php1, top: '-3%', left: '15%' },
                        { img: android1, top: '-4%', right: '15%' },
                        { img: figma1, top: '7%', right: '0%' },
                        { img: apple1, top: '27%', right: '9%' },
                        { img: flutter1, bottom: '23%', right: '15%' },
                        { img: firebase1, bottom: '22%', right: '0%' },
                        { img: react1, bottom: '34%', left: '17%' },
                        { img: bootstrap1, bottom: '27%', left: '2%' },
                        { img: node1, top: '24%', left: '10%' },
                    ].map((icon, i) => (
                        <div
                            key={i}
                            className={`jump absolute`}
                            style={{
                                top: icon.top,
                                bottom: icon.bottom,
                                left: icon.left,
                                right: icon.right,
                            }}
                        >
                            <Image src={icon.img} alt="tech" />
                        </div>
                    ))}
                </div>
            </div>
            {/* sm device */}
            <div className='hidden hire_us_image_sm '>
                {[
                    { img: laravel2, top: '-38%', left: '41%', className: "laravel" },
                    { img: php2, top: '-21%', left: '62%', className: "php" },
                    { img: android2, top: '7%', left: '0%', className: "android" },
                    { img: figma2, top: '-12%', left: '13%', className: "figma" },
                    { img: apple2, top: '-19%', left: '40%', className: "apple" },
                    { img: flutter2, top: '0%', right: '3%', className: "flutter" },
                    { img: firebase2, top: '-40%', right: '23%', className: "firebase" },
                    { img: react2, top: '-34%', left: '78%', className: "react" },
                    { img: bootstrap2, top: '-33%', left: '19%', className: "bootstrap" },
                    { img: node2, top: '-39%', left: '3%', className: "node" },
                ].map((icon, i) => (
                    <div
                        key={i}
                        className={`absolute  jump ${icon.className}`}
                        style={{
                            top: icon.top,
                            left: icon.left,
                            right: icon.right,
                        }}
                    >
                        <Image src={icon.img} alt="tech" />
                    </div>
                ))}
            </div>
            <div className=' max-w-[343px] md:max-w-[745px] hire_line lg:max-w-[1460px] mx-auto bg-[#D7D4E7] w-full h-[1px] mt-6'></div>
        </div>
    )
}

export default HireUsForProjects



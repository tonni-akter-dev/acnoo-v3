'use client';
import React from 'react';
import banner from '/public/ecommerce/bannerimg.png';
import banner1 from '/public/ecommerce/bannerimg_fourteen.png';
import line from '/public/ecommerce/linebg.png';
import b1 from '/public/ecommerce/b1.png';
import b2 from '/public/ecommerce/b2.png';
import b3 from '/public/ecommerce/b3.png';
import b4 from '/public/ecommerce/b4.png';
import b5 from '/public/ecommerce/b5.png';
import b6 from '/public/ecommerce/b6.png';
import b7 from '/public/ecommerce/b7.png';
import border from '/public/ecommerce/dashboard-bottom-border.png';
import tabborder from '/public/ecommerce/tab-border.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const Banner = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <div className='relative overflow-hidden h-fit'>
            <div className='relative lg:h-[1300px] ecom_banner_wrapper'>
                <motion.div
                    className='ebanner_bg text-center pt-6 md:pt-[50px]  lg:pt-[104px] h-[460px] md:h-[570px] lg:h-[861px]'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        className='text-primary lg:leading-[72px] banner_ecom leading-[36px] md:leading-[50px] text-[28px] md:text-[40px] lg:text-[72px] font-bold mb-3 md:mb-5 '
                        variants={itemVariants}
                    >
                        <span className='relative inline-block'>
                            Acnoo Admin Dashboard
                            <span
                                className='lg:block hidden border_bottom_img absolute bottom-[-10px] right-[-23%] transform -translate-x-1/2 w-[380px] h-[10px] bg-no-repeat bg-center'
                                style={{ backgroundImage: `url(${border.src})`, backgroundSize: 'cover' }}
                            />
                        </span>
                        <span
                            className=' block lg:hidden absolute bottom-[-10px] right-0 border_bottom_img transform -translate-x-1/2 w-[300px] h-[10px] bg-no-repeat bg-center'
                            style={{ backgroundImage: `url(${tabborder.src})`, backgroundSize: 'cover' }}
                        />
                        <br />
                        For ECommerce
                    </motion.h2>
                    <motion.p
                        className='text-[#4B5563] text-base lg:text-lg mb-6 md:mb-9 lg:px-0 px-7  banner_text_desc' 
                        variants={itemVariants}
                    >
                        Acnoo is a fully featured dashboard and admin template comes with tones of well designed <br className='lg:block md:hidden hidden' />
                        Awesome elements, components, widgets and applications and secondary pages.
                    </motion.p>
                    <motion.div
                        className='flex gap-4 lg:gap-5 items-center justify-center'
                        variants={containerVariants}
                    >
                        <motion.button
                            className='bg-[#2F1C6A] border border-[#2F1C6A] hover:bg-transparent hover:text-[#2F1C6A] flex gap-1.5 items-center text-white banner_btn text-sm lg:text-base font-bold px-[14px] md:px-6 lg:px-[36px] py-[14px] md:py-4 lg:py-[21px] rounded-[6px] md:rounded-[10px] w-fit transition-all ease-in-out duration-300'
                        >
                            Browse Frontend
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                <path d="M14.349 5.73728L10.1727 1.56103C10.0602 1.45235 9.90951 1.39222 9.75308 1.39358C9.59666 1.39494 9.44702 1.45768 9.3364 1.5683C9.22579 1.67891 9.16304 1.82855 9.16168 1.98498C9.16032 2.14141 9.22046 2.29211 9.32914 2.40463L12.487 5.56247H1.99504C1.83681 5.56247 1.68507 5.62533 1.57318 5.73722C1.46129 5.8491 1.39844 6.00085 1.39844 6.15908C1.39844 6.31731 1.46129 6.46906 1.57318 6.58095C1.68507 6.69283 1.83681 6.75569 1.99504 6.75569H12.487L9.32914 9.91353C9.27215 9.96856 9.2267 10.0344 9.19544 10.1072C9.16417 10.18 9.14771 10.2583 9.14702 10.3375C9.14633 10.4167 9.16143 10.4953 9.19143 10.5686C9.22142 10.6419 9.26572 10.7085 9.32174 10.7645C9.37776 10.8205 9.44437 10.8648 9.51769 10.8948C9.59101 10.9248 9.66957 10.9399 9.74879 10.9392C9.82801 10.9386 9.90629 10.9221 9.97908 10.8908C10.0519 10.8596 10.1177 10.8141 10.1727 10.7571L14.349 6.58088C14.4608 6.469 14.5237 6.31728 14.5237 6.15908C14.5237 6.00088 14.4608 5.84916 14.349 5.73728Z" fill="currentColor" />
                            </svg>
                        </motion.button>
                        <motion.button
                            className='bg-[#2353F5] hover:bg-transparent hover:text-[#2353F5] border border-[#2353F5] transition-all ease-in-out duration-300 flex gap-1.5 items-center text-white banner_btn text-sm lg:text-base font-bold px-[14px] md:px-6 lg:px-[36px] py-[14px] md:py-4 lg:py-[21px] rounded-[6px] md:rounded-[10px] w-fit'
                            style={{ boxShadow: '0px 0px 18px 0px rgba(0, 0, 0, 0.09)' }}
                        >
                            Browse Admin
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                <path d="M14.349 5.73728L10.1727 1.56103C10.0602 1.45235 9.90951 1.39222 9.75308 1.39358C9.59666 1.39494 9.44702 1.45768 9.3364 1.5683C9.22579 1.67891 9.16304 1.82855 9.16168 1.98498C9.16032 2.14141 9.22046 2.29211 9.32914 2.40463L12.487 5.56247H1.99504C1.83681 5.56247 1.68507 5.62533 1.57318 5.73722C1.46129 5.8491 1.39844 6.00085 1.39844 6.15908C1.39844 6.31731 1.46129 6.46906 1.57318 6.58095C1.68507 6.69283 1.83681 6.75569 1.99504 6.75569H12.487L9.32914 9.91353C9.27215 9.96856 9.2267 10.0344 9.19544 10.1072C9.16417 10.18 9.14771 10.2583 9.14702 10.3375C9.14633 10.4167 9.16143 10.4953 9.19143 10.5686C9.22142 10.6419 9.26572 10.7085 9.32174 10.7645C9.37776 10.8205 9.44437 10.8648 9.51769 10.8948C9.59101 10.9248 9.66957 10.9399 9.74879 10.9392C9.82801 10.9386 9.90629 10.9221 9.97908 10.8908C10.0519 10.8596 10.1177 10.8141 10.1727 10.7571L14.349 6.58088C14.4608 6.469 14.5237 6.31728 14.5237 6.15908C14.5237 6.00088 14.4608 5.84916 14.349 5.73728Z" fill="currentColor" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </motion.div>

                <Image
                    className=" absolute bottom-[-27%] md:bottom-[-42%] ecom_banner_img lg:bottom-[-1%]
                     left-1/2 -translate-x-1/2 z-50 lg:block fourteen_hidden"
                    src={banner}
                    alt=""
                />
                <Image
                    className=" absolute bottom-[-27%] md:bottom-[-42%] ecom_banner_img lg:bottom-[2%]
                     left-1/2 -translate-x-1/2 z-50 lg:block fourteen_block"
                    src={banner1}
                    alt=""
                />

            </div>

            {/* Customize Section - Large Screen */}
            <motion.div
                className='lg:block hidden relative !z-[50] lg:mt-0 customize_wrapper mt-[260px]'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div
                    className='flex gap-6 customize_card_parent items-center justify-center'
                    variants={containerVariants}
                >
                    {[{ src: b1, text: "Perfect Responsive" },
                    { src: b2, text: "Highly Customizable" },
                    { src: b3, text: "SEO Friendly" },
                    { src: b4, text: "20 HTML Valid Files" }].map((item, i) => (
                        <motion.div
                            key={i}
                            className='lg:text-xl text-base customize_card border-[#00022914] rounded-[14px] w-fit md:py-3 md:px-[18px] lg:p-8 flex gap-3 items-center'
                            style={{ boxShadow: '0px 4px 27px rgba(0, 0, 0, 0.05)' }}
                            variants={itemVariants}
                        >
                            <Image src={item.src} alt="" />
                            <motion.p variants={itemVariants}>{item.text}</motion.p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className='flex gap-[14px] lg:gap-6 customize_card_parent items-center justify-center mt-5 mb-[60px]'
                    variants={containerVariants}
                >
                    {[{ src: b5, text: "Perfect Responsive" },
                    { src: b6, text: "Highly Customizable" },
                    { src: b7, text: "SEO Friendly" }].map((item, i) => (
                        <motion.div
                            key={i}
                            className='lg:text-xl customize_card text-base border border-[#00022914] rounded-[14px] w-fit p-8 flex gap-3 items-center'
                            style={{ boxShadow: '0px 4px 27px rgba(0, 0, 0, 0.05)' }}
                            variants={itemVariants}
                        >
                            <Image src={item.src} alt="" />
                            <motion.p variants={itemVariants}>{item.text}</motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Customize Section - Medium Screen */}
            <motion.div
                className='lg:hidden hidden md:block md_block relative !z-[50] lg:mt-0 mt-[260px]'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div
                    className='flex gap-6 items-center flex-wrap justify-center'
                    variants={containerVariants}
                >
                    {[{ src: b1, text: "Perfect Responsive" },
                    { src: b2, text: "Highly Customizable" },
                    { src: b3, text: "SEO Friendly" },
                    { src: b4, text: "20 HTML Valid Files" },
                    { src: b5, text: "Modern Design" },
                    { src: b6, text: "Fast Support" },
                    { src: b7, text: "Awesome Animation" }].map((item, i) => (
                        <motion.div
                            key={i}
                            className='lg:text-xl text-base border border-[#00022914] rounded-[14px] w-fit customize_md_device md:py-3 md:px-[18px] lg:p-8 flex gap-3 items-center'
                            style={{ boxShadow: '0px 4px 27px rgba(0, 0, 0, 0.05)' }}
                            variants={itemVariants}
                        >
                            <Image src={item.src} alt="" />
                            <motion.p variants={itemVariants}>{item.text}</motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Customize Section - Mobile Screen */}
            <div
                className='lg:hidden md:hidden md_hidden relative !z-[50] mt-[160px]'>
                <Marquee
                    speed={30}
                    loop={0}
                    direction="left"
                    className="flex gap-2 items-center justify-center mr-2"
                >
                    {[{ src: b1, text: "Perfect Responsive" },
                    { src: b2, text: "Highly Customizable" },
                    { src: b3, text: "SEO Friendly" },
                    { src: b4, text: "20 HTML Valid Files" }].map((item, i) => (
                        <div
                            key={i}
                            className='lg:text-xl mr-2 text-base border border-[#00022914] rounded-[14px] w-fit py-3 px-[18px] lg:p-8 flex gap-3 items-center'
                            style={{ boxShadow: '0px 4px 27px rgba(0, 0, 0, 0.05)' }}
                        >
                            <Image src={item.src} alt="" />
                            <p >{item.text}</p>
                        </div>
                    ))}
                </Marquee>
                <Marquee
                    speed={30}
                    loop={0}
                    direction="right"
                    className="flex gap-2 items-center justify-center mr-2 mt-2"
                >
                    {[{ src: b1, text: "Perfect Responsive" },
                    { src: b2, text: "Highly Customizable" },
                    { src: b3, text: "SEO Friendly" },
                    { src: b4, text: "20 HTML Valid Files" }].map((item, i) => (
                        <div
                            key={i}
                            className='lg:text-xl mr-2 text-base border border-[#00022914] rounded-[14px] w-fit py-3 px-[18px] lg:p-8 flex gap-3 items-center'
                            style={{ boxShadow: '0px 4px 27px rgba(0, 0, 0, 0.05)' }}
                        >
                            <Image src={item.src} alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Line Image - Send to back */}
            <Image className='absolute left-0 bottom-[18%] z-[-99999999] mt-20' src={line} alt="" />
        </div>
    );
};

export default Banner;
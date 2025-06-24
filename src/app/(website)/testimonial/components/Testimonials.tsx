// // Testimonials.jsx
// import React from "react";
// import t1 from '/public/t1.png'
// import t2 from '/public/t2..png'
// import t3 from '/public/t3.png'
// import t4 from '/public/t4.png'
// import t5 from '/public/t5.png'
// import Image from "next/image";

// const Testimonials = () => {
//     return (
//         <section className=" testimonial-bg  my-6 lg:mt-[117px] lg:mb-[237px] lg:px-0 px-5">
//             <div className="max-w-[1290px] testimonial mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col gap-[30px]">
//                 <div className="flex flex-col gap-6">
//                     <div className="bg-white shadow-md rounded-xl py-9 xs_padding px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit">
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
//                             from our sales and customer support
//                             teams using close. Even our co- sales
//                             founders are very happy. We get
//                             absolutely raving reviews from our
//                             Even our co- founders are very
//                             happy for services
//                         </p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg> 4.9
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-white shadow-md rounded-xl py-9 xs_padding px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit">
//                         <Image src={t3} alt="company logo" className="mb-[30px]" />
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
//                             from our sales and customer support
//                             teams using close. Even our co</p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg> 4.9
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* second */}
//                 <div className="flex flex-col gap-6">
//                     <div className="bg-white shadow-md rounded-xl py-9 px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit">
//                         <Image src={t1} alt="company logo" className="mb-[30px]" />
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
//                             from our sales and customer support
//                             teams using close. Even our co-
//                             founders are very happy.
//                         </p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg> 4.9
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white shadow-md rounded-xl py-9 px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit">
//                         <Image src={t4} alt="company logo" className="mb-[30px]" />
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
//                             from our sales and customer support
//                             teams using close. Even our co- sales
//                             founders are very happy. We get
//                             absolutely raving reviews from our
//                         </p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg> 4.9
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="lg:flex hidden flex-col gap-6">
//                     <div className="bg-white shadow-md rounded-xl py-9 px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit">
//                         <Image src={t2} alt="company logo" className="mb-[30px]" />
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
//                             from our sales and customer support
//                             teams using close. Even our co- sales
//                             founders are very happy. We get
//                             absolutely raving reviews from our
//                             Even our co- founders are very
//                             happy for services
//                         </p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg> 4.9
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white shadow-md rounded-xl py-9 px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit">
//                         <Image src={t5} alt="company logo" className="mb-[30px]" />
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
//                             from our sales and customer support
//                             teams using close. Even our compa
//                         </p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg> 4.9
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials;

'use client'
import React from "react";
import { motion } from "framer-motion";
import t1 from '/public/t1.png';
import t2 from '/public/t2..png';
import t3 from '/public/t3.png';
import t4 from '/public/t4.png';
import t5 from '/public/t5.png';
import Image from "next/image";

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (index: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: index * 0.2,
            duration: 0.5,
            ease: "easeInOut",
        },
    }),
};

const starVariants = {
    hidden: { scale: 1 },
    visible: {
        scale: [1, 1.2, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const Testimonials = () => {
    const testimonials = [
        { logo: t3, text: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co", hasLogo: true },
        { logo: t1, text: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co- founders are very happy.", hasLogo: true },
        { logo: t4, text: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our", hasLogo: true },
        { logo: t2, text: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services", hasLogo: true },
        { logo: t5, text: "We get absolutely raving reviews from our sales and customer support teams using close. Even our compa", hasLogo: true },
        { text: "We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services", hasLogo: false },
    ];

    return (
        <section className="testimonial-bg my-6 lg:mt-[117px] lg:mb-[237px] lg:px-0 px-5">
            <div className="max-w-[1290px] testimonial mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col gap-[30px]">
                {/* First Column */}
                <div className="flex flex-col gap-6 first_two_row">
                    <motion.div
                        className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 xs_padding px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out"
                        variants={cardVariants}
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ border: "1px solid transparent" }}>
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
                            {testimonials[5].text}
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">
                                    Founder & CEO <span className="text-[#150E3D]">Dulalix</span>
                                </p>
                            </div>
                            <motion.div
                                className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    variants={starVariants}
                                >
                                    <path
                                        d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                                        fill="white"
                                    />
                                </motion.svg>
                                4.9
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
        
                        className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 xs_padding px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out"
                        variants={cardVariants}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ border: "1px solid transparent" }}
                    >
                        <Image src={t3} alt="company logo" className="mb-[30px]" />
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
                            {testimonials[0].text}
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">
                                    Founder & CEO <span className="text-[#150E3D]">Dulalix</span>
                                </p>
                            </div>
                            <motion.div
                                className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    variants={starVariants}
                                >
                                    <path
                                        d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                                        fill="white"
                                    />
                                </motion.svg>
                                4.9
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Second Column */}
                <div className="flex flex-col gap-6">
                    <motion.div
                        // className="bg-white shadow-md rounded-xl py-9 px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit"
                        className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 xs_padding px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out"
                        variants={cardVariants}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ border: "1px solid transparent" }}
                    >
                        <Image src={t1} alt="company logo" className="mb-[30px]" />
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
                            {testimonials[1].text}
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">
                                    Founder & CEO <span className="text-[#150E3D]">Dulalix</span>
                                </p>
                            </div>
                            <motion.div
                                className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    variants={starVariants}
                                >
                                    <path
                                        d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                                        fill="white"
                                    />
                                </motion.svg>
                                4.9
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        // className="bg-white shadow-md rounded-xl py-9 px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit"
                        className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 xs_padding px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out"
                        variants={cardVariants}
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ border: "1px solid transparent" }}
                    >
                        <Image src={t4} alt="company logo" className="mb-[30px]" />
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
                            {testimonials[2].text}
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">
                                    Founder & CEO <span className="text-[#150E3D]">Dulalix</span>
                                </p>
                            </div>
                            <motion.div
                                className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    variants={starVariants}
                                >
                                    <path
                                        d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                                        fill="white"
                                    />
                                </motion.svg>
                                4.9
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Third Column (now same as first two columns) */}
                <div className="lg:flex hidden flex-col testimonial_3rd_row gap-6">
                    <motion.div
                        className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 xs_padding px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out" variants={cardVariants}
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ border: "1px solid transparent" }}
                    >
                        <Image src={t2} alt="company logo" className="mb-[30px]" />
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
                            {testimonials[3].text}
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">
                                    Founder & CEO <span className="text-[#150E3D]">Dulalix</span>
                                </p>
                            </div>
                            <motion.div
                                className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    variants={starVariants}
                                >
                                    <path
                                        d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                                        fill="white"
                                    />
                                </motion.svg>
                                4.9
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 xs_padding px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out" variants={cardVariants}
                        custom={5}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.2 }}
                        style={{ border: "1px solid transparent" }}
                    >
                        <Image src={t5} alt="company logo" className="mb-[30px]" />
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
                            {testimonials[4].text}
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">
                                    Founder & CEO <span className="text-[#150E3D]">Dulalix</span>
                                </p>
                            </div>
                            <motion.div
                                className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    variants={starVariants}
                                >
                                    <path
                                        d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                                        fill="white"
                                    />
                                </motion.svg>
                                4.9
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

// 'use client'
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import t1 from '/public/t1.png';
// import t2 from '/public/t2..png';
// import t3 from '/public/t3.png';
// import t4 from '/public/t4.png';
// import t5 from '/public/t5.png';

// const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: i * 0.2,
//             duration: 0.5,
//             ease: "easeOut"
//         }
//     })
// };

// const Testimonials = () => {
//     return (
//         <section className="testimonial-bg my-6 lg:mt-[117px] lg:mb-[237px] lg:px-0 px-5">
//             <div className="max-w-[1290px] testimonial mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col gap-[30px]">

//                 {/* First Column */}
//                 <div className="flex flex-col gap-6">
//                     <motion.div
//                         className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 xs_padding px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out"
//                         variants={cardVariants}
//                         initial="hidden"
//                         animate="visible"
//                         custom={0}
//                         whileHover={{
//                             // scale: 1.03,
//                             transition: { duration: 0.3, ease: "easeInOut" },
//                         }}
//                     >
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
//                             We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services
//                         </p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">
//                                     Founder & CEO <span className="text-[#150E3D]">Dulalix</span>
//                                 </p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg>
//                                 4.9
//                             </div>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 xs_padding px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out"
//                         variants={cardVariants}
//                         initial="hidden"
//                         animate="visible"
//                         custom={1}
//                         whileHover={{
//                             // scale: 1.03,
//                             transition: { duration: 0.3, ease: "easeInOut" },
//                         }}
//                     >
//                         <Image src={t3} alt="company logo" className="mb-[30px]" />
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
//                             We get absolutely raving reviews from our sales and customer support teams using close. Even our co
//                         </p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">
//                                     Founder & CEO <span className="text-[#150E3D]">Dulalix</span>
//                                 </p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg>
//                                 4.9
//                             </div>
//                         </div>
//                     </motion.div>

//                 </div>

//                 {/* Second Column */}
//                 <div className="flex flex-col gap-6">
//                     <motion.div
//                         className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out"
//                         variants={cardVariants}
//                         initial="hidden"
//                         animate="visible"
//                         custom={2}
//                         whileHover={{
//                             // scale: 1.03,
//                             transition: { duration: 0.3, ease: "easeInOut" },
//                         }}
//                     >
//                         <Image src={t1} alt="company logo" className="mb-[30px]" />
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
//                             We get absolutely raving reviews from our sales and customer support teams using close. Even our co-founders are very happy.
//                         </p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">
//                                     Founder & CEO <span className="text-[#150E3D]">Dulalix</span>
//                                 </p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg>
//                                 4.9
//                             </div>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out"
//                         variants={cardVariants}
//                         initial="hidden"
//                         animate="visible"
//                         custom={3}
//                         whileHover={{
//                             // scale: 1.03,
//                             transition: { duration: 0.3, ease: "easeInOut" },
//                         }}
//                     >
//                         <Image src={t4} alt="company logo" className="mb-[30px]" />
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
//                             We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our
//                         </p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">
//                                     Founder & CEO <span className="text-[#150E3D]">Dulalix</span>
//                                 </p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg>
//                                 4.9
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>


//                 {/* Third Column */}
//                 <div className="lg:flex hidden flex-col gap-6">
//                     <motion.div
//                         className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out"
//                         variants={cardVariants}
//                         initial="hidden"
//                         animate="visible"
//                         custom={4}
//                         whileHover={{
//                             // scale: 1.03,
//                             transition: { duration: 0.3, ease: "easeInOut" },
//                         }}
//                     >
//                         <Image src={t2} alt="company logo" className="mb-[30px]" />
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
//                             We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services
//                         </p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg> 4.9
//                             </div>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         className="bg-white shadow-md hover:shadow-2xl rounded-xl py-9 px-10 testimonial_card_cls md:w-[343px] lg:w-[410px] h-fit transition-all duration-300 ease-in-out"
//                         variants={cardVariants}
//                         initial="hidden"
//                         animate="visible"
//                         custom={5}
//                         whileHover={{
//                             // scale: 1.03,
//                             transition: { duration: 0.3, ease: "easeInOut" },
//                         }}
//                     >
//                         <Image src={t5} alt="company logo" className="mb-[30px]" />
//                         <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">
//                             We get absolutely raving reviews from our sales and customer support teams using close. Even our compa
//                         </p>
//                         <div className="flex items-end justify-between">
//                             <div>
//                                 <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
//                                 <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
//                             </div>
//                             <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                                     <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
//                                 </svg> 4.9
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Testimonials;

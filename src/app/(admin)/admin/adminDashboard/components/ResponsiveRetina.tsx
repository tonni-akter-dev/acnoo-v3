// import React from 'react'
// import responsive from '/public/admindashboard/responsive.png'
// import responsiveTab from '/public/admindashboard/responsive-tab.png'
// import resblur1 from '/public/admindashboard/resblur1.png'
// import Image from 'next/image'

// const ResponsiveRetina = () => {
//     return (
//         <div className='responsive_bg py-6 lg:py-[124px]'>
//             <div className='lg:ps-[201px] relative z-50  ps-5 lg:pe-[263px]  pe-5'>
//                 <div className='white_bg flex justify-center items-center '>
//                     <Image className='lg:block hidden absolute bottom-[-18%] left-0 rotate-[45deg] z-[-999]' src={resblur1} alt="" />
//                     <div className="grid grid-cols-1 lg:grid-cols-2 ">
//                         {/* Left Section */}
//                         <div className="  text-black lg:ps-[96px] md:ps-5 ps-3 lg:pe-0 md:pe-0 pe-3 ">
//                             <div className="text-black text-[15px] lg:text-lg font-medium mb-4 text-start">
//                                 <span className='bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
//                                 Responsive & device compitiably
//                             </div>
//                             <h3 className='text-[24px] md:text-3xl lg:text-[60px] md:leading-8 lg:leading-[72px]  leading-6   mb-3 lg:mb-7 text-black font-normal'>
//                                 Responsive <br />
//                                 <span className='font-bold'>  & Retina Ready</span>
//                             </h3>

//                             <p className="text-base font-normal text-[#6B7280]  mb-4 lg:mb-[30px]">
//                                 The layout is responsive and looks gorgeous and
//                                 professional on any major devices and this theme
//                                 comes with custom page templates.
//                             </p>
//                             <div className='hidden lg:flex gap-5 items-center'>
//                                 <button className="bg-red flex gap-1.5 items-center text-white text-sm lg:text-base font-bold px-5 lg:px-[36px] py-[14px] lg:h-[60px] h-12 whitespace-nowrap rounded-[10px] w-fit border border-red transition-all duration-300 group hover:bg-transparent hover:text-red">
//                                     Browse Frontend
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="7"
//                                         height="11"
//                                         viewBox="0 0 7 11"
//                                         fill="none"
//                                         className="transition-all duration-300"
//                                     >
//                                         <path
//                                             d="M4.42639 5.50055L0.507812 1.58199L1.6274 0.462402L6.66554 5.50055L1.6274 10.5386L0.507812 9.41906L4.42639 5.50055Z"
//                                             className="fill-white group-hover:fill-red transition-all duration-300"
//                                         />
//                                     </svg>
//                                 </button>
//                                 <button className="flex gap-1.5 items-center bg-white text-black text-sm lg:text-base font-bold px-5 lg:px-[36px] py-[14px] lg:h-[60px] h-12 whitespace-nowrap rounded-[10px] w-fit transition-all duration-300 group hover:bg-red hover:text-white">
//                                     Play Video
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="19"
//                                         height="19"
//                                         viewBox="0 0 19 19"
//                                         fill="none"
//                                         className="transition-all duration-300"
//                                     >
//                                         <path
//                                             d="M12.4264 9.50055L8.50781 5.58199L9.6274 4.4624L14.6655 9.50055L9.6274 14.5386L8.50781 13.4191L12.4264 9.50055Z"
//                                             className="fill-black group-hover:fill-white transition-all duration-300"
//                                         />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>

//                         <Image className='lg:block hidden ' src={responsive} alt="" />
//                         <Image className='lg:hidden block mx-auto' src={responsiveTab} alt="" />
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default ResponsiveRetina
'use client'
import React from 'react'
import responsive from '/public/admindashboard/responsive.png'
import responsiveTab from '/public/admindashboard/responsive-tab.png'
import resblur1 from '/public/admindashboard/resblur1.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.6, ease: 'easeOut' },
    }),
}

const ResponsiveRetina = () => {
    return (
        <div className='responsive_bg py-6 lg:py-[124px]'>
            <div className=' relative z-50 containers'>
                <div className='white_bg flex justify-center items-center'>
                    <Image className='lg:block hidden absolute bottom-[-18%] left-0 rotate-[45deg] z-[-999]' src={resblur1} alt="" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        {/* Left Section */}
                        <div className="text-black lg:ps-[96px] md:ps-5 ps-3 lg:pe-0 md:pe-0 pe-3">
                            <motion.div
                                className="text-black text-[15px] lg:text-lg font-medium mb-4 text-start"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0}
                                variants={textVariant}
                            >
                                <span className='bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                                Responsive & device compitiably
                            </motion.div>

                            <motion.h3
                                className='text-[24px] md:text-3xl lg:text-[60px] md:leading-8 lg:leading-[72px] leading-6 mb-3 lg:mb-7 text-black font-normal'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.2}
                                variants={textVariant}
                            >
                                Responsive <br />
                                <span className='font-bold'>& Retina Ready</span>
                            </motion.h3>

                            <motion.p
                                className="text-base font-normal text-[#6B7280] mb-4 lg:mb-[30px]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.4}
                                variants={textVariant}
                            >
                                The layout is responsive and looks gorgeous and professional on any major devices and this theme comes with custom page templates.
                            </motion.p>

                            <motion.div
                                className='hidden lg:flex gap-5 items-center'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.6}
                                variants={textVariant}
                            >
                                <button className="bg-red flex gap-1.5 items-center text-white text-sm lg:text-base font-bold px-5 lg:px-[36px] py-[14px] lg:h-[60px] h-12 whitespace-nowrap rounded-[10px] w-fit border border-red transition-all duration-300 group hover:bg-transparent hover:text-red">
                                    Browse Frontend
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none" className="transition-all duration-300">
                                        <path d="M4.42639 5.50055L0.507812 1.58199L1.6274 0.462402L6.66554 5.50055L1.6274 10.5386L0.507812 9.41906L4.42639 5.50055Z"
                                            className="fill-white group-hover:fill-red transition-all duration-300" />
                                    </svg>
                                </button>
                                <button className="flex gap-1.5 items-center bg-white text-black text-sm lg:text-base font-bold px-5 lg:px-[36px] py-[14px] lg:h-[60px] h-12 whitespace-nowrap rounded-[10px] w-fit transition-all duration-300 group hover:bg-red hover:text-white">
                                    Play Video
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none" className="transition-all duration-300">
                                        <path d="M12.4264 9.50055L8.50781 5.58199L9.6274 4.4624L14.6655 9.50055L9.6274 14.5386L8.50781 13.4191L12.4264 9.50055Z"
                                            className="fill-black group-hover:fill-white transition-all duration-300" />
                                    </svg>
                                </button>
                            </motion.div>
                        </div>

                        <motion.div
                            className="lg:block hidden"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <Image src={responsive} alt="responsive desktop preview" />
                        </motion.div>
                        <motion.div
                            className="lg:hidden block mx-auto"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <Image src={responsiveTab} alt="responsive tablet preview" />
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveRetina

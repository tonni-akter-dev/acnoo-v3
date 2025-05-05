import React from 'react'
import responsive from '../../../../../public/admindashboard/responsive.png'
import resblur1 from '../../../../../public/admindashboard/resblur1.png'
import Image from 'next/image'

const ResponsiveRetina = () => {
    return (
        <div className='responsive_bg'>


            <div className='lg:ps-[201px] relative z-50  ps-5 lg:pe-[263px] pe-5'>
                <div className='white_bg flex justify-center items-center'>
                   <Image className='absolute bottom-[-18%] left-0 rotate-[45deg] z-[-999]' src={resblur1} alt="" />
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Section */}
                        <div className="  text-black ps-[96px] ">
                            <div className="text-black text-lg font-medium mb-4 text-start">
                                <span className='bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                                respopnsive & device compitiably
                            </div>
                            <h3 className='text-[60px] lg:leading-[72px] leading-[30px] font-bold  mb-7 text-black'>
                                Responsive <br />
                                <span className='font-bold'>  & Retina Ready</span>
                            </h3>

                            <p className="text-base font-normal text-[#6B7280] mb-[30px]">
                                The layout is responsive and looks gorgeous and
                                professional on any major devices and this theme
                                comes with custom page templates.
                            </p>
                            <div className='flex gap-5 items-center'>
                                <button className={`bg-red flex gap-1.5 items-center text-white text-base font-bold px-[36px]  py-[21px] rounded-[10px] w-fit`}>
                                    Browse Frontend <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M12.4264 9.50055L8.50781 5.58199L9.6274 4.4624L14.6655 9.50055L9.6274 14.5386L8.50781 13.4191L12.4264 9.50055Z" fill="white" />
                                    </svg>
                                </button>
                                <button className={`bg-white flex gap-1.5 items-center text-black text-base font-bold px-[36px]  py-[21px] rounded-[10px] w-fit`} style={{ boxShadow: '0px 0px 18px 0px rgba(0, 0, 0, 0.09)' }}>
                                    Play video <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <path d="M12.4264 9.50055L8.50781 5.58199L9.6274 4.4624L14.6655 9.50055L9.6274 14.5386L8.50781 13.4191L12.4264 9.50055Z" fill="black" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <Image src={responsive} alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ResponsiveRetina
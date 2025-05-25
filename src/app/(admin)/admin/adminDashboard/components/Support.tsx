import React from 'react'
import support from '/public/admindashboard/support-img.png'
import Image from 'next/image'

const Support = () => {
    return (
        <div className='overflow-hidden relative  support_bg px-5 lg:py-0 py-[30px] lg:ps-[243px] lg:pe-[123px] items-center grid lg:grid-cols-2 grid-cols-1 justify-between'>
            <div>
                <div className="text-white text-base lg:text-lg font-medium mb-2 lg:mb-4 text-start">
                    <span className='bg-red rounded-[14px] text-sm lg:text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                    New Customer support featured reval
                </div>
                <h3 className='text-2xl md:text-[30px] lg:text-[60px] text-white font-bold leading-8 lg:leading-[56px] mb-3 lg:mb-5'>
                    Need support?start today
                </h3>
                <p className='text-[#CDD0DA] text-base lg:text-lg mb-6 font-medium'>The layout is responsive and looks gorgeous and
                    professional on any major devices and this theme
                    comes with custom page templates.</p>
                <button className={`bg-white flex gap-1.5 items-center text-[#210D0D]  border border-white hover:text-white hover:bg-transparent text-base font-bold  whitespace-nowrap group transition-all ease-in-out duration-300  px-3 md:px-5  lg:px-[36px]  lg:h-[60px] h-12 rounded-sm  lg:rounded-[10px] w-fit`}>
                    Get started support <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M12.4264 9.50104L8.50781 5.58247L9.6274 4.46289L14.6655 9.50104L9.6274 14.5391L8.50781 13.4196L12.4264 9.50104Z" className="fill-black group-hover:fill-white transition-all duration-300"  />
                    </svg>
                </button>
            </div>
            <div className=''>
                <Image className='lg:absolute bottom-0 lg:h-auto h-[325px] object-contain' src={support} alt="" />
            </div>
        </div>
    )
}

export default Support
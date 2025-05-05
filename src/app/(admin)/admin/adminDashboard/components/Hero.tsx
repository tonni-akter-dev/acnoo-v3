import React from 'react'
import hero from '/public/admindashboard/heropic.png'
import tab from '/public/admindashboard/tab-heropic.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='lg:pt-0  md:pt-8 pt-6 overflow-x-hidden flex lg:flex-row flex-col  justify-between gap-[34px] md:gap-4 lg:gap-[66px] items-center lg:ps-[150px] ps-5 hero_bg '>
            <div>
                <h1 className='text-[26px] md:text-[40px] lg:text-[72px] font-bold md:leading-[50px] lg:leading-[72px] leading-[34px] whitespace-nowrap mb-3 md:mb-4 lg:mb-5'>   POS SAAS <span className='text-red'>Flutter APP</span> <br />
                    web for Super Shop</h1>
                <p className='text-[#6B7280] text-base lg:text-lg font-medium mb-6 lg:mb-[30px] '>Acnoo is a fully featured dashboard and admin template comes with tones of well designed <br className='xl:block lg:hidden md:hidden hidden' /> Awesome elements, components, widgets and applications and secondary pages.</p>
                <div className='flex gap-[11px] md:gap-4 lg:gap-6'>
                    <button className="bg-red flex gap-1.5 items-center text-white text-sm lg:text-base font-bold  px-5 lg:px-[36px]  py-[14px] lg:h-[60px] h-12 whitespace-nowrap rounded-[10px] w-fit">
                        Browse Frontend <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                            <path d="M4.42639 5.50055L0.507812 1.58199L1.6274 0.462402L6.66554 5.50055L1.6274 10.5386L0.507812 9.41906L4.42639 5.50055Z" fill="white" />
                        </svg>
                    </button>
                    <button className="flex gap-1.5 items-center bg-white text-sm lg:text-base font-bold  px-5 lg:px-[36px]  py-[14px] lg:h-[60px] h-12 whitespace-nowrap rounded-[10px] w-fit">
                        Browse Admin <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M12.4264 9.50055L8.50781 5.58199L9.6274 4.4624L14.6655 9.50055L9.6274 14.5386L8.50781 13.4191L12.4264 9.50055Z" fill="black" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='lg:pt-20'> 
                <Image className='lg:block hidden' src={hero} alt="" />
                <Image className='lg:hidden block' src={tab} alt="" />
            </div>

        </div>
    )
}

export default Hero
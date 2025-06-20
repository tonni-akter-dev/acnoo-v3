import React from 'react'
import reslayout from '/public/ecommerce/reslay.png'
import desktop from '/public/ecommerce/monitor.png'
import laptop from '/public/ecommerce/laptop.png'
import tab from '/public/ecommerce/tab.png'
import phone from '/public/ecommerce/phone.png'
import Image from 'next/image'
import tabRes from '/public/ecommerce/tab-res.png'
import UniqueAdminSlider from './UniqueAdminSlider'

const ResponsiveLayout = () => {
    return (
        <div className='res_body  py-4 md:py-9 lg:py-9'>
            <div className='mb-5 text-center'>
                <div className="text-black text-lg font-medium mb-4 text-center">
                    <span className='bg-[#F52366] rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                    {` We've`} added <span className='text-[#2353F5]'>30+</span>new!
                </div>
                <h3 className='text-[28px] heading_text md:text-[30px] lg:text-[60px] lg:leading-[72px] leading-[30px] font-bold text-center text-primary'>
                    Responsive layout <br />
                    for any device
                </h3>
                <div className='flex justify-center '>
                    <Image className='lg:block hidden reslayout_img' src={reslayout} alt="" />
                    <Image className='lg:hidden block reslayout_img' src={tabRes} alt="" />
                </div>
            </div>
            <div className='flex gap-x-[101px] md:gap-x-[90px] flex-wrap lg:gap-x-[102px] lg:gap-y-0 md:gap-y-0 gap-y-6 justify-center mb-9 lg:mb-20'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <Image src={desktop} alt="" />
                    <p className='text-primary text-sm font-bold mt-5 mb-3'>1920 X 1080px</p>
                    <span className='text-[#898282] text-sm font-medium leading-4'>Full Screen <br />
                        Layout</span>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                    <Image src={laptop} alt="" />
                    <p className='text-primary text-sm font-bold mt-5 mb-3'>1364 X 768px</p>
                    <span className='text-[#898282] text-sm font-medium leading-4'>Laptop Screen

                        <br /> Layout</span>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                    <Image src={tab} alt="" />
                    <p className='text-primary text-sm font-bold mt-5 mb-3'>1024 X 768px</p>
                    <span className='text-[#898282] text-sm font-medium leading-4'>Tablet Screen <br />
                        Layout</span>
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                    <Image src={phone} alt="" />
                    <p className='text-primary text-sm font-bold mt-5 mb-3'>767 X 365px</p>
                    <span className='text-[#898282] text-sm font-medium leading-4'>Mobile Screen <br />
                        Layout</span>
                </div>
            </div>
            <UniqueAdminSlider />
        </div>
    )
}

export default ResponsiveLayout
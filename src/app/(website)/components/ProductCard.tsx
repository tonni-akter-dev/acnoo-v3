import React from 'react'
import product1 from '/public/home/product1.png'
import laravel from '/public/home/laravel.png'
import star from '/public/home/star.svg'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = () => {
    return (
        <div className='rounded-xl  bg-white ' style={{ boxShadow: "0px 2px 23px -5px rgba(18, 18, 18, 0.09)" }}>
            <div className='relative group'>
                <Image className='h-[273px] mb-4 lg:mb-[33px] w-full transition-transform duration-300 ' src={product1} alt="" />
                <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-xl bg-[rgba(24,26,30,0.3)] backdrop-blur-[4px]'>
                    <Link href='products-details' className="cursor-pointer">
                        <button className='cursor-pointer bg-[#2F1C6A] text-white w-[152px] text-base font-bold py-2.5 rounded-md mb-2.5'>Live Preview</button>
                    </Link>
                    <Link href={'#'} className="cursor-pointer"> <button className='bg-transparent text-white border border-[#E7ECF8] w-[152px] cursor-pointer text-base font-bold py-2.5 rounded-md'>Add to cart</button> </Link>
                <button className='absolute bottom-[15px] text-sm text-[#5B5B5B] left-[18px] bg-white p-1 flex gap-1.5 w-[96px] h-[29px] rounded-[15px] ' style={{boxShadow: "0px 4px 13px 0px rgba(95, 113, 182, 0.08)"}}>
                    <Image src={laravel} alt="" />
                    Laravel</button>
                </div>
            </div>
            <div className='lg:ps-[30px] lg:pb-[30px] lg:pe-10 px-4 pb-5'>
                <h4 className='text-primary text-lg font-bold mb-[14px] lg:mb-4 '>POS pro - POS Inventory Flutter App...</h4>
                <p className='text-[#3B4758] text-lg font-bold flex gap-2 items-center pb-3 lg:pb-[27px] border-b border-[#E7ECF8]'>$120 <span className='text-[#6B7280] text-sm font-medium '>$149</span></p>
                <div className='flex justify-between items-center mt-[14px] lg:mt-5'>
                    <p>800 Sales</p>
                    <div className='flex font-inter  text-base gap-2 items-center'>
                        <Image src={star} alt="" />
                        <span>(3)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
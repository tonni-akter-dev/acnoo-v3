import React from 'react'
import Image from 'next/image'
import { mobileProductFeatures, productFeatures } from '@/app/utils/data'

const ProductsFeature = () => {
    return (
        <div className='mt-9 lg:mt-[100px] mb-[83px]'>
            <div className='mb-9'>
                <div className="text-black text-lg font-medium mb-3 lg:mb-4 text-center">
                    <span className='bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                    Greate features for POSpro
                </div>
                <h3 className=' text-2xl md:text-3xl lg:text-[60px] lg:leading-[72px] leading-[30px] font-bold text-center lg:mb-9 md:mb-9 mb-4 text-primary'>
                    Product Features
                </h3>
            </div>
            {/* card */}
            <div className="lg:px-[230px] px-5 lg:block md:block hidden">
                <div className="grid grid-cols-2  md:grid-cols-4 ">
                    {productFeatures.map((feature, index) => (
                        <div style={{ background: `${feature.color}` }} key={index} className={`md:h-[100px] lg:h-[191px] flex flex-col items-center justify-center transition-shadow lg:py-11 py-[15px]`}>
                            <Image src={feature.icon} alt={feature.title} className="lg:size-[60px] size-[35px] mb-1 md:mb-2 lg:mb-[18px]" />
                            <span className="text-[15px] md:text-base lg:text-lg  font-bold text-[#404040]">{feature.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:px-[230px] px-5 lg:hidden md:hidden block">
                <div className="grid grid-cols-2  md:grid-cols-4 ">
                    {mobileProductFeatures.map((feature, index) => (
                        <div style={{ background: `${feature.color}` }} key={index} className={`md:h-[100px] lg:h-[191px] flex flex-col items-center justify-center transition-shadow lg:py-11 py-[15px]`}>
                            <Image src={feature.icon} alt={feature.title} className="lg:size-[60px] size-[35px] mb-1 md:mb-2 lg:mb-[18px]" />
                            <span className="text-[15px] md:text-base lg:text-lg  font-bold text-[#404040]">{feature.title}</span>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}

export default ProductsFeature
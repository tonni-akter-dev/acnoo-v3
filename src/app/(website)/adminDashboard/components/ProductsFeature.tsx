import { productFeatures } from '@/app/utils/data'
import Image from 'next/image'
import React from 'react'

const ProductsFeature = () => {
    return (
        <div className='mt-[100px] mb-[83px]'>
            <div className='mb-9'>
                <div className="text-black text-lg font-medium mb-4 text-center">
                    <span className='bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                    Greate features for POSpro
                </div>
                <h3 className='text-[60px] lg:leading-[72px] leading-[30px] font-bold text-center mb-7 text-primary'>
                    Product Features
                </h3>
            </div>
            {/* card */}
            <div className="lg:px-[230px] px-5 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
                    {productFeatures.map((feature, index) => (
                        <div style={{ background: `${feature.color}` }} key={index} className={`h-[191px] flex flex-col items-center justify-center transition-shadow`}>
                            <Image src={feature.icon} alt={feature.title} className=" mb-[18px]" />
                            <span className="text-lg  font-bold text-[#404040]">{feature.title}</span>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}

export default ProductsFeature
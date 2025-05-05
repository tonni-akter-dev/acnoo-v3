import React from 'react'
import ninty from '../../../../../public/ecommerce/90.png'
import p1 from '../../../../../public/ecommerce/p1.png'
import p2 from '../../../../../public/ecommerce/p2.png'
import p3 from '../../../../../public/ecommerce/p3.png'
import p4 from '../../../../../public/ecommerce/p4.png'
import p5 from '../../../../../public/ecommerce/p5.png'
import p6 from '../../../../../public/ecommerce/p6.png'
import p7 from '../../../../../public/ecommerce/p7.png'
import p8 from '../../../../../public/ecommerce/p8.png'
import p9 from '../../../../../public/ecommerce/p9.png'
import p10 from '../../../../../public/ecommerce/p10.png'
import p11 from '../../../../../public/ecommerce/p11.png'
import p12 from '../../../../../public/ecommerce/p12.png'
import Image from 'next/image'

const features = [
    { icon: p1, label: "Elementor Page Builder" },
    { icon: p2, label: "One-Click Demo Installer" },
    { icon: p3, label: "Clean Coding Theme" },
    { icon: p4, label: "Custom Color Option" },
    { icon: p5, label: "Flexible Theme Option" },
    { icon: p6, label: "6 Months Premium Support" },
    { icon: p7, label: "Multi Languages" },
    { icon: p8, label: "Light & Dark Mode" },
    { icon: p9, label: "Regular Bug Fixing" },
    { icon: p10, label: "PWA Ready System" },
    { icon: p11, label: "Google Map Location" },
    { icon: p12, label: "LTR & RTL" },
];

const ProductsFeature = () => {
    return (
        <div className='pt-30 '>
            <div className='mb-10 relative'>
                <div className='relative'> {/* Add relative positioning to the parent div */}
                    <div className='flex z-[-10] justify-center absolute bottom-0 left-[50%] transform -translate-x-1/2'> {/* Center the image */}
                        <Image className='' src={ninty} alt="" />
                    </div>
                    <div className="text-black text-lg font-medium mb-3 text-center">
                        <span className='bg-[#F5237E] rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                        {`We've`} added <span className='text-[#08090a]'>30+</span>new!
                    </div>
                    <h3 className='text-[60px] lg:leading-[72px] leading-[30px] font-bold text-center mb-7 text-black'>
                        Product Features
                    </h3>
                </div>
            </div>
            <section className=" bg-white text-center lg:px-[100px]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[30px] mx-auto px-4">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-[#FA176812] h-[211px]  rounded-[20px] px-[40px] py-11 flex flex-col items-center justify-center">
                            <Image src={feature.icon} alt={feature.label} className=" mb-[18px]" />
                            <p className="text-base  font-bold">{feature.label}</p>
                        </div>  
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ProductsFeature
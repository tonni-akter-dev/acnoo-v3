// import React from 'react'
// import ninty from '/public/ecommerce/90.png'
// import p1 from '/public/ecommerce/p1.png'
// import p2 from '/public/ecommerce/p2.png'
// import p3 from '/public/ecommerce/p3.png'
// import p4 from '/public/ecommerce/p4.png'
// import p5 from '/public/ecommerce/p5.png'
// import p6 from '/public/ecommerce/p6.png'
// import p7 from '/public/ecommerce/p7.png'
// import p8 from '/public/ecommerce/p8.png'
// import p9 from '/public/ecommerce/p9.png'
// import p10 from '/public/ecommerce/p10.png'
// import p11 from '/public/ecommerce/p11.png'
// import p12 from '/public/ecommerce/p12.png'
// import Image from 'next/image'

// const features = [
//     { icon: p1, label: "Elementor Page Builder", color: "#fff1f6" },
//     { icon: p2, label: "One-Click Demo Installer", color: "#fff9f0" },
//     { icon: p3, label: "Clean Coding Theme", color: "#f4f5ff" },
//     { icon: p4, label: "Custom Color Option", color: "#fcf3fc" },
//     { icon: p5, label: "Flexible Theme Option", color: "#f4f5ff" },
//     { icon: p6, label: "6 Months Premium Support", color: "#ecf8eb" },
//     { icon: p7, label: "Multi Languages", color: "#fff9f0" },
//     { icon: p8, label: "Light & Dark Mode", color: "#f1f1f1" },
//     { icon: p9, label: "Regular Bug Fixing", color: "#f0fafb" },
//     { icon: p10, label: "PWA Ready System", color: "#fff2f6" },
//     { icon: p11, label: "Google Map Location", color: "#f3faf5" },
//     { icon: p12, label: "LTR & RTL", color: "#f2f5fd" },
// ];

// const ProductsFeature = () => {
//     return (
//         <div className='pt-30 md:pt-60 lg:pt-30'>
//             <div className='mb-10 '>
//                 <div className='relative'>
//                     <div className='flex z-[-10] justify-center absolute bottom-[33%]  md:bottom-0  lg:bottom-0 left-[50%] transform -translate-x-1/2'>
//                         <Image className='' src={ninty} alt="" />
//                     </div>
//                     <div className="text-black text-lg font-medium mb-3 text-center">
//                         <span className='bg-[#F5237E] rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
//                         {`We've`} added <span className='text-[#08090a]'>30+</span>new!
//                     </div>
//                     <h3 className='text-[28px] md:text-[30px] lg:text-[60px] lg:leading-[72px] leading-[30px] font-bold text-center mb-7 text-black'>
//                         Product Features
//                     </h3>
//                 </div>
//             </div>
//             <section className=" bg-white text-center lg:px-[100px]">
//                 <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[9px] md:gap-3 lg:gap-[30px] mx-auto px-4">
//                     {features.map((feature, index) => (
//                         <div key={index} className="bg-[#FA176812] h-[122px] md:h-[134px] lg:h-[211px]  rounded-lg lg:rounded-[20px] 
//                         px-1.5 md:px-[30px] lg:px-[30px] py-4 md:py-5 lg:py-11 flex flex-col items-center justify-center">
//                             <Image src={feature.icon} alt={feature.label} className="lg:size-[53px] size-10 mb-[18px]" />
//                             <p className="text-[13px] lg:text-base  font-bold">{feature.label}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default ProductsFeature
import React from 'react';
import ninty from '/public/ecommerce/90.png';
import p1 from '/public/ecommerce/p1.png';
import p2 from '/public/ecommerce/p2.png';
import p3 from '/public/ecommerce/p3.png';
import p4 from '/public/ecommerce/p4.png';
import p5 from '/public/ecommerce/p5.png';
import p6 from '/public/ecommerce/p6.png';
import p7 from '/public/ecommerce/p7.png';
import p8 from '/public/ecommerce/p8.png';
import p9 from '/public/ecommerce/p9.png';
import p10 from '/public/ecommerce/p10.png';
import p11 from '/public/ecommerce/p11.png';
import p12 from '/public/ecommerce/p12.png';
import Image from 'next/image';

const features = [
    { icon: p1, label: "Elementor Page Builder", color: "#fff1f6" },
    { icon: p2, label: "One-Click Demo Installer", color: "#fff9f0" },
    { icon: p3, label: "Clean Coding Theme", color: "#f4f5ff" },
    { icon: p4, label: "Custom Color Option", color: "#fcf3fc" },
    { icon: p5, label: "Flexible Theme Option", color: "#f4f5ff" },
    { icon: p6, label: "6 Months Premium Support", color: "#ecf8eb" },
    { icon: p7, label: "Multi Languages", color: "#fff9f0" },
    { icon: p8, label: "Light & Dark Mode", color: "#f1f1f1" },
    { icon: p9, label: "Regular Bug Fixing", color: "#f0fafb" },
    { icon: p10, label: "PWA Ready System", color: "#fff2f6" },
    { icon: p11, label: "Google Map Location", color: "#f3faf5" },
    { icon: p12, label: "LTR & RTL", color: "#f2f5fd" },
];

const ProductsFeature = () => {
    return (
        <div className='pt-30 md:pt-60 lg:pt-30'>
            <div className='mb-10'>
                <div className='relative'>
                    <div className='flex z-[-10] justify-center absolute bottom-[33%] md:bottom-0 lg:bottom-0 left-[50%] transform -translate-x-1/2'>
                        <Image className='' src={ninty} alt="" />
                    </div>
                    <div className="text-black text-lg font-medium mb-3 text-center">
                        <span className='bg-[#F5237E] rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                        {`We've`} added <span className='text-[#08090a]'>30+</span>new!
                    </div>
                    <h3 className='text-[28px] md:text-[30px] lg:text-[60px] lg:leading-[72px] leading-[30px] font-bold text-center mb-7 text-black'>
                        Product Features
                    </h3>
                </div>
            </div>
            <section className="bg-white text-center lg:px-[100px]">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[9px] md:gap-3 lg:gap-[30px] mx-auto px-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: feature.color }} // Dynamic background color
                            className="h-[122px] md:h-[134px] lg:h-[211px] rounded-lg lg:rounded-[20px] 
                            px-1.5 md:px-[30px] lg:px-[30px] py-4 md:py-5 lg:py-11 flex flex-col items-center justify-center"
                        >
                            <Image src={feature.icon} alt={feature.label} className="lg:size-[53px] size-10 mb-[18px]" />
                            <p className="text-[13px] lg:text-base font-bold">{feature.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductsFeature;
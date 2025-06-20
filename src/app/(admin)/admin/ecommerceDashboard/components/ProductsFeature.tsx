import React from 'react';
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
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

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
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div>
            <div className='mb-10'>
                <div className='relative feature_mt'>
                    <h1 className='tenk_text feature_tenk mb-[-150px]' ref={ref}>
                        {inView && <CountUp end={90} duration={2} suffix="" />}
                    </h1>
                    <div className="feature_text_heading text-black text-lg font-medium mb-3 capitalize text-center">
                        <span className=' bg-[#F5237E] rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                        {`We've`} added <span className='text-[#2353F5]'>30+</span>new!
                    </div>
                    <h3 className='text-[28px]  md:text-[30px] feature_text_1  lg:text-[72px] lg:leading-[72px] leading-[30px] font-bold text-center mb-4 md:mb-7 text-[#1A0B49]'>
                        Product Features
                    </h3>
                </div>
            </div>
            <section className="bg-white text-center containers">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[9px] md:gap-3 lg:gap-[30px] mx-auto px-4 feature_gap_wrap">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: feature.color }}
                            className="h-[122px] md:h-[134px] lg:h-[211px] feature_card_wrap rounded-lg lg:rounded-[20px] 
    px-1.5 md:px-[30px] lg:px-[30px] py-4 md:py-5 lg:py-11 flex flex-col items-center justify-center 
    transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
                            <Image src={feature.icon} alt={feature.label} className="lg:size-[53px] size-10 mb-[18px]" />
                            <p className="text-[13px] lg:text-base font-medium">{feature.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductsFeature;
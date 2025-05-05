'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import screen1 from '../../../../../public/admindashboard/screen1.png';
import screen2 from '../../../../../public/admindashboard/screen2.png';
import screen3 from '../../../../../public/admindashboard/screen3.png';
import screen4 from '../../../../../public/admindashboard/screen4.png';
import applePhone from '../../../../../public/admindashboard/apple.png';

function AppScreenSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
    };

    const slides = [
        { image: screen1 },
        { image: screen1 },
        { image: screen2 },
        { image: screen3 },
        { image: screen4 },
        { image: screen1 },
        { image: screen2 },
        { image: screen3 },
        { image: screen4 },
        { image: screen1 },
        { image: screen2 },
        { image: screen3 },
        { image: screen4 },
    ];
    

    return (
        <div>
            <div className="mb-20 mt-[96px]">
                <div className="text-black text-lg font-medium mb-4 text-center">
                    <span className="bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]">
                        New
                    </span>
                    App will be updated soon
                </div>
                <h3 className="text-[60px] lg:leading-[72px] leading-[30px] font-bold text-center text-black">
                    POSpro App screen
                </h3>
            </div>
            <div className="relative mx-auto h-[725px]  ">
                <div className="absolute inset-0 z-0 rounded-[40px] overflow-hidden">
                    <Slider {...settings} className="h-full w-full">
                        {slides.map((slide, index) => (
                            <div key={index} className="w-[368px]  h-[725px] ">
                                <Image
                                    src={slide.image}
                                    alt={`Screen ${index + 1}`}
                                    className='h-full w-full'
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="absolute inset-0 top-[-9%] z-10 pointer-events-none">
                    <Image src={applePhone} alt="Apple Phone" layout="fill" objectFit="contain" />
                </div>
            </div>
        </div>
    );
}

export default AppScreenSlider;
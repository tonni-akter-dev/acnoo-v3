
'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import screen1 from '/public/admindashboard/screen1.png';
import screen2 from '/public/admindashboard/screen2.png';
import screen3 from '/public/admindashboard/screen3.png';
import screen4 from '/public/admindashboard/screen4.png';
import applePhone from '/public/admindashboard/apple.png';

function AppScreenSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        variableWidth: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    const slides = [
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
        <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden py-10">
            <div className="text-black text-base lg:text-lg font-medium  mb-3 lg:mb-4 text-center">
                <span className="bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]">
                    New
                </span>
                App will be updated soon
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-[60px]  font-bold text-gray-900 leading-tight mb-[50px]">
                POSpro App screen
            </h3>
            <div className="relative w-full max-w-full h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Slider {...settings} className="h-[500px]">
                        {slides.map((slide, index) => (
                            <div key={index} className="" style={{ width: '300px', marginRight: '42px' }}>
                                <div className="w-full h-[550px]">
                                    <Image
                                        src={slide.image}
                                        alt={`Screen ${index + 1}`}
                                        className="object-contain w-full h-full"
                                        width={300}
                                        height={550}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="absolute inset-0 flex top-[-50px] items-center justify-center z-10 pointer-events-none">
                    <Image
                        src={applePhone}
                        alt="Apple Phone"
                        className="w-[350px] h-[650px]"
                        width={350}
                        height={600}
                    />
                </div>
            </div>
        </div>
    );
}

export default AppScreenSlider;
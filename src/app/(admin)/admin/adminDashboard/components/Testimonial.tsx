
'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import Image from 'next/image';
import star from '/public/star.png';
import right from '/public/arrow-right.png';
import testimonial1 from '/public/admindashboard/testimonial1.png';
import testimonial2 from '/public/admindashboard/testimonial2.png';
import testimonial3 from '/public/admindashboard/testimonial3.png';
import testimonial4 from '/public/admindashboard/testimonial4.png';
import testimonial5 from '/public/admindashboard/testimonial5.png';
import rightshape from '/public/admindashboard/rightshape.png';
import leftshape from '/public/admindashboard/leftshape.png';
import rightshape1 from '/public/admindashboard/rightshape1.png';
import leftshape1 from '/public/admindashboard/leftshape1.png';

const testimonials = [
    { img: testimonial1, clases: "testimonial1", },
    { img: testimonial2, clases: "testimonial2" },
    { img: testimonial3, clases: "testimonial3" },
    { img: testimonial4, clases: "testimonial4" },
    { img: testimonial5, clases: "testimonial5" },
];

export default function Testimonial({ color }: { color?: string }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperInstance = useRef<SwiperType | null>(null);

    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            setSwiperReady(true);
        }
    }, []);

    const handleThumbnailClick = (index: number) => {
        swiperInstance.current?.slideTo(index);
    };

    return (
        <div className="pb-15 lg:pb-[90px] relative testimonial pt-6 md:pt-8 lg:pt-30 containers px-5">
            {/* Header */}
            <div className="text-center">
                <div className="text-black text-base lg:text-lg font-medium mb-3 lg:mb-4">
                    <span
                        style={{ backgroundColor: color || '#C52127' }}
                        className="rounded-[14px] text-sm font-bold text-white px-3 py-1 mr-3"
                    >
                        New
                    </span>
                    Customer satisfied about services
                </div>
                <h3 className="text-2xl heading_text md:text-3xl lg:text-[60px] mb-2 lg:mb-4 leading-[30px] lg:leading-[72px] font-bold text-black">
                    Client’s Testimonial
                </h3>
                <p className="text-base lg:text-lg text-[#6B7280] mb-5 md:mb-10">
                    Acnoo is a fully featured dashboard and admin template with tons of well-designed <br className="lg:block hidden" />
                    elements, components, widgets and applications.
                </p>
            </div>

            <div className="relative">
                {/* Left thumbnails */}
                <div className="absolute left-0 top-0 md:block md_block hidden">
                    <div className="relative">
                        <Image className="lg:block hidden" src={leftshape} alt="" />
                        <Image className="lg:hidden block left_shape" src={leftshape1} alt="" />
                        {[3, 4].map((index, i) => {
                            const { img, clases } = testimonials[index];
                            const pos = i === 0 ? 'top-[-35px] left-8' : 'bottom-[-35px] left-8';
                            return (
                                <div
                                    key={index}
                                    className={`absolute ${pos} ${clases} cursor-pointer border-[1.5px] ${activeIndex === index ? 'border-[#2353F5] rounded-full' : 'border-transparent'} transition-all duration-300`}
                                    onClick={() => handleThumbnailClick(index)}
                                >
                                    <Image
                                        src={img}
                                        alt={`Testimonial ${index + 1}`}
                                        className={`rounded-full object-cover block `}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation buttons */}
                <button
                    ref={prevRef}
                    className="absolute testimonial_arrow test_arrow_left flex justify-center items-center left-[35%] md:left-[43%] lg:left-[46%] bottom-[-33%] lg:bottom-[-20%] -translate-y-1/2 z-10 w-10 h-10 rounded-full"
                    style={{ backgroundColor: activeIndex === 0 ? '#ffffff' : color || '#C52127' }}
                >
                    <Image
                        src={right}
                        alt="prev"
                        className={`w-4 h-4 transform rotate-180 ${activeIndex === 0 ? 'invert' : ''}`}
                    />
                </button>

                <button
                    ref={nextRef}
                    className="absolute flex testimonial_arrow  test_arrow_right justify-center items-center right-[35%] md:right-[43%] lg:right-[46%] bottom-[-33%] lg:bottom-[-20%] -translate-y-1/2 z-10 w-10 h-10 rounded-full"
                    style={{ backgroundColor: activeIndex === testimonials.length - 1 ? '#ffffff' : color || '#C52127' }}
                >
                    <Image
                        src={right}
                        alt="next"
                        className={`w-4 h-4 ${activeIndex === testimonials.length - 1 ? 'invert' : ''}`}
                    />
                </button>

                {/* Swiper */}
                {swiperReady && (
                    <Swiper
                        effect="cards"
                        loop={true}
                        grabCursor
                        modules={[EffectCards, Navigation]}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        onSwiper={(swiper) => {
                            swiperInstance.current = swiper;
                            if (typeof swiper.params.navigation === 'object') {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        className="mySwiper h-[380px] sm:h-[420px]"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className={`lg:px-[110px] px-4 py-4 lg:py-10 flex flex-col items-center rounded-[20px] bg-white testimonial_card`}>
                                    <Image
                                        className="md:size-22 size-16"
                                        src={testimonial.img}
                                        alt={`Testimonial ${index + 1}`}
                                    />
                                    <p className="mt-2.5 lg:mt-[22px] mb-3 lg:mb-8 text-[#3C4256] text-center text-sm lg:text-xl font-medium line-clamp-3-custom">
                                        The experience with Ave has been nothing short of amazing. So
                                        much better than other themes I’ve used – wish I had seen this one
                                        first and saved my wasted time and money on other themes! I’d
                                        recommend this theme in a heartbeat!
                                    </p>
                                    <div className="text-center flex flex-col items-center lg:gap-1">
                                        <h5 className="text-[#0B071A] text-base lg:text-lg font-bold">Mathias Herasen</h5>
                                        <p className="text-[#6B7280] text-base font-medium">ThemeForest Exclusive</p>
                                        <Image className="lg:block hidden" src={star} alt="Rating" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Right thumbnails */}
                <div className="absolute right-0 top-0 md_block md:block hidden">
                    <div className="relative">
                        <Image className="lg:block hidden" src={rightshape} alt="" />
                        <Image className="lg:hidden right_shape block" src={rightshape1} alt="" />
                        {[0, 1, 2].map((index) => {
                            const { img, clases } = testimonials[index];
                            const pos =
                                index === 0
                                    ? 'top-[-35px] left-[70px]'
                                    : index === 1
                                        ? 'bottom-[-90px] left-[-24px]'
                                        : 'bottom-[115px] right-[-70px]';
                            return (
                                <div
                                    key={index}
                                    className={`absolute ${pos}  ${clases} cursor-pointer border-[1.5px] ${activeIndex === index ? 'border-[#2353F5] rounded-full' : 'border-transparent'} transition-all duration-300`}
                                    onClick={() => handleThumbnailClick(index)}
                                >
                                    <Image
                                        src={img}
                                        alt={`Testimonial ${index + 1}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

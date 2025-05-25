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

const testimonials = [
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
    testimonial5,
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
        if (swiperInstance.current) {
            swiperInstance.current.slideTo(index);
        }
    };

    return (
        <div className="mb-15 lg:mb-[90px] relative testimonial pt-6 md:pt-8 lg:pt-30 containers px-5">
            {/* Header */}
            <div>
                <div className="text-black text-base lg:text-lg font-medium mb-3 lg:mb-4 text-center">
                    <span
                        style={{ backgroundColor: color || '#C52127' }}
                        className="rounded-[14px] text-sm font-bold text-center text-white px-3 py-1 w-fit mr-3"
                    >
                        New
                    </span>
                    Customer satisfied about services
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-[60px] mb-2 lg:mb-4 lg:leading-[72px] leading-[30px] font-bold text-center text-black">
                    Client’s Testimonial
                </h3>
                <p className="text-base lg:text-lg text-[#6B7280] mb-5 md:mb-10 text-center">
                    Acnoo is a fully featured dashboard and admin template comes with tons of well designed <br className="lg:block hidden" />
                    Awesome elements, components, widgets and applications and secondary pages.
                </p>
            </div>

            {/* Testimonial Swiper */}
            <div className="relative">
                {/* Left decorative shapes */}
                <div className="absolute left-0 top-0">
                    <div className="relative">
                        <Image src={leftshape} alt="" />
                        <Image
                            className={`absolute top-[-35px] left-8 cursor-pointer border-[1.5px] transition-all duration-300 ${activeIndex === 3 ? 'border-[#2353F5] rounded-full' : 'border-transparent'
                                }`}
                            src={testimonial4}
                            alt=""
                            onClick={() => handleThumbnailClick(3)}
                        />
                        <Image
                            className={`absolute bottom-[-35px] left-8 cursor-pointer border-[1.5px] transition-all duration-300 ${activeIndex === 4 ? 'border-[#2353F5] rounded-full' : 'border-transparent'
                                }`}
                            src={testimonial5}
                            alt=""
                            onClick={() => handleThumbnailClick(4)}
                        />
                    </div>
                </div>

                {/* Navigation buttons */}
                <button
                    ref={prevRef}
                    className={`absolute flex justify-center items-center left-[35%] md:left-[43%] lg:left-[46%] bottom-[-33%] lg:bottom-[-18%] -translate-y-1/2 z-10 
              w-10 h-10 rounded-full transition-all`}
                    style={{ backgroundColor: activeIndex === 0 ? '#ffffff' : color || '#C52127' }}
                >
                    <Image
                        src={right}
                        alt=""
                        className={`w-4 h-4 transform ${activeIndex === 0 ? 'rotate-180 invert' : 'rotate-180'}`}
                    />
                </button>
                <button
                    ref={nextRef}
                    className={`absolute flex justify-center items-center right-[35%] md:right-[43%] lg:right-[46%] bottom-[-33%] lg:bottom-[-18%] -translate-y-1/2 z-10 
              w-10 h-10 rounded-full transition-all`}
                    style={{ backgroundColor: activeIndex === testimonials.length - 1 ? '#ffffff' : color || '#C52127' }}
                >
                    <Image
                        src={right}
                        alt=""
                        className={`w-4 h-4 ${activeIndex === testimonials.length - 1 ? 'invert' : ''}`}
                    />
                </button>

                {/* Swiper */}
                {swiperReady && (
                    <Swiper
                        effect="cards"
                        grabCursor={true}
                        modules={[EffectCards, Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
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
                        className="mySwiper"
                    >
                        {testimonials.map((testimonialImg, index) => (
                            <SwiperSlide key={index}>
                                <div className="lg:px-0 px-4 bg-white flex justify-center flex-col items-center py-4 lg:py-10 rounded-[20px]">
                                    <Image
                                        className="md:size-22 size-16"
                                        src={testimonialImg}
                                        alt={`Testimonial ${index + 1}`}
                                    />
                                    <p className="mt-2.5 lg:mt-[22px] mb-3 lg:mb-8 text-[#3C4256] text-center text-sm lg:text-xl font-medium">
                                        The experience with Ave has been nothing short of amazing. So much better than other themes I’ve used – wish I had seen this{' '}
                                        <span className="md:block hidden">one first and saved my wasted time and money on</span>{' '}
                                        <span className="lg:block hidden">other themes! I’d recommend this theme in a heartbeat!</span>
                                    </p>
                                    <div className="text-center flex flex-col justify-center items-center lg:gap-1">
                                        <h5 className="text-[#0B071A] text-base lg:text-lg font-bold">Mathias Herasen</h5>
                                        <p className="text-[#6B7280] text-base font-medium">ThemeForest Exclusive</p>
                                        <Image className="lg:block hidden" src={star} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Right decorative thumbnails (ONLY 3 images) */}
                <div className="absolute right-0 top-0">
                    <div className="relative">
                        <Image src={rightshape} alt="" />
                        {[0, 1, 2].map((index) => (
                            <Image
                                key={index}
                                src={testimonials[index]}
                                alt=""
                                onClick={() => handleThumbnailClick(index)}
                                className={`absolute cursor-pointer border-[1.5px] transition-all duration-300 ${activeIndex === index ? 'border-[#2353F5] rounded-full' : 'border-transparent'
                                    } ${index === 0
                                        ? 'top-[-35px] left-[70px]'
                                        : index === 1
                                            ? 'bottom-[-90px] left-[-24px]'
                                            : 'bottom-[115px] right-[-70px]'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

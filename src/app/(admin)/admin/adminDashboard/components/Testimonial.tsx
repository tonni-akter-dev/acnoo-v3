'use client'
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import Image from 'next/image';
import profile from '/public/admindashboard/profile.png';
import star from '/public/star.png';
import test1 from '/public/admindashboard/test1.png';
import test2 from '/public/admindashboard/test2.png';
import right from '/public/arrow-right.png';
import mobilet1 from '/public/mobile-test1.png';
import mobiletest2 from '/public/mobile-test2.png';

export default function Testimonial({ color }: { color?: string }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = 5;

    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            setSwiperReady(true);
        }
    }, [prevRef, nextRef]);

    return (
        <div className='mb-15 lg:mb-[90px] relative testimonial  pt-6 md:pt-8 lg:pt-30 lg:px-[162px] px-5'>
            <div>
                <div className="text-black text-base lg:text-lg font-medium  mb-3 lg:mb-4 text-center">
                    <span style={{ backgroundColor: color || '#C52127' }} className={`rounded-[14px] text-sm font-bold text-center text-white px-3 py-1 w-fit mr-3`}>
                        New
                    </span>
                    Customer satisfied about services
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-[60px] mb-2 lg:mb-4 lg:leading-[72px] leading-[30px] font-bold text-center text-black">
                    {`Client’s`} Testimonial</h3>
                <p className='text-base lg:text-lg text-[#6B7280] mb-5 md:mb-10 text-center'>
                    Acnoo is a fully featured dashboard and admin template comes with tons of well designed <br className='lg:block hidden' />
                    Awesome elements, components, widgets and applications and secondary pages.
                </p>
            </div>
            <Image className='lg:block hidden absolute left-[50px] top-[185px]' src={test1} alt="" />
            <Image className='lg:hidden md:block hidden absolute left-[0px] top-[210px]' src={mobilet1} alt="" />
            <div className="relative">
                <button
                    ref={prevRef}
                    className={`absolute flex justify-center items-center left-[35%] md:left-[43%] lg:left-[46%] bottom-[-33%] lg:bottom-[-18%] -translate-y-1/2 z-10 
        w-10 h-10 rounded-full transition-all
      
         `}
                    style={{ backgroundColor: activeIndex === 0 ? '#ffffff' : (color ? color : '#C52127') }}


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
                    style={{ backgroundColor: activeIndex === totalSlides - 1 ? '#ffffff' : (color ? color : '#C52127') }}
                >
                    <Image
                        src={right}
                        alt=""
                        className={`w-4 h-4 ${activeIndex === totalSlides - 1 ? 'invert' : ''}`}
                    />
                </button>

                {swiperReady && (
                    <Swiper
                        effect="cards"
                        grabCursor={true}
                        modules={[EffectCards, Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onSwiper={(swiper: SwiperType) => {
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
                        {[1, 2, 3, 4, 5].map(data => (
                            <SwiperSlide key={data}>
                                <div className='lg:px-0 px-4 bg-white flex justify-center flex-col items-center py-4 lg:py-10 rounded-[20px]'>
                                    <Image className="md:size-22 size-16" src={profile} alt="" />
                                    <p className='mt-2.5 lg:mt-[22px] mb-3 lg:mb-8 text-[#3C4256] text-center text-sm lg:text-xl font-medium'>
                                        The experience with Ave has been nothing short of amazing. So
                                        much better than other themes I’ve used – wish I had seen this <span className='md:block hidden'> one
                                            first and saved my wasted time and money on</span> <span className='lg:block hidden'>other themes! I’d
                                                recommend this theme in a heartbeat!</span>
                                    </p>
                                    <div className='text-center flex flex-col justify-center items-center lg:gap-1'>
                                        <h5 className='text-[#0B071A] text-base lg:text-lg font-bold'>Mathias Herasen</h5>
                                        <p className='text-[#6B7280] text-base font-medium'>ThemeForest Exclusive</p>
                                        <Image className='lg:block hidden' src={star} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
            <Image className='lg:block hidden absolute right-0 top-[185px]' src={test2} alt="" />
            <Image className='lg:hidden md:block hidden absolute right-0 top-[210px]' src={mobiletest2} alt="" />
        </div>
    );
}

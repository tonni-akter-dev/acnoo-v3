'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import Image from 'next/image';

import img1 from '/public/png/case-slider-1.svg';
import img2 from '/public/png/case-slider-2.svg';
import img3 from '/public/png/casestudyslider3.png';
import img4 from '/public/png/casestudyslider4.png';
import img5 from '/public/png/case-slider-1.svg';
import img6 from '/public/png/case-slider-2.svg';
import img7 from '/public/png/casestudyslider3.png';
import img8 from '/public/png/casestudyslider4.png';

const caseStudyImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const CaseStudylefttToRightSlider = () => {
  return (
    <div className="case-slider__wrapper pt-[13px] md:pt-[33px] lg:pt-[110px]">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.5} 
        spaceBetween={10}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 4,
          },
        }}
        className="case-slider__container"
      >
        {caseStudyImages.map((img, index) => (
          <SwiperSlide key={`case-slide-${index}`}>
            <div className="case-slider__card overflow-hidden">
              <Image
                src={img}
                alt={`Case Study ${index + 1}`}
                className="w-full h-[172px] md:h-[241px] lg:h-[567px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CaseStudylefttToRightSlider;
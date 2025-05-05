'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

import Image from 'next/image'

import img1 from '/public/png/casestudyslider5.png'
import img2 from '/public/png/casestudyslider6.png'
import img3 from '/public/png/casestudyslider7.png'
import img4 from '/public/png/casestudyslider8.png'
import img5 from '/public/png/casestudyslider5.png'
import img6 from '/public/png/casestudyslider6.png'
import img7 from '/public/png/casestudyslider7.png'
import img8 from '/public/png/casestudyslider8.png'

const images = [img1, img2, img3, img4, img5, img6, img7, img8]

const CaseStudyRightToLeftSlider = () => {
  return (
    <div className='w-full mt-0'>
      <Swiper
        className='w-full h-[119px] md:h-[241px] lg:h-[567px]'
        
        modules={[Autoplay]}
        loop={true}
        slidesPerView={3.5}
        spaceBetween={10}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3.5,
            spaceBetween: 4,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className='h-[119px] md:h-[241px] lg:h-[567px]'
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-cover'
              style={{ height: '100%' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CaseStudyRightToLeftSlider

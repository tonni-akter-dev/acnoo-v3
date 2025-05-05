'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import img1 from '/public/png/slider1.png'
import img2 from '/public/png/slider2.png'
import img3 from '/public/png/slider3.png'
import img4 from '/public/png/slider1.png'
import img5 from '/public/png/slider2.png'
import img6 from '/public/png/slider3.png'
import AdminPortfolio from './AdminPortfolio'

const images = [img1, img2, img3, img4, img5, img6]

const CaseStudyBottomSlider = () => {
    return (
        <div className='case-slider__wrapper pt-5 lg:pt-[100px] mx-5 lg:mx-20 mb-8 lg:mb-[120px]'>
            <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          speed={3000} 
          autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
              pauseOnMouseEnter: false,
          }}
          breakpoints={{
              320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
              },
              640: {
                  slidesPerView: 2,
                  spaceBetween: 4,
              },
              1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
              },
          }}
          centeredSlides={true}
          initialSlide={1} 
          className="case-slider__container"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <AdminPortfolio
                            subtitle='Web Design & Development'
                            img={images[index]}
                            title='search engine optimization'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CaseStudyBottomSlider

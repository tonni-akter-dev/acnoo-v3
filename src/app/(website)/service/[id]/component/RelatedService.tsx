'use client';
import React from 'react';
import { servicesData } from '@/app/utils/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ServiceCard from '@/app/(website)/components/ServiceCard';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const RelatedService = () => {
  return (
    <div className='lg:ps-[250px] related_wrap px-5'>
      <div className="relatedService my-10 lg:my-[100px] pe-3 md:p-0">
        <div className="mx-auto">
          <motion.div
            className='flex items-center gap-2.5 mb-3.5'
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className='text-white bg-[#F52366] px-3.5 h-6 rounded-full text-base font-bold'>
              new
            </h2>
            <p className='text-lg text-black font-medium'>
              {`We've raised `}<span className='text-[#2353F5]'>$6</span> million!
            </p>
          </motion.div>

          <motion.h1
            className='text-2xl md:text-[30px] lg:text-[56px] text-primary font-bold'
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Related Service
          </motion.h1>
        </div>

        <div className='mt-3.5'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
              1520: { slidesPerView: 3 },
              1920: { slidesPerView: 4 },
            }}
          >
            {servicesData.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ServiceCard
                    link={item.id}
                    title={item.title}
                    des={item.des}
                    price={item.price}
                    rating={item.rating}
                    img={item.img}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RelatedService;

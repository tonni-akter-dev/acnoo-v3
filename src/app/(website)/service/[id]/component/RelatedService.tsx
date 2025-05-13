'use client'
import { servicesData } from '@/app/utils/data';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ServiceCard from '@/app/(website)/components/ServiceCard';

const RelatedService = () => {
    return (
        <div className='lg:ps-[150px] ps-5'>
            <div className="relatedService my-10 lg:my-[100px] p-3 md:p-0">
                <div className=" md:px-5 lg:px-0 mx-auto">
                    <div className='flex items-center gap-2.5 mb-3.5'>
                        <h2 className='text-white bg-[#F52366] px-3.5 h-6 rounded-full text-base font-bold'>new</h2>
                        <p className='text-lg text-black font-medium'>{`We've raised `}<span className='text-[#2353F5]'>$6</span> million!</p>
                    </div>
                    <h1 className='text-2xl md:text-[30px] lg:text-[56px] text-primary font-bold'>Related Service</h1>

                </div>
                <div className='mt-3.5 lg:mx-0 md:mx-5'>
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
                            <ServiceCard
                                link={item.id}
                                title={item.title}
                                des={item.des}
                                price={item.price}
                                rating={item.rating}
                                img={item.img}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </div>
        </div>
    );
};

export default RelatedService;
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../../components/ProductCard";

const FreeResource = () => {
  return (
    <div className="free_wrapper lg:px-[85px] px-5  mt-8 lg:mt-[115px]">
      <div className="text-black text-lg font-medium mb-4 text-center">
        <span className="bg-[#F52366] text-base font-bold text-center text-white px-3 h-[25px] py-1 rounded-full w-fit me-[11px]">
          New
        </span>
        {`We've`} Raised <span className="text-[#2353F5]">30+</span>million!
      </div>
      <h3 className="lg:text-[65px]  text-[24px] lg:leading-[72px] leading-[30px] font-bold text-center mb-8 text-primary">
        Free Resource
      </h3>

      {/* Swiper Slider */}
      <div className=" lg:block hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="mb-[60px]"
        >
          {/* Slides */}
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lg:hidden  flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 justify-center  items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <button className="mt-6 bg-[#2353F5] flex gap-1.5 items-center text-white text-base font-bold px-[20px] py-[13px] rounded-[10px] w-fit mb-6 ">
        View Free Resource  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                            <path d="M13.0592 9.50104L9.14062 5.58247L10.2602 4.46289L15.2983 9.50104L10.2602 14.5391L9.14062 13.4196L13.0592 9.50104Z" fill="white" />
                        </svg>
                    </button>
      </div>
    </div>
  );
};

export default FreeResource;

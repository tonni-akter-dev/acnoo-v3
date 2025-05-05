'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import product1 from '/public/home/product1.png';
import cart from '/public/cart.png';
import star from '/public/home/star.svg';
import laravel from '/public/home/laravel.png'
const ListView = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="flex  items-center justify-between bg-white rounded-xl p-2 lg:p-4 gap-6 w-full "
      style={{ boxShadow: '0px 2px 23px -5px rgba(18, 18, 18, 0.09)' }}
    >
      <Link href='products-details'>
        <div className="relative  group">
          {/* Product Image */}
          <Image src={product1} alt="Product" className="rounded-lg w-[105px] md:w-full lg:w-full  h-[140px] md:h-full " />
          <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-xl bg-[rgba(24,26,30,0.3)] backdrop-blur-[4px]'>

            <button
              onClick={() => setLiked(!liked)}
              className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md transition-all hover:scale-110"
            >
              {liked ? <AiFillHeart size={20} color="#D80032" /> : <AiOutlineHeart size={20} color="#6B7280" />}
            </button>
            <button className='absolute bottom-[15px] text-sm text-[#5B5B5B] left-[18px] bg-white p-1 flex gap-1.5 w-[96px] h-[29px] rounded-[15px] ' style={{ boxShadow: "0px 4px 13px 0px rgba(95, 113, 182, 0.08)" }}>
              <Image src={laravel} alt="" />
              Flutter</button>
          </div>
        </div>
      </Link>
      <div className="flex-1">
        <div className='md:mb-0 mb-4'>
          <h3 className="text-primary text-base md:text-lg font-semibold mb-2">UI Kits</h3>
          <div className='flex justify-between w-full items-start gap-8'>
            <div className="md:hidden flex items-end gap-1.5">
              <p className="text-primary text-base font-bold">$120</p>
              <p className="text-[#6B7280] text-sm ">$150</p>
            </div>
            <div className='md:hidden flex  font-inter  text-base gap-2 items-center'>
              <Image src={star} alt="" />
              <span className='text-[#6B7280]'>(3)</span>
            </div>
          </div>
        </div>

        <p className="md:block hidden text-[#6B7280] text-sm mb-4 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry’s standard dummy text ever since the 1500s.
        </p>
        <div className='flex justify-between items-center lg:mt-[26px]'>
          <p className='text-sm font-bold text-[#4B5563]'>800 Sales</p>
          <div className='hidden md:flex  font-inter  text-base gap-2 items-center'>
            <Image src={star} alt="" />
            <span className='text-[#6B7280]'>(3)</span>
          </div>
        </div>

        <div className='md:hidden gap-2.5 flex border-t border-[#E7ECF8] pt-2 mt-2'>
          <button>
            <Image src={cart} alt="" />
          </button>
          <Link href="#">
            <button className="bg-[#2F1C6A] text-white text-sm font-semibold px-5 py-2 rounded-md">
              Live Preview
            </button>
          </Link>
        </div>
      </div>

      {/* Right: Price & Button */}
      <div className="flex flex-col items-end justify-between h-full">
        <div className="md:flex hidden text-right mb-4">
          <p className="text-primary text-xl font-bold">$120</p>
          <p className="text-[#6B7280] text-sm line-through">$150</p>
        </div>
        <Link href="#" className='md:flex  hidden'>
          <button className="bg-[#2F1C6A] text-white text-sm font-semibold px-5 py-2 rounded-md">
            Live Preview
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListView;

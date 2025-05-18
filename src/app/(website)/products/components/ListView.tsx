'use client'
import Image from 'next/image';
import Link from 'next/link';
import product1 from '/public/home/product1.png';
import cart from '/public/cart.png';
import star from '/public/home/star.svg';

const ListView = () => {
  return (
    <div
      className="flex  items-center justify-between bg-white rounded-xl p-2 lg:p-4 gap-6 w-full "
      style={{ boxShadow: '0px 2px 23px -5px rgba(18, 18, 18, 0.09)' }}
    >
      <Link href='products-details'>
        <div className="relative  group">
          <Image src={product1} alt="Product" className="rounded-lg w-[105px] md:w-full md_list_img lg:w-full  h-full " />
        </div>
      </Link>
      <div className="flex-1">
        <div className='md:mb-0 mb-4'>
          <h3 className="text-primary text-base md:text-lg font-semibold mb-2">UI Kits</h3>
          <div className='flex justify-between w-full items-start gap-8'>
            <div className="md:hidden flex items-end gap-1.5 md_hidden">
              <p className="text-primary text-base font-bold">$120</p>
              <p className="text-[#6B7280] text-sm ">$150</p>
            </div>
            <div className='md:hidden md_hidden flex  font-inter  text-base gap-2 items-center'>
              <Image src={star} alt="" />
              <span className='text-[#6B7280]'>(3)</span>
            </div>
          </div>
        </div>

        <p className=" md:block list_desc md_block hidden text-[#6B7280] text-sm mb-4 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry’s standard dummy text ever since the 1500s.
        </p>
        <div className='flex justify-between items-center lg:mt-[26px]'>
          <p className='text-sm font-bold text-[#4B5563]'>800 Sales</p>
          <div className='hidden md:flex  md_flex font-inter  text-base gap-2 items-center'>
            <Image src={star} alt="" />
            <span className='text-[#6B7280]'>(3)</span>
          </div>
        </div>

        <div className='md:hidden md_hidden gap-2.5 flex border-t border-[#E7ECF8] pt-2 mt-2'>
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
        <div className="md:flex md_flex hidden text-right mb-4">
          <p className="text-primary text-xl font-bold">$120</p>
          <p className="text-[#6B7280] text-sm line-through">$150</p>
        </div>
        <Link href="#" className='md:flex md_flex  hidden'>
          <button className="bg-[#2F1C6A] text-white text-sm font-semibold px-5 py-2 rounded-md">
            Live Preview
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListView;

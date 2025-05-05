import React from 'react'
import gif1 from '/public/gif1.png'
import gif2 from '/public/gif2.png'
import gif3 from '/public/gif3.png'
import gif4 from '/public/gif4.png'
import parcent from '/public/50parcent.png'
import Image from 'next/image'
import Countdown from '../home/components/Countdown'

const TopHeader = () => {
  return (
    <div className="flex items-center justify-center lg:justify-between  py-1 top_bg lg:ps-[98px] lg:pe-[50px] lg:h-[97px] px-[17px] h-auto" >
      {/* Left Section */}
      <div className="items-center space-x-2.5 lg:flex hidden ">
        <Image src={gif1} alt="Rocket" className="" />
        <Image src={gif2} alt="Rocket" className="" />
        <div className='flex gap-1.5 items-center'>
          <p className="font-bold text-white lg:text-[22px] text-lg whitespace-nowrap">Our Best <br />Modern Items</p>
          <Image src={parcent} alt="" />
          <Image src={gif3} alt="" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center gap-[40px]">
        <button className="lg:block hidden bg-[#09AEBA] text-white txt-sm font-bold px-6 py-[14px] rounded-[5px]  whitespace-nowrap">
          Grab the Offer
        </button>
        <div className="flex items-center gap-[22px]">
          <p className=" whitespace-nowrap text-lg lg:text-[22px] text-white font-bold">
            Extra Sale <span className="text-[#61C722]">50% </span>off
          </p>
          <div>
            <Countdown />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="items-center ms-[50px] lg:flex hidden ">
        <Image src={gif4} alt="Gift" className="h-12 w-12" />
      </div>
    </div>
  )
}

export default TopHeader

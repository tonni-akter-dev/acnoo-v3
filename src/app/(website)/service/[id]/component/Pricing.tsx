"use client"
import { pricingData } from '@/app/utils/data';
import React, { useState } from 'react';
import { BiRevision } from 'react-icons/bi';
import { CiTimer } from 'react-icons/ci';
import { IoCheckmarkSharp } from 'react-icons/io5';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Basic");
  const currentPlan = pricingData.find((item) => item.type === activeTab);

  return (
    <div className=" lg:max-w-[660px] md:p-0 w-full h-[478px] lg:h-[522px] bg-[#F3F3F4] lg:mx-auto border border-[#E5E7EB] rounded-xl shadow-xl overflow-hidden">
      <div className="flex border-b border-[#E5E7EB]">
        {pricingData.map((plan) => (
          <button
            key={plan.type}
            onClick={() => setActiveTab(plan.type)}
            className={`w-1/3 py-3 text-[20px] font-medium transition-all duration-200 border-b-2 text-center border-r border-[#D1D5DB] ${plan.type === activeTab
              ? "border-[#2F1C6A] text-[#2F1C6A] bg-[linear-gradient(180deg,#F5EFFF80_0%,#E6D8FF_100%)]"
              : "border-transparent text-gray-500 hover:bg-gray-50"
              }`}
          >
            {plan.type}
          </button>
        ))}
      </div>
      <div className='flex justify-between items-center mt-3.5'>
        <div>
          <h1 className='text-primary text-2xl font-bold ml-5 lg:ml-9'>Basic Service</h1>
        </div>
        <div className="text-center  flex justify-center items-center ">
          <p className="text-2xl font-bold text-white mb-1 flex justify-center items-center price-bg">{currentPlan?.price}</p>
        </div>
      </div>
      <div className='flex w-[394px] bg-white rounded-[22px] ml:5 lg:ml-6 items-center gap-[22px] justify-center px-6 py-3'>
        <h1 className='flex items-center gap-3 whitespace-nowrap border-r border-[#DDDCDC] pr-3.5'><CiTimer />15-day delivery</h1>
        <h1 className='flex items-center gap-3 whitespace-nowrap'><BiRevision />Unlimited Revision</h1>
      </div>
      <div className="p-6">
        <h1 className='text-primary text-2xl font-bold mb-3.5'>{`What’s Included`}</h1>
        <ul className="space-y-3 mb-6 lg:mb-9">
          {currentPlan?.includes.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center text-[#4B5563] text-base font-medium gap-2"
            >
              <IoCheckmarkSharp className="text-green-500 text-lg" /> {feature}
            </li>
          ))}
        </ul>
        <button className="w-full bg-[#2F1C6A] text-white py-3 rounded-lg font-semibold text-base hover:bg-primary transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Pricing;
import React from 'react';
import Image from 'next/image';
import { automationData } from '@/app/utils/data';

const Automation = () => {
  return (
    <div className="lg:px-[86px] px-5 mn-[112px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-[18px] lg:gap-11">
        {automationData.map((item) => (
          <div
            key={item.id}
            className="rounded-[12px] lg:rounded-[20px] lg:px-[22px] lg:pt-4 group lg:pb-6 p-3"
            style={{ boxShadow: '0px 2px 4px 0px rgba(0, 2, 41, 0.08)' }}>
            <div className="relative overflow-hidden mb-5">
              <Image src={item.image} alt={item.title} className="block w-full" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <button className="bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-md">
                  Live Preview
                </button>
              </div>
              <div className="absolute inset-0 bg-[rgba(2,2,2,0.56)] backdrop-filter-[blur(2px)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="mb-1.5 text-sm text-[#6B7280] font-medium">
              {item.id.toString().padStart(2, '0')}
            </span>
            <p className="group-hover:text-[#600EE4] text-xl text-primary font-bold">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Automation;

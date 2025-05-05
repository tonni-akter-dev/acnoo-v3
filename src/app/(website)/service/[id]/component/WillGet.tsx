"use client";
import React from 'react';
import { willGet } from '@/app/utils/data';
import { IoCheckmarkSharp } from 'react-icons/io5';

const WillGet = () => {
    return (
        <div className="lg:my-10 my-5  lg:px-0">
            <h1 className="text-2xl font-bold mb-[18px] text-primary">
                What You Will Get
            </h1>
            <ul className="grid grid-cols-1 gap-2 lg:gap-4 list-disc list-inside text-gray-700">
                {
                    willGet.map((item) => (
                        <li key={item.id} className="flex items-center gap-3 text-base text-[#4B5563] font-medium">
                           <IoCheckmarkSharp /> {item.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default WillGet;

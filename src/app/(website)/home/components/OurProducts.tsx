'use client'
import React, { useState } from 'react'
import EnvatoProducts from './EnvatoProducts'
const tabData = [
    {
        title: 'Envato products',
        content: <EnvatoProducts />
    },
    {
        title: 'Acnoo products',
        content: <EnvatoProducts />,
    },

];

const OurProducts = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: React.SetStateAction<number>) => {
        setActiveTab(index);
    };
    return (
        <div className='lg:pt-[128px]  pt-[30px] product_bg bg-[#fffdff] '>
            <div>
                <div className=" text-black  text-lg font-medium mb-2 lg:mb-4 text-center">
                    <span className='bg-[#F52366] text-base font-bold text-center text-white px-3 h-[25px] py-1 rounded-full w-fit me-[11px]'>New </span>{`We've`} Raised <span className='text-[#2353F5]'>30+</span>million!
                </div>
                <h3 className='text-primary lg:text-[65px]  text-[24px] lg:leading-[72px] leading-[30px] font-bold text-center mb-2 '>Our products</h3>
                {/* tabs */}
                <div>
                    <div className='flex items-center mx-auto w-fit justify-center mt-2 rounded-[50px] px-2.5 lg:py-2 py-[6px]' style={{ boxShadow: '0px 7px 17px 0px rgba(0, 0, 0, 0.04)' }}>
                        {tabData.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => handleTabClick(index)}
                                className={`${activeTab === index ? "bg-[#2F1C6A] text-white" : "bg-white"} cursor-pointer  text-base font-bold  rounded-4xl py-[13px] xs:px-2.5 px-2.5 md:px-[23px] lg:p-5`}>
                                {tab.title}
                            </button>
                        ))}
                    </div>
                    <div>
                        {tabData[activeTab].content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts
'use client'
import React, { useState, useEffect, useRef } from 'react';
import Automation from './Automation';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const UniqueHomePages = () => {
    const [activeTab, setActiveTab] = useState('Automation');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const tabs = [
        { id: 'All', label: 'All (14)', content: 'Content for All tab. Displaying all 14 items.' },
        { id: 'Automation', label: 'Automation', content: <Automation /> },
        { id: 'Pipeline', label: 'Pipeline', content: 'Content for Pipeline tab. Pipeline specific information.' },
        { id: 'Productivity', label: 'Productivity', content: 'Content for Productivity tab. Data related to productivity.' },
        { id: 'Reporting', label: 'Reporting', content: 'Content for Reporting tab. Reporting data and analytics.' },
        { id: 'Reporting2', label: 'Reporting', content: 'Content for Reporting 2 tab. Additional reporting data.' },
        { id: 'Reporting3', label: 'Reporting', content: 'Content for Reporting 3 tab. More reporting insights.' },
    ];

    const currentTabContent = tabs?.find(tab => tab?.id === activeTab)?.content;

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0;
        }
    }, []);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className='lg:pt-24 md:pt-3 unique_home_page'>
            <div className='mb-6 lg:mb-10 relative'>
                <div className='relative'>
            
                    <h1 className=' unique_number tenk_text !mb-[-227px]' ref={ref}>
                        {inView && <CountUp end={16} duration={2} />}
                    </h1>
                    <h3 className='text-[28px] feature_text_1 unique_text md:text-[30px] lg:text-[70px] lg:leading-[72px] leading-[30px] font-bold text-center mb-3 lg:mb-6 text-[#1A0B49]'>
                        Stunning <br />
                        Unique Home pages
                    </h3>
                </div>
                <p className='text-center text-[#6B7280] text-base lg:text-[20px] font-medium relative z-50 pt-1.5'>
                    Beautiful, hand-crafted designs to get you started. Install any demo or <br className='lg:hidden md_block md:block hidden' /> template <br className='lg:block hidden' />
                    with a single click. Mix and match anything.
                </p>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex items-center justify-start lg:justify-center mb-4 lg:mb-12 overflow-x-scroll w-full px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollBehavior: 'smooth' }}
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2  w-fit whitespace-nowrap text-sm lg:text-base font-medium rounded-[6px] mr-2.5 lg:mr-4 ${activeTab === tab.id
                            ? 'bg-[#7500FE] text-white hover:bg-transparent hover:text-[#7500FE] border border-[#7500FE] transition-all ease-in-out duration-300'
                            : 'bg-white '
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                        style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.06)' }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className='text-center'>
                <p>{currentTabContent}</p>
            </div>
        </div>
    );
};

export default UniqueHomePages;
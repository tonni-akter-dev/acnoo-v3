'use client'
import React, { useState } from 'react'
import DocumentationCompo from '../../adminDashboard/components/Documentation';
import FaqTab from '../../adminDashboard/components/FaqTab';
import Overview from './Overview';
import { motion } from 'framer-motion';

const tabs = [
    {
        id: 'overview', label: 'Overview', content: <Overview />,
    },
    {
        id: 'documentation', label: 'Documentation', content: <DocumentationCompo />,
    },
    {
        id: 'faq', label: 'Faq', content: <FaqTab />,
    },
];

const TopTabs = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className='border-t border-[#D9D9D9]'>
            <div className='flex lg:flex-row flex-col lg:gap-0 md:gap-3 gap-6 justify-between lg:px-[150px]  py-3 pb-0 md:pt-5 lg:py-9' style={{ boxShadow: '0px 7px 34px 0px rgba(0, 0, 0, 0.02)' }}>
                <div className='lg:px-0 px-5'>
                <motion.p
    className='text-[#4B5563] text-base md:text-lg lg:text-lg font-bold border-l-[2px] border-[#D9D9D9] ps-2'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    Acnoo Admin Dashboard for eCommerce
  </motion.p>
                </div>

                <div>
                    <div className="lg:flex grid grid-cols-3 gap-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`text-base font-bold cursor-pointer lg:py-0 py-[13px]  ${activeTab === tab.id
                                    ? 'border-b-2 border-red text-red'
                                    : ' text-[#4B5563]'
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    )
}

export default TopTabs
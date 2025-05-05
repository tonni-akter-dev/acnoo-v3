'use client'
import React, { useState } from 'react'
import Overview from './Overview';
import DocumentationCompo from './Documentation';
import FaqTab from './FaqTab';
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
            <div className='flex justify-between lg:px-[150px] px-5 py-9' style={{ boxShadow: '0px 7px 34px 0px rgba(0, 0, 0, 0.02)' }}>
                <p className='text-[#4B5563] text-lg font-bold border-l-[2px] border-[#D9D9D9] ps-2'>Acnoo Admin Dashboard for eCommerce</p>
                <div>
                    <div className="flex gap-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`text-base font-bold cursor-pointer  ${activeTab === tab.id
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
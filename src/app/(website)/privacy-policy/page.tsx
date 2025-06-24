import React from 'react';
import Banner from '../components/Banner';
import Sidebar from './component/Sidebar';
import CancellationContent from './component/CancellationContent';
import BottomBanner from '../home/components/BottomBanner';

const PrivacyPolicy = () => {
    return (
        <>
            <Banner title='Privacy & Policy' />
            <div className="containers mx-auto lg:pt-[120px] p-4 lg:pb-28 flex flex-col gap-5 md:flex-row md:gap-8 lg:gap-[60px]">
                <Sidebar />
                <div className='lg:block hidden'>
                    <CancellationContent />
                </div>
            </div>
            <BottomBanner />
        </>
    );
};

export default PrivacyPolicy;
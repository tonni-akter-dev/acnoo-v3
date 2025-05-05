import React from 'react';
import Banner from '../components/Banner';
import BottomBanner from '../home/components/BottomBanner';
import Sidebar from '../privacy-policy/component/Sidebar';
import CancellationContent from '../privacy-policy/component/CancellationContent';

const Terms = () => {
    return (
        <>
            <Banner title='Terms & Condition' />
            <div className="container mx-auto lg:pt-[120px] p-4 lg:pb-28 flex flex-col gap-5 md:flex-row md:gap-8 lg:gap-[60px]">
                <Sidebar />
                <div className='lg:block hidden'>
                    <CancellationContent />
                </div>
            </div>
            <BottomBanner />
        </>
    );
};

export default Terms;
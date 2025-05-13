import React from 'react';
import WillGet from './component/WillGet';
import DetailsSection from './component/DetailsSection';
import Pricing from './component/Pricing';
import RelatedService from './component/RelatedService';
import Banner from '../../components/Banner';
import BottomBanner from '../../home/components/BottomBanner';

const ServiceDetails = () => {
    return (
        <>
            <Banner title='Service Details' />
            <div className=" lg:px-[150px]  grid grid-cols-1 lg:grid-cols-2 gap-10  md:px-5 px-4  pt-4 lg:pt-[60px]">
                <div>
                    <DetailsSection />
                    <div className='lg:hidden block'>
                        <Pricing />
                    </div>
                    <p className='lg:hidden  block text-[#6B7280] text-base leading-7 font-medium lg:mt-0 mt-6'>
                        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                    </p>
                    <WillGet />
                </div>
                <div className='lg:flex hidden  justify-end  '>
                    <Pricing />
                </div>
            </div>
            <RelatedService />
            <BottomBanner/>
        </>
    );
};


export default ServiceDetails;
'use client'
import React from 'react';
import WillGet from './component/WillGet';
import DetailsSection from './component/DetailsSection';
import Pricing from './component/Pricing';
import RelatedService from './component/RelatedService';
import Banner from '../../components/Banner';
import BottomBanner from '../../home/components/BottomBanner';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const ServiceDetails = () => {
    return (
        <>
            <Banner title='Service Details' />
            <div className=" containers  grid grid-cols-1 lg:grid-cols-2 gap-10  md:px-5 px-4  pt-4 lg:pt-[60px]">
                <div>
                    <DetailsSection />
                    <div className='lg:hidden block'>
                        <Pricing />
                    </div>
                    <motion.p
                        className='lg:hidden block text-[#6B7280] text-base leading-7 font-medium lg:mt-0 mt-6'
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ...`}
                    </motion.p>
                    <WillGet />
                </div>
                <div className='lg:flex hidden  justify-end  '>
                    <Pricing />
                </div>
            </div>
            <RelatedService />
            <BottomBanner />
        </>
    );
};


export default ServiceDetails;
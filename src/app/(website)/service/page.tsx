import React from 'react';

import BottomBanner from '../home/components/BottomBanner';
import Banner from '../components/Banner';
import AllService from './component/AllService';

const Service = () => {
    return (
        <>
        <Banner title='Services'/>
        <AllService/>
        <BottomBanner />
        </>
    );
};

export default Service;
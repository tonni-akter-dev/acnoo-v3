import React from 'react';
import Banner from '../components/Banner';
import PrivacyForm from './component/PrivacyForm';
import BottomBanner from '../home/components/BottomBanner';

const Privacy = () => {
    return (
        <>
        <Banner title='Privacy & Policy'/>
        <PrivacyForm/>
        <BottomBanner/>
        </>
    );
};

export default Privacy;
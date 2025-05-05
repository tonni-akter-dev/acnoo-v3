import React from 'react';
import Banner from '../components/Banner';
import ContactForm from './component/ContactForm';
import Address from './component/Address';
import BottomBanner from '../home/components/BottomBanner';

const Contact = () => {
    return (
       <>
       <Banner title='Contact Us'/>
       <div className='p-4 md:p-0'>
       <Address/>
       <ContactForm/>
       </div>
       <BottomBanner/>
       </>
    );
};

export default Contact;
import Image from 'next/image';
import React from 'react';
import ContactImg from "/public/contact/contact.png"
import Form from './Form';
import { HiArrowLongRight } from 'react-icons/hi2';

const ContactForm = () => {
    return (
        <div className="contactForm mt-8 lg:mt-[124px]">
            <div className='lg:hidden block text-start md:text-center'>
                <h1 className='text-[#0A1222] font-bold text-2xl md:text-3xl'>Get in Touch</h1>
                <p className='text-[#4B5563] text-base mt-1 mb-7'>Acnoo is a fully featured dashboard and admin template comes with tones of well
                    designed Awesome elements, components, widgets and applications and</p>
            </div>
            <div className="container lg:px-0 md:px-5 lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-[70px]">
                <Image src={ContactImg} alt='contactForm' className='lg:w-[686px] w-full lg:h-[732px] h-[394px]' width={686} height={732} />
                <div>
                    <div className='lg:block hidden'>
                        <h1 className='text-[#0A1222] font-bold text-[44px]'>Get in Touch</h1>
                        <p className='text-[#4B5563] text-base mt-1 mb-7'>Acnoo is a fully featured dashboard and admin template comes with tones of well
                            designed Awesome elements, components, widgets and applications and</p>
                    </div>
                    <Form />
                </div>
            </div>
            <button
                type="submit"
                className="w-[180px] bg-[#6021D1] lg:hidden flex items-center justify-center md:mx-auto gap-2 text-base text-white font-semibold py-3.5 rounded-sm hover:bg-primary transition mb-8"
            >
                Submit <HiArrowLongRight />
            </button>
        </div>
    );
};

export default ContactForm;
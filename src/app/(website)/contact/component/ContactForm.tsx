'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactImg from "/public/contact/contact.png";
import Form from './Form';
import { HiArrowLongRight } from 'react-icons/hi2';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

const ContactForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="contactForm containers mt-8 lg:mt-[124px]">
      {/* Mobile Heading */}
      <div className='lg:hidden block text-start md:text-center text_start'>
        <motion.h1
          className='text-[#0A1222] font-bold text-2xl  md:text-3xl'
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className='text-[#4B5563] text-sm lg:text-base mt-1 mb-7'
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
        >
          Acnoo is a fully featured dashboard and admin template comes with tones of well <br />
          designed Awesome elements, components, widgets and applications and
        </motion.p>
      </div>

      {/* Main Grid Section */}
      <div className="container lg:px-0 md:px-5 lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[70px] contact_form">
        {/* Image */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
        >
          <Image
            src={ContactImg}
            alt='contactForm'
            className='lg:w-[686px] w-full lg:h-[732px] h-[394px]'
            width={686}
            height={732}
          />
        </motion.div>

        {/* Desktop Text + Form */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
        >
          <div className='lg:block hidden'>
            <motion.h1
              className='text-[#0A1222] font-bold text-[44px]'
              variants={fadeUpVariant}
              custom={3}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className='text-[#4B5563] text-base mt-1 mb-7'
              variants={fadeUpVariant}
              custom={4}
            >
              Acnoo is a fully featured dashboard and admin template comes with tones of well
              designed Awesome elements, components, widgets and applications and
            </motion.p>
          </div>
          <Form />
        </motion.div>
      </div>

      {/* Mobile Submit Button */}
      <motion.button
        type="submit"
        variants={fadeUpVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={5}
        className="w-[180px] bg-[#6021D1] lg:hidden flex items-center justify-center md:mx-auto gap-2 text-base text-white font-semibold py-3.5 rounded-sm hover:bg-primary transition mb-8"
      >
        Submit <HiArrowLongRight />
      </motion.button>
    </div>
  );
};

export default ContactForm;

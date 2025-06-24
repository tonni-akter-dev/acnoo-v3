'use client'
import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { motion } from 'framer-motion';

type IBanner = {
    title: string;
};

const Banner: React.FC<IBanner> = ({ title }) => {
    return (
        <div className="service service-bg py-4 lg:py-20">
            <div className="container max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 text-left  bannerText_m">
                <motion.h1
                    className="text-base  md:text-lg lg:text-6xl font-bold text-primary mb-1 lg:mb-3.5"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                >
                    <Breadcrumb />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import pay1 from '/public/admindashboard/pay1.png';
import pay2 from '/public/admindashboard/pay2.png';
import pay3 from '/public/admindashboard/pay3.png';
import pay4 from '/public/admindashboard/pay4.png';
import pay5 from '/public/admindashboard/pay5.png';
import pay6 from '/public/admindashboard/pay6.png';
import pay7 from '/public/admindashboard/pay7.png';
import pay8 from '/public/admindashboard/pay8.png';
import pay9 from '/public/admindashboard/pay9.png';
import pay10 from '/public/admindashboard/pay10.png';
import pay11 from '/public/admindashboard/pay11.png';
import pay12 from '/public/admindashboard/pay12.png';
import pay13 from '/public/admindashboard/pay13.png';
import pay14 from '/public/admindashboard/pay14.png';
import pay15 from '/public/admindashboard/pay15.png';
import pay16 from '/public/admindashboard/pay16.png';

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AcceptedPayment = () => {
    const paymentRows = [
        [pay1, pay2, pay3, pay4, pay5, pay6, pay7],
        [pay8, pay9, pay10, pay11, pay12, pay13],
        [pay14, pay15, pay16],
    ];

    const mdpaymentRows = [
        pay1, pay2, pay3, pay4, pay5, pay6, pay7,
        pay8, pay9, pay10, pay11, pay12, pay13,
        pay14, pay15, pay16,
    ];

    return (
        <div className="lg:px-[276px] px-5 mb-6 md:mb-8 lg:mb-[161px] mt-6 md:mt-[50px] lg:mt-[124px]">
            <motion.h2
                className="text-2xl md:text-[30px] lg:text-[60px] text-[#0B071A] font-bold text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                Payment We Accepted
            </motion.h2>

            <motion.p
                className="text-[#6B7280] text-base font-medium text-center mb-[33px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                More than 100,000+ teams are using Softuch
            </motion.p>

            {/* Desktop View */}
            <motion.div
                className="lg:block hidden"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {paymentRows.map((row, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        className="flex justify-center gap-3 lg:gap-[25px] mb-[25px]"
                        variants={containerVariants}
                    >
                        {row.map((payImage, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Image
                                    className="w-full h-[69px] rounded-lg"
                                    style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                                    src={payImage}
                                    alt={`Payment method ${index + 1}`}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                ))}
            </motion.div>

            {/* Tablet/Mobile View */}
            <motion.div
                className="lg:hidden block"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-3">
                    {mdpaymentRows.map((payImage, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Image
                                className="w-full h-[64px] md:h-[69px] rounded-lg"
                                style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                                src={payImage}
                                alt={`Payment method ${index + 1}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default AcceptedPayment;

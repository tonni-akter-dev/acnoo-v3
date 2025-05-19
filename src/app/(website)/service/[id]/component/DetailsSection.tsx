'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import serviceImg from "/public/service/serviceDetails.png";
import service1 from "/public/service/service1.png";
import service2 from "/public/service/service2.png";
import service3 from "/public/service/service3.png";
import service4 from "/public/service/service4.png";



const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const DetailsSection = () => {
    const [selectedImage, setSelectedImage] = useState(serviceImg);
    const thumbnails = [service1, service2, service3, service4];

    return (
        <div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedImage.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image src={selectedImage} alt="Selected service" className='w-full h-auto' />
                </motion.div>
            </AnimatePresence>

            <div className='flex gap-3 mt-4 mb-8 lg:mb-12'>
                {thumbnails.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className='cursor-pointer'
                    >
                        <Image src={img} alt={`Service ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* <p className='leading-7 lg:block hidden text-[#6B7280] text-base font-medium' >
                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            </p> */}
            <motion.p
                className="leading-7 lg:block hidden text-[#6B7280] text-base font-medium"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            </motion.p>
        </div>
    );
};

export default DetailsSection;

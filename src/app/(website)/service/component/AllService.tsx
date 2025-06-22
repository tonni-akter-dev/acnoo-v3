"use client";
import { servicesData } from '@/app/utils/data';
import React, { useState } from 'react';
import ServicesTabs from './ServicesTabs';
import ServiceCard from '../../components/ServiceCard';
import { motion } from 'framer-motion';

const ITEMS_PER_PAGE = 8;

const AllService = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState("All Services");

    const filteredItems = activeTab === "All Services"
        ? servicesData
        : servicesData.filter(item => item.category === activeTab);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <div className='lg:px-20 md:px-5 px-4 allService mt-6 md:mt-12 lg:mt-24'>
            <div className=" mx-auto">
                <div className='flex items-center justify-center mx-auto gap-2.5 mb-3.5'>
                    <h2 className='text-white bg-[#F52366] px-3.5 py-2 rounded-full text-base font-bold'>new</h2>
                    <p className='text-lg text-black font-medium'>
                        {`We've raised `}<span className='text-[#2353F5]'>$6</span> million!
                    </p>
                </div>
                <h1 className='text-primary text-2xl md:text-3xl lg:text-[55px] font-bold text-center mb-5 '>Service we provide</h1>
                <ServicesTabs activeTab={activeTab} setActiveTab={(tab) => {
                    setActiveTab(tab);
                    setCurrentPage(1);
                }} />

                <div className="lg:mx-0 products_grid mx-5 mt-4 lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:p-2.5 gap-6">
                    {paginatedItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <ServiceCard
                                link={item.id}
                                title={item.title}
                                des={item.des}
                                price={item.price}
                                rating={item.rating}
                                img={item.img}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 mb-40 flex justify-center items-center space-x-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-[22px] py-4 border border-[#F3F4F6] text-[#071C34] rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                    >
                        {"<<"}
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-[22px] py-4 border border-[#F3F4F6] rounded ${currentPage === page ? "bg-[#2F1C6A] text-white" : "hover:bg-gray-200"}`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-[22px] py-4 border border-[#F3F4F6] text-[#071C34] rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                    >
                        {">>"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllService;

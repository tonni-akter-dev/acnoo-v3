'use client';
import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiCheckDouble } from 'react-icons/bi';
import { BsCartCheck, BsFillShareFill } from 'react-icons/bs';
import Details from './Details';
import ReviewContent from './ReviewContent';
import Comments from './Comments';
import Support from './Support';
import Breadcrumb from '../../components/Breadcrumb';
import PersonalLicense from '../../components/PerSonalLicense/PersonalLicense';

const BannerDetails = () => {
  const [activeTab, setActiveTab] = useState("Product Details");

  const tabs = [
    { title: "Product Details" },
    { title: "Reviews", rating: 5.0, reviewCount: 89 },
    { title: "Comment" },
    { title: "Support" },
  ];

  const product = {
    sales: 15,
    support: "12 Month Free Support",
    update: "Lifetime Free update",
  };

  return (
    <div>
      <div className="service service-bg pt-3.5 lg:pt-16">
        <div className="container max-w-screen-xl mx-auto px-5 lg::px-10 lg:px-20 text-left">
          {/* Dynamic Heading based on Active Tab */}
          <h1 className="text-base md:text-lg lg:text-6xl font-bold text-primary mb-1 lg:mb-3.5">
            {activeTab}
          </h1>
          <Breadcrumb />
        </div>

        <div className="container lg:px-0 px-4 lg:mt-0 mt-2">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex justify-between mt-2 lg:mt-0 lg:flex-row flex-col-reverse gap-3.5 items-start lg:items-center flex-wrap">
             
              <div className="flex  gap-3.5">
                {tabs.map((tabItem) => (
                  <div
                    key={tabItem.title}
                    onClick={() => setActiveTab(tabItem.title)}
                    className={`px-5 py-3 lg:py-4 transition relative whitespace-nowrap cursor-pointer
                      ${activeTab === tabItem.title
                        ? "text-[#6021D1] font-bold text-base lg:text-lg bg-[linear-gradient(180deg,#F5EFFF80_0%,#E6D8FF_100%)] border-b-[2px] border-b-[#6021D1]"
                        : "text-[#2F1C6A]"}`}>
                    <div className="flex items-center gap-1">
                      <span>{tabItem.title}</span>
                      {/* Show stars if the tab is "Reviews" */}
                      {tabItem.title === "Reviews" && (
                        <div className="flex items-center gap-1 text-yellow-500 text-lg font-medium ml-2">
                          {[...Array(5)].map((_, index) => (
                            <AiFillStar key={index} className="text-[14px]" />
                          ))}
                          <span className="text-[#6021D1] font-medium ml-1">5.00</span>
                          <span className="ml-1 bg-[#6366F1] text-white text-[10px] px-1.5 py-0.5 rounded">
                            89
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between lg:w-fit w-full gap-3 font-bold">
                {/* Sales */}
                <div className='flex md:flex-nowrap flex-wrap'>
                  <div className="text-[13px] lg:text-base flex items-center gap-1 px-2 text-[#2F1C6A] font-bold whitespace-nowrap">
                    <BsCartCheck className="text-[#000D2B]" /> Sales: {product.sales}
                  </div>

                  {/* Support Info */}
                  <div className="text-[13px] lg:text-base flex items-center gap-1 text-orange-500 px-2 whitespace-nowrap">
                    <BiCheckDouble className="text-xl" /> {product.support}
                  </div>

                  {/* Update Info */}
                  <div className="text-[13px] lg:text-base flex items-center gap-1 text-green-500 px-2 whitespace-nowrap">
                    <BiCheckDouble className="text-xl" />{product.update}
                  </div>
                </div>

                {/* Share Icon */}
                <button className="text-gray-600 p-1 hover:bg-gray-100 rounded-full">
                  <BsFillShareFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex  lg:flex-row flex-col gap-4 lg:gap-8 container py-6 lg:py-[67px] px-5 md:px-0'>
        <div className='w-full lg:w-[836px] lg:px-0 md:px-5'>
          {activeTab === "Product Details" && <Details />}
          {activeTab === "Reviews" && (
            <div>
              <ReviewContent />
            </div>
          )}
          {activeTab === "Comment" && <div className=""><Comments /></div>}
          {activeTab === "Support" && <div className=""><Support /></div>}
        </div>
        <div className='lg:w-[591px]'>
          <PersonalLicense />
        </div>
      </div>
    </div>
  );
};

export default BannerDetails;

'use client';
import React, { useState } from 'react';
import TagsSection from './TagsSectionProps';
import SoftwareVersion from './SoftwareVersion';
import { licenseOptions, productDescription } from '@/app/utils/data';
import ProductDescriptionItem from './ProductDescriptionItem';
import Coupon from './Coupon';
import Features from './Features';
import Offer from './Offer';
import RecommendSerice from './RecommendSerice';
import LicenseOptions from './LicenseOptions';


const PersonalLicense = ({
  finalPrice = 36,

}: {
  finalPrice?: number;
  services?: { title: string; price: number; checked?: boolean }[];
}) => {
  const [licenseType, setLicenseType] = useState('personal');

  return (
    <div>
      <div className="lg-mx-0 md:mx-5 lg:col-span-1">
        <div className="border border-[#E5E7EB] rounded-md p-7">
          <div className="mb-6">
            {licenseOptions.map((option) => (
              <LicenseOptions
                key={option.id}
                id={option.id}
                value={option.value}
                label={option.label}
                checked={licenseType === option.value}
                onChange={() => setLicenseType(option.value)}
                price={option.price}
                originalPrice={option.originalPrice}
              />
            ))}
          </div>
          <RecommendSerice />
          <Coupon />
          <button className="w-full bg-[#2F1C6A] hover:bg-purple-900 text-white py-2 px-5 rounded-md flex items-center justify-center text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 mr-2"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            Buy Now - ${finalPrice}
          </button>
        </div>
        <Offer />
        <div className="bg-white p-3.5 lg:p-6 md:p-6 mt-4 lg:mt-6 rounded-lg shadow border border-[#E5E7EB]">
          <h2 className="text-xl font-semibold border-b border-[#E5E7EB] pb-2 mb-4 border-dotted">
            Product Description
          </h2>
          <ul className="space-y-2 font-bold text-[#000D2B]">
            {productDescription.map((item, index) => (
              <ProductDescriptionItem
                key={index}
                label={item.label}
                value={item.value}
                isLink={item.isLink}
              />
            ))}
          </ul>
        </div>
        <Features />
        <TagsSection onTagSelect={(tag) => console.log(`Selected tag: ${tag}`)} />
        <SoftwareVersion />
      </div>
    </div>
  );
};

export default PersonalLicense;
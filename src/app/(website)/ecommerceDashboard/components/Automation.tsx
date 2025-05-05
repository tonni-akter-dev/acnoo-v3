import React from 'react';
import Image from 'next/image';
import head1 from '../../../../../public/ecommerce/h1.png';
import head2 from '../../../../../public/ecommerce/h2.png';
import head3 from '../../../../../public/ecommerce/h3.png';
import head4 from '../../../../../public/ecommerce/h4.png';

const automationData = [
  { id: 1, title: 'Data Analytics', image: head1 },
  { id: 2, title: 'Dashboard Light', image: head2 },
  { id: 3, title: 'Garments ERP', image: head3 },
  { id: 4, title: 'Inventory', image: head4 },
  { id: 5, title: 'Saas', image: head1 },
  { id: 6, title: 'Coming Soon', image: head2 },
];

const Automation = () => {
  return (
    <div className="lg:px-[86px] px-5 mn-[112px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-11">
        {automationData.map((item) => (
          <div
            key={item.id}
            className="rounded-[20px] px-[22px] pt-4 group pb-6"
            style={{ boxShadow: '0px 2px 4px 0px rgba(0, 2, 41, 0.08)' }}
          >
            <div className="relative overflow-hidden mb-5">
              <Image src={item.image} alt={item.title} className="block w-full" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <button className="bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-md">
                  Live Preview
                </button>
              </div>
              <div className="absolute inset-0 bg-[rgba(2,2,2,0.56)] backdrop-filter-[blur(2px)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="mb-1.5 text-sm text-[#6B7280] font-medium">
              {item.id.toString().padStart(2, '0')}
            </span>
            <p className="group-hover:text-[#600EE4] text-xl text-primary font-bold">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Automation;

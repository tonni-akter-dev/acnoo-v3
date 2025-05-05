"use client";
import React from 'react';
import AdminPortfolio from './AdminPortfolio';
import { portfolioItems, portfolioItems1 } from '@/app/utils/data';

const Portfolio = () => {
  return (
    <div className="container lg:px-0 px-5">
      <div className="lg:grid grid-cols-2 hidden gap-4 mt-10">
        {portfolioItems.map((item, index) => (
          <div key={index} className={index % 2 === 1 ? 'lg:mt-[100px]' : ''}>
            <AdminPortfolio
              title={item.title}
              img={item.img}
              buttons={item.buttons}
            />
          </div>
        ))}
      </div>
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {portfolioItems1.map((item, index) => (
          <div key={index} className={index % 2 === 1 ? 'lg:mt-[100px]' : ''}>
            <AdminPortfolio
              title={item.title}
              img={item.img}
              buttons={item.buttons}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
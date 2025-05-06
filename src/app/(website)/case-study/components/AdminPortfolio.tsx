"use client";

import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

interface IProps {
  title: string;
  subtitle?: string;
  img: StaticImageData | string;
  buttons?: Array<{
    content: string | ReactNode;
    onClick?: () => void;
  }>;
  layoutClassName?: string;
}

const AdminPortfolio: React.FC<IProps> = ({
  title,
  img,
  buttons,
  subtitle,
  layoutClassName = '',
}) => {
  return (
    <div className={`space-y-4 ${layoutClassName}`}>
      <Image src={img } alt="portfolio" className="h-[402px] lg:h-[694px]  mb-3 lg:mb-7  object-cover object-top" />
      <h2 className='text-base lg:text-2xl font-bold mb-4 uppercase' dangerouslySetInnerHTML={{ __html: title }} />
      <p className='text-sm mb-4'>{subtitle}</p>
      <div className="flex wrap_button space-x-4">
        {buttons?.map((button, index) => ( 
          <button
            key={index}  
            className="border border-[#E7E7E7] rounded-full px-6 h-8 text-lg font-medium"
            onClick={button.onClick}
          >
            {button.content}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminPortfolio;
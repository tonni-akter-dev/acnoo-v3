import React from 'react';

const BecomePartnerBanner = () => {
   return (
      <div className='service service-bg relative'>
         <div className='become_partner_wrapper container py-5 md:py-8 lg:py-[100px] lg:px-[100px] px-5 ' >
            <h2 className='text-3xl md:text-[55px] lg:text-[120px] text-[#1A0B49] font-bold leading-10 md:leading-[65px] lg:leading-28 capitalize mb-3 md:mb-6 lg:mb-12 become_partner_text'>become a acnoo <br /> partner</h2>
            <button className='flex gap-3.5 items-center text-white bg-[#2353F5] py-[13px] lg:py-6 px-6 lg:px-10 rounded-lg lg:text-base text-sm'>become a partner <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path d="M14.5893 7.25598L10.0918 2.75848C9.97065 2.64145 9.80835 2.57669 9.63989 2.57815C9.47143 2.57961 9.31028 2.64718 9.19116 2.76631C9.07203 2.88543 9.00446 3.04658 9.003 3.21504C9.00153 3.3835 9.06629 3.5458 9.18333 3.66698L12.5841 7.06773H1.28508C1.11468 7.06773 0.951254 7.13542 0.830762 7.25591C0.71027 7.37641 0.642578 7.53983 0.642578 7.71023C0.642578 7.88063 0.71027 8.04405 0.830762 8.16455C0.951254 8.28504 1.11468 8.35273 1.28508 8.35273H12.5841L9.18333 11.7535C9.12196 11.8127 9.07302 11.8836 9.03934 11.962C9.00567 12.0404 8.98795 12.1247 8.98721 12.21C8.98646 12.2954 9.00272 12.38 9.03503 12.4589C9.06733 12.5379 9.11504 12.6096 9.17537 12.6699C9.23569 12.7303 9.30743 12.778 9.38639 12.8103C9.46535 12.8426 9.54995 12.8588 9.63526 12.8581C9.72057 12.8574 9.80488 12.8396 9.88327 12.806C9.96166 12.7723 10.0326 12.7233 10.0918 12.662L14.5893 8.16448C14.7098 8.04399 14.7774 7.8806 14.7774 7.71023C14.7774 7.53986 14.7098 7.37647 14.5893 7.25598Z" fill="white" />
            </svg></button>
         </div>
      </div>
   );
};

export default BecomePartnerBanner;
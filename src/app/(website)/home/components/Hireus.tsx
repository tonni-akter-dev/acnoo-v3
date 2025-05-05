
import Image from 'next/image';
import React from 'react';
import tenk from '/public/home/10k.png';

const Hireus = () => {
    return (
   <div className='lg:pt-[96px] pt-5'>
         <div className='mx-4 sm:mx-auto bg-white  pt-[167px] pb-6  lg:py-[167px] relative overflow-hidden hire_us_bg'>
            <div className='text-center lg:px-0 px-[30px] relative  flex flex-col  items-center justify-center '>
                <Image className='absolute z-10 top-0 md:top-[-120px] lg:top-[-120px]  md:w-[350px] lg:w-[500px] w-[254px] ' src={tenk} alt="10K Projects" />
                <div className='z-50 flex flex-col lg:mt-0 mt-[80px]  items-center justify-center '>
                    <div className="text-black text-sm lg:text-lg font-medium mb-4 text-center">
                        <span className='bg-[#F52366] rounded-[13px]  text-sm lg:text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>10K+</span>
                        Custom projects we already done
                    </div>
                    <h3 className='lg:text-[65px]  text-[24px] lg:leading-[72px] leading-[30px] font-bold text-center mb-8 text-primary'>
                        Hire Us for your next <br />
                        Projects
                    </h3>
                    <button className="bg-[#2353F5] flex gap-1.5 items-center text-white text-base font-bold px-6 lg:px-[36px] py-3 lg:py-[21px] rounded-[10px] w-fit">
                        Contact with us <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14.5874 7.25574L10.0899 2.75824C9.96869 2.6412 9.8064 2.57644 9.63794 2.57791C9.46947 2.57937 9.30833 2.64694 9.1892 2.76606C9.07008 2.88519 9.00251 3.04634 9.00104 3.2148C8.99958 3.38326 9.06434 3.54556 9.18138 3.66673L12.5821 7.06749H1.28312C1.11272 7.06749 0.949301 7.13518 0.828809 7.25567C0.708317 7.37616 0.640625 7.53958 0.640625 7.70999C0.640625 7.88039 0.708317 8.04381 0.828809 8.1643C0.949301 8.28479 1.11272 8.35249 1.28312 8.35249H12.5821L9.18138 11.7532C9.12001 11.8125 9.07106 11.8834 9.03739 11.9618C9.00372 12.0402 8.98599 12.1245 8.98525 12.2098C8.98451 12.2951 9.00077 12.3797 9.03307 12.4587C9.06538 12.5376 9.11309 12.6094 9.17341 12.6697C9.23374 12.73 9.30547 12.7777 9.38444 12.81C9.4634 12.8423 9.548 12.8586 9.63331 12.8579C9.71862 12.8571 9.80293 12.8394 9.88132 12.8057C9.95971 12.772 10.0306 12.7231 10.0899 12.6617L14.5874 8.16423C14.7078 8.04375 14.7755 7.88035 14.7755 7.70999C14.7755 7.53962 14.7078 7.37622 14.5874 7.25574Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        
        </div>
        <div className=' max-w-[343px] md:max-w-[745px]    lg:max-w-[1460px] mx-auto bg-[#D7D4E7] w-full h-[1px] mt-6'></div>
   </div>
    );
};

export default Hireus;
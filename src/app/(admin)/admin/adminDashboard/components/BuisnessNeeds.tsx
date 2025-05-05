import React from 'react'
import buisnessneeds from '/public/admindashboard/buisnessneeds.png'
import Image from 'next/image'

const BuisnessNeeds = () => {
    return (
        <div className='pb-8 lg:pb-[123px] lg:px-0 md:px-0 px-4 lg:pt-0 pt-9 lg:mt-20 text-center buisness-bg' style={{ fill: ' linear-gradient(180deg, #FFF 0%, #FFEFEF 100%)' }}>

            <div className='mb-5 lg:mb-16'>
                <div className="text-[#0B071A] text-base lg:text-lg font-medium mb-2 lg:mb-4 text-center">
                    <span className='bg-red rounded-[14px] text-sm lg:text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                    Greate features for POSpro
                </div>
                <h3 className='text-2xl md:text-[30px] lg:text-[60px] lg:leading-[72px] md:leading-10 leading-6 font-bold text-center text-black'>
                    POSpro Solve All Business <br className='lg:hidden block' /> Needs
                </h3>
            </div>
            <div>
                <Image className=' mx-auto' src={buisnessneeds} alt="" />
                <div className=''>
                    <ul className='flex lg:flex-row md:flex-row flex-col  gap-3 md:gap-6 lg:gap-[70px] itesm-start md:items-center lg:items-center justify-center'>
                        <li className='text-[#0B071A] text-base font-medium flex gap-4 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <circle cx="13" cy="13" r="13" fill="white" />
                            <path d="M19 9L11.4375 16.5625L8 13.125" stroke="#C52127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> <span>One Click Installation</span></li>
                        <li className='text-[#0B071A] text-base font-medium flex gap-4 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <circle cx="13" cy="13" r="13" fill="white" />
                            <path d="M19 9L11.4375 16.5625L8 13.125" stroke="#C52127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> <span>Mix and Match Section Blocks</span></li>
                        <li className='text-[#0B071A] text-base font-medium flex gap-4 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <circle cx="13" cy="13" r="13" fill="white" />
                            <path d="M19 9L11.4375 16.5625L8 13.125" stroke="#C52127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> <span>No Coding Required.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BuisnessNeeds
import React from 'react'
import buisnessneeds from '../../../../../public/admindashboard/buisnessneeds.png'
import Image from 'next/image'

const BuisnessNeeds = () => {
    return (
        <div className='pb-[123px] mt-20 text-center buisness-bg' style={{ fill: ' linear-gradient(180deg, #FFF 0%, #FFEFEF 100%)' }}>

            <div className='mb-16'>
                <div className="text-black text-lg font-medium mb-4 text-center">
                    <span className='bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                    Greate features for POSpro
                </div>
                <h3 className='text-[60px] lg:leading-[72px] leading-[30px] font-bold text-center text-black'>
                    POSpro Solve All Business Needs
                </h3>
            </div>
            <div>
                <Image className=' mx-auto' src={buisnessneeds} alt="" />
                <div>
                    <ul className='flex gap-[70px] items-center justify-center'>
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
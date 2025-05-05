import Image from 'next/image';
import React from 'react';
import man from '/public/support/man.png'
import { IoCheckmark } from 'react-icons/io5';

const Support = () => {
    return (
        <>
            <div className='flex justify-between items-center support-bg'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <foreignObject x="-4" y="-4" width="72" height="72"></foreignObject><circle data-figma-bg-blur-radius="4" cx="32" cy="32" r="32" fill="white" fillOpacity="0.17" />
                        <defs>
                            <clipPath id="bgblur_0_2_43119_clip_path" transform="translate(4 4)"><circle cx="32" cy="32" r="32" />
                            </clipPath></defs>
                    </svg>
                </div>
                <div className='text-white'>
                    <h1 className='text-[28px] font-bold'>Acnoo  Support This Item</h1>
                    <p className='text-lg'>6 month free support</p>
                </div>
                <Image src={man} alt='' />
            </div>

            <div className='px-7 py-6 border border-[#EAEAEA] rounded-[12px] max-w-[839px] w-full'>
                <div>
                    <h1 className='text-[22px] text-primary font-bold'>Contact The Author</h1>
                    <p>{`This author will respond to buyers’ questions and provides limited support through their own support system`}</p>
                </div>
                <div>
                    <h1 className='text-[22px] text-primary font-bold mt-6'> What We Will Support</h1>
                    <li className='flex items-center gap-2 text-base text-[#4B5563]'><IoCheckmark /> Availability of the customer to answer questions </li>
                    <li className='flex items-center gap-2 text-base text-[#4B5563]'><IoCheckmark />{`Answering technical questions about item’s features`}</li>
                    <li className='flex items-center gap-2 text-base text-[#4B5563]'><IoCheckmark /> Assistance with reported bugs and issues</li>
                    <li className='flex items-center gap-2 text-base text-[#4B5563]'><IoCheckmark /> Help with included 3rd party assets</li>
                </div>
                <div>
                    <h1 className='text-[22px] text-primary font-bold mt-6'>However, item support does not include</h1>
                    <li className='flex items-center gap-2 text-base text-[#4B5563]'><IoCheckmark /> Customization services</li>
                    <li className='flex items-center gap-2 text-base text-[#4B5563]'><IoCheckmark /> Installation service</li>
                </div>

                <div className='flex gap-7 mt-6'>
                    <button className='py-4 w-full text-[#2F1C6A] text-lg font-bold border border-[#2F1C6A] bg-none rounded-[6px]'>Read item support policy</button>
                    <button className='py-4 w-full  text-white text-lg font-bold  bg-[#2F1C6A] rounded-[6px]'>Go to item Support</button>
                </div>

            </div>
        </>
    );
};

export default Support;
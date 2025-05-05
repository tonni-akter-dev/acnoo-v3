import Image from 'next/image';
import React from 'react';
import man from '/public/support/man.png'
import { IoCheckmark } from 'react-icons/io5';

const Support = () => {
    return (
        <div>
            <div className='flex overflow-hidden justify-between  relative items-center rounded support-bg'>
                <div className='flex gap-2.5 lg:gap-4 items-center'>
                    <div className='py-5 lg:py-7 ps-3 lg:ps-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                            <foreignObject x="-4" y="-4" width="64" height="64">
                                <div
                                    style={{ backdropFilter: 'blur(2px)', clipPath: 'url(#bgblur_0_3812_18799_clip_path)', height: '100%', width: '100%' }}
                                ></div>
                            </foreignObject><circle data-figma-bg-blur-radius="4" cx="28" cy="28" r="28" fill="white" fillOpacity="0.17" />
                            <path d="M43.1918 40.1112C42.6533 40.1406 42.1148 40.1406 41.608 40.0817C38.5989 39.7875 36.4766 37.4332 35.5263 34.9023C35.0195 35.6086 34.481 36.3443 33.9109 37.0212C33.5624 37.4626 33.1823 37.9335 32.8022 38.3749C32.7072 38.4632 32.6439 38.5515 32.5488 38.6692C33.7842 40.4937 35.6214 41.8769 38.3771 42.2594C39.9292 42.4654 41.513 42.2889 42.9701 41.7592C43.6986 41.4943 44.3638 41.1412 44.9656 40.7292C45.3774 40.4349 46.0426 39.964 46.4861 39.4637C45.4091 39.7875 44.3004 40.0229 43.1918 40.1112Z" fill="white" />
                            <path d="M43.5731 13.125L35.5275 17.863L38.0932 18.9518C37.5231 20.0995 36.9529 21.2178 36.3511 22.3655C35.8443 23.3072 35.3375 24.2489 34.8307 25.1612C34.704 25.3966 34.5773 25.632 34.4189 25.8675C34.0388 26.5443 33.6587 27.2506 33.2469 27.898C32.3917 29.34 31.5047 30.8408 30.4911 32.2828C29.0024 34.4017 27.2602 36.3145 24.9796 37.5211C22.7623 38.6688 19.8798 38.9925 17.6942 37.8154C15.3819 36.6088 14.2416 34.0191 14.1149 31.5471C13.9882 28.6337 15.0652 25.6615 17.1241 23.4249C18.7078 21.7181 20.9251 20.4232 23.3325 20.2761C24.5361 20.1878 25.7715 20.3938 26.7851 21.0118C28.1155 21.8358 28.8757 23.2483 29.3191 24.6609C29.921 26.5737 30.0793 28.5749 30.2694 30.576C31.2197 29.1929 32.0749 27.7509 32.8668 26.3972C33.2786 25.6909 33.6904 24.9552 34.1021 24.2489C33.532 21.8946 32.455 19.6581 30.5862 18.0395C28.1471 15.9207 24.5045 15.1556 21.2419 15.7441C17.9476 16.3327 15.0018 18.1572 12.8479 20.5409C10.5989 23.0423 9.17351 26.1323 8.82508 29.3694C8.47665 32.7537 9.33189 36.2851 11.5808 38.9631C15.6987 43.8482 22.794 43.9953 28.0838 40.6993C29.1924 39.993 30.1744 39.1985 31.0613 38.3156C31.378 37.9919 31.6948 37.6682 31.9799 37.3445C32.1066 37.2268 32.2016 37.1091 32.2966 36.9619C32.6767 36.5205 33.0568 36.0791 33.4053 35.6082C34.0388 34.8431 34.6089 34.0485 35.1474 33.2834C35.2425 33.1363 35.3375 33.0185 35.4325 32.8714C36.066 31.9591 36.6995 31.0174 37.3014 30.0757C37.9032 29.134 38.4734 28.1923 39.0118 27.2212C39.5503 26.25 40.0888 25.2789 40.5956 24.3372C41.2291 23.1601 41.831 21.9829 42.4011 20.8058L44.9985 21.8946L43.5731 13.125Z" fill="white" />
                            <path d="M43.5743 13.125L35.5287 17.863L38.0945 18.9518C37.5243 20.0995 36.9541 21.2178 36.3523 22.3655C35.8455 23.3072 35.3387 24.249 34.8319 25.1612C34.7052 25.3967 34.5785 25.6321 34.4201 25.8675C34.04 26.5444 33.6599 27.2507 33.2481 27.8981C32.3929 29.3401 31.506 30.8409 30.4923 32.2829C29.0036 34.4018 27.2614 36.3146 24.9808 37.5212C22.7635 38.6689 19.881 38.9926 17.6954 37.8155C15.3831 36.6089 14.2428 34.0192 14.1161 31.5472C13.9894 28.6338 15.0664 25.6615 17.1253 23.425C18.709 21.7181 20.9263 20.4233 23.3337 20.2761C24.5373 20.1878 25.7727 20.3938 26.7863 21.0118C26.913 21.1001 27.0397 21.1884 27.1664 21.2767C26.4379 20.6293 25.6143 20.129 24.664 19.8053C19.8494 18.1867 13.9894 21.8652 11.5821 28.0158C9.64984 32.9598 10.5051 38.0509 13.4192 40.7289C17.6004 43.8189 23.4921 43.554 28.0533 40.6994C29.162 39.9932 30.1439 39.1986 31.0308 38.3157C31.3476 37.992 31.6643 37.6683 31.9494 37.3446C32.0761 37.2269 32.1711 37.1092 32.2662 36.962C32.6463 36.5206 33.0264 36.0792 33.3748 35.6083C34.0083 34.8432 34.5785 34.0486 35.117 33.2835C35.212 33.1363 35.307 33.0186 35.402 32.8715C36.0356 31.9592 36.6691 31.0175 37.2709 30.0758C37.8727 29.1341 38.4429 28.1924 38.9814 27.2212C39.5199 26.2501 40.0583 25.2789 40.5652 24.3372C41.1987 23.1601 41.8005 21.983 42.3707 20.8058L44.9681 21.8947L43.5743 13.125Z" fill="white" />
                            <defs>
                                <clipPath id="bgblur_0_3812_18799_clip_path" transform="translate(4 4)"><circle cx="28" cy="28" r="28" />
                                </clipPath></defs>
                        </svg>
                    </div>
                    <div className='text-white'>
                        <h1 className='text-base md:text-2xl lg:text-[28px] font-bold'>Acnoo  Support This Item</h1>
                        <p className='text-[13px] lg:text-lg'>6 month free support</p>
                    </div>
                </div>
                <Image className='lg:right-0 md:right-0 absolute right-[-54px]' src={man} alt='' />
            </div>

            <div className='py-5 px-6 lg:px-7 lg:py-6 border mt-6 border-[#EAEAEA] rounded-[12px]'>
                <div>
                    <h1 className='text-base md:text-[22px] lg:text-[22px] text-primary font-bold'>Contact The Author</h1>
                    <p>{`This author will respond to buyers’ questions and provides limited support through their own support system`}</p>
                </div>
                <div>
                    <h1 className='text-base md:text-[22px] lg:text-[22px] text-primary font-bold mt-5 lg:mt-6 mb-2'> What We Will Support</h1>
                    <ul><li className='flex items-center gap-2 text-sm lg:text-base text-[#4B5563]'><IoCheckmark /> Availability of the customer to answer questions </li>
                        <li className='flex items-center gap-2 text-sm lg:text-base text-[#4B5563]'><IoCheckmark />{`Answering technical questions about item’s features`}</li>
                        <li className='flex items-center gap-2 text-sm lg:text-base text-[#4B5563]'><IoCheckmark /> Assistance with reported bugs and issues</li>
                        <li className='flex items-center gap-2 text-sm lg:text-base text-[#4B5563]'><IoCheckmark /> Help with included 3rd party assets</li></ul>
                </div>
                <div>
                    <h1 className='text-base md:text-[22px] lg:text-[22px] text-primary font-bold mt-6 mb-2'>However, item support does not include</h1>
                    <ul>
                        <li className='flex items-center gap-2 text-sm lg:text-base text-[#4B5563]'><IoCheckmark /> Customization services</li>
                        <li className='flex items-center gap-2 text-sm lg:text-base text-[#4B5563]'><IoCheckmark /> Installation service</li>
                    </ul>
                </div>

                <div className='flex md:flex-row flex-col-reverse gap-2.5 md:gap-5 lg:gap-7 mt-6'>
                    <button className='w-full lg:h-14 h-12 text-[#2F1C6A] text-lg font-bold border border-[#2F1C6A] bg-none rounded-[6px]'>Read item support policy</button>
                    <button className='w-full lg:h-14 h-12  text-white text-lg font-bold  bg-[#2F1C6A] rounded-[6px]'>Go to item Support</button>
                </div>
            </div>
        </div>
    )
}

export default Support
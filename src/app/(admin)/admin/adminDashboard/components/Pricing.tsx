import React from 'react'
import tick from '/public/admindashboard/tick.png'
import tick2 from '/public/admindashboard/blue-tick.png'
import Image from 'next/image'

const Pricing = ({ color }: { color?: string }) => {
    return (
        <div className='bg-black py-6 md:py-[30px] lg:py-[120px]'>
            <div className="text-white text-lg font-medium mb-4 text-center">
                <span style={{ backgroundColor: color || '#C52127' }} className="rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]">
                    New
                </span>
                {` We're`} updating new soon
            </div>
            <h3 className="text-[28px] md:text-[30px] lg:text-[60px] capitalize mb-4 lg:mb-8 lg:leading-[72px] leading-[30px] font-bold text-center text-white">
                our pricing plan </h3>
            <div className="">
                <div className="max-w-4xl lg:mx-auto  md:mx-5 mx-4 grid grid-cols-1 pricing_grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-[18px] lg:gap-8">
                    <div className="bg-white rounded-[20px] shadow-lg overflow-hidden" style={{ filter: 'drop-shadow(0px 10px 37px rgba(0, 0, 0, 0.06))' }}>
                        <div className="pt-8 lg:pt-[65px] lg:ps-[35px] px-5 lg:pe-[45px]  pb-6 lg:pb-[50px]">
                            <div className="flex items-baseline ps-6">
                                <span className="leading-[30px] text-3xl lg:text-[48px] font-bold text-[#0B071A] mb-4 lg:mb-6">$99</span>
                                <span className="ml-1 text-base text-[#0B071A]">/regular</span>
                            </div>

                            <div className="text-[#4B5563] text-base mb-5 lg:mb-6 lg:ps-6 border-b border-[#0017261A] p-4 lg:pb-6">For Single user</div>
                            <div style={{ backgroundColor: color || '#C52127' }} className=" text-white py-2 px-4 lg:ms-7 rounded-[7px] w-fit mb-6 text-lg font-semibold">
                                Regular License
                            </div>
                            <ul className="text-black space-y-3 mb-8 lg:ps-7">
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className="text-red mr-2">
                                        <Image src={color ? tick2 : tick} alt="" />
                                    </span>
                                    3-5 days turnaround
                                </li>
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className="text-red mr-2">
                                        <Image src={color ? tick2 : tick} alt="" />
                                    </span>
                                    Native Development
                                </li>
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className="text-red mr-2">
                                        <Image src={color ? tick2 : tick} alt="" />
                                    </span>
                                    Task delivered one-by-one
                                </li>
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className="text-red mr-2">
                                        <Image src={color ? tick2 : tick} alt="" />
                                    </span>
                                    Dedicated dashboard
                                </li>
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className="text-red mr-2">
                                        <Image src={color ? tick2 : tick} alt="" />
                                    </span>
                                    Updates via dashboard & slack
                                </li>
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className="text-red mr-2">
                                        <Image src={color ? tick2 : tick} alt="" />
                                    </span>
                                    50k design & prints
                                </li>
                            </ul>
                            <button className="bg-white hover:bg-black hover:text-white transition-all ease-in-out duration-300 border border-[#F0F2F3] text-[#4B5563] text-base font-medium py-5 lg:py-6  rounded-[37px] w-full ">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* Extended License Card */}
                    <div className="bg-white rounded-[20px] shadow-lg overflow-hidden" style={{ filter: 'drop-shadow(0px 10px 37px rgba(0, 0, 0, 0.06))' }}>
                        <div className="pt-8 lg:pt-[65px] ps-4 lg:ps-[35px] px-5 lg:pe-[45px]  pb-6 lg:pb-[50px]">
                            <div className="flex items-baseline ps-6">
                                <span className="leading-[30px] text-3xl lg:text-[48px] font-bold text-[#0B071A] mb-4 lg:mb-6">$19.99</span>
                                <span className="ml-1 text-base text-[#0B071A]">/Extended License</span>
                            </div>
                            <div className="text-[#4B5563] text-base mb-5 lg:mb-6 ps-6 border-b border-[#0017261A] p-4 lg:pb-6">for commercial and reselling</div>
                            <div style={{ backgroundColor: color || '#C52127' }} className=" text-white py-2 px-4 lg:ms-7 rounded-[7px] w-fit mb-6 font-semibold text-lg">
                                Extended License
                            </div>
                            <ul className="text-black space-y-3 mb-8 lg:ps-7">
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className="mr-2">
                                        <Image src={color ? tick2 : tick} alt="" />
                                    </span>
                                    3-5 days turnaround
                                </li>
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className="mr-2">
                                        <Image src={color ? tick2 : tick} alt="" />
                                    </span>
                                    Native Development
                                </li>
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className=" mr-2" style={{ color: color || '#C52127' }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.000L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    Task delivered one-by-one
                                </li>
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className="mr-2">
                                        <Image src={color ? tick2 : tick} alt="" />
                                    </span>
                                    Dedicated dashboard
                                </li>
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className="mr-2">
                                        <Image src={color ? tick2 : tick} alt="" />
                                    </span>
                                    Updates via dashboard & slack
                                </li>
                                <li className="flex items-center text-[#6B7280] text-base">
                                    <span className="mr-2">
                                        <Image src={color ? tick2 : tick} alt="" />
                                    </span>
                                    50k design & prints
                                </li>
                            </ul>
                            <button
                                className="text-base font-medium py-5 lg:h-[62px] rounded-[37px] w-full px-6 border transition-all duration-300"
                                style={{
                                    backgroundColor: color || 'black',
                                    color: 'white',
                                    borderColor: color || 'black',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = color || 'black';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = color || 'black';
                                    e.currentTarget.style.color = 'white';
                                }}
                            >
                                Buy Now
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
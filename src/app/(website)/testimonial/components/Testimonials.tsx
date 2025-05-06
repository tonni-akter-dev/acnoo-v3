// Testimonials.jsx
import React from "react";
import t1 from '/public/t1.png'
import t2 from '/public/t2..png'
import t3 from '/public/t3.png'
import t4 from '/public/t4.png'
import t5 from '/public/t5.png'
import Image from "next/image";


const Testimonials = () => {
    return (
        <section className=" testimonial-bg  my-6 lg:mt-[117px] lg:mb-[237px] lg:px-0 px-5">
            <div className="max-w-[1290px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col gap-[30px]">
                <div className="flex flex-col gap-6">
                    <div className="bg-white shadow-md rounded-xl py-9 xs_padding px-10 md:w-[343px] lg:w-[410px] h-fit">
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
                            from our sales and customer support
                            teams using close. Even our co- sales
                            founders are very happy. We get
                            absolutely raving reviews from our
                            Even our co- founders are very
                            happy for services
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
                            </div>
                            <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
                                </svg> 4.9
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-xl py-9 xs_padding px-10 md:w-[343px] lg:w-[410px] h-fit">
                        <Image src={t3} alt="company logo" className="mb-[30px]" />
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
                            from our sales and customer support
                            teams using close. Even our co</p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
                            </div>
                            <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
                                </svg> 4.9
                            </div>
                        </div>
                    </div>
                </div>
                {/* second */}
                <div className="flex flex-col gap-6">
                    <div className="bg-white shadow-md rounded-xl py-9 px-10 md:w-[343px] lg:w-[410px] h-fit">
                        <Image src={t1} alt="company logo" className="mb-[30px]" />
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
                            from our sales and customer support
                            teams using close. Even our co-
                            founders are very happy.
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
                            </div>
                            <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
                                </svg> 4.9
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl py-9 px-10 md:w-[343px] lg:w-[410px] h-fit">
                        <Image src={t4} alt="company logo" className="mb-[30px]" />
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
                            from our sales and customer support
                            teams using close. Even our co- sales
                            founders are very happy. We get
                            absolutely raving reviews from our
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
                            </div>
                            <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
                                </svg> 4.9
                            </div>
                        </div>
                    </div>

                </div>
                <div className="lg:flex hidden flex-col gap-6">
                    <div className="bg-white shadow-md rounded-xl py-9 px-10 md:w-[343px] lg:w-[410px] h-fit">
                        <Image src={t2} alt="company logo" className="mb-[30px]" />
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
                            from our sales and customer support
                            teams using close. Even our co- sales
                            founders are very happy. We get
                            absolutely raving reviews from our
                            Even our co- founders are very
                            happy for services
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
                            </div>
                            <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
                                </svg> 4.9
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl py-9 px-10 md:w-[343px] lg:w-[410px] h-fit">
                        <Image src={t5} alt="company logo" className="mb-[30px]" />
                        <p className="text-gray-700 text-xl mb-4 border-b border-[#EEEFF1] pb-6">We get absolutely raving reviews
                            from our sales and customer support
                            teams using close. Even our compa
                        </p>
                        <div className="flex items-end justify-between">
                            <div>
                                <h4 className="font-bold text-lg mb-3 text-[#150E3D]">Rudra Ghosh</h4>
                                <p className="text-base text-gray-500">Founder & CEO <span className="text-[#150E3D]">Dulalix</span></p>
                            </div>
                            <div className="bg-indigo-900 text-white text-xs px-3 py-1 rounded-full flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white" />
                                </svg> 4.9
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;

import React from 'react';
import CountUp from 'react-countup';
import aihello from '/public/admindashboard/ai-hello.png';
import shape2 from '/public/admindashboard/shape_02.png';
import shape1 from '/public/admindashboard/shape-1.png';
import Image from 'next/image';

const stats = [
    { value: 7, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Team Members" },
    { value: 2000, suffix: "+", label: "Happy Clients" },
    { value: 40, suffix: "+", label: "using our application" },
];

const CountClients = () => {
    return (
        <div className="flex justify-center items-center mt-8 lg:mt-[117px] mb-8 lg:mb-[100px] lg:px-[150px] md:px-5 px-4 relative">
            <Image 
                className="absolute right-0 md:right-0 !lg:right-[9%] top-[-13%] z-10 size-[43px] md:size-[49px] lg:size-[83px]" 
                src={aihello} 
                alt="Background Design" 
            />
            <Image 
                className="absolute md:left-[45%] lg:left-[51%] bottom-[-13%] md:bottom-[-18%] lg:bottom-[-31%] z-10 w-[50px] h-[45px]" 
                src={shape1} 
                alt="Background Design" 
            />
            <Image 
                className="absolute left-0 lg:left-[8%] top-[-22px] lg:bottom-[-41%] z-10
                lg:w-20 lg:h-[96px] md:w-12 md:h-[57px] w-[37px] h-11
                " 
                src={shape2} 
                alt="Background Design" 
            />

            <div 
                className="relative hidden lg:flex w-full ps-[63px] pe-[87px] rounded-[100px] border border-white px-4 z-50"
                style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    boxShadow: "0px 20px 80px 0px rgba(7, 13, 32, 0.08)",
                    backdropFilter: "blur(5px)"
                }}
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`flex-1 flex ps-[65px] flex-col py-9 justify-start items-start text-center relative z-50 ${
                            index !== stats.length - 1 ? "border-r border-gray-300" : ""
                        }`}>
                        <h2 className="text-3xl font-bold text-black">
                            <CountUp start={0} end={stat.value} duration={2.5} />{stat.suffix}
                        </h2>
                        <p className="text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* md device */}
            <div 
                className="relative  lg:hidden grid grid-cols-2 w-full rounded-2xl border border-white z-50"
                style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    boxShadow: "0px 20px 80px 0px rgba(7, 13, 32, 0.08)",
                    backdropFilter: "blur(5px)"
                }}>
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`flex-1 px-4 md:px-8  flex flex-col py-4 justify-start items-start  relative z-50 ${
                            index !== stats.length - 1  && index !== stats.length -3 ? "border-r border-gray-300" : ""
                        } ${
                            index !== stats.length - 1  && index !== stats.length -2 ? "border-b border-gray-300" : ""
                        } ${
                            index !== stats.length - 2  && index !== stats.length -4 ? "md:ps-10 ps-5" : ""
                        } `}>
                        <h2 className="text-3xl font-bold text-[#0B071A]">
                            <CountUp start={0} end={stat.value} duration={2.5} />{stat.suffix}
                        </h2>
                        <p className="text-[#6B7280] text-sm md:text-base whitespace-nowrap
                        ">{stat.label}</p>
                    </div>
                ))}
            </div>
            {/* md device */}
        </div>
    );
};

export default CountClients;

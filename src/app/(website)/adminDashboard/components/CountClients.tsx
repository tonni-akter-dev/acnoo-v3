import React from 'react';
import CountUp from 'react-countup';
import aihello from '../../../../../public/admindashboard/ai-hello.png';
import shape2 from '../../../../../public/admindashboard/shape_02.png';
import shape1 from '../../../../../public/admindashboard/shape-1.png';
import Image from 'next/image';

const stats = [
    { value: 7, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Team Members" },
    { value: 2000, suffix: "+", label: "Happy Clients" },
    { value: 40, suffix: "+", label: "using our application" },
];

const CountClients = () => {
    return (
        <div className="flex justify-center items-center mt-[117px] mb-[100px] lg:px-[150px] px-5 relative">
            {/* Background Image (Move it behind content) */}
            <Image 
                className="absolute right-[9%] top-[-32%] z-10" 
                src={aihello} 
                alt="Background Design" 
            />
            <Image 
                className="absolute left-[51%] bottom-[-31%] z-10" 
                src={shape1} 
                alt="Background Design" 
            />
            <Image 
                className="absolute left-[8%] bottom-[-41%] z-10" 
                src={shape2} 
                alt="Background Design" 
            />

            {/* Stats Container */}
            <div 
                className="relative flex w-full ps-[63px] pe-[87px] rounded-[100px] border border-white px-4 z-50"
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
                        }`}
                    >
                        <h2 className="text-3xl font-bold text-black">
                            <CountUp start={0} end={stat.value} duration={2.5} />{stat.suffix}
                        </h2>
                        <p className="text-gray-600">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountClients;

import React from 'react';
import pay1 from '/public/admindashboard/pay1.png';
import pay2 from '/public/admindashboard/pay2.png';
import pay3 from '/public/admindashboard/pay3.png';
import pay4 from '/public/admindashboard/pay4.png';
import pay5 from '/public/admindashboard/pay5.png';
import pay6 from '/public/admindashboard/pay6.png';
import pay7 from '/public/admindashboard/pay7.png';
import pay8 from '/public/admindashboard/pay8.png';
import pay9 from '/public/admindashboard/pay9.png';
import pay10 from '/public/admindashboard/pay10.png';
import pay11 from '/public/admindashboard/pay11.png';
import pay12 from '/public/admindashboard/pay12.png';
import pay13 from '/public/admindashboard/pay13.png';
import pay14 from '/public/admindashboard/pay14.png';
import pay15 from '/public/admindashboard/pay15.png';
import pay16 from '/public/admindashboard/pay16.png';
import Image from 'next/image';

const AcceptedPayment = () => {
    const paymentRows = [
        [pay1, pay2, pay3, pay4, pay5, pay6, pay7],
        [pay8, pay9, pay10, pay11, pay12, pay13],
        [pay14, pay15, pay16],
    ];
    const mdpaymentRows = [
        pay1, pay2, pay3, pay4, pay5, pay6, pay7,
        pay8, pay9, pay10, pay11, pay12, pay13,
        pay14, pay15, pay16,
    ];

    return (
        <div className="lg:px-[276px] px-5 mb-6 md:mb-8 lg:mb-[161px] mt-6 md:mt-[50px] lg:mt-[124px]">
            <h2 className="text-2xl md:text-[30px] lg:text-[60px] text-[#0B071A] font-bold text-center">
                Payment We Accepted
            </h2>
            <p className="text-[#6B7280] text-base font-medium text-center mb-[33px]">
                More than 100,000+ teams are using Softuch
            </p>
            <div className='lg:block  hidden'>
                {paymentRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex  justify-center gap-3 lg:gap-[25px] mb-[25px]">
                        {row.map((payImage, index) => (
                            <Image
                                key={index}
                                className="w-[174px] h-[84px] rounded-lg"
                                style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                                src={payImage}
                                alt={`Payment method ${index + 1}`}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className='lg:hidden  block'>
                {/* {paymentRows.map((row, rowIndex) => ( */}
                    <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-3 lg:gap-[25px] lg:mb-[25px]">
                        {mdpaymentRows.map((payImage, index) => (
                            <Image
                                key={index}
                                className="w-[174px] h-[64px] md:h-[68px] lg:h-[84px] rounded-lg"
                                style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                                src={payImage}
                                alt={`Payment method ${index + 1}`}
                            />
                        ))}
                    </div>
                {/* ))} */}
            </div>
        </div>
    );
};

export default AcceptedPayment;
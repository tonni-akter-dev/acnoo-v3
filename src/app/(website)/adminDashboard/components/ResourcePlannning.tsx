'use client'
import React, { useState } from 'react'
import ent1 from '../../../../../public/admindashboard/ent1.png'
import ent2 from '../../../../../public/admindashboard/ent2.png'
import Image from 'next/image'

const faqs = [
  {
    title: 'Dashboard',
    content: 'ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.',
  },
  {
    title: 'Task Management',
    content: 'ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.',
  },
];

const ResourcePlannning = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleIndex = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // close if already open
    } else {
      setOpenIndex(index); // open new one
    }
  };

  return (
    <div className='lg:px-[150px] px-5'>
      <div className="grid grid-cols-2 gap-[87px] items-center">
        <div>
          <Image className='h-[600px] w-full' src={ent1} alt="" />
        </div>
        <div>
          <p className='text-red text-base uppercase font-bold mb-3.5'>Next Generation</p>
          <h2 className='text-[60px] text-[#0B071A] font-bold leading-[56px] mb-5'>Enterprise
            Resource Planning.</h2>
          <p className='text-lg mb-[25px] text-[#4B5563] font-medium'>Simple and intuitive time tracking. Run the tracker or
            enter your times manually.</p>
          <ul>
            <li className='mb-5 flex gap-3 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle opacity="0.08" cx="11" cy="11" r="11" fill="#141125" />
              <path d="M15 8L9.5 13.5L7 11" stroke="#141125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
              <span className='text-lg  text-[#4B5563] font-medium'>Billable</span>
            </li>
            <li className='mb-5 flex gap-3 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle opacity="0.08" cx="11" cy="11" r="11" fill="#141125" />
              <path d="M15 8L9.5 13.5L7 11" stroke="#141125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
              <span className='text-lg  text-[#4B5563] font-medium'>Manual time entries</span>
            </li>
            <li className='mb-5 flex gap-3 items-center'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle opacity="0.08" cx="11" cy="11" r="11" fill="#141125" />
              <path d="M15 8L9.5 13.5L7 11" stroke="#141125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
              <span className='text-lg  text-[#4B5563] font-medium'>Services</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[87px] items-center">
        <div>
          <p className='text-red text-base uppercase font-bold mb-3.5'>INVOICES</p>
          <h2 className='text-[60px] text-[#0B071A] font-bold leading-[56px] mb-5'>Simple Tools,
            Powerful Effects</h2>

          {/* faq */}

          {faqs.map((faq, index) => (
          <div key={index} className='w-[470px] mt-[14px] rounded-2xl p-[30px] bg-[#F7F9FB]'>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="text-[22px] font-bold text-[#0B071A]">
                {faq.title}
              </div>
              <button className="focus:outline-none">
                {openIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <rect width="30" height="30" rx="15" fill="#C52127" />
                    <path d="M20 13L15 18L10 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <rect width="30" height="30" rx="15" fill="#141125" />
                    <path d="M13 20L18 15L13 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
            {openIndex === index && (
              <p className='mt-[22px] text-[#4B5563] text-base font-medium'>{faq.content}</p>
            )}
          </div>
        ))}
          {/* <div className='w-[470px] rounded-2xl p-[30px] bg-[#F7F9FB] '>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="text-[22px] font-bold text-[#0B071A] ">Dashboard</div>
              <button className="focus:outline-none">
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <rect x="0.226562" y="0.224609" width="30" height="30" rx="15" fill="#C52127" />
                    <path d="M20.2266 13.2246L15.2266 18.2246L10.2266 13.2246" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <rect x="0.226562" y="0.224609" width="30" height="30" rx="15" fill="#141125" />
                    <path d="M13.2266 20.2246L18.2266 15.2246L13.2266 10.2246" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
            {isOpen && <p className='mt-[22px] text-[#4B5563] text-base font-medium'>ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.</p>}

          </div>
          <div className='w-[470px] mt-[14px] rounded-2xl p-[30px] bg-[#F7F9FB] '>
            <div
              className=" flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="text-[22px] font-bold text-[#0B071A] ">Task Management</div>
              <button className="focus:outline-none">
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <rect x="0.226562" y="0.224609" width="30" height="30" rx="15" fill="#C52127" />
                    <path d="M20.2266 13.2246L15.2266 18.2246L10.2266 13.2246" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <rect x="0.226562" y="0.224609" width="30" height="30" rx="15" fill="#141125" />
                    <path d="M13.2266 20.2246L18.2266 15.2246L13.2266 10.2246" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
            {isOpen && <p className='mt-[22px] text-[#4B5563] text-base font-medium'>ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.</p>}

          </div> */}
        </div>
        <div>
          <Image className='h-[600px] w-full' src={ent2} alt="" />
        </div>

      </div>
    </div>
  )
}

export default ResourcePlannning
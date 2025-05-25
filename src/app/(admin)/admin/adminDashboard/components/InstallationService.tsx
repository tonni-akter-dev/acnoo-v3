import { plans } from '@/app/utils/data'
import React from 'react'

const InstallationService = ({ color, classname }: { color?: string, classname?: string }) => {
  return (
    <div>
      <div className="text-black text-lg font-medium mb-4 text-center">
        <span style={{ backgroundColor: color || '#C52127' }} className="rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]">
          New
        </span>
        {`We've`} added <span className='text-[#2353F5]'>Pricing</span> new!
      </div>
      <h3 className="text-2xl md:text-3xl lg:text-[60px] capitalize lg:mb-8 lg:leading-[72px] leading-[30px] font-bold text-center text-[#0B071A]">
        Installation Services </h3>

      <div className="pt-4 pb-10 lg:py-12 px-4 lg:px-9 md:px-5 bg-white">
        <div className="lg:grid md:hidden grid max-w-7xl mx-auto  grid-cols-1 md:grid-cols-3 gap-4  lg:gap-[30px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border  p-4 lg:p-9 shadow-sm relative rounded-[18px] flex flex-col justify-between border-[#D1D5DB]`}>
              <div>
                <p className="text-[#1351D8] font-semibold text-base mb-2">{plan.discount} <span className='text-[#150E3D]'>OFF</span></p>
                <h3 className="text-xl lg:text-2xl text-[#150E3D] font-medium mb-4 lg:mb-8">{plan.title}</h3>
                <p className="text-3xl lg:text-[50px] font-bold text  -[#150E3D]">
                  {plan.price}<span className="text-base lg:text-lg font-bold">/{plan.type}</span>
                </p>
                <button
                  className={`${classname} mt-6 lg:mt-10 cursor-pointer text-base font-medium w-full lg:h-[60px] h-12 rounded-lg flex justify-center items-center border transition-all duration-300
                    ${index === 1 ? 'bg-[#1351D8] text-white hover:bg-transparent hover:!text-black'
                      : 'bg-transparent text-black hover:bg-[#1351D8] hover:text-white'}`}
                  // style={{
                  //   '--btnColor': color || '#1351D8',
                  //   borderColor: color || '#1351D8',
                  // } as React.CSSProperties}
                  >
                  Purchase now
                </button>
                <ul className="mt-5 lg:mt-7 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 lg:gap-4 text-[#5F6168] text-sm lg:text-base  leading-7 mb-3">
                      <div className=' w-4 h-4 mt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.00078 0.393555C6.49641 0.393555 5.02582 0.839653 3.77498 1.67544C2.52414 2.51122 1.54922 3.69916 0.973526 5.08902C0.397827 6.47888 0.247198 8.00824 0.540687 9.48371C0.834175 10.9592 1.5586 12.3145 2.62235 13.3782C3.68611 14.442 5.04141 15.1664 6.51688 15.4599C7.99234 15.7534 9.52171 15.6028 10.9116 15.0271C12.3014 14.4514 13.4894 13.4764 14.3251 12.2256C15.1609 10.9748 15.607 9.50418 15.607 7.9998C15.6045 5.98326 14.8024 4.05002 13.3765 2.62411C11.9506 1.1982 10.0173 0.396036 8.00078 0.393555ZM11.6539 5.00918L8.17266 10.3529C8.00974 10.6501 7.78994 10.9124 7.52578 11.1248C7.33752 11.2513 7.11976 11.327 6.89362 11.3445C6.66748 11.362 6.44066 11.3208 6.23516 11.2248C5.94097 11.0587 5.68198 10.8369 5.47266 10.5717L4.42891 9.4123C4.16641 9.12168 4.20391 8.6123 4.67891 8.58105C4.90101 8.58746 5.11713 8.65445 5.30391 8.7748L6.29453 9.29355C6.4204 9.37669 6.56874 9.41922 6.71953 9.41543C6.87634 9.37584 7.01579 9.2858 7.11641 9.15918L11.3695 4.79668C11.3972 4.76874 11.4275 4.74362 11.4602 4.72168C11.5383 4.66855 11.6289 4.64043 11.6945 4.6998C11.7602 4.75918 11.7164 4.9123 11.6539 5.00918Z" fill="#1A4137" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {plan.seeAll && (
                <p className="flex flex-col  gap-1.5  mt-4 lg:mt-[50px] text-base text-center  text-black font-medium items-center">
                  {color ? <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M8.5 0.875C6.99192 0.875 5.5177 1.3222 4.26378 2.16004C3.00986 2.99789 2.03254 4.18875 1.45542 5.58204C0.878304 6.97532 0.727303 8.50846 1.02152 9.98756C1.31573 11.4667 2.04194 12.8253 3.10831 13.8917C4.17469 14.9581 5.53333 15.6843 7.01244 15.9785C8.49154 16.2727 10.0247 16.1217 11.418 15.5446C12.8112 14.9675 14.0021 13.9901 14.84 12.7362C15.6778 11.4823 16.125 10.0081 16.125 8.5C16.1226 6.47846 15.3185 4.54039 13.8891 3.11094C12.4596 1.6815 10.5215 0.877385 8.5 0.875ZM12.456 7.60371L8.99008 11.0696C8.86009 11.1996 8.68381 11.2726 8.5 11.2726C8.31619 11.2726 8.13991 11.1996 8.00992 11.0696L4.54401 7.60371C4.41775 7.47298 4.34788 7.29788 4.34946 7.11613C4.35103 6.93438 4.42394 6.76052 4.55246 6.632C4.68098 6.50348 4.85484 6.43058 5.03659 6.429C5.21834 6.42742 5.39344 6.49729 5.52417 6.62356L8.5 9.59939L11.4758 6.62356C11.6066 6.49729 11.7817 6.42742 11.9634 6.429C12.1452 6.43058 12.319 6.50348 12.4475 6.632C12.5761 6.76052 12.649 6.93438 12.6505 7.11613C12.6521 7.29788 12.5823 7.47298 12.456 7.60371Z" fill="#7500FE" />
                  </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M8.5 0.875C6.99192 0.875 5.5177 1.3222 4.26378 2.16004C3.00986 2.99789 2.03254 4.18875 1.45542 5.58204C0.878304 6.97532 0.727303 8.50846 1.02152 9.98756C1.31573 11.4667 2.04194 12.8253 3.10831 13.8917C4.17469 14.9581 5.53333 15.6843 7.01244 15.9785C8.49154 16.2727 10.0247 16.1217 11.418 15.5446C12.8112 14.9675 14.0021 13.9901 14.84 12.7362C15.6778 11.4823 16.125 10.0081 16.125 8.5C16.1226 6.47846 15.3185 4.54039 13.8891 3.11094C12.4596 1.6815 10.5215 0.877385 8.5 0.875ZM12.456 7.60371L8.99008 11.0696C8.86009 11.1996 8.68381 11.2726 8.5 11.2726C8.31619 11.2726 8.13991 11.1996 8.00992 11.0696L4.54401 7.60371C4.41775 7.47298 4.34788 7.29788 4.34946 7.11613C4.35103 6.93438 4.42394 6.76052 4.55246 6.632C4.68098 6.50348 4.85484 6.43058 5.03659 6.429C5.21834 6.42742 5.39344 6.49729 5.52417 6.62356L8.5 9.59939L11.4758 6.62356C11.6066 6.49729 11.7817 6.42742 11.9634 6.429C12.1452 6.43058 12.319 6.50348 12.4475 6.632C12.5761 6.76052 12.649 6.93438 12.6505 7.11613C12.6521 7.29788 12.5823 7.47298 12.456 7.60371Z" fill="#C52127" />
                  </svg>
                  }
                  See All Features</p>
              )}
            </div>
          ))}
        </div>

        {/* md device  */}
        <div className="lg:hidden md:grid hidden mx-auto  grid-cols-2 gap-[30px]">
          {plans.slice(0, 2).map((plan, index) => (
            <div
              key={index}
              className={`border  p-4 shadow-sm relative rounded-[18px] flex flex-col justify-between border-[#D1D5DB]`}>
              <div>
                <p className="text-[#1351D8] font-semibold text-base mb-2">{plan.discount} <span className='text-[#150E3D]'>OFF</span></p>
                <h3 className="text-xl text-[#150E3D] font-medium mb-4">{plan.title}</h3>
                <p className="text-[32px] font-bold text-[#150E3D]">
                  {plan.price}<span className="text-base font-bold">/{plan.type}</span>
                </p>

                <button className="mt-6 text-base font-medium w-full bg-transparent text-black h-12  rounded-lg border border-[#1351D8]">
                  Purchase now
                </button>
                <ul className="mt-5 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-[#5F6168] text-base  leading-7 mb-3">
                      <div className=' w-4 h-4 mt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8.00078 0.393555C6.49641 0.393555 5.02582 0.839653 3.77498 1.67544C2.52414 2.51122 1.54922 3.69916 0.973526 5.08902C0.397827 6.47888 0.247198 8.00824 0.540687 9.48371C0.834175 10.9592 1.5586 12.3145 2.62235 13.3782C3.68611 14.442 5.04141 15.1664 6.51688 15.4599C7.99234 15.7534 9.52171 15.6028 10.9116 15.0271C12.3014 14.4514 13.4894 13.4764 14.3251 12.2256C15.1609 10.9748 15.607 9.50418 15.607 7.9998C15.6045 5.98326 14.8024 4.05002 13.3765 2.62411C11.9506 1.1982 10.0173 0.396036 8.00078 0.393555ZM11.6539 5.00918L8.17266 10.3529C8.00974 10.6501 7.78994 10.9124 7.52578 11.1248C7.33752 11.2513 7.11976 11.327 6.89362 11.3445C6.66748 11.362 6.44066 11.3208 6.23516 11.2248C5.94097 11.0587 5.68198 10.8369 5.47266 10.5717L4.42891 9.4123C4.16641 9.12168 4.20391 8.6123 4.67891 8.58105C4.90101 8.58746 5.11713 8.65445 5.30391 8.7748L6.29453 9.29355C6.4204 9.37669 6.56874 9.41922 6.71953 9.41543C6.87634 9.37584 7.01579 9.2858 7.11641 9.15918L11.3695 4.79668C11.3972 4.76874 11.4275 4.74362 11.4602 4.72168C11.5383 4.66855 11.6289 4.64043 11.6945 4.6998C11.7602 4.75918 11.7164 4.9123 11.6539 5.00918Z" fill="#1A4137" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {plan.seeAll && (
                <p className="flex flex-col  gap-1.5 mt-6 text-base text-center  text-black font-medium items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M8.5 0.875C6.99192 0.875 5.5177 1.3222 4.26378 2.16004C3.00986 2.99789 2.03254 4.18875 1.45542 5.58204C0.878304 6.97532 0.727303 8.50846 1.02152 9.98756C1.31573 11.4667 2.04194 12.8253 3.10831 13.8917C4.17469 14.9581 5.53333 15.6843 7.01244 15.9785C8.49154 16.2727 10.0247 16.1217 11.418 15.5446C12.8112 14.9675 14.0021 13.9901 14.84 12.7362C15.6778 11.4823 16.125 10.0081 16.125 8.5C16.1226 6.47846 15.3185 4.54039 13.8891 3.11094C12.4596 1.6815 10.5215 0.877385 8.5 0.875ZM12.456 7.60371L8.99008 11.0696C8.86009 11.1996 8.68381 11.2726 8.5 11.2726C8.31619 11.2726 8.13991 11.1996 8.00992 11.0696L4.54401 7.60371C4.41775 7.47298 4.34788 7.29788 4.34946 7.11613C4.35103 6.93438 4.42394 6.76052 4.55246 6.632C4.68098 6.50348 4.85484 6.43058 5.03659 6.429C5.21834 6.42742 5.39344 6.49729 5.52417 6.62356L8.5 9.59939L11.4758 6.62356C11.6066 6.49729 11.7817 6.42742 11.9634 6.429C12.1452 6.43058 12.319 6.50348 12.4475 6.632C12.5761 6.76052 12.649 6.93438 12.6505 7.11613C12.6521 7.29788 12.5823 7.47298 12.456 7.60371Z" fill="#C52127" />
                  </svg> See All Features</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InstallationService
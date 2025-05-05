import React from 'react'

const plans = [
  {
    title: "Basic plan",
    price: "$29",
    type: "Onetime",
    discount: "85%",
    features: [
      "Setup website & admin panel",
      "Configure Ready Commerce User App, Delivery Man app and User Website with and admin panel.",
      "User App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "Seller App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "SMTP Mail configuration",
      "Existing Payment Gateway Configuration",
      "SMS Gateway Configuration (Existing)"
    ],
    iconColor: "text-green-600",
    seeAll: true,
  },
  {
    title: "Standard plan",
    price: "$29",
    type: "Monthly",
    discount: "85%",
    features: [
      "Setup website & admin panel",
      "Configure Ready Commerce User App, Delivery Man app and User Website with and admin panel.",
      "User App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "Seller App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "SMTP Mail configuration",
      "Existing Payment Gateway Configuration",
      "SMS Gateway Configuration (Existing)"
    ],
    iconColor: "text-green-600",
    seeAll: true,
  },
  {
    title: "Premium plan",
    price: "$29",
    type: "Yearly",
    discount: "85%",
    features: [
      "Setup website & admin panel",
      "Configure Ready Commerce User App, Delivery Man app and User Website with and admin panel.",
      "User App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "Seller App Configuration (App Name, Package Name Logo, Splash Image, theme color)",
      "SMTP Mail configuration",
      "Existing Payment Gateway Configuration",
      "SMS Gateway Configuration (Existing)"
    ],
    iconColor: "text-green-600",
    seeAll: true,
    highlight: true,
  },
];

const InstallationService = () => {
  return (
    <div>
      <div className="text-black text-lg font-medium mb-4 text-center">
        <span className="bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]">
          New
        </span>
        {`We've`} added <span className='text-[#2353F5]'>Pricing</span> new!
      </div>
      <h3 className="text-[60px] capitalize mb-8 lg:leading-[72px] leading-[30px] font-bold text-center text-[#0B071A]">
        our pricing plan               </h3>

      <div className="py-12 px-9 md:px-[150px] bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border  p-9 shadow-sm relative rounded-[18px] flex flex-col justify-between border-[#D1D5DB]`}>
              {/* {plan.highlight && (
              <div className="absolute top-0 right-0 h-full border-blue-500"></div>
            )} */}
              <div>
                <p className="text-[#1351D8] font-semibold text-sm mb-2">{plan.discount} <span className='text-[#150E3D]'>OFF</span></p>
                <h3 className="text-2xl text-[#150E3D] font-medium mb-8">{plan.title}</h3>
                <p className="text-[50px] font-bold text-[#150E3D]">
                  {plan.price}<span className="text-lg font-bold">/{plan.type}</span>
                </p>

                <button className="mt-10 text-base font-medium w-full bg-transparent text-black py-5  rounded-[18px] border border-[#1351D8]">
                  Purchase now
                </button>
                <ul className="mt-7 space-y-3">
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
                <p className="flex flex-col  gap-1.5 mt-[50px] text-base text-center  text-black font-medium items-center">
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
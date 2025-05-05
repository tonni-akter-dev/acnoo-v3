import { productsDetailsData } from '@/app/utils/data'
import React from 'react'

const Features = () => {
  return (
    <div className="bg-white p-6 mt-6 rounded-lg shadow border border-[#E5E7EB]">
          <h2 className="text-xl font-semibold border-b border-[#E5E7EB] pb-2 mb-4 border-dotted">
            Features
          </h2>
          <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 font-medium text-[#4B5563]">
            {productsDetailsData.map((data, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2_41053)">
                    <path
                      d="M9.21231 4.30014L9.19625 0H6.78906L6.80513 4.30014L8.00869 5.94671L9.21231 4.30014ZM6.80513 11.6695V15.9857H9.21231V11.6695L8.00869 10.023L6.80513 11.6695Z"
                      fill="#2353F5"
                    />
                    <path
                      d="M9.21319 11.6697L11.7488 15.1546L13.6906 13.7479L11.155 10.263L9.21319 9.63952V11.6697ZM6.806 4.30032L4.25431 0.81543L2.3125 2.22218L4.84812 5.70707L6.806 6.33051V4.30032Z"
                      fill="#2353F5"
                    />
                    <path
                      d="M4.84656 5.7067L0.738187 4.37988L0 6.64983L4.10831 7.99265L6.05013 7.35321L4.84656 5.7067ZM9.94987 8.61609L11.1534 10.2627L15.2618 11.5894L16 9.31946L11.8917 7.99265L9.94987 8.61609Z"
                      fill="#2353F5"
                    />
                    <path
                      d="M11.8917 7.99265L16 6.64983L15.2618 4.37988L11.1534 5.7067L9.94987 7.35321L11.8917 7.99265ZM4.10831 7.99265L0 9.31946L0.738187 11.5894L4.84656 10.2627L6.05013 8.61609L4.10831 7.99265Z"
                      fill="#2353F5"
                    />
                    <path
                      d="M4.84812 10.263L2.3125 13.7479L4.25431 15.1546L6.806 11.6697V9.63952L4.84812 10.263ZM11.155 5.70707L13.6906 2.22218L11.7488 0.81543L9.21319 4.30032V6.33051L11.155 5.70707Z"
                      fill="#2353F5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_41053">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {data.name}
              </li>
            ))}
          </ul>
        </div>

  )
}

export default Features
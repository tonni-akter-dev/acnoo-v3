'use client'
import Image from "next/image";
import { useState } from "react";

import eye from '/public/img/icon/eye.svg'
import reviews from '/public/img/icon/reviews.svg'
import repeat from '/public/img/icon/repeat.svg'
import invoic from '/public/images/icons/upload-icon.svg'
const Dropdown = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="relative">
        <button onClick={() => setOpen(!open)} className="text-gray-600 hover:text-black">
          <i className="far fa-ellipsis-v"></i>
        </button>
        {open && (
          <ul className="absolute right-0 z-10 bg-white shadow-md rounded-lg mt-2 w-48 text-sm">
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
              >
                <Image src={eye} alt="View" width={16} height={16} className="mr-2" />
                View Details
              </button>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <Image src={invoic} alt="Invoice" width={16} height={16} className="mr-2" />
                Invoice
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
              >
                <Image src={reviews} alt="Review" width={16} height={16} className="mr-2" />
                Review
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
              >
                <Image src={repeat} alt="Refund" width={16} height={16} className="mr-2" />
                Refund Request
              </button>
            </li>
          </ul>
        )}
      </div>
    );
  };
  export default Dropdown;
import React from 'react';
import { motion } from 'framer-motion';

const LicenseOptions = ({
  id,
  value,
  label,
  checked,
  onChange,
  price,
  originalPrice,
}: {
  id: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  price: number;
  originalPrice?: number;
}) => {
  // Animation variant
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-between mb-4"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center gap-1">
        <div className="relative flex items-center">
          <input
            type="radio"
            id={id}
            name="license"
            value={value}
            checked={checked}
            onChange={onChange}
            className="appearance-none h-4 w-4 border border-gray-300 rounded-full checked:border-4 checked:border-[#6021D1]"
          />
        </div>
        <label htmlFor={id} className={`text-lg ${checked ? 'font-bold' : 'font-medium'}`}>
          {label}
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.9987 14.6666C11.6806 14.6666 14.6654 11.6818 14.6654 7.99992C14.6654 4.31802 11.6806 1.33325 7.9987 1.33325C4.3168 1.33325 1.33203 4.31802 1.33203 7.99992C1.33203 11.6818 4.3168 14.6666 7.9987 14.6666Z"
            fill="#5B5B5B"
          />
          <path
            d="M8 5.33325V7.99992"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 10.6667H8.00667"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex items-center gap-1">
        {originalPrice && (
          <span className="text-gray-500 line-through text-xs">${originalPrice}</span>
        )}
        <span
          className={`font-bold text-lg ${originalPrice ? 'text-[#6021D1]' : 'text-gray-900'}`}
        >
          ${price}
        </span>
      </div>
    </motion.div>
  );
};

export default LicenseOptions;
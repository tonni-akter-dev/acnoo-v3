// import React from 'react'

// const ProductDescriptionItem = ({
//     label,
//     value,
//     isLink = false,
//   }: {
//     label: string;
//     value: string;
//     isLink?: boolean;
//   }) => {a
//     return (
//         <li className="flex gap-3.5">
//             <p className="lg:w-[187px] md:w-[187px] !w-[150px] lg:text-base text-sm whitespace-nowrap">
//                 {label}
//             </p>
//             <span
//                 className={`text-sm font-medium ${isLink ? 'text-[#6021D1]' : 'text-[#5B5B5B]'}`}
//             >
//                 : {value}
//             </span>
//         </li>
//     )
// }

// export default ProductDescriptionItem\
import React from 'react';

const ProductDescriptionItem = ({
  label,
  value,
  isLink = false,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) => {
  return (
    <li className="flex gap-2 items-start">
      {/* Label with fixed width and proper alignment */}
      <p className="w-[120px] sm:w-[150px] md:w-[187px] lg:text-base text-sm font-bold text-[#000D2B] shrink-0">
        {label}
      </p>
      {/* Colon and value aligned in a straight line */}
      <div className="flex items-start">
        <span className="text-sm font-medium text-[#000D2B] mr-1">:</span>
        <span
          className={`text-sm font-medium ${
            isLink ? 'text-[#6021D1]' : 'text-[#5B5B5B]'
          }`}
        >
          {value}
        </span>
      </div>
    </li>
  );
};

export default ProductDescriptionItem;
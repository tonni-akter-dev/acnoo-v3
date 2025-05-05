'use client'
import React, { useState } from 'react'
import Title from './Title'
import { FaCheck } from 'react-icons/fa'

type CheckboxItem = {
   name: string;
   count: string | number;
 };

 type IProps = {
   title: string;
   data: CheckboxItem[];
 };

const CategoriesCheckbox:React.FC<IProps> = ({title,data}) => {

      const [selected, setSelected] = useState<string[]>([]);
      const handleCheckboxChange = (name: string) => {
         setSelected((prevSelected) =>
            prevSelected.includes(name)
               ? prevSelected.filter((item) => item !== name)
               : [...prevSelected, name]
         );
      };

   return (
      <div>
      <div className='border-y border-[#D9D9D9] py-4'>
            <Title title={title} />
            <ul className="mt-4 space-y-2">
               {data.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                     <label className="flex items-center cursor-pointer w-full" onClick={() => handleCheckboxChange(item.name)}>
                        <div
                           className={`w-5 h-5 flex items-center justify-center rounded-sm border border-gray-300 ${selected.includes(item.name)
                                 ? "bg-primary text-white border-[#E7EAF3]"
                                 : "bg-white"
                              }`} >
                           {selected.includes(item.name) && <FaCheck size={12} />}
                        </div>
                        <span className="ml-2 text-[#4B5563] font-medium">{item.name}</span>
                     </label>
                     <span className="text-[#4B5563] font-medium">{item.count}</span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default CategoriesCheckbox
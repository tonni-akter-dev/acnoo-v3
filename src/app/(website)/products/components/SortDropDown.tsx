import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const SortDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SortOption>('Newest');
  const dropdownRef = useRef<HTMLDivElement>(null);
  type SortOption = 'Newest' | 'Oldest';
  const options: SortOption[] = ['Newest', 'Oldest'];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option: SortOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex gap-2 items-center relative" ref={dropdownRef}>
      <span className="whitespace-nowrap text-[#0B071A] text-base font-medium">
        Sort by:
      </span>
      <div
        className="flex gap-2 items-center cursor-pointer select-none"
        onClick={toggleDropdown}
      >
        <span className="text-[#0B071A] text-base font-medium">{selectedOption}</span>
        <MdKeyboardArrowDown
          className={`text-[#0B071A] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute top-full mt-2 w-[120px] bg-white rounded-lg shadow-[0px_4px_50px_0px_rgba(0,0,0,0.09)] z-50">
          {options.map((option: SortOption) => (
            <div
              key={option} // `option` is a string ('Newest' or 'Oldest'), which satisfies React.Key
              className={`px-4 py-2 text-base font-medium text-[#0B071A] hover:bg-[#2353F514] cursor-pointer ${
                selectedOption === option ? 'bg-[#2353F514]' : ''
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropDown;
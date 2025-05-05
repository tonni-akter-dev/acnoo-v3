"use client";
import { useState } from "react";
import Title from "./Title";

const PriceRangeSlider=() =>{
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minPrice) setMaxPrice(value);
  };

  return (
    <div className="border-t border-[#D9D9D9] w-full py-4">
      {/* Title */}
      <Title title='Price' />
      <div className="relative w-full mt-3">
        <input
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          onChange={handleMinChange}
        className="appearance-none w-full h-1 bg-gray-200 rounded-md outline-none focus:outline-none focus:ring-0"
          style={{
            background: `linear-gradient(to right, #1A0B49 ${(minPrice / 1000) * 100}%, #E5E7EB ${(minPrice / 1000) * 100}%)`,
          }}
        />
        {/* Custom Handle */}
        <div
          className="absolute top-[60%] transform -translate-y-1/2"
          style={{
            left: `${(minPrice / 1000) * 100}%`,
          }}
        >
          <div className="w-[10px] h-2 bg-primary rounded-md"></div>
        </div>
      </div>

      {/* Price Inputs */}
      <div className="flex items-center justify-between mt-4 gap-3">
        <div className="flex items-center bg-gray-100 border border-gray-300 px-4 py-2 rounded-md w-24">
          <span className="text-gray-600">$</span>
          <input
            type="number"
            value={minPrice}
            onChange={handleMinChange}
            className="w-full text-center outline-none bg-transparent font-medium"
          />
        </div>
        <span className="text-gray-500">—</span>
        <div className="flex items-center bg-gray-100 border border-gray-300 px-4 py-2 rounded-md w-32">
          <span className="text-gray-600">$</span>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxChange}
            className="w-full text-center outline-none bg-transparent font-medium"
          />
        </div>
        <div className="flex items-center bg-gray-100 border border-gray-300 px-4 py-2 rounded-md w-24">
          <input
            type="number"
            value=''
            className="w-full text-center outline-none bg-transparent font-medium"
          />
        </div>
      </div>
    </div>
  );
}
export default PriceRangeSlider
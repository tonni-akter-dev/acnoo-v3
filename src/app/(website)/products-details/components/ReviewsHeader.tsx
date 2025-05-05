"use client"

import type React from "react"

import { useState } from "react"

interface ReviewsHeaderProps {
  reviewCount?: number
  rating?: number
  onSortChange?: (sortOption: string) => void
}

export default function ReviewsHeader({ reviewCount = 292, rating = 5, onSortChange }: ReviewsHeaderProps) {
  const [sortOption, setSortOption] = useState("Newest")

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value)
    if (onSortChange) {
      onSortChange(e.target.value)
    }
  }

  return (
    <div className="flex items-center justify-between pb-3">
      <div className="flex items-center gap-2">
        <span className="font-bold">{reviewCount} Reviews</span>
        <div className="lg:flex md:flex hidden">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-4 h-4 ${i < rating ? "text-[#FFB805]" : "text-gray-300"}`}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div> 
        <div className="lg:hidden md:hidden flex  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-4 h-4 text-[#FFB805]`}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
        </div>
      </div>
      <div className="flex   items-center">
        <div className="relative inline-block">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="appearance-none text-base lg:text-lg lg:w-[170px] md:w-[170px] !w-[150px] font-bold text-primary bg-white border border-gray-300 rounded-md py-1 pl-3 pr-8  focus:outline-none "
          >
            <option value="Newest">Sort by: Newest</option>
            <option value="Oldest">Sort by: Oldest</option>
            <option value="Highest">Sort by: Highest Rating</option>
            <option value="Lowest">Sort by: Lowest Rating</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}


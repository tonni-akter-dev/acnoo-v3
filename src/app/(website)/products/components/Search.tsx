import Image from 'next/image'
import React from 'react'
import { LuArrowDownUp } from "react-icons/lu"
import { MdKeyboardArrowDown } from "react-icons/md"
import search from '/public/search.png'
import { IoListOutline } from 'react-icons/io5'
import { FiGrid } from 'react-icons/fi'
type ViewMode = "grid" | "list"

const Search = ({
    min,
    totalResults,
    viewMode,
    setViewMode,
  }: {
    min: number
    totalResults: number
    viewMode: ViewMode
    setViewMode: (mode: ViewMode) => void
  }) => {
    return (
        <div
            className="hidden lg:flex gap-6 items-center w-full p-2.5 border rounded-md border-[#EDEEF3] font-bold text-primary lg:mb-9 mb-2"
            style={{ background: 'rgba(191, 5, 176, 0.05)' }}
        >
            <h3 className="text-base font-bold text-[#1A0B49] whitespace-nowrap">
                Showing {min} of {totalResults} Results
            </h3>
            <div className="relative flex-1">
                <input
                    type="text"
                    className="bg-white rounded-full w-full h-12 px-6 pr-10"
                    placeholder="Search product"
                />
                <Image className="absolute right-3 top-3" src={search} alt="" />
            </div>

            {/* Sort and view toggles */}
            <div className="flex gap-3 whitespace-nowrap">
                <span className="flex gap-2 items-center">
                    Sort by: <LuArrowDownUp className="text-[#636A74]" />
                </span>
                <span className="flex gap-2 items-center">
                    Price <MdKeyboardArrowDown />
                </span>
                <div className="flex gap-4">
                    <IoListOutline
                        className={`text-xl cursor-pointer ${viewMode === "list" ? "text-[#2353F5]" : "text-gray-500"}`}
                        onClick={() => setViewMode("list")}
                    />
                    <FiGrid
                        className={`text-xl cursor-pointer ${viewMode === "grid" ? "text-[#2353F5]" : "text-gray-500"}`}
                        onClick={() => setViewMode("grid")}
                    />
                </div>
            </div>
        </div>
    )
}

export default Search
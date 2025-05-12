"use client"
import { useState } from "react"
import { FiGrid } from "react-icons/fi"
import { IoListOutline } from "react-icons/io5"

import ListView from "./ListView"
import Link from "next/link"
import ProductCard from "../../components/ProductCard"
import search from '/public/search.png'
import Image from "next/image"
import filter from '/public/filter.png';
import SortDropDown from "./SortDropDown"
import Search from "./Search"

const RightSideCard = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const totalResults = 15
  const totalPages = Math.ceil(totalResults / itemsPerPage)

  const products = Array.from({ length: totalResults }, (_, index) => <ProductCard key={index} />)

  const indexOfLastProduct = currentPage * itemsPerPage
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const min = Math.min(itemsPerPage, totalResults - indexOfFirstProduct)

  return (
    <div className="">
      {/* Sort & View Controls */}
      <div className="relative lg:hidden md:hidden block flex-1 w-full">
        <input
          type="text"
          className="bg-white rounded-full border mb-3 border-[#EDEEF3] w-full h-12 px-6 pr-10"
          placeholder="Search product"
        />
        <Image className="absolute right-3 top-3" src={search} alt="" />
      </div>
      <Search viewMode={viewMode} setViewMode={setViewMode} min={min} totalResults={totalResults} />

      {/* category */}
      <div className="">
        <div className="flex  lg:hidden justify-between  items-center w-full p-2.5 border rounded-md border-[#EDEEF3] font-bold text-primary mb-2" style={{ background: 'rgba(191, 5, 176, 0.05)' }}>
          <Image className="" src={filter} alt="" />
          <div className="relative hidden md:block">
            <input type="text" className="bg-white rounded-full w-[380px] h-11 px-6 " placeholder="Search product" />
            <Image className="absolute  right-3 top-3" src={search} alt="" />
          </div>
          <div className="flex gap-3">
            <SortDropDown />

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
      </div>
      {/* category */}

      {/* Product Display */}
      {viewMode === "grid" ? (
        <Link href='/products-details'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[40px]">
            {currentProducts}
          </div>
        </Link>
      ) : (
        <div className="flex flex-col gap-4 mb-[40px]">
          {currentProducts.map((_, index) => (
            <ListView key={index} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        <button
          className={`px-3 py-2 rounded-md border ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          «
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-md border ${currentPage === index + 1 ? "bg-[#25174B] text-white" : "hover:bg-gray-200"}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`px-3 py-2 rounded-md border ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </div>
  )
}

export default RightSideCard

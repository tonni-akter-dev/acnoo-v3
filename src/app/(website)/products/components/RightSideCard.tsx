"use client"
import { useState } from "react"
import { FiGrid } from "react-icons/fi"
import { IoListOutline } from "react-icons/io5"
import ListView from "./ListView"
import ProductCard from "../../components/ProductCard"
import search from '/public/search.png'
import Image from "next/image"
import filter from '/public/filter.png';
import SortDropDown from "./SortDropDown"
import Search from "./Search"
import { motion } from 'framer-motion';
import Categories from "./Categories"

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <div className="relative lg:hidden md:hidden md_hidden block flex-1 w-full">
        <input
          type="text"
          className="bg-white rounded-full border mb-3 border-[#EDEEF3] w-full h-12 px-6 pr-10"
          placeholder="Search product"
        />
        <Image className="absolute right-3 top-3" src={search} alt="" />
      </div>
      <Search viewMode={viewMode} setViewMode={setViewMode} min={min} totalResults={totalResults} />

      {/* category */}
      <div>
        <div className="flex  lg:hidden justify-between  items-center w-full p-2.5 border rounded-md border-[#EDEEF3] font-bold text-primary mb-2" style={{ background: 'rgba(191, 5, 176, 0.05)' }}>
          <button onClick={openModal}>
            <Image src={filter} alt="" />
          </button>
          {/* search */}
          <div className="relative hidden md:block md_block">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[40px] products_grid">
          {currentProducts.map((product, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {product}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 mb-[40px]">
          {currentProducts.map((_, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ListView />
            </motion.div>
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


      {/* category modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-white flex justify-start items-center z-50">
          <motion.div
            className="bg-white w-full h-full overflow-y-auto"
            initial="hidden"
            animate="visible"
            exit="exit">
            {/* Modal Content */}
            <div className="w-full bg-white category_modal">
              <button
                className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 text-2xl"
                onClick={closeModal}
              >
                ×
              </button>
              <Categories />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default RightSideCard
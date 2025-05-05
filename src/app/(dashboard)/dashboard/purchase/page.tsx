import React from "react";
import plusSquare from "/public/img/plus-square.svg";
import Image from "next/image";
import PurchaseTable from "./components/PurchaseTable";
import Pagination from "./components/pagination";
import PageSaver from "../components/PageSaver";
import SearchInput from "../components/SearchInput";
import ShowResultDropdown from "../components/ShowResultDropdown";

const Purchase = () => {
  return (
    <div className="card border-0">
      <div className="card-body border-0 p-0">
        <div className="table-header px-4 py-2 border-bottom">
          <h4>Purchase List</h4>
          <div className="d-flex items-start justify-center gap-1">
            <button className="common-add-btn d-flex gap-2   align-items-center justify-content-center ">
              <Image src={plusSquare} alt="" className=" font-button-1 " />
              <p className="text-white font-button-1 mb-0"> Add Product </p>
            </button>
          </div>
        </div>
        <div className="table-top-form px-4 d-print-none">
          <form action="" method="post" className="filter-form">
            <input
              type="hidden"
              name="_token"
              value="V99SgKUUogkTW6mAj6SYObUcuHJbFwAJW2dYDuRy"
            />
            <div className="table-top-left d-flex gap-3 margin-l-16">
              <ShowResultDropdown />
              <select className="form-select" aria-label="Default select example">
                <option value="10">All Product</option>
                <option value="25">Product- 25</option>
                <option value="50">Product- 50</option>
                <option value="100">Product- 100</option>
              </select>
              <SearchInput />
            </div>
          </form>
          <PageSaver />
        </div>
      </div>
      <PurchaseTable />
      <Pagination />
    </div>
  );
};

export default Purchase;

import React from "react";
import Pagination from "../purchase/components/pagination";
import StatementTable from "./component/StatementTable";
import PageSaver from "../components/PageSaver";
import SearchInput from "../components/SearchInput";
import ShowResultDropdown from "../components/ShowResultDropdown";

const Statement = () => {
  return (
    <div className="card border-0">
      {/* <PageHeader title="Statement" /> */}
      <div className="page-header card-body border-0 p-0">
        <div className="table-header px-4 py-2 border-bottom">
          <h4>Statement</h4>
        </div>
        <div className="statement-container">
          <div className="statement-box color-change-2">
            <h4>$5000.00</h4>
            <span>Total Purchaser </span>
          </div>
        </div>
        <div className="table-top-form px-4 d-print-none">
          <div className="d-flex gap-4">
            <ShowResultDropdown />
            <SearchInput />
          </div>
          <PageSaver />
        </div>
      </div>
      <StatementTable />
      <Pagination />
    </div>
  );
};

export default Statement;

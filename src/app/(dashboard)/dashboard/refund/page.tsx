import React from "react";
import Pagination from "../purchase/components/pagination";
import RefundTable from "./component/RefundTable";
import PageHeader from "../components/PageHeader";

const Refund = () => {
  return (
    <div className="card border-0">
      <PageHeader title="Refund" />
      <RefundTable />
      <Pagination />
    </div>
  );
};

export default Refund;

import Image from "next/image";
import React from "react";
import downarrow from '/public/icon/downarrow.svg'
import dollar from '/public/icon/sack-dollar.svg'
import handdollar from '/public/icon/hand-holding-dollar.svg'
import money_convert from '/public/icon/money-convert.svg'
import shoppingDown from '/public/icon/shopping-cart-arrow-down.png'
import plus from '/public/icon/plus.svg'

import TransactionSummeryChart from "./TransactionSummeryChart";
import DepositOverview from "./DepositOverview";
import DataTable from "./DataTable";

const DashboardContent = () => {
  return (
    <div className="container-fluid">

      <div className="gpt-dashboard-card grid-5 mt-30">
        <div className="custom-counter-box">
          <div className="icons bg-green2-light">
            <Image src={shoppingDown} alt="" />
          </div>
          <div className="content-side">
            <h5 id="total_plans">10</h5>
            <p className="font-body-1">Total Purchase Items</p>
          </div>
        </div>
        <div className="custom-counter-box">
          <div className="icons bg-green">
            <Image src={downarrow} alt="" />
          </div>
          <div className="content-side">
            <h5 id="dashboard_user">5</h5>
            <p className="font-body-1">Total Free Downloads</p>
          </div>
        </div>

        <div className="custom-counter-box">
          <div className="icons bg-green2-light">
            <Image src={dollar} alt="" />
          </div>
          <div className="content-side">
            <h5 id="total_plans">$570.00</h5>
            <p className="font-body-1">Total Purchase</p>
          </div>
        </div>
        <div className="custom-counter-box">
          <div className="icons bg-violet-light">
            <Image src={money_convert} alt="" />
          </div>
          <div className="content-side">
            <h5 id="total_languages">$270.00</h5>
            <p className="font-body-1">Total Refunds</p>
          </div>
        </div>
        <div className="custom-counter-box">
          <div className="icon bg-custom1">
            <Image src={handdollar} alt="" />
          </div>
          <div className="content flex-grow-1">
            <h5 id="total_features" className="mb-1">
              $300.00
            </h5>
            <p className="font-body-1">My Wallets</p>
          </div>
          <div className="icon bg-custom2">
            <Image src={plus} alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <TransactionSummeryChart />
        <DepositOverview />
      </div>
      <DataTable />
    </div>
  );
};

export default DashboardContent;

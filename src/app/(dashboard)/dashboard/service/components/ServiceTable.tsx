import React from "react";
import eye from "/public/img/icon/eye.svg";
import trash from "/public/img/trash-minus.svg";
import repeat from "/public/img/icon/repeat.svg";
import Image from "next/image";
import Link from "next/link";
import ServiceViewModal from "./ServiceViewModal";
import CancelModal from "./CancelModal";
import ServiceRefundModal from "./ServiceRefundModal";

const ServiceTable = () => {
  return (
    <div className="responsive-table m-0 border-0 min-vh-80">
      <table className="table border-0 mt-4" id="datatable">
        <thead className="border-0">
          <tr className="border-0">
            <th className="font-body-4 px-4">SL.</th>
            <th className="font-body-4">Order ID</th>
            <th className="font-body-4">Service Name</th>
            <th className="font-body-4">Category</th>
            <th className="font-body-4">Package</th>
            <th className="font-body-4">Amount</th>
            <th className="font-body-4">Start Date</th>
            <th className="font-body-4">End Date</th>
            <th className="font-body-4">Payment Status</th>
            <th className="font-body-4">Status</th>
            <th className="font-body-4">Action</th>
          </tr>
        </thead>
        <tbody id="sale-return-data" className="border-0">
          <tr className="font-body-3">
            <td className="font-body-3">1</td>
            <td className="font-body-3">652381</td>
            <td className="font-body-3 big-content-td">
              SaaS Dashboard Digital Products Title Here With UI/UX Design
            </td>
            <td className="font-body-3">Mobile App</td>
            <td className="font-body-3">Basic</td>
            <td className="font-body-3">$500</td>
            <td className="font-body-3">01 Jun, 2024</td>
            <td className="font-body-3">15 Jun, 2024</td>
            <td className="font-body-3 align-middle d-flex align-items-center">
              <span className="cancel-badge">Unpaid</span>
            </td>
            <td className="font-body-3">
              <span className="pending-badge">Pending</span>
            </td>
            <td className="print-d-none">
              <div className="dropdown table-action">
                <button
                  type="button"
                  className="d-flex align-items-center justify-content-center "
                  data-bs-toggle="dropdown"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M10.4998 10.8335C10.9601 10.8335 11.3332 10.4604 11.3332 10.0002C11.3332 9.53993 10.9601 9.16683 10.4998 9.16683C10.0396 9.16683 9.6665 9.53993 9.6665 10.0002C9.6665 10.4604 10.0396 10.8335 10.4998 10.8335Z"
                      stroke="#5B5B5B"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.4998 5.00016C10.9601 5.00016 11.3332 4.62707 11.3332 4.16683C11.3332 3.70659 10.9601 3.3335 10.4998 3.3335C10.0396 3.3335 9.6665 3.70659 9.6665 4.16683C9.6665 4.62707 10.0396 5.00016 10.4998 5.00016Z"
                      stroke="#5B5B5B"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.4998 16.6668C10.9601 16.6668 11.3332 16.2937 11.3332 15.8335C11.3332 15.3733 10.9601 15.0002 10.4998 15.0002C10.0396 15.0002 9.6665 15.3733 9.6665 15.8335C9.6665 16.2937 10.0396 16.6668 10.4998 16.6668Z"
                      stroke="#5B5B5B"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <ul className="dropdown-menu dropdown-list-style shadow border-0 mb-0">
                  
                  <li>
                    <Link
                      className="d-flex aligh-items-center gap-2"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#serviceViewModal"
                    >
                       <Image src={eye} alt="image"/> View Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="d-flex aligh-items-center gap-2"
                      target="_blank"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#cancelModal"
                    >
                    <Image src={trash} alt="image"/> Cancel Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="d-flex aligh-items-center gap-2"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#serviceRefundModal"
                    >
                         <Image src={repeat} alt="image"/> Refund
                    </Link>
                  </li>
                
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ServiceViewModal/>
<CancelModal/>
<ServiceRefundModal/>
    </div>
  );
};

export default ServiceTable;

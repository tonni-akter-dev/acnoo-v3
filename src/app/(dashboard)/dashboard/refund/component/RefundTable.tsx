import React from "react";
import eye from "/public/img/icon/eye.svg";
import Image from "next/image";
import RefundDetails from "./RefundDetails";

const RefundTable = () => {
  return (
    <div className="responsive-table m-0 border-0 min-vh-80">
      <table className="table border-0 mt-4" id="datatable">
        <thead className="border-0">
          <tr className="border-0">
            <th className="font-body-4">SL.</th>
            <th className="font-body-4">Request Date</th>
            <th className="font-body-4">Refunds ID</th>
            <th className="font-body-4">Product</th>
            <th className="font-body-4">License Type</th>
            <th className="font-body-4">Refund Reason</th>
            <th className="font-body-4">Payment Type</th>
            <th className="font-body-4">Price</th>
            <th className="font-body-4">Status</th>
            <th className="font-body-4">Action</th>
          </tr>
        </thead>
        <tbody id="sale-return-data" className="border-0">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
            <>
              <tr className="font-body-3" key={data}>
                <td className="font-body-3">{data}</td>
                <td>01 Jun, 2024</td>
                <td className="font-body-3">65321</td>
                <td className="font-body-3 big-content-td">
                  SaaS Dashboard Digital Products Title Here With UI/UX Design
                </td>
                <td className="font-body-3"> Personal License</td>
                <td className="font-body-3"> Product Quality Very bad </td>
                <td className="font-body-3">My Wallet</td>
                <td className="font-body-3">$57.00</td>
                <td className="font-body-3">
                  <div className="pending-badge">Pending</div>
                </td>
                <td className="print-d-none  align-middle">
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
                    <ul className="dropdown-menu dropdown-list-style shadow border-0">
                      <li>
                        <a
                        className="mb-0 d-flex gap-1 align-items-center"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#viewmodal"
                        >
                          <Image src={eye} alt="image" />
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <RefundDetails/>
    </div>
  );
};

export default RefundTable;

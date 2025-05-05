import React from "react";
import product1 from "/public/img/product/Product1.svg";
import star from "/public/img/icon/star.svg";
import Image from "next/image";
import eye from "/public/img/icon/eye.svg";
import reviws from "/public/icon/reviews.svg";
import renew from "/public/icon/renew.png";
import refund from "/public/icon/refund.png";
import Link from "next/link";
import ReveiwModal from "./ReveiwModal";
import ViewDetailsModal from "./ViewDetailsModal";
import RefundModal from "./RefundModal";

const PurchaseTable = () => {
  return (
    <div className="purchase responsive-table m-0 border-0 min-vh-80">
      <table className="table border-0 mt-4" id="datatable">
        <thead className="border-0">
          <tr className="border-0">
            <th className=" checkbox px-4">
              <div className="d-flex align-items-center gap-1">SL.</div>
            </th>
            <th>date</th>
            <th>Image</th>
            <th>Invoice</th>
            <th>Name</th>
            <th>License</th>
            <th>Total Price</th>
            <th>Rating</th>
            <th>Support Expire</th>
            <th>Download License</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="sale-return-data" className="border-0">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => (
            <React.Fragment key={data}>
              <tr>
                <td className="custom-color">1</td>
                <td>24/05/2024</td>
                <td>
                  <Image src={product1} alt="" className="img-fluid" />
                </td>
                <td>2536214</td>
                <td className=" big-content-td">
                  Acnoo Admin - Flutter Admin Panel Dashboard with PWA
                </td>
                <td>
                  <div>
                    <p
                      className="mb-0"
                      style={{ color: "#0B071A", fontWeight: "bold" }}
                    >
                      Personal License
                    </p>
                    Extended support for 6 months
                  </div>
                </td>
                <td> $27.00 </td>
                <td>
                  <div className="flex gap-1 items-center justify-center">
                    <Image src={star} alt="" />
                    <p
                      className="custom-color mb-0"
                      data-bs-toggle="modal"
                      data-bs-target="#viewmodal"
                    >
                      0.00 Reviews
                    </p>
                  </div>
                </td>
                <td> 24/05/2024 </td>
                <td
                  className=" d-flex gap-1 items-center justify-center"
                  style={{ padding: "12px 0" }}
                >
                  <button className=" download-btn flex gap-1 items-center justify-center">
                    <p className="text-white mb-0"> Download</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.38114 11.4547C7.64781 11.7067 7.99046 11.8327 8.33313 11.8327C8.6758 11.8327 9.01778 11.7067 9.28512 11.4547L13.4677 7.50269C13.8151 7.17469 13.9265 6.67534 13.7498 6.23067C13.5725 5.78601 13.1505 5.49935 12.6718 5.49935H11.4432V2.66667C11.4432 2.02333 10.9198 1.5 10.2765 1.5H6.27649C5.63316 1.5 5.10982 2.02333 5.10982 2.66667V5.5H3.99443C3.51576 5.5 3.09313 5.78732 2.91646 6.23132C2.7398 6.67599 2.85053 7.17469 3.19853 7.50269L7.38114 11.4547ZM3.84648 6.60067C3.86448 6.55467 3.90508 6.5 3.99508 6.5H5.61047C5.74314 6.5 5.87049 6.44735 5.96383 6.35335C6.05716 6.25935 6.11047 6.13267 6.11047 6V2.66667C6.11047 2.57467 6.18514 2.5 6.27714 2.5H10.2771C10.3691 2.5 10.4438 2.57467 10.4438 2.66667V6C10.4438 6.13267 10.4965 6.26002 10.5905 6.35335C10.6845 6.44735 10.8111 6.5 10.9438 6.5H12.6725C12.7625 6.5 12.8024 6.55467 12.8211 6.60067C12.8391 6.64667 12.8478 6.714 12.7825 6.776L8.59973 10.728C8.44973 10.8687 8.21848 10.8687 8.06848 10.728L3.88586 6.776C3.8192 6.714 3.82781 6.64667 3.84648 6.60067ZM13.4998 14C13.4998 14.276 13.2758 14.5 12.9998 14.5H3.66646C3.39046 14.5 3.16646 14.276 3.16646 14C3.16646 13.724 3.39046 13.5 3.66646 13.5H12.9998C13.2758 13.5 13.4998 13.724 13.4998 14Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </td>
                <td className="print-d-none align-middle">
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
                          d="M10.4998 10.8333C10.9601 10.8333 11.3332 10.4602 11.3332 9.99992C11.3332 9.53968 10.9601 9.16659 10.4998 9.16659C10.0396 9.16659 9.6665 9.53968 9.6665 9.99992C9.6665 10.4602 10.0396 10.8333 10.4998 10.8333Z"
                          stroke="#4B5563"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.4998 4.99992C10.9601 4.99992 11.3332 4.62682 11.3332 4.16659C11.3332 3.70635 10.9601 3.33325 10.4998 3.33325C10.0396 3.33325 9.6665 3.70635 9.6665 4.16659C9.6665 4.62682 10.0396 4.99992 10.4998 4.99992Z"
                          stroke="#4B5563"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.4998 16.6666C10.9601 16.6666 11.3332 16.2935 11.3332 15.8333C11.3332 15.373 10.9601 14.9999 10.4998 14.9999C10.0396 14.9999 9.6665 15.373 9.6665 15.8333C9.6665 16.2935 10.0396 16.6666 10.4998 16.6666Z"
                          stroke="#4B5563"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <ul className="dropdown-menu dropdown-list-style shadow border-0">
                      <li>
                        <Link
                          className="d-flex aligh-items-center gap-2"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#viewmodal"
                        >
                          <Image src={eye} alt="image" />
                          View Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="d-flex aligh-items-center gap-2"
                          target="_blank"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#reviewModal"
                        >
                          <Image src={reviws} alt="" />
                          Review
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="d-flex aligh-items-center gap-2"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#refundModal"
                        >
                          <Image src={refund} alt="image" />
                          Refund Request
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="d-flex aligh-items-center gap-2 mb-0"
                          href="#"
                        >
                          <Image src={renew} alt="image" />
                          Renew Support
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <ReveiwModal />
      <ViewDetailsModal />
      <RefundModal />
    </div>
  );
};

export default PurchaseTable;

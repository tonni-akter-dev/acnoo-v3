import React from "react";

const StatementTable = () => {
  return (
    <div className="responsive-table m-0 border-0 min-vh-80">
      <table className="table border-0 mt-4" id="datatable">
        <thead className="border-0">
          <tr className="border-0">
            <th className="font-body-4">SL.</th>
            <th className="font-body-4">Date</th>
            <th className="font-body-4">Invoice</th>
            <th className="font-body-4">Title</th>
            <th className="font-body-4">Category</th>
            <th className="font-body-4">Licensee Type</th>
            <th className="font-body-4">Payment Method</th>
            <th className="font-body-4">Price</th>
            <th className="font-body-4">Status</th>
          </tr>
        </thead>
        <tbody id="sale-return-data" className="border-0">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
            <React.Fragment key={data}>
              <tr className="font-body-3">
                <td>{data}</td>
                <td>01 Jun, 2024</td>
                <td className="custom-color">2536214</td>
                <td className="big-content-td">
                  SaaS Dashboard Digital Products UI/UX Design
                </td>
                <td>Acnoo Pos</td>
                <td>Free</td>
                <td>N/A</td>
                <td>N/A</td>
                <td className="d-flex align-items-center justify-content-center">
                  <button
                    className=" download-btn flex gap-1 items-center justify-center"
                    style={{ background: "#00B243" }}
                  >
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
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatementTable;

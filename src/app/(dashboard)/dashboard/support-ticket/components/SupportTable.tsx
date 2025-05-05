import Link from "next/link";
import React from "react";

const SupportTable = () => {
  return (
    <div className="responsive-table m-0 border-0 min-vh-80">
      <table className="table border-0 mt-4" id="datatable">
        <thead className="border-0">
          <tr className="border-0">
            <th className="font-body-4 checkbox text-start">
              <div className="">
                <label className="table-custom-checkbox d-flex align-items-center gap-3">
                  <input
                    type="checkbox"
                    className="table-hidden-checkbox selectAllCheckbox"
                  />
                  <span className="table-custom-checkmark custom-checkmark">
                    SL.
                  </span>
                </label>
              </div>
            </th>
            <th className="font-body-4">Date</th>
            <th className="font-body-4">Ticket ID</th>
            <th className="font-body-4">Item/Service Name</th>
            <th className="font-body-4">Purchase Code</th>
            <th className="font-body-4">Priority</th>
            <th className="font-body-4">Status</th>
            <th className="font-body-4">Action</th>
          </tr>
        </thead>
        <tbody id="sale-return-data" className="border-0">
       {[1,2,3,4,5,6,7,8,9,10].map(data=>(
        <React.Fragment key={data}>
           <tr className="font-body-3">
            <td className="checkbox font-body-3 text-start" style={{paddingLeft:"20px"}}>
              <label className="table-custom-checkbox  d-flex align-items-center gap-3">
                <input
                  type="checkbox"
                  className="table-hidden-checkbox checkbox-item"
                />
                <span className="table-custom-checkmark custom-checkmark">
              {data}
                </span>
              </label>
            </td>
            <td className="font-body-3">01 Jun, 2024</td>
            <td className="font-body-3">#65232</td>
            <td className="font-body-3">Website Design</td>
            <td className="font-body-3">856231</td>
            <td className="font-body-3">
              <p className="low-priority">Low</p>
            </td>
            <td className="font-body-3">
              <div className="pending2-badge">Pending</div>
            </td>
            <td className="print-d-none">
              <div className="dropdown table-action">
                <Link href="/dashboard/open-ticket"  className="font-body-3 text-[#6021D1] gap-1" style={{ color: "#6021D1", textDecorationColor: "#6021D1" }}>
                  <span style={{color:"#6021D1"}}>View {`>`} </span>
                </Link>
              </div>
            </td>
          </tr>
        </React.Fragment>
       ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupportTable;

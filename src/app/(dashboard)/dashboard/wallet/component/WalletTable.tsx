import React from 'react'
import DepositModal from './DepositModal'

const WalletTable = () => {
  return (
    <div className="responsive-table m-0 border-0 min-vh-80">
    <table className="table border-0 mt-4" id="datatable">
        <thead className="border-0">
            <tr className="border-0">
                <th className="font-body-4 px-2">SL.</th>
                <th className="font-body-4">Date</th>
                <th className="font-body-4">Payment Method</th>
                <th className="font-body-4">Amount</th>
                <th className="font-body-4">Transaction Id</th>
                <th className="font-body-4">Status</th>
                <th className="font-body-4">Action</th>
            </tr>
        </thead>
        <tbody id="sale-return-data" className="border-0">
           {
            [1,2,3,4,5,6,7,8,9,10].map(data=>(
                <React.Fragment key={data}>
                 <tr className="font-body-3">
                <td className='px-4'>{data}</td>
                <td>01 Jun, 2024</td>
                <td>bkash</td>
                <td>$500</td>
                <td>SC56321452145</td>
                <td><div className="approved-badge custom-badge-width">Success</div></td>
                <td className="print-d-none"><a href="#" className="font-body-3 view-details-btn gap-1">View &gt;</a></td>
            </tr>
                </React.Fragment>
            ))
           }
        </tbody>
    </table>
    <DepositModal/>
</div>
  )
}

export default WalletTable
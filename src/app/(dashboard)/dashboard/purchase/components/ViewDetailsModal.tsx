import React from 'react'
import cancel from '/public/img/icon/cancel-modal.svg'
import Image from 'next/image'

const ViewDetailsModal = () => {
  return (
    <div className="modal fade" id="viewmodal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg view-modal">
        <div className="modal-content">
          <div className="modal-header border-0 flex justify-between">
            <h5 className="modal-title font-body">View Details</h5>
            <Image 
              src={cancel} 
              alt="cancel" 
              className="font-button-1 cursor-pointer" 
              data-bs-dismiss="modal" 
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-0">
            <div className="overflow-auto">
              <table className="table table-striped w-full">
                <tbody>
                  <tr>
                    <th className="whitespace-wrap px-4 text-start py-3 w-1/4">Item Name:</th>
                    <td className="px-4 py-3 break-words">POS SAAS - Flutter POS Billing Inventory Software With HRM App + Web+Super admin</td>
                  </tr>
                  <tr>
                    <th className="whitespace-wrap text-start px-4 py-3">Author Name:</th>
                    <td className="text-start px-4 py-3">mdammarn88</td>
                  </tr>
                  <tr>
                    <th className="whitespace-wrap text-start px-4 py-3">License Type:</th>
                    <td className="text-start px-4 py-3">Extended License</td>
                  </tr>
                  <tr>
                    <th className="whitespace-wrap text-start px-4 py-3">Purchase Amount:</th>
                    <td className="text-start px-4 py-3">$233.66</td>
                  </tr>
                  <tr>
                    <th className="whitespace-wrap text-start px-4 py-3">Purchase Date:</th>
                    <td className="text-start px-4 py-3">12 Nov, 2024</td>
                  </tr>
                  <tr>
                    <th className="whitespace-wrap text-start px-4 py-3">Support Expired Date:</th>
                    <td className="text-start px-4 py-3">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewDetailsModal
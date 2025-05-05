import Image from 'next/image'
import React from 'react'
import cancel from '/public/img/icon/cancel-modal.svg'

const DownloadViewDetails = () => {
  return (
    <div className="modal fade" id="freeViewModal" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-md review-modal">
        <div className="modal-content">
            <div className="modal-header border-0 flex justify-between">
                <h5 className="modal-title font-body">View Details</h5>
                <Image src={cancel} alt="cancel" className="font-button-1 cursor-pointer" data-bs-dismiss="modal" aria-label="Close"/>
            </div>
            <div className="modal-body">
                <table className="table free-view-table">
                    <tbody>
                        <tr>
                            <td>Date</td>
                            <td>: 01 Jun, 2024</td>
                        </tr>
                        <tr>
                            <td>Refunds ID</td>
                            <td>: 65321</td>
                        </tr>
                        <tr>
                            <td>Main Reason</td>
                            <td>: Product Quality Very bad</td>
                        </tr>
                        <tr>
                            <td>Product Title</td>
                            <td>: SaaS Dashboard Digital Products Title Here With UI/UX Design</td>
                        </tr>
                        <tr>
                            <td>License</td>
                            <td>: Personal License</td>
                        </tr>
                        <tr>
                            <td>Payment Type</td>
                            <td>: My Wallet</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>: $57.00</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>: <span className="text-warning">Pending</span></td>
                        </tr>
                        <tr>
                            <td>Describe request</td>
                            <td>: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default DownloadViewDetails
import React from 'react'
import Image from 'next/image'
import cancel from '/public/img/icon/cancel-modal.svg'

const ServiceViewModal = () => {
  return (
    <div className="modal fade" id="serviceViewModal" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg review-modal">
        <div className="modal-content">
        <div className="modal-header border-0 flex justify-between">
                <h5 className="modal-title font-body">View Details</h5>
                <Image src={cancel} alt="cancel" className="font-button-1 cursor-pointer" data-bs-dismiss="modal" aria-label="Close"/>
            </div>
            <div className="modal-body overflow-auto">
                <table className="table table-striped modal-view-table">
                    <tbody>
                        <tr>
                            <th scope="row">Order ID:</th>
                            <td>15264213</td>
                        </tr>
                        <tr>
                            <th scope="row">Service Name:</th>
                            <td>SaaS Dashboard Digital Products Title Here With UI/UX Design</td>
                        </tr>
                        <tr>
                            <th scope="row">Category:</th>
                            <td>Website</td>
                        </tr>
                        <tr>
                            <th scope="row">Package:</th>
                            <td>Basic</td>
                        </tr>
                        <tr>
                            <th scope="row">Amount:</th>
                            <td>$500</td>
                        </tr>
                        <tr>
                            <th scope="row">Start Date:</th>
                            <td>01 Jun, 2024</td>
                        </tr>
                        <tr>
                            <th scope="row">End Date:</th>
                            <td>15 Jun, 2024</td>
                        </tr>
                        <tr>
                            <th scope="row">Payment Status:</th>
                            <td className="text-success">Paid</td>
                        </tr>
                        <tr>
                            <th scope="row">Status:</th>
                            <td className="text-warning">Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default ServiceViewModal
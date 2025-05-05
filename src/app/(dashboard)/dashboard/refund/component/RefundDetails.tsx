import React from 'react'
import cancel from '/public/img/icon/cancel-modal.svg'
import Image from 'next/image'

const RefundDetails = () => {
    
  return (
    <div className="modal fade" id="viewmodal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg view-modal">
            <div className="modal-content">
            <div className="modal-header border-0 flex justify-between">
                <h5 className="modal-title font-body">View Details</h5>
                <Image src={cancel} alt="cancel" className="font-button-1 cursor-pointer" data-bs-dismiss="modal" aria-label="Close"/>
            </div>
                <div className="modal-body overflow-auto">
                    <table className="table table-striped modal-view-table">
                        <tbody>
                            <tr>
                                <th scope="row">Date:</th>
                                <td>01 Jun, 2024</td>
                            </tr>
                            <tr>
                                <th scope="row">Refunds ID:</th>
                                <td>65321</td>
                            </tr>
                            <tr>
                                <th scope="row">Main Reason:</th>
                                <td>Product Quality Very bad</td>
                            </tr>
                            <tr>
                                <th scope="row">Product Title:</th>
                                <td>SaaS Dashboard Digital Products Title Here With UI/UX Design</td>
                            </tr>
                            <tr>
                                <th scope="row">License:</th>
                                <td>Personal License</td>
                            </tr>
                            <tr>
                                <th scope="row">Payment Type:</th>
                                <td>My Wallet</td>
                            </tr>
                            <tr>
                                <th scope="row">Price:</th>
                                <td>$57.00</td>
                            </tr>
                            <tr>
                                <th scope="row">Status:</th>
                                <td className="text-warning">Pending</td>
                            </tr>
                            <tr>
                                <th scope="row">Describe request:</th>
                                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default RefundDetails
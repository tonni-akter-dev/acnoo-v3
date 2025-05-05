import Image from 'next/image'
import React from 'react'
import cancel from '/public/img/icon/cancel-modal.svg'

const RefundModal = () => {
  return (
    <div className="modal fade" id="refundModal" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg refund-modal">
        <div className="modal-content">
            <div className="modal-header flex justify-between">
                <h5 className="modal-title font-body">Refund Request</h5>
                <Image src={cancel} alt="" className="font-button-1 cursor-pointer" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
                <form className="px-2 refund-form">
                    <p className="text-danger">Sorry Discount item {`can't`} refund</p>
                    <div className="mb-3">
                        <label>Product</label>
                        <input
                            type="text"
                            value="SaaS Dashboard Digital Products Title Here With UI/UX Design"
                            name="productName"
                            className="form-control bg-light text-muted"
                            placeholder="SaaS Dashboard Digital Products Title Here With UI/UX Design"
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label>Payment Type<span className="text-danger">*</span></label>
                        <select className="form-select" aria-label="Default select example" id="paymentType">
                            <option selected>My Wallet</option>
                            <option value="bkash">bkash</option>
                        </select>
                    </div>

                    {/* <!-- Additional Fields (hidden by default) --> */}
                    <div className=" mb-3" id="bkashFields">
                        <div className="row">
                            {/* <!-- Column 1: Bkash Number --> */}
                            <div className="col-12 col-md-6">
                                <label>bkash Number<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Enter bkash number" id="bkashAccountNumber"/>
                            </div>

                            {/* <!-- Column 2: Bkash Type --> */}
                            <div className="col-12 col-md-6">
                                <label className="mt-2">bkash Type<span className="text-danger">*</span></label>
                                <select className="form-select" aria-label="Default select example" id="bkashTransactionId">
                                    <option selected>Personal</option>
                                    <option value="agent">Agent</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Reason<span className="text-danger">*</span></label>
                        <textarea className="form-control" placeholder="Enter Reason" id="floatingTextarea"></textarea>
                    </div>

                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <button className="cancel-btn custom-btn">Cancel</button>
                        <button className="submit-btn custom-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

  )
}

export default RefundModal
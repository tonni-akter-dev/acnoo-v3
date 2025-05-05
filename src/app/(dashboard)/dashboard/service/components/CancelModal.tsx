import React from 'react'
import cancel from '/public/img/icon/cancel-modal.svg'
import Image from 'next/image'

const CancelModal = () => {
  return (
    <div className="modal fade" id="cancelModal" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg refund-modal">
        <div className="modal-content">
          
            <div className="modal-header border-0 flex justify-between">
                <h5 className="modal-title font-body">Why Cancel This Orders</h5>
                <Image src={cancel} alt="cancel" className="font-button-1 cursor-pointer" data-bs-dismiss="modal" aria-label="Close"/>
            </div>
            <div className="modal-body">
                <form className="px-2 refund-form">
                    <div className="mb-3">
                        <label>Cancel Reason</label>
                        <textarea className="form-control" placeholder="Enter cancel reason" id="floatingTextarea"></textarea>
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

export default CancelModal
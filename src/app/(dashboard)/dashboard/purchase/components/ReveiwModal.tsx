import React from 'react'
import cancel from '/public/img/icon/cancel-modal.svg'
import star from '/public/img/icon/bigStar.svg'
import Image from 'next/image'

const ReveiwModal = () => {
  return (
    <div className="modal w-100 fade" id="reviewModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md review-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title font-body px-2">Review This Item</h5>
                    <Image src={cancel} alt="" className="font-button-1 cursor-pointer" data-bs-dismiss="modal" aria-label="Close"/>
                </div> 
                <div className="modal-body">
                    <form className="px-2 review-form">
                        <p className="fw-bolder font-body-5 mt-2">Select Rating</p>
                        <div className="my-3">
                            <div className="d-flex align-items-start gap-1">
                                <Image src={star} alt="Review star" className="review-star"/>
                                <Image src={star} alt="Review star" className="review-star"/>
                                <Image src={star} alt="Review star" className="review-star"/>
                                <Image src={star} alt="Review star" className="review-star"/>
                                <Image src={star} alt="Review star" className="review-star"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>Review Type</label>
                            <select className="form-select" aria-label="Default select example" id="paymentType">
                                <option selected>Customer Support</option>
                                <option value="code-quality">Code Quality</option>
                                <option value="awesome-design">Awesome Design</option>
                            </select>
                        </div>
    
                        <div className="mb-3">
                            <label>Write Review</label>
                            <textarea className="form-control" placeholder="Write some text" id="floatingTextarea"></textarea>
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

export default ReveiwModal
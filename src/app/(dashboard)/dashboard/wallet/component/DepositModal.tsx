import React from "react";
import x from '/public/img/x.svg'
import bd from '/public/img/currency/bd.svg'
import usa from '/public/img/currency/usa.svg'
import global from '/public/img/currency/global.svg'
import bkashLogo from '/public/img/currency/bkash-logo.svg'
import bkashText from '/public/img/currency/bkash-text.svg'
import Image from "next/image";
import BankAccountAccordion from "./BankAccountAccordion";

const DepositModal = () => {
  return (
    <div
      className="modal fade"
      id="paymentModal"
      aria-labelledby="paymentModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog payment-modal-custom ">
        <div className="modal-content border-0">
          <div className="modal-header border-0">
            <Image
              src={x}
              alt=""
              className="custom-close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body rounded border-0">
            <h5 className="modal-title" id="paymentModalLabel">
              Payment Methods
            </h5>

            <ul
              className="payment-tabs nav nav-tabs"
              id="paymentTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link d-flex 
      pay-tab active"
                  id="home-tab" style={{ height: "20px" }}
                  data-bs-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <Image src={usa} className="mt-1" alt="USD" />
                  <h4 style={{whiteSpace:"nowrap"}}>USD</h4>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link d-flex 
                  pay-tab"
                  style={{ height: "20px" }}
                  id="profile-tab"
                  data-bs-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <Image src={global} className="mt-1" alt="Global Swift" />
                  <h4 style={{whiteSpace:"nowrap"}}>Global. Swift</h4>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link d-flex 
                  pay-tab"
                  style={{ height: "20px" }}
                  id="contact-tab"
                  data-bs-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  <Image src={bd} className="mt-1" alt="BD" />
                  <h4>BD</h4>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link d-flex 
                  pay-tab"
                  style={{ height: "20px" }}
                  id="bkash-tab"
                  data-bs-toggle="tab"
                  href="#bkash"
                  role="tab"
                  aria-controls="bkash"
                  aria-selected="false"
                >
               <Image src={bkashLogo} className="mt-1" alt="bKash" />
               <Image src={bkashText} className="mt-1" alt="bKash" />
                </a>
              </li>
             
            </ul>
            <div className="tab-content" id="paymentTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="accordion mt-3" id="accordionExample">
                  <BankAccountAccordion idPrefix="usd-one" defaultOpen={true} />
                  <BankAccountAccordion idPrefix="usd-two" defaultOpen={false} />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="accordion mt-3" id="accordionExample">
                  <BankAccountAccordion idPrefix="global-one" defaultOpen={true} />
                  <BankAccountAccordion idPrefix="global-two" defaultOpen={false} />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="accordion mt-3" id="accordionExample">
                  <BankAccountAccordion idPrefix="bd-one" defaultOpen={true} />
                  <BankAccountAccordion idPrefix="bd-two" defaultOpen={false} />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="bkash"
                role="tabpanel"
                aria-labelledby="bkash-tab"
              >
                <div className="accordion mt-3" id="accordionExample">
                  <BankAccountAccordion idPrefix="bkash-one" defaultOpen={true} />
                  <BankAccountAccordion idPrefix="bkash-two" defaultOpen={false} />
                </div>
              </div>
            </div>

            <div className="modal-footer-custom order-form-section">
              <div className="row">
                <div className="col-md-6 mt-2">
                  <label>Amount</label>
                  <input
                    type="text"
                    name="title"
                    required
                    className="form-control"
                    placeholder="Ex: $500"
                  />
                </div>
                <div className="col-md-6 mt-2">
                  <label>transaction Id </label>
                  <input
                    type="number"
                    step="any"
                    name="price"
                    required
                    className="form-control"
                    placeholder="Enter transaction id"
                  />
                </div>
              </div>
              <form className="refund-form upload-from">
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Upload transaction Receipt
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    placeholder="No File"
                  />
                </div>
              </form>
              <button className="pay-now-mid-part payment-button w-100">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.328 7.17197C19.2692 6.22531 18.9593 5.47487 18.4071 4.9573C17.8377 4.42361 17.0239 4.15 16 4.15H6C4.93414 4.15 4.09289 4.44369 3.51829 5.01829C2.94369 5.59289 2.65 6.43414 2.65 7.5V14.5C2.65 15.5239 2.92361 16.3377 3.4573 16.9071C3.97487 17.4593 4.72531 17.7692 5.67197 17.828C5.73085 18.7747 6.04067 19.5251 6.59288 20.0427C7.1623 20.5764 7.97615 20.85 9 20.85H19C20.0659 20.85 20.9071 20.5563 21.4817 19.9817C22.0563 19.4071 22.35 18.5659 22.35 17.5V10.5C22.35 9.47615 22.0764 8.6623 21.5427 8.09288C21.0251 7.54067 20.2747 7.23085 19.328 7.17197ZM4.35 14.5V7.5C4.35 6.87975 4.47165 6.47552 4.72359 6.22359C4.97552 5.97165 5.37975 5.85 6 5.85H16C16.6203 5.85 17.0245 5.97165 17.2764 6.22359C17.5284 6.47552 17.65 6.87975 17.65 7.5V14.5C17.65 15.1203 17.5284 15.5245 17.2764 15.7764C17.0245 16.0284 16.6203 16.15 16 16.15H6C5.37975 16.15 4.97552 16.0284 4.72359 15.7764C4.47165 15.5245 4.35 15.1203 4.35 14.5ZM20.65 17.5C20.65 18.1203 20.5286 18.5245 20.2768 18.7764C20.025 19.0283 19.6208 19.15 19 19.15H9C8.42462 19.15 8.03643 19.0431 7.7836 18.8248C7.55023 18.6233 7.41516 18.312 7.37116 17.85H16C17.0659 17.85 17.9071 17.5563 18.4817 16.9817C19.0563 16.4071 19.35 15.5659 19.35 14.5V8.87114C19.8125 8.91511 20.1238 9.04999 20.3252 9.28322C20.5433 9.5359 20.65 9.92405 20.65 10.5V17.5ZM4.9 11C4.9 11.6072 5.39277 12.1 6 12.1C6.60723 12.1 7.1 11.6072 7.1 11C7.1 10.3928 6.60723 9.9 6 9.9C5.39277 9.9 4.9 10.3928 4.9 11ZM16 9.9C15.3928 9.9 14.9 10.3928 14.9 11C14.9 11.6072 15.3928 12.1 16 12.1C16.6072 12.1 17.1 11.6072 17.1 11C17.1 10.3928 16.6072 9.9 16 9.9ZM11 14.35C12.8472 14.35 14.35 12.8472 14.35 11C14.35 9.15277 12.8472 7.65 11 7.65C9.15277 7.65 7.65 9.15277 7.65 11C7.65 12.8472 9.15277 14.35 11 14.35ZM11 9.35C11.9098 9.35 12.65 10.0902 12.65 11C12.65 11.9098 11.9098 12.65 11 12.65C10.0902 12.65 9.35 11.9098 9.35 11C9.35 10.0902 10.0902 9.35 11 9.35Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.2"
                  />
                </svg>
                <span>Pay Now</span>
              </button>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default DepositModal;
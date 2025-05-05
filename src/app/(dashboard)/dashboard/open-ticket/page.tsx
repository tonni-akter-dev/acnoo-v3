import terms from "/public/images/icons/terms.svg";
import eye from "/public/img/eye1.png";
import plus from "/public/img/plus-square.svg";
import Image from "next/image";
import React from "react";
import TextEditor from "./component/TextEditor";

const OpenTicket = () => {
  return (
    <div className="container-fluid ">
      <div className="view-ticket-header  z-10 mt-30 " style={{ zIndex: 10 }}>
        <h3>View Ticket</h3>
        <button
          className="btn download-btn common-add-btn d-flex gap-2 align-items-center justify-content-center "
          style={{ width: "fit-content" }}
        >
          <Image src={plus} alt="" className="font-button-1" />
          <p className="text-white font-button-1 mb-0"> Open Ticket </p>
        </button>
        {/* <p style={{ position: "absolute", right: "4px", top: "4px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M12 4L4 12"
              stroke="#5B5B5B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 4L12 12"
              stroke="#5B5B5B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p> */}
      </div>

      <div className="our-terms-container mt-2">
        <div className="our-terms-content">
          <div className="">
            <Image src={terms} alt="" />
          </div>
          <div className="">
            <h5>Read Our Terms of Service Before Purchase Licenses</h5>
            <p>
              Please ensure you read our terms of services before order any
              license
            </p>
          </div>
        </div>
        <button
          type="button"
          className="view-terms-btn d-flex align-items-center justify-content-between gap-2"
        >
          <Image src={eye} alt="" />
          View Terms of Service
        </button>
      </div>

      <div className="row mt-4 mb-30">
        <div className="col-lg-3">
          <div className="left-ticket-info">
            <div className="ticket-info-header">
              <h5>Your Recent Tickets</h5>
            </div>

            {/* <!-- Repeat this block for each recent ticket --> */}
            {[1, 2, 3, 4, 5, 6].map((data) => (
              <React.Fragment key={data}>
                <div className="ticket-des-container">
                  <p className="ticket-des">
                    #12345 - Sample Ticket Subject...
                  </p>
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <div className="open-badge">open</div>
                    <p className="ticket_time">2 days ago</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
            {/* <!-- End ticket block --> */}
          </div>
        </div>
        <div className="col-lg-9">
          <form
            action="#"
            method="post"
            encType="multipart/form-data"
            className="ajaxform_instant_reload"
          >
            <div className="left-ticket-info">
              <div className="ticket-info-header">
                <h5>Ticket Information</h5>
              </div>

              <div className="order-form-section">
                <div className="row mx-2 ticket-form-container">
                  <div className="col-lg-4">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter full Name"
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-4">
                    <label>Email Address *</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter email address"
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-4">
                    <label>Items/Service</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="paymentType"
                    >
                      <option> Low</option>
                      <option value="code-quality"> Medium</option>
                      <option value="awesome-design"> High</option>
                      <option value="awesome-design"> Urgent</option>
                    </select>
                  </div>



                  <div className="col-lg-4">
                    <label>Purchase Code</label>
                    <input
                      type="text"
                      name="purchase_code"
                      placeholder="Enter your purchase code"
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-4">
                    <label>Support Expire Date</label>
                    <input
                      type="text"
                      name="purchase_code"
                      placeholder="Ex: 10 Jun, 2025"
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-4">
                    <label>Priority</label>
                    <select
                      className="form-select"
                      aria-label="Select Priority"
                      id="paymentType"
                    >
                      <option>  Low</option>
                      <option value="code-quality">  Medium</option>
                      <option value="awesome-design">  High</option>
                      <option value="awesome-design">  Urgent</option>
                    </select>
                  </div>

                </div>
              </div>
            </div>

            <div className="right-ticket-info mt-30">
              <div className="ticket-info-header">
                <h5>Message</h5>
              </div>
              <TextEditor />

              {/* upload file */}
            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OpenTicket;

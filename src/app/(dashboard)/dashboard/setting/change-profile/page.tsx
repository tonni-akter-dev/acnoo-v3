import React from "react";
import profile from "/public/img/profile1.png";
import Image from "next/image";

const ChnageProfile = () => {
  return (
    <div className="d-flex" style={{ columnGap: "24px" }}>
      <div className="bg-white py-6 px-[57px] w-fit rounded-2xl text-center h-fit">
        <Image className="" src={profile} alt="" />
        <p className="change_pic">Change Picture</p>
      </div>
      <div style={{flexGrow:1}}>
        <form>
          <div className="left-ticket-info right_section_1">
          <h4>User Profile</h4>
            <div className="order-form-section">
              <div className="row mx-2 ticket-form-container">
                <div className="col-lg-6 ps-0">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter full Name"
                    required
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 ps-0">
                  <label>Email Address *</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter email address"
                    required
                    className="form-control"
                  />
                </div>

                <div className="col-lg-6 ps-0">
                  <label>Profession</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="paymentType"
                  >
                    <option> Select One</option>
                    <option value="code-quality"> Medium</option>
                    <option value="awesome-design"> High</option>
                    <option value="awesome-design"> Urgent</option>
                  </select>
                </div>

                <div className="col-lg-6 ps-0">
                  <label>Country</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="paymentType"
                  >
                    <option> Bangladesh</option>
                    <option value="code-quality"> Medium</option>
                    <option value="awesome-design"> High</option>
                    <option value="awesome-design"> Urgent</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="save_btn">
            Update
          </button>
            </div>
          </div>

          <div className="left-ticket-info right_section_1" style={{marginTop:"16px"}}>
          <h4>Update Password</h4>
            <div className="order-form-section">
              <div className="row mx-2 ticket-form-container">
                <div className="col-lg-6 ps-0">
                  <label>Current Password*</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter full Name"
                    required
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 ps-0">
                  <label>New Password*</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter email address"
                    required
                    className="form-control"
                  />
                </div>

             
              </div>
            </div>
            <button type="submit" className="save_btn">
            Update
          </button>
          </div>

 
        </form>
      </div>
    </div>
  );
};

export default ChnageProfile;

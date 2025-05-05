"use client";
import React, { useState } from "react";
import camera from "/public/img/camera.png";
import profile from "/public/img/profile1.png";
import Image from "next/image";

const ProfilePage = () => {
  const [userData] = useState({
    name: "Shaidul Islam",
    email: "maitto:shaidulislam@gmail.com",
    registrationDate: "23 Oct 2024",
  });

  return (
    <div className="card bg-transparent border-0">
      <div className="card-body mt-0 p-0">
        <div
          className="d-flex flex-lg-row flex-col"
          style={{ columnGap: "20px" }}>
          {/* Left Side: User Info */}
          <div
            className="col-md-5 bg-white px-0 "
            style={{
              borderRadius: "8px",
              height: "fit-content",
              paddingBottom: "55px",
            }}
          >
            <div className="header-bg">
              <div className="profile-pic d-flex align-items-center justify-content-center">
                <Image src={profile} alt="" />
              </div>
              <Image className="" style={{ position: "absolute", right: "16px", top: "16px" }} src={camera} alt="" />
            </div>
            <div className="profile_wrapper bg-white">
              <div
                className="d-flex flex-lg-row flex-col"
                style={{
                  borderBottom: "1px solid var(--Neutral-Neutral-300, #DADADA)",
                }}
              >
                <p className="left_col">Full Name</p>
                <p className="right_col">: {userData.name}</p>
              </div>
              <div
                className="d-flex flex-lg-row flex-col"
                style={{
                  borderBottom: "1px solid var(--Neutral-Neutral-300, #DADADA)",
                }}
              >
                <p className="left_col">Email</p>
                <p className="right_col">: {userData.email}</p>
              </div>
              <div
                className="d-flex flex-lg-row flex-col"
                style={{
                  borderBottom: "1px solid var(--Neutral-Neutral-300, #DADADA)",
                }}
              >
                <p className="left_col">Registration Date</p>
                <p className="right_col">: {userData.registrationDate}</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="col-md-7 bg-white right_section">
            <h4>User Profile</h4>
            <form>
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={userData.name}
                  readOnly
                />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value="shaidulislam@admin.com"
                  readOnly
                />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="profilePic" className="form-label">
                  Profile Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="profilePic"
                  placeholder="No image chosen"
                />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="currentPassword" className="form-label">
                  Current Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="currentPassword"
                  placeholder="••••"
                />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="Enter new password"
                />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Enter confirm password"
                />
              </div>
              <button type="submit" className="save_btn">
                SAVE CHANGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

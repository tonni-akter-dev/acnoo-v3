/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import React, { ReactNode, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "bootstrap/dist/css/bootstrap.min.css";

type IProps = {
  children: ReactNode;
};

const DashboadLayout: React.FC<IProps> = ({ children }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <div className={`hidden 2xl:block max-w-[306px] size-full  `}>
        <Sidebar />
      </div>
      <div className="section-container bg-[#eeebf7]">
        <Topbar />
        <div className="my-6">
          <div className="min-h-screen">
            <div className="">{children}</div>
          </div>
        </div>
        <footer className=" d-flex align-items-center justify-content-center justify-content-sm-between flex-wrap p-4 ms-0 bg-white d-print-none">
          <p className="mb-0 me-3">Copyright <span>2025</span>   Acnoo All Rights Reserved</p>
          <p className="mb-0">Made by ❤ <a href="https://acnoo.com/" target="_blank">Acnoo</a></p>
        </footer>
      </div>
    </>
  );
};

export default DashboadLayout;

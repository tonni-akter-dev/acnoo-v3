 
"use client";
import AdminFooter from "@/app/(website)/shared/AdminFooter";
import Header from "@/app/(website)/shared/Header";
import TopHeader from "@/app/(website)/shared/TopHeader";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

const AdminLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <html lang="en">
      <body>
        <TopHeader />
        <Header />
        {children}
        <div className="bg-[#F3F0FD]" style={{
          background:
            "linear-gradient(0deg, #F3F0FD 0%, #F3F0FD 100%)",
        }}>
          <AdminFooter />
        </div>
      </body>
    </html>
    </>
  );
};

export default AdminLayout;

import React from "react";
import acnoo from "/public/images/svg/acnoo.svg";
import dash1 from "/public/dash1.png";
import dash2 from "/public/dash2.png";
import dash3 from "/public/dash3.png";
import dash4 from "/public/dash4.png";
import dash5 from "/public/dash5.png";
import dash6 from "/public/dash6.png";
import dash7 from "/public/dash7.png";
import dash8 from "/public/dash8.png";
import dash9 from "/public/dash9.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define menu items with their properties
const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: dash1 },
  { href: "/dashboard/purchase", label: "Purchases", icon: dash2 },
  { href: "/dashboard/refund", label: "Refunds", icon: dash3 },
  { href: "/dashboard/downloads", label: "Free Downloads", icon: dash4 },
  { href: "/dashboard/service", label: "Service/Orders", icon: dash5 },
  { href: "/dashboard/support-ticket", label: "Support Ticket", icon: dash6 },
  { href: "/dashboard/statement", label: "Statement", icon: dash7 },
  { href: "/dashboard/wallet", label: "My Wallet", icon: dash8 },
  { href: "/dashboard/setting", label: "Settings", icon: dash9 },
];

const Sidebar = () => {
  const pathname=usePathname()
  return (
    <div>
      <nav className="side-bar">
        <div className="side-bar-logo">
          <Link href="javascript:void(0)">
            <Image src={acnoo} alt="Logo" />
          </Link>
          <button className="close-btn">
            <i className="fal fa-times"></i>
          </button>
        </div>
        <div className="side-bar-manu">
          <ul className="ps-0">
            {menuItems.map((item, index) => (
              <li key={index} className="dropdown">
                <Link href={item.href} className={item.href === pathname ? "active" : ""}>
                  <span className="sidebar-icon">
                    <Image src={item.icon} alt={item.label} width={22} height={22} />
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
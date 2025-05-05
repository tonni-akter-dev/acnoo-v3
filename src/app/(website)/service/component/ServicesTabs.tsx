"use client";
import React from "react";

const tabs = [
  "All Services",
  "Web Development",
  "Mobile Application",
  "Software Development",
  "UI/UX Design",
  "Graphic Design",
  "Digital Marketing"
];

interface ServicesTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ServicesTabs({ activeTab, setActiveTab }: ServicesTabsProps) {
  return (
    <div className="lg:ms-0 ms-5 overflow-x-auto scrollbar-hide">
      <div className="flex gap-3.5 border-b-[2px] border-b-white">
        {tabs.map((tab) => (
          <div key={tab} className="w-full">
            <button
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-4 transition relative whitespace-nowrap w-full
                ${
                  activeTab === tab
                    ? "text-[#2F1C6A] font-medium bg-[linear-gradient(180deg,#F5EFFF80_0%,#E6D8FF_100%)]  border-b-[2px] border-[#2F1C6A]"
                    : "text-[#4B5563]"
                }
              `}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

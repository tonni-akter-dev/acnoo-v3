'use client';
import React, { useState } from 'react';
import Modal from './Modal';

type SectionKey =
  | 'Installation & Upgrade'
  | 'Setup & Configuration'
  | 'Manage Admin'
  | 'Others';

interface DropdownData {
  [key: string]: string[];
}

const MobileDocumentation = () => {
  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
    'Installation & Upgrade': true,
    'Setup & Configuration': false,
    'Manage Admin': false,
    Others: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dropdownData: DropdownData = {
    'Installation & Upgrade': [
      'Getting Started',
      'Dashboard',
      'Requirements',
      'Download from Envato',
      'Creating Database',
    ],
    'Setup & Configuration': ['Setup Overview'],
    'Manage Admin': ['Admin Roles'],
    Others: ['Other Item 1'],
  };

  const toggleSection = (sectionId: SectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Base classes for dropdown items
  const baseClasses = 'text-base font-medium ps-6 h-[52px] flex items-center';
  const activeClasses = 'text-[#2353F5] border-l-[4px] border-[#2353F5] rounded-lg';
  const inactiveClasses = 'text-[#696A6E]';

  return (
    <div className="m-0 md:m-5">
      <div
        className="bg-white lg:py-[30px]"
        style={{ boxShadow: '0px 4px 50px 0px rgba(0, 0, 0, 0.09)' }}
      >
        {([
          'Installation & Upgrade',
          'Setup & Configuration',
          'Manage Admin',
          'Others',
        ] as SectionKey[]).map((data) => (
          <div key={data}>
            {/* Section Header */}
            <div
              className={`${
                openSections[data] ? 'bg-[#2353F514]' : ''
              } text-[#0B071A] text-lg font-medium px-5 flex justify-between items-center cursor-pointer h-[64px]`}
              onClick={() => toggleSection(data)}
            >
              <div>{data}</div>
              <button className="focus:outline-none">
                {openSections[data] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_815_78084)">
                      <path
                        d="M10.0001 18.3337C14.6025 18.3337 18.3334 14.6027 18.3334 10.0003C18.3334 5.39795 14.6025 1.66699 10.0001 1.66699C5.39771 1.66699 1.66675 5.39795 1.66675 10.0003C1.66675 14.6027 5.39771 18.3337 10.0001 18.3337Z"
                        stroke="#0B071A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66663 10H13.3333"
                        stroke="#0B071A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_815_78084">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_815_78091)">
                      <path
                        d="M10.0001 18.3337C14.6025 18.3337 18.3334 14.6027 18.3334 10.0003C18.3334 5.39795 14.6025 1.66699 10.0001 1.66699C5.39771 1.66699 1.66675 5.39795 1.66675 10.0003C1.66675 14.6027 5.39771 18.3337 10.0001 18.3337Z"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 6.66699V13.3337"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66663 10H13.3333"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_815_78091">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </button>
            </div>

            {/* Dropdown Content */}
            {openSections[data] && (
              <>
                {dropdownData[data].map((item, index) => (
                  <div
                    key={item}
                    className="px-5 transition-all duration-300 ease-in-out mt-3"
                  >
                    <p
                      className={`${baseClasses} ${
                        index === 0 ? activeClasses : inactiveClasses
                      } cursor-pointer`}
                      style={{
                        borderRadius: '8px 0px 0px 8px',
                        boxShadow:
                          index === 0
                            ? '0px 1px 7px 0px rgba(0, 0, 0, 0.03)'
                            : 'none',
                      }}
                      onClick={() => {
                        if (item === 'Getting Started') {
                          openModal();
                        }
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div className="absolute top-[56px] md:top-[65px] inset-0 z-50 flex items-center justify-center h-full">
          <div className="bg-white w-full h-screen p-6 relative overflow-y-auto">
            <div className="flex justify-end items-center">
              <button
                onClick={closeModal}
                className="text-[#0B071A] focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <Modal />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDocumentation;
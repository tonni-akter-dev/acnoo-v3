'use client'
import Link from 'next/link';
import { useState } from 'react';
import PrivacyModal from './PrivacyModal';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { label: 'Bookings & Prices', href: '#' },
  { label: 'Payments, Refunds & Credits', href: '#' },
  { label: 'Refund', href: '#' },
  { label: 'Cancellations', href: '#' },
  { label: 'Included Services', href: '#' },
  { label: 'Trip Operation', href: '#' },
  { label: 'Participation', href: '#' },
  { label: 'Passports, Visas & Entry Require', href: '#' },
  { label: 'Your Information & Privacy', href: '#' },
  { label: 'Miscellaneous', href: '#' },
];

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full lg:max-w-[464px] max-h-[840px] h-full">
      <aside className="ps-8 pe-6 py-2.5 bg-white privacy shadow-xl lg:w-[463px] lg:py-14">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} onClick={openModal}>
              <Link href={item.href}>
                <span className="block hover:px-9 py-3 lg:py-5 text-[#696A6E] rounded-md hover:text-black border border-transparent hover:border-l-4 hover:border-l-primary hover:border-[#F2F3F4] cursor-pointer">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className='lg:hidden block'>
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="absolute top-[56px] md:top-[65px] inset-0 z-50 flex items-center justify-center h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
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
                <PrivacyModal />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

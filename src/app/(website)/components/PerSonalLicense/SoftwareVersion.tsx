interface SoftwareVersionProps {
  versions?: string[];
}

import { motion } from 'framer-motion';

export default function SoftwareVersion({ versions = ["8.1", "7.4", "8.0", "8.2"] }: SoftwareVersionProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="border border-[#E5E7EB] rounded-lg p-6 mt-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3
        className="text-xl font-bold mb-4"
        variants={itemVariants}
      >
        Software version
      </motion.h3>
      <motion.div
        className="border-t border-[#E5E7EB] pt-4"
        variants={itemVariants}
      >
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
        >
          {versions.map((version, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2"
              variants={itemVariants}
              custom={index}
            >
              <div className="w-5 h-5 rounded-full bg-[#00BA00] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 text-white"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-[#6B7280] font-bold">{version}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TagsSectionProps {
  tags?: string[];
  selectedTag?: string;
  onTagSelect?: (tag: string) => void;
}

export default function TagsSection({
  tags = [
    "Agency",
    "Builder",
    "Business",
    "Corporate",
    "Multipurpose",
    "Gym",
    "Revolution",
    "Industry",
    "Personal",
    "Portfolio",
    "Responsive",
    "Portfolio",
  ],
  selectedTag = "Multipurpose",
  onTagSelect = () => {},
}: TagsSectionProps) {
  const [selected, setSelected] = useState(selectedTag);

  const handleTagClick = (tag: string) => {
    setSelected(tag);
    onTagSelect(tag);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
        Tags
      </motion.h3>
      <motion.div
        className="border-t border-[#E5E7EB] pt-4"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-wrap gap-2"
          variants={containerVariants}
        >
          {tags.map((tag, index) => (
            <motion.button
              key={index}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-2 rounded-md text-sm ${
                selected === tag
                  ? "bg-[#2F1C6A] text-white"
                  : "bg-[#F3F4F6] text-gray-700 hover:bg-gray-200"
              }`}
              variants={itemVariants}
              custom={index}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
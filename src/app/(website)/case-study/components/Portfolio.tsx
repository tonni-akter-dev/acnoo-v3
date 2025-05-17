"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import work1 from "/public/about/work1.png";
import work2 from "/public/about/work2.png";
import work3 from "/public/about/work3.png";
import work4 from "/public/about/work4.png";
import Image from "next/image";

const Portfolio = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<number | null>(null); // Track which image is hovered
  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const imageDiv = imageRefs.current[index];
    if (imageDiv) {
      const imageRect = e.currentTarget.getBoundingClientRect();
      const isInside = e.clientX >= imageRect.left && e.clientX <= imageRect.right &&
        e.clientY >= imageRect.top && e.clientY <= imageRect.bottom;

      if (isInside) {
        setMousePosition({
          x: e.clientX - imageRect.left - 40,
          y: e.clientY - imageRect.top - 40,
        });
      } else {
        setIsHovered(null);
      }
    }
  };

  const handleMouseEnter = (index: number) => setIsHovered(index);
  const handleMouseLeave = () => setIsHovered(null);

  return (
    <div className="containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  lg:gap-x-[108px] md:gap-x-[18px]">
      {[
        { src: work1, alt: "Acnoo Admin", title: "Acnoo Admin – Flutter Admin Panel & Dashboard Template | PWA Ready" },
        { src: work2, alt: "Business card design", title: "Business card design" },
        { src: work3, alt: "PosPro SaaS Project", title: "PosPro SaaS Project" },
        { src: work4, alt: "Business card design", title: "Business card design" },
      ].map((project, index) => (
        <motion.div key={index} className={`mt-5 ${index % 2 === 1 ? "md:mt-10 lg:mt-[100px]" : ""}`}>
          <div
            className="relative"
            ref={(el: HTMLDivElement | null) => {
              imageRefs.current[index] = el;
            }}
          >
            <motion.div
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                style={{ transformOrigin: "left center", overflow: "hidden" }}
              >
                <Image src={project.src} alt={project.alt} />
              </motion.div>
            </motion.div>

            {isHovered === index && (
              <motion.div
                className="absolute pointer-events-none flex items-center justify-center bg-yellow-400 rounded-full w-32 h-32 text-black text-sm font-bold"
                style={{
                  left: mousePosition.x,
                  top: mousePosition.y,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                View Project
              </motion.div>
            )}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 + index * 0.2 }}
            className="text-lg lg:text-2xl font-bold text-black mt-7 mb-4"
          >
            {project.title}
            <br className="lg:block hidden" />
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 + index * 0.2 }}
            className="flex gap-5 wrap_button"
          >
            <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">Branding</li>
            <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">UI/UX</li>
            <li className="py-1 px-5 border border-[#E7E7E7] rounded-full w-fit">UI/UX</li>
          </motion.ul>
        </motion.div>
      ))}
    </div>
  );
};

export default Portfolio;
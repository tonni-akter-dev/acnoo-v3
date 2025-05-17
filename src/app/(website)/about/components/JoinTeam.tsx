'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function JoinTeam() {
  const words = ["join", "our", "team"]

  const container = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const letter = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
  }

  return (
    <div className=" flex justify-center items-center">
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the section is in view
        className="join_team flex justify-center items-center overflow-hidden"
      >
        <h1 className="flex flex-wrap text-[40px] md:text-[65px] lg:text-[170px] uppercase text-white font-bold leading-[146px]">
          {words.map((word, wordIdx) => (
            <motion.span key={wordIdx} className="flex mr-[20px]">
              {word.split('').map((char, charIdx) => (
                <motion.span
                  key={`${wordIdx}-${charIdx}`}
                  variants={letter}
                  className={`${word === "team" ? "font-normal" : "font-bold"}`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </h1>
      </motion.div>
    </div>
  )
}

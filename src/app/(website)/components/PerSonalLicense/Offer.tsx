import React from 'react'
import { motion } from 'framer-motion'

const Offer = () => {
  return (
    <motion.div
      className="offer py-7 text-center text-white mt-4 lg:mt-[57px] rounded-lg lg:rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}  
    >
      <h2
        className="text-[28px] md:[42px] lg:text-5xl"
        style={{ fontFamily: 'Dosis, sans-serif' }}
      >
        Get -50% OFF
      </h2>
      <p className="text-lg md:text-[27px] lg:text-2xl mt-3">
        Just add to cart 3 items <br />
        at your choice
      </p>
    </motion.div>
  )
}

export default Offer

'use client'
import React, { useEffect, useRef, useState } from 'react'
import ent1 from '/public/admindashboard/ent1.png'
import ent11 from '/public/admindashboard/ent11.png'
import ent2 from '/public/admindashboard/ent2.png'
import ent22 from '/public/admindashboard/ent22.png'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    title: 'Dashboard',
    content: 'ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.',
  },
  {
    title: 'Task Management',
    content: 'ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.',
  },
];

const ResourcePlannning = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleIndex = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const animatedRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetY = useRef(0);
  const currentY = useRef(0);
  const animatedRef2 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const targetY2 = useRef(0);
  const currentY2 = useRef(0);

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  useEffect(() => {
    const updatePosition = () => {
      currentY.current = lerp(currentY.current, targetY.current, 0.1);
      currentY2.current = lerp(currentY2.current, targetY2.current, 0.1);

      if (animatedRef.current) {
        animatedRef.current.style.transform = `translateY(${currentY.current}px)`;
      }

      if (animatedRef2.current) {
        animatedRef2.current.style.transform = `translateY(${currentY2.current}px)`;
      }

      requestAnimationFrame(updatePosition);
    };

    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const progress = 1 - Math.min(Math.max(rect.top / window.innerHeight, 0), 1);
        targetY.current = progress * 100;
      }

      if (containerRef2.current) {
        const rect2 = containerRef2.current.getBoundingClientRect();
        const progress2 = 1 - Math.min(Math.max(rect2.top / window.innerHeight, 0), 1);
        targetY2.current = progress2 * 100;
      }
    };

    window.addEventListener('scroll', handleScroll);
    requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut'
      }
    }),
  };

  return (
    <div className='containers resource_planning_wrapper px-5'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 planning_grid lg:flex-row md:flex-row flex-col gap-5 lg:gap-[87px] items-center">
        <div
          className='order_custom relative'
          ref={containerRef}>
          <Image src={ent1} alt="Main Image" className='ent_main_img' />
          <div
            className="absolute aniamted_1 right-[-100px] bottom-[54px] will-change-transform"
            ref={animatedRef}
          >
            <Image src={ent11} alt="Animated Image" />
          </div>
        </div>
        <div>
          <motion.p
            className='text-red text-sm lg:text-base uppercase font-bold mb-3 lg:mb-3.5'
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            Next Generation
          </motion.p>

          <motion.h2
            className='text-2xl md:text-[30px] lg:text-[60px] text-[#0B071A] enterprise_text font-bold leading-[35px] lg:leading-[56px] mb-3 lg:mb-5'
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            Enterprise  <br className='md_block' /> Resource  Planning.
          </motion.h2>

          <motion.p
            className='text-[15px] lg:text-lg mb-[25px] text-[#4B5563] font-medium'
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
          >
            Simple and intuitive time tracking. Run the tracker or enter your times manually.
          </motion.p>

          <ul>
            {['Billable', 'Manual time entries', 'Services'].map((item, i) => (
              <motion.li
                key={i}
                className='mb-[15px] lg:mb-5 last:mb-0 flex gap-3 items-center'
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i + 3}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle opacity="0.08" cx="11" cy="11" r="11" fill="#141125" />
                  <path d="M15 8L9.5 13.5L7 11" stroke="#141125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='text-lg text-[#4B5563] font-medium'>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      {/* second row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-[87px] items-center planning_grid  mt-10">
        <div>
          <motion.p
            className='text-red text-sm lg:text-base uppercase font-bold mb-4 lg:mb-3.5'
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            INVOICES
          </motion.p>

          <motion.h2
            className='text-2xl enterprise_text md:text-[30px] lg:text-[60px] text-[#0B071A] font-bold leading-[35px] lg:leading-[56px] mb-3 lg:mb-5'
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Simple Tools, <br className='md_block' /> Powerful Effects
          </motion.h2>

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className='w-[335px] resource_faq lg:w-[470px] mt-2 lg:mt-[14px] rounded-lg lg:rounded-2xl px-4 py-[22px] lg:p-[30px] bg-[#F7F9FB]'
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index + 2}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleIndex(index)}
              >
                <div className="text-lg lg:text-[22px] font-bold text-[#0B071A]">
                  {faq.title}
                </div>
                <button className="focus:outline-none">
                  {openIndex === index ? (
                    <svg className='lg:size-[30px] size-5' xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                      <rect width="30" height="30" rx="15" fill="#C52127" />
                      <path d="M20 13L15 18L10 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg className='lg:size-[30px] size-5' xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                      <rect width="30" height="30" rx="15" fill="#141125" />
                      <path d="M13 20L18 15L13 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    className="overflow-hidden text-[#4B5563] text-base font-medium"
                    initial={{ height: 0, opacity: 0, paddingTop: 0 }}
                    animate={{ height: "auto", opacity: 1, paddingTop: 22 }}
                    exit={{ height: 0, opacity: 0, paddingTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {faq.content}
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>
        <div className='relative'
          ref={containerRef2}>
          <Image className='h-[300px] enter_img2 lg:h-[600px] w-full' src={ent2} alt="" />
          <div
            className="absolute aniamted_2 left-[-100px] bottom-[54px] will-change-transform"
            ref={animatedRef2}
          >
            <Image className='' src={ent22} alt="Animated Image" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ResourcePlannning
'use client'
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CompanyInside = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const data = [
    { label: "Team Members", end: 22, suffix: "+" },
    { label: "Years of experience", end: 7, suffix: "+" },
    { label: "Happy Customers", end: 25, suffix: "k" },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="company_bg lg:pt-[142px] relative" ref={ref}>
      <motion.h1
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.4 }}
        className="lg:pt-0 md:pt-11 pt-6 text-[40px] md:text-[55px] lg:text-[90px] font-bold text-primary text-center uppercase leading-10 lg:leading-[99px] lg:mb-[181px]"
      >
        company <br />
        <span className="text-[30px] md:text-[40px] lg:text-[80px] font-medium">
          inside..
        </span>
      </motion.h1>

      {/* Mobile Section */}
      <div className="lg:hidden md:hidden company_mobile flex px-8 mt-[58px] justify-between">
        {data.map(({ label, end, suffix }, i) => (
          <div
            key={label}
            
            className={`text-center ${
              i === 1 ? "absolute top-[160px] left-[133px] comapny_first_count" : "mt-[60px]"
            }`}
          >
            <motion.p
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.5, delay: i * 0.2 + 0.1 }}
              viewport={{ once: true }}
              className="text-black text-sm leading-6 font-bold"
            >
              {label}
            </motion.p>
            <h1
              className="text-primary text-[36px] font-bold leading-10"
            >
              {inView && <CountUp end={end} duration={2} separator="," suffix={suffix} />}
            </h1>
          </div>
        ))}
      </div>

      {/* Large screen */}
      <div className="lg:px-[277px] lg_screen_px px-8 lg:flex md:flex company_inside hidden lg:mt-0 mt-[190px] justify-between">
        {data.map(({ label, end, suffix }, i) => (
          <motion.div
            key={label}
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.p
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.5, delay: i * 0.2 + 0.1 }}
              viewport={{ once: true }}
              className="text-black text-lg lg:text-[26px] font-bold"
            >
              {label}
            </motion.p>
            <h1
              className="text-primary text-[50px] lg:leading-[100px] leading-[60px] lg:text-[107px] font-bold mt-4 lg:mt-[22px]"
            >
              {inView && <CountUp end={end} duration={2} separator="," suffix={suffix} />}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInside;

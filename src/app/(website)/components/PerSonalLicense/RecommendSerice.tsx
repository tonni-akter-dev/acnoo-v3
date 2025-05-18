import React, { useState, useRef, useEffect } from 'react';
import ServiceCheckbox from './ServiceCheckbox';
import { motion, useInView, useAnimation } from 'framer-motion';

const services = [
  { title: 'Get 6 More Months Of Support And Save', price: 27, checked: true },
  { title: 'Installation, Setup and Customization Package', price: 29 },
  { title: 'All-in-One Customization', price: 29 },
  { title: 'Installation and Customization Package', price: 29 },
];

const RecommendService = () => {
  const [checkedServices, setCheckedServices] = useState(
    services.map((service) => service.checked || false)
  );

  const toggleService = (index: number) => {
    const newCheckedServices = [...checkedServices];
    newCheckedServices[index] = !newCheckedServices[index];
    setCheckedServices(newCheckedServices);
  };

  // Refs and animation control
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

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
      className="mb-6"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h3 className="font-bold text-lg mb-3" variants={itemVariants}>
        Recommended Services
      </motion.h3>
      <div className="space-y-3">
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ServiceCheckbox
              index={index}
              title={service.title}
              price={service.price}
              checked={checkedServices[index]}
              onChange={() => toggleService(index)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecommendService;

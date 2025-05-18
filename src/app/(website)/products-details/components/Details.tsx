// import product2 from '/public/product2.png'
// import product3 from '/public/product3.png'
// import Image from 'next/image'

// const Details = ({
//   features = [
//     "Clean Code and a well-structured project",
//     "Responsive design for both desktop & mobile",
//     "RTL language for both English & Arabic",
//     "SEO optimized",
//     "Cross-browser compatibility",
//     "Email subscription",
//     "Fast Admin dashboard & customization options",
//     "Regular updates and more",
//   ],
// }) => {
//   return (

//     <div className=" lg:col-span-2">
//       {/* Tab Content */}
//       <div>
//         <div className="rounded-t-md overflow-hidden">
//           <Image
//             src={product2}
//             alt="product2"
//             className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
//           />
//         </div>

//         <div className="flex gap-2 mb-8 justify-center rounded-b-md bg-[#F4F2F5] p-5">
//           <button
//             className="flex items-center px-4 py-2 lg:h-12 h-10 whitespace-nowrap bg-[#2F1C6A] text-white rounded-md text-sm hover:bg-transparent hover:border hover:border-[#2F1C6A] hover:text-[#2F1C6A] transition-all duration-300"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-4 h-4 mr-2"
//             >
//               <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//               <circle cx="12" cy="12" r="3"></circle>
//             </svg>
//             Live Preview
//           </button>
//           <button
//             className="flex items-center px-4 py-2 lg:h-12 h-10 whitespace-nowrap border border-[#6021D1] rounded-md text-[#6021D1] font-bold hover:bg-[#6021D1] hover:text-white transition-all duration-300"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="w-4 h-4 mr-2"
//             >
//               <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//               <circle cx="8.5" cy="8.5" r="1.5"></circle>
//               <polyline points="21 15 16 10 5 21"></polyline>
//             </svg>
//             Screenshots
//           </button>
//         </div>

//         <h2 className="text-xl font-bold mb-2">Bizpro - Business WordPress Theme</h2>
//         <p className="text-gray-700 text-base mb-6">Biznov is a modern and professional WordPress Consulting theme designed for finance and business websites. theme features a clean and minimalist design that is perfect for showcasing financial services, human resources, insurance, consulting, corporate, IT solutions, products, and business. The theme is fully responsive, ensuring thatlooks great on all devices and screen sizes.</p>
//         <p className="text-gray-700 text-base mb-6">Biznov business theme is built with a powerful admin panel that allows you to customize the theme as per your requirement. The theme includes a variety of pre-designed pages, such as About Us, Services, and Contact pages, which can be easily imported and customized to fit the {`user’s`} needs.</p>
//         <div className="mb-6">
//           <h3 className="text-xl text-primary font-bold mb-2">Product Features</h3>
//           <p className='text-[#6B7280] font-medium mb-11'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem</p>
//           <ul className="space-y-2 text-base">
//             {features.map((feature, index) => (
//               <li key={index} className="flex items-center gap-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
//                   <path d="M12.8682 0.990118L5.47775 9.60948C5.4458 9.64692 5.41213 9.68268 5.37846 9.71676C5.32082 9.79219 5.25634 9.86203 5.18558 9.92573C4.91224 10.1526 4.55844 10.2627 4.20179 10.2325C3.84514 10.2017 3.51588 10.0336 3.28648 9.76425L0.313363 6.29265C0.0851052 6.02556 -0.0261675 5.68082 0.00521148 5.33383C0.0360266 4.98684 0.206648 4.66611 0.479417 4.44205C1.04721 3.97605 1.8929 4.04869 2.36888 4.60465L4.56015 7.1565L12.2559 0.374927C12.3409 0.289997 12.4573 0.241943 12.5789 0.241943C12.7004 0.241943 12.8168 0.289997 12.9019 0.374927C13.0445 0.560995 13.0302 0.820257 12.8682 0.990118Z" fill="#2353F5" />
//                 </svg>
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* 3rd section  */}
//         <div className="rounded-md ">
//           <Image src={product3} alt='product1' className='w-full h-[517px] md:h-[800px] lg:h-[800px] object-cover object-top rounded ' />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Details
import product2 from '/public/product2.png';
import product3 from '/public/product3.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Details = ({
  features = [
    "Clean Code and a well-structured project",
    "Responsive design for both desktop & mobile",
    "RTL language for both English & Arabic",
    "SEO optimized",
    "Cross-browser compatibility",
    "Email subscription",
    "Fast Admin dashboard & customization options",
    "Regular updates and more",
  ],
}) => {
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
      className="lg:col-span-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    // viewport={{ once: true, amount: 0.2 }}
    >
      {/* Tab Content */}
      <div>
        <motion.div
          className="rounded-t-md overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={product2}
            alt="product2"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </motion.div>

        <motion.div
          className="flex gap-2 mb-8 justify-center rounded-b-md bg-[#F4F2F5] p-5"
          variants={containerVariants}
        >
          <motion.button
            className="flex items-center px-4 py-2 lg:h-12 h-10 whitespace-nowrap bg-[#2F1C6A] text-white rounded-md text-sm hover:bg-transparent hover:border hover:border-[#2F1C6A] hover:text-[#2F1C6A] transition-all duration-300"
            variants={itemVariants}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 mr-2"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Live Preview
          </motion.button>
          <motion.button
            className="flex items-center px-4 py-2 lg:h-12 h-10 whitespace-nowrap border border-[#6021D1] rounded-md text-[#6021D1] font-bold hover:bg-[#6021D1] hover:text-white transition-all duration-300"
            variants={itemVariants}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 mr-2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            Screenshots
          </motion.button>
        </motion.div>

        <motion.h2
          className="text-xl font-bold mb-2"
          variants={itemVariants}
        >
          Bizpro - Business WordPress Theme
        </motion.h2>
        <motion.p
          className="text-gray-700 text-base mb-6"
          variants={itemVariants}
        >
          Biznov is a modern and professional WordPress Consulting theme designed for finance and business websites. theme features a clean and minimalist design that is perfect for showcasing financial services, human resources, insurance, consulting, corporate, IT solutions, products, and business. The theme is fully responsive, ensuring thatlooks great on all devices and screen sizes.
        </motion.p>
        <motion.p
          className="text-gray-700 text-base mb-6"
          variants={itemVariants}
        >
          Biznov business theme is built with a powerful admin panel that allows you to customize the theme as per your requirement. The theme includes a variety of pre-designed pages, such as About Us, Services, and Contact pages, which can be easily imported and customized to fit the {`user’s`} needs.
        </motion.p>
        <motion.div
          className="mb-6"
          variants={containerVariants}
        >
          <motion.h3
            className="text-xl text-primary font-bold mb-2"
            variants={itemVariants}
          >
            Product Features
          </motion.h3>
          <motion.p
            className="text-[#6B7280] font-medium mb-11"
            variants={itemVariants}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
          </motion.p>
          <motion.ul
            className="space-y-2 text-base"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                variants={itemVariants}
                custom={index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                >
                  <path
                    d="M12.8682 0.990118L5.47775 9.60948C5.4458 9.64692 5.41213 9.68268 5.37846 9.71676C5.32082 9.79219 5.25634 9.86203 5.18558 9.92573C4.91224 10.1526 4.55844 10.2627 4.20179 10.2325C3.84514 10.2017 3.51588 10.0336 3.28648 9.76425L0.313363 6.29265C0.0851052 6.02556 -0.0261675 5.68082 0.00521148 5.33383C0.0360266 4.98684 0.206648 4.66611 0.479417 4.44205C1.04721 3.97605 1.8929 4.04869 2.36888 4.60465L4.56015 7.1565L12.2559 0.374927C12.3409 0.289997 12.4573 0.241943 12.5789 0.241943C12.7004 0.241943 12.8168 0.289997 12.9019 0.374927C13.0445 0.560995 13.0302 0.820257 12.8682 0.990118Z"
                    fill="#2353F5"
                  />
                </svg>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        {/* 3rd section */}
        <motion.div
          className="rounded-md"
          variants={itemVariants}
        >
          <Image
            src={product3}
            alt="product1"
            className="w-full h-[517px] md:h-[800px] lg:h-[800px] object-cover object-top "
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Details;
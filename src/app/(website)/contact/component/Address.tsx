// import React from 'react';
// import mail from '/public/mail.png';
// import location from '/public/location.png';
// import phone from '/public/phone.png';
// import whitephone from '/public/whitephone.png';
// import whitelocation from '/public/whitelocation.png';
// import whitemail from '/public/whitemail.png';
// import Image from 'next/image';

// const Address = () => {
//     return (
//         <div className="address mt-5 lg:mt-[120px] lg:mx-0 md:mx-5">
//             <div className="containers  mx-auto grid contact_grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
//                 <div className='group bg-[#F3F3FF] rounded-lg hover:bg-[#2F1C6A] border text-center flex flex-col items-center border-white py-5 lg:py-[60px] contact  px-3 lg:px-20 transition-all duration-300'>
//                     <Image  src={location} alt="" className="group-hover:hidden lg:w-[58px] lg:h-[74px] w-10 h-14 " />
//                     <Image  src={whitelocation} alt="" className="hidden group-hover:block lg:w-[58px] lg:h-[74px] w-10 h-14 " />
//                     <h1 className='text-xl lg:text-2xl font-bold text-primary mt-4 lg:mt-7 mb-1 lg:mb-[18px] group-hover:text-white transition-colors duration-300'>
//                         Address Line
//                     </h1>
//                     <p className='text-base lg:text-lg text-[#636776] group-hover:text-white transition-colors duration-300'>
//                         Bowery St, New York, 37 USA<br className='lg:block hidden' />
//                         NY 10013, USA
//                     </p>
//                 </div>

//                 <div className='group bg-[#F3F3FF] rounded-lg hover:bg-[#2F1C6A] border text-center flex flex-col items-center border-white py-5 lg:py-[60px]  contact px-3 lg:px-20 transition-all duration-300'>
//                     <Image  src={phone} alt="" className="group-hover:hidden  lg:w-[73px] lg:h-[71px] size-[55px] " />
//                     <Image  src={whitephone} alt="" className="hidden group-hover:block lg:w-[73px] lg:h-[71px] size-[55px]  " />
//                     <h1 className='text-xl lg:text-2xl font-bold text-primary mt-4 lg:mt-7 mb-1 lg:mb-[18px] group-hover:text-white transition-colors duration-300'>
//                         Phone Number
//                     </h1>
//                     <p className='text-base lg:text-lg text-[#636776] group-hover:text-white transition-colors duration-300'>
//                         +1255 - 568 - 6523<br className='lg:block hidden' />
//                         4374-221 +1255 - 568 - 6523
//                     </p>
//                 </div>

//                 <div className='group bg-[#F3F3FF] rounded-lg hover:bg-[#2F1C6A] border text-center flex flex-col items-center border-white py-5 lg:py-[60px]  contact px-3 lg:px-20 transition-all duration-300'>
//                     <Image  src={mail} alt="" className="group-hover:hidden lg:size-20  w-10 h-14" />
//                     <Image  src={whitemail} alt="" className="hidden group-hover:block  lg:size-20 w-10 h-14" />
//                     <h1 className='text-xl lg:text-2xl font-bold text-primary mt-4 lg:mt-7 mb-1 lg:mb-[18px] group-hover:text-white transition-colors duration-300'>
//                         Mail Address
//                     </h1>
//                     <p className='text-base lg:text-lg text-[#636776] group-hover:text-white transition-colors duration-300'>
//                         email@example.com<br />
//                         info@yourdomain.com
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Address;

'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

import mail from '/public/mail.png';
import location from '/public/location.png';
import phone from '/public/phone.png';
import whitephone from '/public/whitephone.png';
import whitelocation from '/public/whitelocation.png';
import whitemail from '/public/whitemail.png';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut'
    }
  })
};

const Address = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true});

  return (
    <div ref={ref} className="address mt-5 lg:mt-[120px] lg:mx-0 md:mx-5">
      <div className="containers mx-auto grid contact_grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        {[{
          img: location,
          whiteImg: whitelocation,
          title: 'Address Line',
          content: <>Bowery St, New York, 37 USA<br className='lg:block hidden' />NY 10013, USA</>
        }, {
          img: phone,
          whiteImg: whitephone,
          title: 'Phone Number',
          content: <>+1255 - 568 - 6523<br className='lg:block hidden' />4374-221 +1255 - 568 - 6523</>
        }, {
          img: mail,
          whiteImg: whitemail,
          title: 'Mail Address',
          content: <>email@example.com<br />info@yourdomain.com</>
        }].map((item, index) => (
          <motion.div
            key={index}
            className='group bg-[#F3F3FF] rounded-lg hover:bg-[#2F1C6A] border text-center flex flex-col items-center border-white py-5 lg:py-[60px] contact px-3 lg:px-20 transition-all duration-300'
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={index}
          >
            <Image src={item.img} alt="" className="group-hover:hidden lg:w-[58px] lg:h-[74px] w-10 h-14" />
            <Image src={item.whiteImg} alt="" className="hidden group-hover:block lg:w-[58px] lg:h-[74px] w-10 h-14" />
            <h1 className='text-xl lg:text-2xl font-bold text-primary mt-4 lg:mt-7 mb-1 lg:mb-[18px] group-hover:text-white transition-colors duration-300'>
              {item.title}
            </h1>
            <p className='text-base lg:text-lg text-[#636776] group-hover:text-white transition-colors duration-300'>
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Address;

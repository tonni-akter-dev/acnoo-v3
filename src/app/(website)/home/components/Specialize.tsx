

'use client';
import React, { CSSProperties } from 'react';
import Image, { StaticImageData } from 'next/image';
import flutterAppDevelopment from '/public/home/flutterAppDevelopment.png';
import softwareDevelopment from '/public/home/softwareDevelopment.png';
import websiteDevelopment from '/public/home/websiteDevelopment.png';
import uiUxDesign from '/public/home/uiUxDesign.png';
import digitalMarketing from '/public/home/digitalMarketing.png';
import saasProductDevelopment from '/public/home/saasProductDevelopment.png';
import specializeCenter from '/public/home/centerspecialize.png';
import { motion, useInView } from 'framer-motion';

type PositionStyle = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const Button = ({
  text,
  image,
  position,
  className,
}: {
  text: string;
  image: StaticImageData;
  position?: PositionStyle,
  className?: string;
}) => {
  const buttonStyles: CSSProperties = {
    ...(position && { position: 'absolute' }),
    ...position,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    // <button
    //   className={className}
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //   }}
    // >
    //   <Image
    //     src={image}
    //     className="lg:size-[177px] md:size-[120px] size-[132px] specialize_btn_img"
    //     alt={text}
    //   />
    // </button>
    <button className={className}
      style={buttonStyles}>
      <Image src={image} className='lg:size-[177px] md:size-[120px] size-[132px] specialize_btn_img' alt={text} />
    </button>
  );
};

const Specialize = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInButton = (delay: number) => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: isInView
      ? {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay },
      }
      : {},
  });

  return (
    <div className="specialize_bg py-[38px] lg:py-[100px] lg:px-[150px] px-5">
      <div className="text-white text-lg font-medium mb-4">
        <span className="bg-[#F52366] text-base font-bold text-white px-3 h-[25px] py-1 rounded-full w-fit me-[11px]">
          New
        </span>
        Something new coming soon!
      </div>

      <div
        ref={ref}
        className="flex specialize_text lg:flex-row flex-col pb-[34px] lg:pb-[70px] justify-between lg:items-center"
      >
        <motion.h2
          variants={fadeInLeft}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-5 lg:mb-0 max-w-[560px] w-full lg:text-[65px] text-2xl lg:leading-[65px] leading-[32px] font-bold text-white whitespace-nowrap specialize_heading"
        >
          Specialize in many <br className="lg:block md:hidden block" />
          Different <span className="gradient_text1">Sectors</span>
        </motion.h2>

        <motion.p
          variants={fadeInLeft}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="max-w-[543px] w-full text-white text-base font-medium leading-7"
        >
          We’re a team of passionate problem-solvers and out-of-the-box technical thinkers. Our objective? To take as much complexity off of our partner’s plates and make their WordPress websites perform for their.
        </motion.p>
      </div>

      {/* Desktop Buttons with Animation */}
      <div className="relative tab h-[500px] lg:block md:block hidden">
        <Image
          src={specializeCenter}
          alt="Specialize Center"
          layout="fill"
          objectFit="contain"
        />

        <motion.div
          {...fadeInButton(0.1)}
          className='flutter'
          style={{ position: 'absolute', top: '0%', left: '0' }}
        >
          <Button className="btn_position" text="Flutter App Development" image={flutterAppDevelopment} />
        </motion.div>

        <motion.div
          {...fadeInButton(0.2)}
          className='software'
          style={{ position: 'absolute', top: '35%', left: '20%' }}
        >
          <Button text="Software Development" image={softwareDevelopment} />
        </motion.div>

        <motion.div
          {...fadeInButton(0.3)}
          className='md_device website'
          style={{ position: 'absolute', bottom: '0%', left: '0%' }}
        >
          <Button text="Website Development" image={websiteDevelopment} />
        </motion.div>

        <motion.div
          {...fadeInButton(0.4)}
          className="btn_position ui_ux"
          style={{ position: 'absolute', top: '0%', right: '0' }}
        >
          <Button text="UI/UX Design" image={uiUxDesign} />
        </motion.div>

        <motion.div
          {...fadeInButton(0.5)}
          className='digital'
          style={{ position: 'absolute', top: '35%', right: '20%' }}
        >
          <Button text="Digital Marketing" image={digitalMarketing} />
        </motion.div>

        <motion.div
          {...fadeInButton(0.6)}
          className='md_device saas'
          style={{ position: 'absolute', bottom: '0%', right: '0%' }}
        >
          <Button text="SaaS Product Development" image={saasProductDevelopment} />
        </motion.div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden md:hidden mobile grid grid-cols-2 gap-6 mt-10">
        {[flutterAppDevelopment, softwareDevelopment, websiteDevelopment, uiUxDesign, digitalMarketing, saasProductDevelopment].map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Button
              text={[
                'Flutter App Development',
                'Software Development',
                'Website Development',
                'UI/UX Design',
                'Digital Marketing',
                'SaaS Product Development',
              ][i]}
              image={image}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Specialize;

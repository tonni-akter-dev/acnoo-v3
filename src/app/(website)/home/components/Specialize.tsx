import React, { CSSProperties } from 'react';
import Image, { StaticImageData } from 'next/image';
import flutterAppDevelopment from '/public/home/flutterAppDevelopment.png';
import softwareDevelopment from '/public/home/softwareDevelopment.png';
import websiteDevelopment from '/public/home/websiteDevelopment.png';
import uiUxDesign from '/public/home/uiUxDesign.png';
import digitalMarketing from '/public/home/digitalMarketing.png';
import saasProductDevelopment from '/public/home/saasProductDevelopment.png';
import specializeCenter from '/public/home/centerspecialize.png';

type PositionStyle = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const Button = ({ text, image, position }: { text: string, image: StaticImageData, position?: PositionStyle }) => {
  const buttonStyles: CSSProperties = {
    ...(position && { position: 'absolute' }), // Only set position if position prop exists
    ...position, // Spread other positioning properties
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  return (
    <button style={buttonStyles}>
      <Image src={image} className='lg:size-[177px] md:size-[120px] size-[132px]' alt={text} />
    </button>
  );
};

const Specialize = () => {
  return (
    <div className='specialize_bg py-[38px] lg:py-[100px] lg:px-[150px] px-5'>
      <div className="text-white text-lg font-medium mb-4">
        <span className='bg-[#F52366] text-base font-bold text-white px-3 h-[25px] py-1 rounded-full w-fit me-[11px]'>New </span>Something new coming soon!
      </div>
      <div className='flex lg:flex-row flex-col mb-[70px] justify-between  lg:items-center'>
        <h2 className='mb-5 lg:mb-0 max-w-[560px] w-full lg:text-[65px]  text-[24px] lg:leading-[65px] leading-[32px] font-bold text-white whitespace-nowrap'>
        Specialize in many <br className='lg:block md:hidden block ' />
        Different <span className='gradient_text1'>Sectors</span>
        </h2>
        <p className='max-w-[543px] w-full text-white text-base font-medium'>
          We’re a team of passionate problem-solvers and out-of-the-box technical thinkers. Our objective? To take as much complexity off of our partner’s plates and make their WordPress websites perform for their.
        </p>
      </div>

      <div className='relative h-[500px] lg:block md:block hidden'> 
        <Image src={specializeCenter} alt="Specialize Center" layout='fill' objectFit='contain' />
        {/* Position the buttons based on your design */}
        <Button
          text="Flutter App Development"
          image={flutterAppDevelopment}
          position={{ top: '6%', left: '0' }}
        />
        <Button
          text="Software Development"
          image={softwareDevelopment}
          position={{ top: '35%', left: '20%' }}
        />
        <Button
          text="Website Development"
          image={websiteDevelopment}
          position={{ bottom: '6%', left: '0%' }}
        />
        <Button
          text="UI/UX Design"
          image={uiUxDesign}
          position={{ top: '6%', right: '0' }}
        />
        <Button
          text="Digital Marketing"
          image={digitalMarketing}
          position={{ top: '35%', right: '20%' }}
        />
        <Button
          text="SaaS Product Development"
          image={saasProductDevelopment}
          position={{ bottom: '6%', right: '0%' }}
        />
      </div>

      <div className='lg:hidden md:hidden grid grid-cols-2 gap-6'>
      <Button
          text="Flutter App Development"
          image={flutterAppDevelopment}
        />
        <Button
          text="Software Development"
          image={softwareDevelopment}
        />
        <Button
          text="Website Development"
          image={websiteDevelopment}
        />
        <Button
          text="UI/UX Design"
          image={uiUxDesign}
        />
        <Button
          text="Digital Marketing"
          image={digitalMarketing}
        />
        <Button
          text="SaaS Product Development"
          image={saasProductDevelopment}
        />
      </div>
    </div>
  );
};

export default Specialize;
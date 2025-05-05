import React from 'react'
import adminpanel from '/public/ecommerce/adminpanel.png'
import Image from 'next/image'

const BuisnessOperate = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center buisness_bg lg:pb-0 pb-6 lg:pt-0 pt-8 lg:mt-[120px]'>
        <h1 className=' lg:px-0 md:px-0 px-4 text-primary text-[28px] md:text-[30px] lg:text-[72px] lg:leading-[72px] leading-[30px] font-bold mb-3 lg:mb-7'>
        Operate your Business with <br  className='lg:block md:block hidden' />
        acnoo admin panel
        </h1>
        <p className=' lg:px-0 md:px-0 px-4 text-[#4B5563] text-base lg:text-lg font-medium mb-5'>Acnoo is a fully featured dashboard and admin template comes with tones of well designed <br className='lg:block hidden' /> Awesome elements, components, widgets and applications and secondary pages.</p>
        <Image className='lg:px-0 px-[18px] md:px-[60px]' src={adminpanel} alt="" />
    </div>
  )
}

export default BuisnessOperate
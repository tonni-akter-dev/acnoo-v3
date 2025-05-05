import React from 'react'
import adminpanel from '../../../../../public/ecommerce/adminpanel.png'
import Image from 'next/image'

const BuisnessOperate = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center buisness_bg mt-[120px]'>
        <h1 className='text-primary text-[72px] lg:leading-[72px] leading-[30px] font-bold mb-7'>
        Operate your Business with <br />
        acnoo admin panel
        </h1>
        <p className='text-[#4B5563] text-lg font-medium mb-5'>Acnoo is a fully featured dashboard and admin template comes with tones of well designed <br /> Awesome elements, components, widgets and applications and secondary pages.</p>
        <Image src={adminpanel} alt="" />
    </div>
  )
}

export default BuisnessOperate
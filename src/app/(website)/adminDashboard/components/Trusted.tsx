import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

import t1 from '../../../../../public/admindashboard/trust/t1.png'
import t2 from '../../../../../public/admindashboard/trust/t2.png'
import t3 from '../../../../../public/admindashboard/trust/t3.png'
import t4 from '../../../../../public/admindashboard/trust/t4.png'
import t5 from '../../../../../public/admindashboard/trust/t5.png'
import t6 from '../../../../../public/admindashboard/trust/t6.png'
import t7 from '../../../../../public/admindashboard/trust/t7.png'
import t8 from '../../../../../public/admindashboard/trust/t8.png'
import t9 from '../../../../../public/admindashboard/trust/t9.png'
import t10 from '../../../../../public/admindashboard/trust/t10.png'
import t11 from '../../../../../public/admindashboard/trust/t11.png'
import t12 from '../../../../../public/admindashboard/trust/t12.png'
import t13 from '../../../../../public/admindashboard/trust/t13.png'


const Trusted = () => {
  const firstRow = [t1, t2, t3, t4, t5, t6, t7, t8, t9]
  const secondRow = [t10, t11, t12, t13, t10, t11, t12, t13]

  const wrapperStyle = 'border border-[#B3B3B3] bg-[#fbfdff] h-[112px] flex justify-center items-center px-11 rounded-lg'
  const shadowStyle = { filter: 'drop-shadow(0px 24px 16px rgba(16, 23, 54, 0.03))' }
  const imageStyle = 'h-auto '

  return (
    <div className='py-[120px]'>
      <div className='flex gap-4 mb-11 items-center whitespace-nowrap justify-center'> 
        <svg xmlns="http://www.w3.org/2000/svg" width="777" height="1" viewBox="0 0 777 1" fill="none">
          <path d="M777 0L777 1.00003L-19 1L-19 -3.47943e-05C291.857 -2.12063e-05 466.143 -1.3588e-05 777 0Z" fill="black" fill-opacity="0.09" />
        </svg>
        <p className='text-base font-bold uppercase text-center '>Trusted by Thousands Business</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="737" height="1" viewBox="0 0 737 1" fill="none">
          <path d="M740 0L740 1.00003L-4.37128e-08 1L0 -3.23464e-05C288.988 -1.97144e-05 451.012 -1.26321e-05 740 0Z" fill="black" fill-opacity="0.09" />
        </svg>
      </div>
      <div className='space-y-8'>
        <Marquee>
          <div className='flex gap-[30px] items-center me-[30px]'>
            {firstRow.map((img, i) => (
              <div key={i} className={wrapperStyle} style={shadowStyle}>
                <Image className={imageStyle} src={img} alt={`Trusted brand ${i + 1}`} />
              </div>
            ))}
          </div>
        </Marquee>

        <Marquee direction='right'>
          <div className='flex gap-[30px] items-center me-[30px]'>
            {secondRow.map((img, i) => (
              <div key={i} className={wrapperStyle} style={shadowStyle}>
                <Image className={imageStyle} src={img} alt={`Trusted brand second ${i + 1}`} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Trusted

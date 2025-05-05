import React from 'react'
import support from '../../../../../public/admindashboard/support-img.png'
import Image from 'next/image'

const Support = () => {
    return (
        <div className=' '>
            <div className='overflow-hidden relative support_bg lg:ps-[243px] lg:pe-[123px] items-center grid lg:grid-cols-2 grid-cols-1 justify-between'>
                <div>
                    <div className="text-white text-lg font-medium mb-4 text-start">
                        <span className='bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]'>New</span>
                        New Customer support featured reval
                    </div>
                    <h3 className=' text-[60px] lg:leading-[72px] leading-[30px]  font-bold mb-6 text-white'>
                        Need support?start today
                    </h3>
                    <p className='text-[#CDD0DA] text-base font-medium mb-[38px]'>The layout is responsive and looks gorgeous and
                        professional on any major devices and this theme
                        comes with custom page templates.</p>
                    <button className={`bg-white flex gap-1.5 items-center text-black text-base font-bold px-[36px]  py-[21px] rounded-[10px] w-fit`}>
                        Get started support <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M12.4264 9.50104L8.50781 5.58247L9.6274 4.46289L14.6655 9.50104L9.6274 14.5391L8.50781 13.4196L12.4264 9.50104Z" fill="black" />
                        </svg>
                    </button>
                </div>
                <div className=''>
                    <Image className='absolute bottom-0' src={support} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Support
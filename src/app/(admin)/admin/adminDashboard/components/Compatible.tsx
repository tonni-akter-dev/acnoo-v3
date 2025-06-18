import React from 'react'
import pos from '/public/admindashboard/pospro.png'
import Image from 'next/image'

const Compatible = () => {
    return (
        <div className='containers px-5  mt-9 bottom_grad lg:pb-[90px] pb-9'>
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
                <div>
                    <p className='text-red text-sm lg:text-base uppercase font-bold mb-2.5 lg:mb-3.5'>Compatible with</p>
                    <h2 className='text-2xl md:text-[30px] heading_text lg:text-[60px] text-[#0B071A] font-bold leading-8 lg:leading-[56px] mb-3 lg:mb-5'>POSpro compatible with</h2>
                    <p className='text-base lg:text-lg mb-6 text-[#4B5563] font-medium'>The layout is responsive and looks gorgeous and <br className='br_compatible' />
                        professional on any major devices and this theme <br className='br_compatible' />
                        comes with custom page templates.</p>
                    <div className='flex gap-4 lg:gap-5 items-center'>
                        <button className="bg-red flex gap-1.5 items-center text-white text-sm lg:text-base font-bold px-5 lg:px-[36px] py-[14px] lg:h-[60px] h-12 whitespace-nowrap rounded-[10px] w-fit border border-red transition-all duration-300 group hover:bg-transparent hover:text-red">
                            Browse Frontend
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none" className="transition-all duration-300">
                                <path d="M4.42639 5.50055L0.507812 1.58199L1.6274 0.462402L6.66554 5.50055L1.6274 10.5386L0.507812 9.41906L4.42639 5.50055Z"
                                    className="fill-white group-hover:fill-red transition-all duration-300" />
                            </svg>
                        </button>
                        <button className={` transition-all duration-300 group  whitespace-nowrap bg-[#210D0D] hover:bg-transparent border border-[#210D0D] hover:text-[#210D0D] flex gap-1.5 items-center text-white text-base font-bold px-3 md:px-5  lg:px-[36px]  lg:h-[60px] h-12 rounded-sm  lg:rounded-[10px] w-fit`} style={{ boxShadow: '0px 0px 18px 0px rgba(0, 0, 0, 0.09)' }}>
                            Browse Admin
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                <path d="M14.349 5.73728L10.1727 1.56103C10.0602 1.45235 9.90951 1.39222 9.75308 1.39358C9.59666 1.39494 9.44702 1.45768 9.3364 1.5683C9.22579 1.67891 9.16304 1.82855 9.16168 1.98498C9.16032 2.14141 9.22046 2.29211 9.32914 2.40463L12.487 5.56247H1.99504C1.83681 5.56247 1.68507 5.62533 1.57318 5.73722C1.46129 5.8491 1.39844 6.00085 1.39844 6.15908C1.39844 6.31731 1.46129 6.46906 1.57318 6.58095C1.68507 6.69283 1.83681 6.75569 1.99504 6.75569H12.487L9.32914 9.91353C9.27215 9.96856 9.2267 10.0344 9.19544 10.1072C9.16417 10.18 9.14771 10.2583 9.14702 10.3375C9.14633 10.4167 9.16143 10.4953 9.19143 10.5686C9.22142 10.6419 9.26572 10.7085 9.32174 10.7645C9.37776 10.8205 9.44437 10.8648 9.51769 10.8948C9.59101 10.9248 9.66957 10.9399 9.74879 10.9392C9.82801 10.9386 9.90629 10.9221 9.97908 10.8908C10.0519 10.8596 10.1177 10.8141 10.1727 10.7571L14.349 6.58088C14.4608 6.469 14.5237 6.31728 14.5237 6.15908C14.5237 6.00088 14.4608 5.84916 14.349 5.73728Z" className="fill-white group-hover:fill-black transition-all duration-300" />
                            </svg>
                        </button>
                    </div>
                </div>
                <Image className='object-contain h-[350px] compatible_img md:h-[500px]  mx-auto' src={pos} alt="" />
            </div>

        </div>
    )
}

export default Compatible
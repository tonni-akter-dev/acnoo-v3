import React from 'react'
import vector from '/public/about/vector.png'
import team1 from '/public/about/team1.png'
import team2 from '/public/about/team2.png'
import team3 from '/public/about/team3.png'
import play from '/public/about/play.png'
import innovativetab1 from '/public/about/innovative-tab1.png'
import innovativetab2 from '/public/about/innovative-tab2.png'
import Image from 'next/image'
import Link from 'next/link'

const Innovative = () => {
    return (
        <div className='mt-6 md:mt-8 lg:mt-[107px] lg_screen_px containers mb-[122px]'>
            <h1 className='heading_text text-2xl md:text-[35px] lg:text-[55px] text-center mb-3 md:mb-4  lg:mb-[62px] font-bold text-[#59595C]  leading-8 md:leading-11 lg:leading-[68px] '><span className='text-primary'> A GLOBAL,</span> INNOVATIVE <br className='lg:hidden md:hidden block' /> SOFTWERE <br className='lg:hidden md:block hidden' /> COMPANY</h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 items-end innovative">
                <div>
                    <Image className='lg:px-0 md:px-5 px-0 mb-6 md:mb-8 lg:mb-[56px] ' src={team1} alt="" />
                    <div className='relative mb-4 md:mb-0 lg:mb-12 lg:px-0 px-5 '>
                        <h1 className='text-xl spacialize_text_inno md:text-2xl lg:text-[50px]  uppercase font-bold leading-[30px] md:leading-8 lg:leading-[60px]  text-primary'>We <span className='font-medium'>specialize</span> in building <br />
                            Website & apps </h1>
                        <Image className='absolute bottom-[-10px] ' src={vector} alt="" />
                    </div>
                    <div className='lg:px-0 px-5 flex lg:flex-row inno_text md:flex-row flex-col-reverse items-start md:items-end  lg:items-center gap-5'>
                        <Link href="#" className='w-[232px] link_style flex items-center gap-1 pe-[20px] rounded-3  '>Join with Us
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M1 10L9.4375 1.5625M1 1H10V10" stroke="#C52127" strokeLinecap="square" strokeLinejoin="round" />
                            </svg></Link>
                        <div className='h-[102px] w-[1px] bg-[#59595CA1] rounded-[11px] lg:block md:block inno_line hidden'></div>

                        <p>It has stood the test of time and proceeds <br  className='inno_br'/>
                            to advance – an great arrangement for our <br className='inno_br' />
                            skilled creative group, who proceed to <br className='inno_br' />
                            thrust the boundaries</p>
                    </div>
                </div>

                <div className=' innovative_wrapper flex gap-2 md:gap-3 lg:gap-7 md:justify-end relative lg:mt-0 mt-7'>
                    <div className='text-white  bg-primary top-[37%] left-[38%]  md:left-[61%] play_btn lg:left-[41%] absolute z-50 flex justify-center items-center rounded-full flex-col gap-2.5 cursor-pointer  lg:size-[148px]  size-[90px]'>
                        <Image src={play} alt="" />
                        <span className='text-white text-sm lg:text-base font-semibold'>play video</span>
                    </div>
                    <Image className=' block lg:block innovative_hidden md:hidden md:h-[284px] lg:h-[605px]' src={team2} alt="" />
                    <Image className=' block lg:block innovative_hidden md:hidden md:h-[284px] lg:h-[605px]' src={team3} alt="" />
                    <Image className=' lg:hidden innovative_team md:block hidden md:h-[284px] lg:h-[605px]' src={innovativetab1} alt="" />
                    <Image className=' lg:hidden innovative_team md:block hidden md:h-[284px] lg:h-[605px]' src={innovativetab2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Innovative
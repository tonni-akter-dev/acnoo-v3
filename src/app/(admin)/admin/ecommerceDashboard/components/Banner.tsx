import React from 'react'
import banner from '/public/ecommerce/bannerimg.png';
import line from '/public/ecommerce/linebg.png';
import b1 from '/public/ecommerce/b1.png';
import b2 from '/public/ecommerce/b2.png';
import b3 from '/public/ecommerce/b3.png';
import b4 from '/public/ecommerce/b4.png';
import b5 from '/public/ecommerce/b5.png';
import b6 from '/public/ecommerce/b6.png';
import b7 from '/public/ecommerce/b7.png';
import border from '/public/ecommerce/dashboard-bottom-border.png';
import tabborder from '/public/ecommerce/tab-border.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Banner = () => {
    return (
        <div className='relative overflow-hidden h-fit'>
            {/* Hero Section */}
            <div className='relative lg:h-[1300px]'>
                <div className='ebanner_bg text-center pt-6 md:pt-[50px] lg:pt-[104px] h-[460px] md:h-[570px] lg:h-[861px]'>
                    <h2 className='text-primary lg:leading-[72px] leading-[36px] md:leading-[50px] text-[28px] md:text-[40px] lg:text-[72px] font-bold mb-5'>
                        <span className='relative inline-block'>
                            Acnoo Admin Dashboard
                            <span
                                className='lg:block hidden absolute bottom-[-10px] right-[-9%] transform -translate-x-1/2 w-[300px] h-[10px] bg-no-repeat bg-center'
                                style={{ backgroundImage: `url(${border.src})`, backgroundSize: 'cover' }}
                            />
                        </span>
                        <span
                            className='hidden md:block lg:hidden  absolute bottom-[-10px] right-0  transform -translate-x-1/2 w-[300px] h-[10px] bg-no-repeat bg-center'
                            style={{ backgroundImage: `url(${tabborder.src})`, backgroundSize: 'cover' }}
                        >
                        </span>
                        <br />
                        for eCommerce
                    </h2>
                    <p className='text-[#4B5563] text-base lg:text-lg mb-9 lg:px-0 px-7'>
                        Acnoo is a fully featured dashboard and admin template comes with tones of well designed <br className='lg:block md:hidden hidden' />
                        Awesome elements, components, widgets and applications and secondary pages.
                    </p>
                    <div className='flex gap-4 lg:gap-5 items-center justify-center'>
                        <button className='bg-[#2F1C6A] flex gap-1.5 items-center text-white text-sm lg:text-base font-bold px-[14px] md:px-6 lg:px-[36px] py-[14px] md:py-4 lg:py-[21px] rounded-[10px] w-fit'>
                            Browse Frontend <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                <path d="M14.349 5.73728L10.1727 1.56103C10.0602 1.45235 9.90951 1.39222 9.75308 1.39358C9.59666 1.39494 9.44702 1.45768 9.3364 1.5683C9.22579 1.67891 9.16304 1.82855 9.16168 1.98498C9.16032 2.14141 9.22046 2.29211 9.32914 2.40463L12.487 5.56247H1.99504C1.83681 5.56247 1.68507 5.62533 1.57318 5.73722C1.46129 5.8491 1.39844 6.00085 1.39844 6.15908C1.39844 6.31731 1.46129 6.46906 1.57318 6.58095C1.68507 6.69283 1.83681 6.75569 1.99504 6.75569H12.487L9.32914 9.91353C9.27215 9.96856 9.2267 10.0344 9.19544 10.1072C9.16417 10.18 9.14771 10.2583 9.14702 10.3375C9.14633 10.4167 9.16143 10.4953 9.19143 10.5686C9.22142 10.6419 9.26572 10.7085 9.32174 10.7645C9.37776 10.8205 9.44437 10.8648 9.51769 10.8948C9.59101 10.9248 9.66957 10.9399 9.74879 10.9392C9.82801 10.9386 9.90629 10.9221 9.97908 10.8908C10.0519 10.8596 10.1177 10.8141 10.1727 10.7571L14.349 6.58088C14.4608 6.469 14.5237 6.31728 14.5237 6.15908C14.5237 6.00088 14.4608 5.84916 14.349 5.73728Z" fill="white" />
                            </svg>
                        </button>
                        <button className='bg-[#2353F5] flex gap-1.5 items-center text-white text-sm lg:text-base font-bold px-[14px] md:px-6 lg:px-[36px] py-[14px] md:py-4 lg:py-[21px] rounded-[10px] w-fit' style={{ boxShadow: '0px 0px 18px 0px rgba(0, 0, 0, 0.09)' }}>
                            Browse Admin
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                <path d="M14.349 5.73728L10.1727 1.56103C10.0602 1.45235 9.90951 1.39222 9.75308 1.39358C9.59666 1.39494 9.44702 1.45768 9.3364 1.5683C9.22579 1.67891 9.16304 1.82855 9.16168 1.98498C9.16032 2.14141 9.22046 2.29211 9.32914 2.40463L12.487 5.56247H1.99504C1.83681 5.56247 1.68507 5.62533 1.57318 5.73722C1.46129 5.8491 1.39844 6.00085 1.39844 6.15908C1.39844 6.31731 1.46129 6.46906 1.57318 6.58095C1.68507 6.69283 1.83681 6.75569 1.99504 6.75569H12.487L9.32914 9.91353C9.27215 9.96856 9.2267 10.0344 9.19544 10.1072C9.16417 10.18 9.14771 10.2583 9.14702 10.3375C9.14633 10.4167 9.16143 10.4953 9.19143 10.5686C9.22142 10.6419 9.26572 10.7085 9.32174 10.7645C9.37776 10.8205 9.44437 10.8648 9.51769 10.8948C9.59101 10.9248 9.66957 10.9399 9.74879 10.9392C9.82801 10.9386 9.90629 10.9221 9.97908 10.8908C10.0519 10.8596 10.1177 10.8141 10.1727 10.7571L14.349 6.58088C14.4608 6.469 14.5237 6.31728 14.5237 6.15908C14.5237 6.00088 14.4608 5.84916 14.349 5.73728Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>

                <Image className='absolute max-w-[1328px] w-full bottom-[-27%] md:bottom-[-42%]
                 lg:bottom-[2%] left-0 md:left-[0%] lg:left-[6%] z-50' src={banner} alt="" />
            </div>

            {/* Customize Section */}
            <div className='lg:block hidden relative !z-[50] lg:mt-0 mt-[260px]'>
                <div className='flex gap-6 items-center justify-center'>
                    {[{ src: b1, text: "Perfect Responsive" },
                    { src: b2, text: "Highly Customizable" },
                    { src: b3, text: "SEO Friendly" },
                    { src: b4, text: "20 HTML Valid Files" }].map((item, i) => (
                        <div key={i} className='lg:text-xl  text-base border-[#00022914] rounded-[14px] w-fit md:py-3 md:px-[18px] lg:p-8 flex gap-3 items-center' style={{ boxShadow: '0px 4px 27px rgba(0, 0, 0, 0.05)' }}>
                            <Image src={item.src} alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className='flex gap-[14px] lg:gap-6 items-center justify-center mt-5 mb-[120px]'>
                    {[{ src: b5, text: "Perfect Responsive" },
                    { src: b6, text: "Highly Customizable" },
                    { src: b7, text: "SEO Friendly" }].map((item, i) => (
                        <div key={i} className='lg:text-xl  text-base border border-[#00022914] rounded-[14px] w-fit p-8 flex gap-3 items-center' style={{ boxShadow: '0px 4px 27px rgba(0, 0, 0, 0.05)' }}>
                            <Image src={item.src} alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* md screen */}
            <div className='lg:hidden hidden md:block relative !z-[50] lg:mt-0 mt-[260px]'>
                <div className='flex gap-6 items-center flex-wrap justify-center'>
                    {[{ src: b1, text: "Perfect Responsive" },
                    { src: b2, text: "Highly Customizable" },
                    { src: b3, text: "SEO Friendly" },
                    { src: b4, text: "20 HTML Valid Files" }, { src: b5, text: "Modern Design" },
                    { src: b6, text: "Fast Support" },
                    { src: b7, text: "Awesome Animation" }].map((item, i) => (
                        <div key={i} className='lg:text-xl  text-base border border-[#00022914] rounded-[14px] w-fit md:py-3 md:px-[18px] lg:p-8 flex gap-3 items-center' style={{ boxShadow: '0px 4px 27px rgba(0, 0, 0, 0.05)' }}>
                            <Image src={item.src} alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

            </div>
            {/* mobile screeb */}

            <div className='lg:hidden md:hidden  relative !z-[50] mt-[137px]'>
                <Marquee
                    speed={30} // Adjust speed of the scroll (pixels per second)
                    direction="left" // Scroll from right to left
                    className="flex gap-2 items-center justify-center mr-2">
                    {[{ src: b1, text: "Perfect Responsive" },
                    { src: b2, text: "Highly Customizable" },
                    { src: b3, text: "SEO Friendly" },
                    { src: b4, text: "20 HTML Valid Files" }].map((item, i) => (
                        <div key={i} className='lg:text-xl mr-2  text-base border border-[#00022914] rounded-[14px] w-fit py-3 px-[18px] lg:p-8 flex gap-3 items-center' style={{ boxShadow: '0px 4px 27px rgba(0, 0, 0, 0.05)' }}>
                            <Image src={item.src} alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </Marquee>
                <Marquee
                    speed={30} // Adjust speed of the scroll (pixels per second)
                    direction="right" // Scroll from right to left
                    className="flex gap-2 items-center justify-center mr-2 mt-2">
                    {[{ src: b1, text: "Perfect Responsive" },
                    { src: b2, text: "Highly Customizable" },
                    { src: b3, text: "SEO Friendly" },
                    { src: b4, text: "20 HTML Valid Files" }].map((item, i) => (
                        <div key={i} className='lg:text-xl mr-2  text-base border border-[#00022914] rounded-[14px] w-fit py-3 px-[18px] lg:p-8 flex gap-3 items-center' style={{ boxShadow: '0px 4px 27px rgba(0, 0, 0, 0.05)' }}>
                            <Image src={item.src} alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </Marquee>
            </div>
            {/* Line Image - Send to back */}
            <Image className='absolute left-0 bottom-[18%] z-[-99999999] mt-20' src={line} alt="" />
        </div >
    );
};

export default Banner;
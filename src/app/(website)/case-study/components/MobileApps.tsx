// 'use client'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/autoplay'
// import { Autoplay } from 'swiper/modules'
// import mobileapp1 from '/public/mobileapp1.png'
// import mobileapp2 from '/public/mobileapp2.png'
// import Image from 'next/image'

// const MobileApps = () => {
//     return (
//         <div className='lg:mx-20 mb-8 lg:mb-[120px]'>
//             <div
//                 className="flex gap-[30px]">
//                 <div>
//                     <Image src={mobileapp1} alt="portfolio" className="h-[402px] lg:h-[600px] mb-3 lg:mb-8  object-cover" />
//                     <h3 className='text-[#121725] mb-[22px] text-2xl font-bold uppercase'>POSpro mobile Apps</h3>
//                     <p className='text-[#121725] text-[15px]'>Flutter & Development</p>
//                 </div>
//                 <div>
//                     <Image src={mobileapp2} alt="portfolio" className="rounded-lg h-[402px] lg:h-[600px] mb-3 lg:mb-8  object-cover" />
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default MobileApps

'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import mobileapp1 from '/public/mobileapp1.png'
import mobileapp2 from '/public/mobileapp2.png'
import Image from 'next/image'

const MobileApps = () => (
    <div className='lg:mx-20 mx-5 mb-8 lg:mb-[120px]'>
        <Swiper
            loop
            spaceBetween={30}
            breakpoints={{
                0: { slidesPerView: 1 },
                1024: { slidesPerView: 1.5 },
            }}>
            <SwiperSlide>
                <Image
                    src={mobileapp1}
                    alt="POSpro mobile Apps"
                    className="w-full rounded-lg lg:w-[897px] h-[402px] lg:h-[600px] object-cover mb-3 lg:mb-8"
                />
                <h3 className='text-[#121725]  mb-3 lg:mb-[22px] text-2xl font-bold uppercase'>
                    POSpro mobile Apps
                </h3>
                <p className='text-[#121725] text-[15px]'>Flutter & Development</p>

            </SwiperSlide>

            {/* Slide 2: image only */}
            <SwiperSlide>
                <div>
                    <div className="">
                        <Image
                            src={mobileapp2}
                            alt="POSpro mobile Apps screenshot"
                            className="w-full rounded-lg h-[402px] lg:h-[600px] object-cover mb-3 lg:mb-8"
                        />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
)

export default MobileApps

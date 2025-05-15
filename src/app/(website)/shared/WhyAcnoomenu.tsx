import React from 'react'
import why1 from '/public/home/why1.png'
import why2 from '/public/home/why2.png'
import why3 from '/public/home/why3.png'
import why4 from '/public/home/why4.svg'
import why5 from '/public/home/why5.png'
import why6 from '/public/home/why6.png'
import officebuilding from '/public/home/officebuilding.png'
import next from '/public/home/next.svg'
import Image from 'next/image'
import Link from 'next/link'

const WhyAcnoomenu = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="mb-12 rounded-2xl  flex justify-center lg:!left-[38%] mega-menu-why lg:max-w-[608px] mx-auto w-full bg-white"
        style={{
          boxShadow: "0px 24px 56px 0px rgba(39, 40, 41, 0.16)",
        }}
      >
        <div className="container mx-auto ">
          {/* Top Links */}
          <div className="pt-[38px] pb-6 lg:pb-8 px-8  grid grid-cols-1 lg:grid-cols-2 ">
            {/* Testimonial */}
            <div className="flex items-start space-x-4 cursor-pointer hover:bg-[#E4C2FF66] p-[15px] rounded-lg transition-all ease-in-out duration-100">
              <Image src={why1} alt="" />
              <div>
                <h4 className="text-[#282F39] text-base font-bold mb-[5px]">Testimonial</h4>
                <p className="text-sm text-[#6B7280] font-medium">See what our customer says</p>
              </div>
            </div>

            {/* Case Studies */}
            <div>
              <div className="flex items-start space-x-4 cursor-pointer hover:bg-[#E4C2FF66] p-[15px] rounded-lg transition-all ease-in-out duration-100">
                <Image src={why2} alt="" />
                <div>
                  <h4 className="text-[#282F39] text-base font-bold mb-[5px]">Case studies</h4>
                  <p className="text-sm text-[#6B7280] font-medium">See what our customer says</p>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div>
              <div className="flex items-start space-x-4 cursor-pointer hover:bg-[#E4C2FF66] p-[15px] rounded-lg transition-all ease-in-out duration-100">
                <Image src={why3} alt="" />
                <div>
                  <h4 className="text-[#282F39] text-base font-bold mb-[5px]">Privacy & Policy</h4>
                  <p className="text-sm text-[#6B7280] font-medium">See what our customer says</p>
                </div>
              </div>
            </div>

            {/* Terms & Condition */}
            <div>
              <div className="flex items-start space-x-4 cursor-pointer hover:bg-[#E4C2FF66] p-[15px] rounded-lg transition-all ease-in-out duration-100">
                <Image src={why4} alt="" />
                <div>
                  <h4 className="text-[#282F39] text-base font-bold mb-[5px]">terms & Condition</h4>
                  <p className="text-sm text-[#6B7280] font-medium">See what our customer says</p>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <div className="flex items-start space-x-4 cursor-pointer hover:bg-[#E4C2FF66] p-[15px] rounded-lg transition-all ease-in-out duration-100">
                <Image src={why5} alt="" />
                <div>
                  <h4 className="text-[#282F39] text-base font-bold mb-[5px]">Contact Us</h4>
                  <p className="text-sm text-[#6B7280] font-medium">See what our customer says</p>
                </div>
              </div>
            </div>

            {/* Become a Partner Button */}
            <Link href={'/become-partner'}> <button className="mt-[15px] ms-[15px] bg-[#2353F5] w-fit h-12 lg:h-[63px] text-white px-6 py-2 text-base font-bold rounded-lg shadow hover:bg-blue-700 transition">
              Become A Partner →
            </button></Link>
          </div>

          {/* Our Offices Section */}
          <div className="m-2 p-6 bg-[#F9FBFF] rounded-2xl">
            <h5 className="text-xs font-semibold text-[#6B7280] mb-4">OUR OFFICES</h5>
            <div className="flex why_menu flex-col-reverse md:flex-row items-start md:items-center space-y-4 md:space-y-4 lg:gap-0 gap-4 md:space-x-6">
              <Image
                src={officebuilding}
                alt="office"
                className="w-[260px] h-[180px] rounded-lg shadow"
              />
              <div>
                <h4 className="font-bold text-lg text-[#282F39]  ">A Global Innovative Softwere Company</h4>
                <div className="text-sm text-gray-600 mt-[14px]">
                  <p className="flex items-start gap-2 text-[#636776]">
                    <Image src={why6} alt="" width={20} height={20} className="min-w-[20px] min-h-[20px]" />
                    R H Home Centre, Green Road, Dhaka. Bangladesh
                  </p>
                  <p className="flex items-start gap-2 mt-1 text-[#636776]">
                    <Image src={why6} alt="" width={20} height={20} className="min-w-[20px] min-h-[20px]" />
                    San Francisco, California, U.S.A
                  </p>
                </div>

                <Link href={'/about'}> <button className="mt-3 text-[#1A0B49] text-base font-bold hover:underline flex  gap-2 items-center">About Us <Image src={next} alt="" /></button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyAcnoomenu
import React from 'react'

const SupportTicket = () => {
    return (
        <div className='supportticket_bg py-[30px] lg:py-[120px]'>
            <div className="text-black text-base lg:text-lg font-medium mb-3 lg:mb-4 text-center">
                <span className="bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]">
                    New
                </span>
                Custom projects we already done
            </div>
            <h3 className="lg:text-[72px] md:text-3xl heading_text text-2xl capitalize mb-4 lg:mb-8 lg:leading-[72px] md:leading-11 leading-8 font-bold text-center text-primary">
                Ready to create some <br />
                custom products?</h3>
            <div className='flex justify-center'>
                <button className=' text-white  cursor-pointer text-base w-[261px] py-3 lg:py-[21px] rounded-[10px] bg-[#2F1C6A]  font-medium'>Create a support ticket</button>
            </div>
        </div>
    )
}

export default SupportTicket

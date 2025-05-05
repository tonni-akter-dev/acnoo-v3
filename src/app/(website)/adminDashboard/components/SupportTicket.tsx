import React from 'react'

const SupportTicket = () => {
    return (
        <div className='supportticket_bg py-[120px]'>
            <div className="text-black text-lg font-medium mb-4 text-center">
                <span className="bg-red rounded-[14px] text-base font-bold text-center text-white px-3 h-[25px] py-1 w-fit me-[11px]">
                    New
                </span>
                Custom projects we already done
            </div>
            <h3 className="text-[72px] capitalize mb-8 lg:leading-[72px] leading-[30px] font-bold text-center text-primary">
                Ready to create some <br />
                custom products?</h3>
            <div className='flex justify-center'>
                <button className=' text-white  cursor-pointer text-base w-[261px] py-[21px] rounded-[10px] bg-[#2F1C6A]  font-medium'>Create a support ticket</button>
            </div>

        </div>
    )
}

export default SupportTicket

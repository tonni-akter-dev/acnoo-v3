import React from 'react'
import ProductCard from '../../components/ProductCard'

const EnvatoProducts = () => {
    return (
        <div className='mt-[30px] lg:px-[86px] px-4 lg:mb-[114px] mb-6 '>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mb-[60px] mb-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <button className="mx-auto bg-[#2353F5] flex gap-1.5 items-center text-white text-base font-bold lg:px-[36px] px-5 py-[13px] lg:py-[21px] rounded-[10px] w-fit">
                Browse All Resources <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14.5874 7.25574L10.0899 2.75824C9.96869 2.6412 9.8064 2.57644 9.63794 2.57791C9.46947 2.57937 9.30833 2.64694 9.1892 2.76606C9.07008 2.88519 9.00251 3.04634 9.00104 3.2148C8.99958 3.38326 9.06434 3.54556 9.18138 3.66673L12.5821 7.06749H1.28312C1.11272 7.06749 0.949301 7.13518 0.828809 7.25567C0.708317 7.37616 0.640625 7.53958 0.640625 7.70999C0.640625 7.88039 0.708317 8.04381 0.828809 8.1643C0.949301 8.28479 1.11272 8.35249 1.28312 8.35249H12.5821L9.18138 11.7532C9.12001 11.8125 9.07106 11.8834 9.03739 11.9618C9.00372 12.0402 8.98599 12.1245 8.98525 12.2098C8.98451 12.2951 9.00077 12.3797 9.03307 12.4587C9.06538 12.5376 9.11309 12.6094 9.17341 12.6697C9.23374 12.73 9.30547 12.7777 9.38444 12.81C9.4634 12.8423 9.548 12.8586 9.63331 12.8579C9.71862 12.8571 9.80293 12.8394 9.88132 12.8057C9.95971 12.772 10.0306 12.7231 10.0899 12.6617L14.5874 8.16423C14.7078 8.04375 14.7755 7.88035 14.7755 7.70999C14.7755 7.53962 14.7078 7.37622 14.5874 7.25574Z" fill="white" />
                </svg>
            </button>
        </div>
    )
}

export default EnvatoProducts
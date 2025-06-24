import Image from 'next/image';
import handshakesagainst from '/public/handshakesagainst.png';

const Form = () => {
    return (
        <div className='bg-clr py-6  md:py-8 lg:py-[120px]' style={{fill:"linear-gradient(0deg, #F3F0FD 0%, #F9F8FE 78.46%, #FFF 100%)"}}>
            <div className='containers mx-auto'>
                <div className='flex lg:flex-row flex-col-reverse gap-10 become_form_wrappers lg:gap-20'>
                    <Image className='lg:h-[890px] md:h-[524px] h-[408px] w-full object-cover' src={handshakesagainst} alt='handshakesagainst' />
                    <div className='lg:px-0 px-5 w-full lg:max-w-[680px]'>
                        <h2 className='text-2xl md:text-[40px] lg:text-[60px] text-[#010101] font-bold mb-5 md:mb-6 lg:mb-10 reseller_text'>Reseller Partnership <br />Requirements</h2>
                        <form className='space-y-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 become_form_grid gap-6'>
                                <div>
                                    <label className='block text-[#010101] font-bold text-lg mb-3'>First name</label>
                                    <input 
                                        type='text' 
                                        className='w-full px-4 py-3 outline-none bg-white border border-gray-300 rounded-lg focus:outline-none'
                                        placeholder='First name'
                                    />
                                </div>
                                <div>
                                    <label className='block text-[#010101] font-bold text-lg mb-3'>Last name</label>
                                    <input 
                                        type='text' 
                                        className='w-full px-4 py-3 outline-none bg-white border border-gray-300 rounded-lg focus:outline-none'
                                        placeholder='Last Name'
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 become_form_grid gap-6'>
                                <div>
                                    <label className='block text-[#010101] font-bold text-lg mb-3'>Business Name*</label>
                                    <input 
                                        type='text' 
                                        className='w-full px-4 py-3 outline-none bg-white border border-gray-300 rounded-lg focus:outline-none'
                                        placeholder='Ex-Acnoo'
                                    />
                                </div>
                                <div>
                                    <label className='block text-[#010101] font-bold text-lg mb-3'>Mobile number</label>
                                    <input 
                                        type='tel' 
                                        className='w-full px-4 py-3 outline-none bg-white border border-gray-300 rounded-lg focus:outline-none'
                                        placeholder=''
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 become_form_grid gap-6'>
                                <div>
                                    <label className='block text-[#010101] font-bold text-lg mb-3'>Country</label>
                                    <select className='w-full px-4 py-3 outline-none bg-white border border-gray-300 rounded-lg focus:outline-none'>
                                        <option>Bangladesh</option>
                                        {/* Add more countries here */}
                                    </select>
                                </div>
                                <div>
                                    <label className='block text-[#010101] font-bold text-lg mb-3'>Choose Product*</label>
                                    <select className='w-full px-4 py-3 outline-none bg-white border border-gray-300 rounded-lg focus:outline-none'>
                                        <option>Choose Products</option>
                                        {/* Add products here */}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className='block text-[#010101] font-bold text-lg mb-3'>Description</label>
                                <textarea 
                                    className='w-full px-4 py-3 outline-none border bg-white border-gray-300 rounded-lg focus:outline-none min-h-[120px]'
                                    placeholder='Tell us more about your idea'
                                ></textarea>
                            </div>

                            <div className='flex items-start'>
                                <input 
                                    type='checkbox' 
                                    id='terms'
                                    className='mt-1 mr-2'
                                />
                                <label htmlFor='terms' className='text-gray-700'>
                                    By checking this box, I confirm that I have read, understood and agree to the Terms and Conditions.
                                </label>
                            </div>

                            <button className={`mt-6 bg-[#2F1C6A] flex gap-1.5 items-center text-white text-base font-bold px-[36px] py-[21px] rounded-[10px] w-fit hover:bg-[#3d2a7a] transition-colors`}>
                                Submit message 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14.5874 7.25598L10.0899 2.75848C9.96869 2.64145 9.8064 2.57669 9.63794 2.57815C9.46947 2.57961 9.30833 2.64718 9.1892 2.76631C9.07008 2.88543 9.00251 3.04658 9.00104 3.21504C8.99958 3.3835 9.06434 3.5458 9.18138 3.66698L12.5821 7.06773H1.28312C1.11272 7.06773 0.949301 7.13542 0.828809 7.25591C0.708317 7.37641 0.640625 7.53983 0.640625 7.71023C0.640625 7.88063 0.708317 8.04405 0.828809 8.16455C0.949301 8.28504 1.11272 8.35273 1.28312 8.35273H12.5821L9.18138 11.7535C9.12001 11.8127 9.07106 11.8836 9.03739 11.962C9.00372 12.0404 8.98599 12.1247 8.98525 12.21C8.98451 12.2954 9.00077 12.38 9.03307 12.4589C9.06538 12.5379 9.11309 12.6096 9.17341 12.6699C9.23374 12.7303 9.30547 12.778 9.38444 12.8103C9.4634 12.8426 9.548 12.8588 9.63331 12.8581C9.71862 12.8574 9.80293 12.8396 9.88132 12.806C9.95971 12.7723 10.0306 12.7233 10.0899 12.662L14.5874 8.16448C14.7078 8.04399 14.7755 7.8806 14.7755 7.71023C14.7755 7.53986 14.7078 7.37647 14.5874 7.25598Z" fill="white" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
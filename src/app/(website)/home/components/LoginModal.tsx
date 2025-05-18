import Image from 'next/image'
import React from 'react'
import acnoo from "/public/icon/acnoo.png";
import facebook from "/public/facebook.png";
import google from "/public/google.png";
import apple from "/public/apple.png";

interface IProps {
    setShowModal: (value: boolean) => void;
}


const LoginModal: React.FC<IProps> = ({ setShowModal }) => {
    return (
        <div className="fixed inset-0 bg-[#000D2BCC] bg-opacity-0.5 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative">
                <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    ✕
                </button>

                {/* Modal Content */}
                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        <Image src={acnoo} alt="Logo" />
                    </div>
                    <h2 className="text-3xl text-[#000D2B] font-bold mb-1">Login</h2>
                    <p className="text-gray-500 text-lg font-medium mb-4">Please enter your details to login</p>

                    {/* Social Login Buttons */}
                    <div className="flex gap-3.5 mb-6">
                        <button className="border border-[#E5E7EB]  py-[13px] px-[15px] rounded-lg bg-[#F7F7F8] flex items-center gap-1">
                            <Image src={google} alt="Google" width={20} height={20} />
                            Google
                        </button>
                        <button className="border border-[#E5E7EB]  py-[13px] px-[15px] rounded-lg bg-[#F7F7F8] flex items-center gap-1">
                            <Image src={facebook} alt="Facebook" width={20} height={20} />
                            Facebook
                        </button>
                        <button className="border border-[#E5E7EB]  py-[13px] px-[15px] rounded-lg bg-[#F7F7F8] flex items-center gap-1">
                            <Image src={apple} alt="Apple" width={20} height={20} />
                            Apple
                        </button>
                    </div>

                    <div className='flex gap-2 items-center mb-8'>
                        <div className='w-[140px] h-[1px] bg-[#E5E7EB]'></div>
                        <p className="text-gray-400 text-sm ">Or Login With...</p>
                        <div className='w-[140px] h-[1px] bg-[#E5E7EB]'></div>
                    </div>

                    {/* Login Form */}
                    {/* <input type="email" placeholder="Enter your email" className="border w-full p-2 rounded mb-2" /> */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-[#2B2B75] mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-200 rounded-md py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-[#2B2B75] focus:border-transparent"
                        />
                    </div>
                    <input type="password" placeholder="********" className="border w-full p-2 rounded mb-2" />
                    <div className="flex justify-between items-center w-full mb-4 text-sm">
                        <label><input type="checkbox" /> Remember me</label>
                        <span className="text-red-500 cursor-pointer">Forgot Password?</span>
                    </div>
                    <button className="bg-[#4B1CED] w-full py-2 rounded text-white font-semibold">Log In</button>

                    <p className="text-sm mt-4">Don’t have an account? <span className="text-[#4B1CED] cursor-pointer">Sign Up</span></p>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
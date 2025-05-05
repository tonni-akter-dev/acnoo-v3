'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import ContactImg from "/public/contact/contact.png"
import { HiArrowLongRight } from 'react-icons/hi2';
import FileUpload from './FileUpload';

const PrivacyForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        description: '',
        code:''
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        setFormData({
            fullName: '',
            email: '',
            subject: '',
            description: '',
            code:''
          });
      };
    return (
        <div className="privacyForm my-5 lg:mb-[108px] lg:mt-[120px] p-3 md:p-0">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[70px]">
            <Image src={ContactImg} alt='contactForm' width={686} height={732}/>
              <div className="bg-none">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block mb-2 font-bold text-base text-[#000D2B]">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-4 bg-[#F8F8FC] text-[#6B7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F1C6A]"
                        placeholder="Enter full name"
                      />
                    </div>
            
                    <div>
                      <label htmlFor="email" className="block mb-2 font-bold text-base text-[#000D2B]">Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-[#F8F8FC] text-[#6B7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F1C6A]"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="code" className="block mb-2 font-bold text-base text-[#000D2B]">Purchase Code <span className="text-red-500">*</span></label>
                      <input
                        type="code"
                        id="code"
                        name="code"
                        required
                        value={formData.code}
                        onChange={handleChange}
                        className="w-full p-4 bg-[#F8F8FC] text-[#6B7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F1C6A]"
                        placeholder="Enter purchase code"
                      />
                    </div>
            
                    <div>
                      <label htmlFor="subject" className="block mb-2 font-bold text-base text-[#000D2B]">Subject <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-4 bg-[#F8F8FC] text-[#6B7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F1C6A]"
                        placeholder="Enter subject"
                      />
                    </div>
            
                    <div>
                      <label htmlFor="description" className="block mb-2 font-bold text-base text-[#000D2B]">Description <span className="text-red-500">*</span></label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-4 bg-[#F8F8FC] text-[#6B7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F1C6A]"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    <FileUpload/>
            
                    <button
                      type="submit"
                      className="w-[180px] flex items-center justify-center gap-2 text-base text-white font-semibold py-3.5 mt-6 rounded-sm bg-primary transition"
                    >
                      Submit <HiArrowLongRight />
                    </button>
                  </form>
                </div>
            </div>
        </div>
    );
};

export default PrivacyForm;
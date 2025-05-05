/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { faqData } from '@/app/utils/data';
import React, { useEffect, useRef, useState } from 'react';

interface SidebarItemProps {
    title: string;
    onClick: () => void;
    isActive: boolean;
}

const SidebarItem = ({ title, onClick, isActive }: SidebarItemProps) => {
    return (
        <button
            style={{ borderRadius: '8px 0px 0px 8px' }}
            className={`w-full text-left py-[18px] px-7 text-lg font-bold mt-2 text-[#696A6E] hover:text-[#2353F5] transition ${isActive ? 'border-l-4 border-[#2353F5]' : ''
                }`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};


const FaqQuestions = () => {
    const [activeSection, setActiveSection] = useState<string>(faqData[0].title);
    const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
    const scrollToSection = (index: number, sectionTitle: string) => {
        const ref = faqRefs.current[index];
        if (ref) {
            ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionTitle);
        }
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionTitle = entry.target.querySelector('h2')?.textContent || '';
                        setActiveSection(sectionTitle);
                    }
                });
            },
            { threshold: 0.5 }
        );

        faqRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            faqRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="lg:px-[230px] px-5 flex mt-[14px] mb-[160px]">
            <aside
                className="w-[464px] h-full sticky top-0 overflow-y-scroll scrollbar-hide bg-white shrink-0"
                style={{ boxShadow: '0px 4px 50px 0px rgba(0, 0, 0, 0.09)' }}
            >
                {faqData.map((item, index) => (
                    <SidebarItem
                        key={index}
                        title={item.title}
                        onClick={() => scrollToSection(index, item.title)}
                        isActive={activeSection === item.title}
                    />
                ))}
            </aside>

            {/* Main Content */}
            <main className="flex-1 ps-[55px] h-auto space-y-16">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        ref={(el: HTMLDivElement | null) => {
                            faqRefs.current[index] = el;
                          }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold text-[#000D2B] mb-4">{item.title}</h2>
                        <p className='text-xl font-bold mb-4'>Answer:</p>
                        <p className="text-[#0B071A] text-base font-medium  mb-4">{item.answer}</p>
                        {item.code && (
                            <pre className="bg-[#F3F4F6] text-base font-mono px-2.5 py-4 rounded-md text-[#0B071A] mb-2">

                                {item.code ? <>
                                    <p><span className='text-[#C52127] '>const</span>
                                        <span className='text-[#2353F5] ms-1'>String</span>
                                        baseUrl = 'https://your-new-domain.com'</p>
                                </> : <></>}
                            </pre>
                        )}
                        {item.manual && (
                            <p className="text-[#0B071A] text-base font-medium">{item.manual}</p>
                        )}
                    </div>
                ))}
            </main>
        </div>
    );
};


export default FaqQuestions;
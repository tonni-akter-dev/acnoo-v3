import Image from 'next/image';
import React from 'react'
import envato from "/public/admindashboard/envato.png";
import { requirements, RequirementsListProps } from '@/app/utils/data';

interface ContentSectionProps {
    title: string;
    children: React.ReactNode;
}

const RequirementsList = ({ requirements }: RequirementsListProps) => (
    <ul className="list-disc list-inside mb-4">
        {requirements.map((req, index) => (
            <li className="text-base text-[#0B071A] font-medium mb-1" key={index}>
                {req}
            </li>
        ))}
    </ul>
);

const ContentSection = ({ title, children }: ContentSectionProps) => (
    <div className="mb-7">
        <h2 className="text-lg md:text-2xl font-bold text-[#000D2B] mb-3">{title}</h2>
        {children}
    </div>
);

const Modal = () => {
    return (
        <main className="flex-1 px-5 lg:ps-[55px] h-full space-y-4">
            <div>
                <ContentSection title="Getting Started">
                    <p className="font-medium text-lg text-black mb-2">
                        Acnroo Admin - Flutter Admin Panel
                    </p>
                    <p className="text-base text-[#0B071A] font-normal">
                        Uploaded Date: 24 September 2024
                    </p>
                    <p className="text-base text-[#0B071A] font-normal">
                        Project: Admin Panel with PWA
                    </p>
                    <p className="text-base text-[#0B071A] font-normal">
                        Author: Acnroo
                    </p>
                    <p className="text-base text-[#0B071A] font-normal">
                        Email: acnrooteam@acnroo.com
                    </p>
                </ContentSection>
            </div>
            <div>
                <ContentSection title="Requirements">
                    <p className="text-[#0B071A] text-base font-medium mb-4">
                        We are using Laravel 10. So these are the minimum server
                        requirements, the installer will check if your server meets these
                        or alternatively you can contact your hosting provider in order to
                        make sure your server meets them.
                    </p>
                    <RequirementsList requirements={requirements} />
                    <p className="text-[#0B071A] text-base font-medium">
                        For more information about deployment see the Laravel
                        documentation here
                        <a
                            href="https://laravel.com/docs/10.x/deployment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#7500FD]"
                        >
                            https://laravel.com/docs/10.x/deployment
                        </a>
                    </p>
                </ContentSection>
            </div>
            <div>
                <ContentSection title="Download Project from Envato">
                    <p className="text-[#0B071A] text-base font-medium mb-4">
                        After successfully purchasing POSpro, download the project from
                        <a
                            href="https://envato.com/download-page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#7500FD]"
                        >
                            Envato download page
                        </a>
                        .
                    </p>
                    <Image src={envato} alt="Envato Download Screenshot" />
                    <p className="text-[#0B071A] text-base font-medium mt-4">
                        Extract the downloaded file. You will have another zip file named
                        <strong>pos_pro.zip</strong> containing the main {`project's`} files
                        and a documentation folder. You are reading this documentation,
                        that means you already have them both.
                    </p>
                </ContentSection>
            </div>
        </main>
    )
}

export default Modal
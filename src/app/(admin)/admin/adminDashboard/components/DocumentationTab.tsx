/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import envato from "/public/admindashboard/envato.png";

interface SidebarItemProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const SidebarItem = ({ title, onClick, isActive }: SidebarItemProps) => {
  return (
    <button
      style={{ borderRadius: "8px 0px 0px 8px" }}
      className={`w-full text-left py-[18px] px-7 text-lg font-bold mt-2 text-[#696A6E] hover:text-[#2353F5] transition ${isActive ? "border-l-4 border-[#2353F5]" : ""
        }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

interface SectionHeaderProps {
  title: string;
  open: boolean;
  onClick: () => void;
}

const SectionHeader = ({ title, open, onClick }: SectionHeaderProps) => (
  <div
    className={`${open ? "bg-[#2353F514]" : "bg-white"
      } border-b border-gray-200 mt-2`}
  >
    <button
      className="w-full text-left py-4 px-5 flex items-center justify-between"
      onClick={onClick}
    >
      {title}
      {open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_3139_11948)">
            <path
              d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
              stroke="#0B071A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.6665 10H13.3332"
              stroke="#0B071A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3139_11948">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_3139_12054)">
            <path
              d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6.66699V13.3337"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.6665 10H13.3332"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3139_12054">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  </div>
);

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

const ContentSection = ({ title, children }: ContentSectionProps) => (
  <div className="mb-7">
    <h2 className="text-[36px] font-bold text-[#000D2B] mb-3">{title}</h2>
    {children}
  </div>
);

interface RequirementsListProps {
  requirements: string[];
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

const DocumentationTab = () => {
  const [setupOpen, setSetupOpen] = useState<boolean>(false);
  const [othersOpen, setOthersOpen] = useState<boolean>(false);
  const [installOpen, setInstallOpen] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("Getting Started");
  const gettingStartedRef = useRef<HTMLDivElement>(null);
  const requirementsRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, sectionName: string) => {
    if (ref.current) {
      ref.current!.scrollIntoView({ behavior: 'smooth' });
      console.log(`Scrolled to ${sectionName}`);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionTitle =
              entry.target.querySelector("h2")?.textContent || "";
            setActiveSection(sectionTitle);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (gettingStartedRef.current) observer.observe(gettingStartedRef.current);
    if (requirementsRef.current) observer.observe(requirementsRef.current);
    if (downloadRef.current) observer.observe(downloadRef.current);

    return () => {
      if (gettingStartedRef.current)
        observer.unobserve(gettingStartedRef.current);
      if (requirementsRef.current) observer.unobserve(requirementsRef.current);
      if (downloadRef.current) observer.unobserve(downloadRef.current);
    };
  }, []);

  const requirements: string[] = [
    "PHP >= 8.2",
    "Ctype PHP Extension",
    "cURL PHP Extension",
    "DOM PHP Extension",
    "Fileinfo PHP Extension",
    "Filter PHP Extension",
    "Hash PHP Extension",
    "Mbstring PHP Extension",
    "OpenSSL PHP Extension",
    "PCRE PHP Extension",
    "PDO PHP Extension",
    "Session PHP Extension",
    "Tokenizer PHP Extension",
    "XML PHP Extension",
  ];

  return (
    <div className="lg:px-[230px] px-5 flex mt-[14px] mb-[160px]">
      <aside
        className="w-[464px] h-full sticky top-0 overflow-y-scroll scrollbar-hide bg-white shrink-0"
        style={{ boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.09)" }}
      >
        <SectionHeader
          title="Installation & Upgrade"
          open={installOpen}
          onClick={() => setInstallOpen(!installOpen)}
        />
        {installOpen && (
          <>
            <SidebarItem
              title="Getting Started"
              onClick={() =>
                scrollToSection(gettingStartedRef as React.RefObject<HTMLDivElement>, "Getting Started")
              }
              isActive={activeSection === "Getting Started"}
            />
            <SidebarItem
              title="Dashboard"
              onClick={() =>
                scrollToSection(gettingStartedRef as React.RefObject<HTMLDivElement>, "Getting Started")
              }
              isActive={activeSection === "Dashboard"} // Adjust logic if Dashboard has its own section
            />
            <SidebarItem
              title="Requirements"
              onClick={() => scrollToSection(requirementsRef as React.RefObject<HTMLDivElement>, "Requirements")}
              isActive={activeSection === "Requirements"}
            />
            <SidebarItem
              title="Download From Envato"
              onClick={() =>
                scrollToSection(downloadRef as React.RefObject<HTMLDivElement>, "Download Project from Envato")
              }
              isActive={activeSection === "Download Project from Envato"}
            />
            <SidebarItem
              title="Creating Database"
              onClick={() => { }}
              isActive={false}
            />
            <SidebarItem
              title="Uploading Files"
              onClick={() => { }}
              isActive={false}
            />
          </>
        )}

        <SectionHeader
          title="Setup & Configuration"
          open={setupOpen}
          onClick={() => setSetupOpen(!setupOpen)}
        />
        {setupOpen && (
          <SidebarItem
            title="Manage Admin"
            onClick={() => alert("Add Manage Admin section")}
            isActive={false}
          />
        )}

        <SectionHeader
          title="Others"
          open={othersOpen}
          onClick={() => setOthersOpen(!othersOpen)}
        />
        {othersOpen && (
          <>
            <SidebarItem
              title="Other Item 1"
              onClick={() => alert("Other Item 1 clicked")}
              isActive={false}
            />
            <SidebarItem
              title="Other Item 2"
              onClick={() => alert("Other Item 2 clicked")}
              isActive={false}
            />
          </>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 ps-[55px] h-auto space-y-16">
        <div ref={gettingStartedRef}>
          <ContentSection title="Getting Started">
            <p className="font-medium text-xl text-black mb-2">
              Acnroo Admin - Flutter Admin Panel
            </p>
            <p className="text-base text-[#0B071A] font-medium">
              Uploaded Date: 24 September 2024
            </p>
            <p className="text-base text-[#0B071A] font-medium">
              Project: Admin Panel with PWA
            </p>
            <p className="text-base text-[#0B071A] font-medium">
              Author: Acnroo
            </p>
            <p className="text-base text-[#0B071A] font-medium">
              Email: acnrooteam@acnroo.com
            </p>
          </ContentSection>
        </div>

        <div ref={requirementsRef}>
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
              documentation here{" "}
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

        <div ref={downloadRef}>
          <ContentSection title="Download Project from Envato">
            <p className="text-[#0B071A] text-base font-medium mb-4">
              After successfully purchasing POSpro, download the project from{" "}
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
              Extract the downloaded file. You will have another zip file named{" "}
              <strong>pos_pro.zip</strong> containing the main {`project's`} files
              and a documentation folder. You are reading this documentation,
              that means you already have them both.
            </p>
          </ContentSection>
        </div>
      </main>
    </div>
  );
};

export default DocumentationTab;

import React from "react";
import member from "/public/about/member.png";
import Image from "next/image";
// src/data/teamData.js
export const teamMembers = [
  {
    id: 1,
    name: "Esther Howar",
    role: "Head of Design",
    image: member, // Use the same image path or different ones
  },
  {
    id: 2,
    name: "Esther Howar",
    role: "Head of Design",
    image: member,
  },
  {
    id: 3,
    name: "Esther Howar",
    role: "Head of Design",
    image: member,
  },
  {
    id: 4,
    name: "Esther Howar",
    role: "Head of Design",
    image: member,
  },
  {
    id: 5,
    name: "Esther Howar",
    role: "Head of Design",
    image: member,
  },
  {
    id: 6,
    name: "Esther Howar",
    role: "Head of Design",
    image: member,
  },
];

const OurMembers = () => {
  return (
    <div className="bg-primary  lg_screen_px lg:py-[120px] lg:px-[250px] md:py-[30px] md:px-5 py-6 px-4">
      <section className=" text-white text-start">
        <div className="flex justify-between our_member_wrapper">
          <div>
            <p className="text-[#F52366] text-base font-bold mb-1 flex gap-1 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M14.1667 6.66667H10.61L13.6905 4.8881C13.8818 4.77759 14.0214 4.59562 14.0786 4.3822C14.1358 4.16878 14.1059 3.94138 13.9955 3.75C13.885 3.55867 13.703 3.41906 13.4896 3.36187C13.2762 3.30467 13.0488 3.33457 12.8574 3.445L9.77667 5.22333L11.555 2.14286C11.6654 1.95148 11.6953 1.72408 11.6381 1.51066C11.5809 1.29724 11.4413 1.11527 11.25 1.00476C11.0586 0.89424 10.8312 0.864258 10.6177 0.921411C10.4042 0.978564 10.2222 1.11817 10.1117 1.30952L8.33333 4.39V0.833333C8.33333 0.61232 8.24554 0.400358 8.08926 0.244078C7.93298 0.0877974 7.72101 0 7.5 0C7.27899 0 7.06702 0.0877974 6.91074 0.244078C6.75446 0.400358 6.66667 0.61232 6.66667 0.833333V4.39L4.88833 1.30952C4.77782 1.11819 4.59585 0.978584 4.38243 0.921389C4.16901 0.864194 3.94162 0.894097 3.75024 1.00452C3.65545 1.05922 3.57236 1.13206 3.50572 1.21887C3.43908 1.30568 3.3902 1.40477 3.36185 1.51047C3.33351 1.61618 3.32626 1.72643 3.34053 1.83493C3.3548 1.94344 3.39029 2.04807 3.445 2.14286L5.2231 5.2231L2.14286 3.445C1.95148 3.33457 1.72408 3.30467 1.51066 3.36187C1.29724 3.41906 1.11527 3.55867 1.00476 3.75C0.894316 3.94135 0.864376 4.16873 0.921525 4.38214C0.978675 4.59556 1.11823 4.77755 1.30952 4.8881L4.39 6.66667H0.833333C0.61232 6.66667 0.400358 6.75446 0.244078 6.91074C0.0877974 7.06702 0 7.27899 0 7.5C0 7.72101 0.0877974 7.93298 0.244078 8.08926C0.400358 8.24554 0.61232 8.33333 0.833333 8.33333H4.39L1.30952 10.1119C1.11823 10.2225 0.978675 10.4044 0.921525 10.6179C0.864376 10.8313 0.894316 11.0587 1.00476 11.25C1.11527 11.4413 1.29724 11.5809 1.51066 11.6381C1.72408 11.6953 1.95148 11.6654 2.14286 11.555L5.2231 9.77691L3.445 12.8571C3.33457 13.0485 3.30467 13.2759 3.36187 13.4893C3.41906 13.7028 3.55867 13.8847 3.75 13.9952C3.94137 14.1058 4.1688 14.1357 4.38228 14.0786C4.59575 14.0214 4.77778 13.8818 4.88833 13.6905L6.66667 10.6102V14.1667C6.66667 14.3877 6.75446 14.5996 6.91074 14.7559C7.06702 14.9122 7.27899 15 7.5 15C7.72101 15 7.93298 14.9122 8.08926 14.7559C8.24554 14.5996 8.33333 14.3877 8.33333 14.1667V10.6102L10.1117 13.6905C10.2222 13.8818 10.4041 14.0214 10.6176 14.0786C10.831 14.1358 11.0584 14.1059 11.2498 13.9955C11.4411 13.885 11.5807 13.703 11.6379 13.4896C11.6951 13.2762 11.6652 13.0488 11.5548 12.8574L9.77667 9.77691L12.8571 11.555C13.0485 11.6654 13.2759 11.6953 13.4893 11.6381C13.7028 11.5809 13.8847 11.4413 13.9952 11.25C14.1057 11.0587 14.1356 10.8313 14.0785 10.6179C14.0213 10.4044 13.8818 10.2225 13.6905 10.1119L10.61 8.33333H14.1667C14.3877 8.33333 14.5996 8.24554 14.7559 8.08926C14.9122 7.93298 15 7.72101 15 7.5C15 7.27899 14.9122 7.06702 14.7559 6.91074C14.5996 6.75446 14.3877 6.66667 14.1667 6.66667Z"
                  fill="#F52366"
                />
              </svg>
              Creative Team Member
            </p>
            <h2 className="text-[30px] md:text-[35px] lg:text-[55px] font-bold mb-2.5 md:mb-5 lg:mb-10">OUR MEMBERS</h2>
          </div>
          <div className="lg:hidden md:flex our_member_btn1  hidden lg:mt-[60px] mt-6  justify-center">
          <button className="flex gap-2 items-center justify-center hover:bg-transparent border border-[#2353F5] bg-[#2353F5]  text-white text-base font-bold capitalize lg:py-[21px] px-6 py-[13px] lg:px-[36px] rounded-[10px] transition">
            Join Our Team Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.5874 7.25598L10.0899 2.75848C9.96869 2.64145 9.8064 2.57669 9.63794 2.57815C9.46947 2.57961 9.30833 2.64718 9.1892 2.76631C9.07008 2.88543 9.00251 3.04658 9.00104 3.21504C8.99958 3.3835 9.06434 3.5458 9.18138 3.66698L12.5821 7.06773H1.28312C1.11272 7.06773 0.949301 7.13542 0.828809 7.25591C0.708317 7.37641 0.640625 7.53983 0.640625 7.71023C0.640625 7.88063 0.708317 8.04405 0.828809 8.16455C0.949301 8.28504 1.11272 8.35273 1.28312 8.35273H12.5821L9.18138 11.7535C9.12001 11.8127 9.07106 11.8836 9.03739 11.962C9.00372 12.0404 8.98599 12.1247 8.98525 12.21C8.98451 12.2954 9.00077 12.38 9.03307 12.4589C9.06538 12.5379 9.11309 12.6096 9.17341 12.6699C9.23374 12.7303 9.30547 12.778 9.38444 12.8103C9.4634 12.8426 9.548 12.8588 9.63331 12.8581C9.71862 12.8574 9.80293 12.8396 9.88132 12.806C9.95971 12.7723 10.0306 12.7233 10.0899 12.662L14.5874 8.16448C14.7078 8.04399 14.7755 7.8806 14.7755 7.71023C14.7755 7.53986 14.7078 7.37647 14.5874 7.25598Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        </div>
        <div className="grid lg:grid-cols-3  products_wrapper sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-[18px] lg:gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group overflow-hidden"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />

              {/* Custom hover effect */}
              <div className="absolute inset-0 bottom-[-260px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                {/* Blurred rotated background */}
                <div className="absolute w-[364px] h-[233px] rotate-[16.5deg] rounded-full blur-[62.5px] bg-primary z-0" />

                {/* Text Content */}
                <div className="z-10 text-center">
                  <p className="text-sm font-semibold text-[#FFFFFFCF] uppercase mb-4">
                    {member.role}
                  </p>
                  <h3 className="text-2xl font-bold uppercase ">{member.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:mt-[60px] mt-6 lg:flex our_member_btn md:hidden flex justify-center">
          <button className="flex gap-2 items-center justify-center hover:bg-transparent border border-[#2353F5] bg-[#2353F5]  text-white text-base font-bold capitalize lg:py-[21px] px-6 py-[13px] lg:px-[36px] rounded-[10px] transition">
            Join Our Team Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.5874 7.25598L10.0899 2.75848C9.96869 2.64145 9.8064 2.57669 9.63794 2.57815C9.46947 2.57961 9.30833 2.64718 9.1892 2.76631C9.07008 2.88543 9.00251 3.04658 9.00104 3.21504C8.99958 3.3835 9.06434 3.5458 9.18138 3.66698L12.5821 7.06773H1.28312C1.11272 7.06773 0.949301 7.13542 0.828809 7.25591C0.708317 7.37641 0.640625 7.53983 0.640625 7.71023C0.640625 7.88063 0.708317 8.04405 0.828809 8.16455C0.949301 8.28504 1.11272 8.35273 1.28312 8.35273H12.5821L9.18138 11.7535C9.12001 11.8127 9.07106 11.8836 9.03739 11.962C9.00372 12.0404 8.98599 12.1247 8.98525 12.21C8.98451 12.2954 9.00077 12.38 9.03307 12.4589C9.06538 12.5379 9.11309 12.6096 9.17341 12.6699C9.23374 12.7303 9.30547 12.778 9.38444 12.8103C9.4634 12.8426 9.548 12.8588 9.63331 12.8581C9.71862 12.8574 9.80293 12.8396 9.88132 12.806C9.95971 12.7723 10.0306 12.7233 10.0899 12.662L14.5874 8.16448C14.7078 8.04399 14.7755 7.8806 14.7755 7.71023C14.7755 7.53986 14.7078 7.37647 14.5874 7.25598Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

      </section>
    </div>
  );
};

export default OurMembers;

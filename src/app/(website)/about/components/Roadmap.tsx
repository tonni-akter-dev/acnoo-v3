import React from "react";
import roadmap from "/public/about/roadmap.png";
import roadmaptab from "/public/about/roadmap-tab.png";
import Image from "next/image";
const timelineData = [
  {
    year: "2019",
    title: "Start Journey",
    desc: "Welcome to our portfolio website! We are printing company that offers a wide range rem ipsum dolor sit amet, consectetur",
    active: true,
  },
  {
    year: "2021",
    title: "Grow Next Level",
    desc: "Welcome to our portfolio website! We are printing company that offers a wide range rem ipsum dolor sit amet, consectetur",
    dot: true,
  },
  {
    year: "2023",
    title: "Highest Profit",
    desc: "Welcome to our portfolio website! We are printing company that offers a wide range rem ipsum dolor sit amet, consectetur",
  },
  {
    year: "2025",
    title: "New Roadmap",
    desc: "Welcome to our portfolio website! We are printing company that offers a wide range rem ipsum dolor sit amet, consectetur",
  },
];

const Roadmap = () => {
  return (
    <div className="lg:py-[120px]  lg_screen_px md:py-[30px] py-6 lg:px-[150px] md:px-5 px-0">
      <div className="grid grid-cols-12 justify-center">
        <div className="col-span-12 lg:col-span-4">
          <div className="flex lg:flex-col flex-row justify-between items-center lg:mb-0 md:mb-5  mb-6 ">
            <div className="lg:px-0 md:px-0 px-5">
              <p className="text-[#F52366] text-base font-bold flex gap-2 items-center">
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
                Roadmap about company
              </p>
              <h1 className="text-[30px] md:text-[35px] lg:text-[55px] lg:mb-[63px] text-[#0B071A] font-bold leading-10 md:leading-[45px] lg:leading-[63px] uppercase">
                Our Roadmap <br /> Journey we
              </h1>
            </div>
            <Image className="lg:flex hidden" src={roadmap} alt="" />
            <Image className="lg:hidden md:block hidden tab" src={roadmaptab} alt="" />
          </div>
        </div>
        <div className=" col-span-12 lg:col-span-8 flex justify-center">
          <div className="lg:px-4 w-full border-t border-t-[#212324]  lg:overflow-hidden md:overflow-hidden  overflow-scroll">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start  gap-6 border-b border-[#212324] py-[10px] lg:py-9 relative roadmap_list lg:w-full  md:w-[720px] w-[586px]"
              >
                <div className=" text-right relative">
                  <span
                    className={`text-xl px-4 lg:text-[32px] uppercase font-bold ${item.active ? "px-2 py-0.5 rounded-sm" : ""
                      }`}
                  >
                    {item.year}
                  </span>
                </div>
                <div className="">
                  <h3 className="w-[172px] text-xl  lg:text-[28px] font-bold leading-[32px]">
                    {item.title.split(" ").map((word, i) => (
                      <span key={i}>
                        {" "}
                        {word}
                      </span>
                    ))}
                  </h3>
                </div>
                <p className="text-[#8D8F96]  text-sm lg:text-base w-[320px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

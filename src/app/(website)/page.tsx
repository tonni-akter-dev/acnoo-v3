import Banner from "./home/components/Banner";
import BottomBanner from "./home/components/BottomBanner";
import Faq from "./home/components/Faq";
import FreeResource from "./home/components/FreeResource";
import GloballyGrowth from "./home/components/GloballyGrowth";
import HireUsForProjects from "./home/components/HireUsForProjects";
import IncreaseRevenue from "./home/components/IncreaseRevenue";
import OurProducts from "./home/components/OurProducts";
import Specialize from "./home/components/Specialize";
import WhatPeopleThink from "./home/components/WhatPeopleThink";

export default function Home() {
  return (
    <>
      <Banner />
      <OurProducts />
      <Specialize />
      <IncreaseRevenue />
      <FreeResource />
      <GloballyGrowth />
      <div
        style={{
          background: 'linear-gradient(0deg, rgba(240, 240, 252, 0.00) 0%, #F3F0FC 200%)', backgroundBlendMode: "normal",
        }}
      >
        <HireUsForProjects />
        <WhatPeopleThink />
        <Faq />
        <BottomBanner />
      </div>
    </>
  );
}

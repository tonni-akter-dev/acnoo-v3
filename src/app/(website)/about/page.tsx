import React from "react";
import AboutBanner from "./components/AboutBanner";
import getTogether from "/public/about/get-together.png";
import Image from "next/image";
import Innovative from "./components/Innovative";
import ServicesWeProvide from "./components/ServicesWeProvide";
import Work from "./components/Work";
import Brand from "./components/Brand";
import CompanyInside from "./components/CompanyInside";
import OurMembers from "./components/OurMembers";
import Roadmap from "./components/Roadmap";
import JoinTeam from "./components/JoinTeam";
import WorkTogether from "./components/WorkTogether";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <Image src={getTogether} alt="" />
      <Innovative />
      <ServicesWeProvide />
      <Work />
      <Brand />
      <CompanyInside />
      <OurMembers />
      <Roadmap />
      <JoinTeam />
      <WorkTogether />
    </div>
  );
};

export default About;

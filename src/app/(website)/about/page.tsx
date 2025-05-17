'use client'
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
import BottomBanner from "../home/components/BottomBanner";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image src={getTogether} alt="Get Together" className="rounded-lg" />
      </motion.div>
      

      <Innovative />
      <ServicesWeProvide />
      <Work />
      <Brand />
      <CompanyInside />
      <OurMembers />
      <Roadmap />
      <JoinTeam />
      <WorkTogether />
      <BottomBanner />
    </div>
  );
};

export default About;

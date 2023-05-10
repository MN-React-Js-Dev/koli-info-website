import Header from "@/commonComponent/Header";
import React, { Fragment } from "react";
import HireDevHeroSection from "@/PagesComponent/HireDeveloper/HeroSection";
import HireDevScreen from "@/PagesComponent/HireDeveloper/HireDevScreen";

const HireDeveloper = () => {
  return (
    <Fragment>
      <Header />
      <HireDevHeroSection />
      <HireDevScreen />
    </Fragment>
  );
};

export default HireDeveloper;

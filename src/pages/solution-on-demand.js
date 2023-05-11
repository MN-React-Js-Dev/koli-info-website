import React, { Fragment } from "react";
import Header from "@/commonComponent/Header";
import SolutionOnDemandHeroSection from "@/PagesComponent/SolutionOnDemand/HeroSection";
import SolutionOnDemandScreen from "@/PagesComponent/SolutionOnDemand/SolutionOnDemandScreen";

const SolutionOnDemand = () => {
  return (
    <Fragment>
      <Header />
      <SolutionOnDemandHeroSection />
      <SolutionOnDemandScreen />
    </Fragment>
  );
};

export default SolutionOnDemand;

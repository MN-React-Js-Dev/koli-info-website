import React, { Fragment } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import MobiAppDevHeroSection from "@/PagesComponent/MobiAppDevelopment/HeroSection";
import MobiAppDevScreen from "@/PagesComponent/MobiAppDevelopment/MobiAppDevScreen";

const MobiAppDevelopment = () => {
  return (
    <Fragment>
      <Header />
      <MobiAppDevHeroSection />
      <MobiAppDevScreen />
    </Fragment>
  );
};

export default MobiAppDevelopment;

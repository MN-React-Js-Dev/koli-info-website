import React, { Fragment } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import WhoWeAreHeroSection from "@/PagesComponent/WhoWeAre/HeroSection";
import WhoWeAreScreen from "@/PagesComponent/WhoWeAre/WhoWeAreScreen";

const WhoWeAre = () => {
  return (
    <Fragment>
      <Header />
      <WhoWeAreHeroSection />
      <WhoWeAreScreen />
    </Fragment>
  );
};

export default WhoWeAre;
  
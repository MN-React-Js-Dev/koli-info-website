import React, { Fragment } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import WebDevHeroSection from "@/PagesComponent/WebDevelopment/HeroSection";
import WebDevScreen from "@/PagesComponent/WebDevelopment/WebDevScreen";

const WebDevelopment = () => {
  return (
    <Fragment>
      <Header />
      <WebDevHeroSection />
      <WebDevScreen />
    </Fragment>
  );
};

export default WebDevelopment;

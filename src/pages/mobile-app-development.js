import React, { Fragment, useEffect, useState } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import MobiAppDevHeroSection from "@/PagesComponent/MobiAppDevelopment/HeroSection";
import MobiAppDevScreen from "@/PagesComponent/MobiAppDevelopment/MobiAppDevScreen";
import LoaderComponent from "@/commonComponent/loaderComponent";

const MobiAppDevelopment = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <MobiAppDevHeroSection />
      <MobiAppDevScreen />
    </Fragment>
  );
};

export default MobiAppDevelopment;

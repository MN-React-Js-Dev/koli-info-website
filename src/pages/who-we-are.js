import React, { Fragment, useEffect, useState } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import WhoWeAreHeroSection from "@/PagesComponent/WhoWeAre/HeroSection";
import WhoWeAreScreen from "@/PagesComponent/WhoWeAre/WhoWeAreScreen";
import LoaderComponent from "@/commonComponent/loaderComponent";

const WhoWeAre = () => {
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
      <WhoWeAreHeroSection />
      <WhoWeAreScreen />
    </Fragment>
  );
};

export default WhoWeAre;

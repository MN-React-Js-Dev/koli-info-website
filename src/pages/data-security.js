import React, { Fragment } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import DataSecureHeroSection from "@/PagesComponent/DataSecurity/HeroSection";
import Header from "@/commonComponent/Header";
import { useState, useEffect } from "react";
import LoaderComponent from "@/commonComponent/loaderComponent";

const DataSecurity = () => {
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
      <DataSecureHeroSection />
      <DataSecureScreen />
    </Fragment>
  );
};

export default DataSecurity;

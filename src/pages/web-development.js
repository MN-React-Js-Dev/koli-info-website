import React, { Fragment, useEffect,useState } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import WebDevHeroSection from "@/PagesComponent/WebDevelopment/HeroSection";
import WebDevScreen from "@/PagesComponent/WebDevelopment/WebDevScreen";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";

const WebDevelopment = () => {
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
      <WebDevHeroSection />
      <WebDevScreen />
      <Footer />
    </Fragment>
  );
};

export default WebDevelopment;

import React, { Fragment, useEffect, useState } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import CloudServiceHeroSection from "@/PagesComponent/CloudServices/HeroSection";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";
import CloudScreen from "@/PagesComponent/CloudServices/CloudServices";
import Cloudservices from "@/PagesComponent/CloudServices/Services";
import FaqAccordianCloud from "@/PagesComponent/CloudServices/FaqAccordian"

const CloudServices = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Cloud | KOLI Infotech Pvt. Ltd.</title>
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <CloudServiceHeroSection />
      <CloudScreen />
      <Cloudservices />
      <FaqAccordianCloud />
      <Footer />
    </Fragment>
  );
};

export default CloudServices;

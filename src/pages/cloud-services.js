import React, { Fragment, useEffect, useState } from "react";
import Header from "@/commonComponent/Header";
import CloudServiceHeroSection from "@/PagesComponent/CloudServices/HeroSection";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";
import CloudScreen from "@/PagesComponent/CloudServices/CloudServices";
import Cloudservices from "@/PagesComponent/CloudServices/Services";
import FaqAccordianCloud from "@/PagesComponent/CloudServices/FaqAccordian";
import AiandMlScreen from "@/PagesComponent/ArtificialIntelligenceMachinLearning/ArtificialIntelligenceMachinLearning";
import ClientWeServe from "@/commonComponent/ClientWeServe";

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
        <title>
          Cloud Development Solutions | Delivering Exceptional Results
        </title>
        <meta
          name="description"
          content="Elevate business with KOLI Infotech's cloud development.From concept to implementation,we deliver innovative,high-quality results that bring your ideas to life."
        ></meta>
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <CloudServiceHeroSection />
      <ClientWeServe/>
      {/* <CloudScreen /> */}
      <Cloudservices />
      <FaqAccordianCloud />
      <Footer />
    </Fragment>
  );
};

export default CloudServices;

import React, { Fragment, useEffect, useState } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import MobiAppDevHeroSection from "@/PagesComponent/MobiAppDevelopment/HeroSection";
import MobiAppDevScreen from "@/PagesComponent/MobiAppDevelopment/MobiAppDevScreen";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";

const MobiAppDevelopment = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Innovative Mobile App Development | Turn Ideas into Reality!</title>
        <meta
          name="description"
          content="Transform your ideas into reality with KOLI Infotech's expert mobile app development. Innovative design and development services to bring your vision to life!"
        /> 
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <MobiAppDevHeroSection />
      <MobiAppDevScreen />
      <Footer />
    </Fragment>
  );
};

export default MobiAppDevelopment;

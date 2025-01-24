import React, { Fragment } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import DataSecureHeroSection from "@/PagesComponent/DataSecurity/HeroSection";
import Header from "@/commonComponent/Header";
import { useState, useEffect } from "react";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";
import ClientWeServe from "@/commonComponent/ClientWeServe";

const DataSecurity = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Powerful Data Security | Your Trusted Solution</title>
        <meta
          name="description"
          content="Discover powerful data security solutions tailored for your design and development needs. Your projects deserve the Best Started for Today!"
        />
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <DataSecureHeroSection />
      <ClientWeServe/>
      <DataSecureScreen />
      <Footer />
    </Fragment>
  );
};

export default DataSecurity;

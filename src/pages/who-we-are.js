import React, { Fragment, useEffect, useState } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import WhoWeAreHeroSection from "@/PagesComponent/WhoWeAre/HeroSection";
import WhoWeAreScreen from "@/PagesComponent/WhoWeAre/WhoWeAreScreen";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";

const WhoWeAre = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Who We Are | KOLI Infotech Pvt. Ltd.</title>
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <WhoWeAreHeroSection />
      <WhoWeAreScreen />
      <Footer />
    </Fragment>
  );
};

export default WhoWeAre;

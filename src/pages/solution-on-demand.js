import React, { Fragment, useEffect, useState } from "react";
import Header from "@/commonComponent/Header";
import SolutionOnDemandHeroSection from "@/PagesComponent/SolutionOnDemand/HeroSection";
import SolutionOnDemandScreen from "@/PagesComponent/SolutionOnDemand/SolutionOnDemandScreen";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";

const SolutionOnDemand = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Solution On Demand | KOLI Infotech Pvt. Ltd.</title>
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <SolutionOnDemandHeroSection />
      <SolutionOnDemandScreen />
      <Footer />
    </Fragment>
  );
};

export default SolutionOnDemand;

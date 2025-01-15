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
        <title>On-Demand App Services | Transform Ideas with KOLI Infotech!</title>
        <meta
          name="description"
          content="Transform your ideas with our on-demand app development services. Get tailored solutions to meet your unique needs. Start your custom app project today!"
        />
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

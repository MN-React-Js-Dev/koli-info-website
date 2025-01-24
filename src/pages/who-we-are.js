import React, { Fragment, useEffect, useState } from "react";
import Header from "@/commonComponent/Header";
import WhoWeAreHeroSection from "@/PagesComponent/WhoWeAre/HeroSection";
import WhoWeAreScreen from "@/PagesComponent/WhoWeAre/WhoWeAreScreen";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";
import ClientWeServe from "@/commonComponent/ClientWeServe";

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
        <title>
          KOLI Infotech |Leading Software Development & Tech Solutions
        </title>
        <meta
          name="description"
          content=" Discover unique design solutions that energize your projects from initial sketches to stunning constructions. Start your journey with us today!"
        />
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <WhoWeAreHeroSection />
      <ClientWeServe />
      <WhoWeAreScreen />
      <Footer />
    </Fragment>
  );
};

export default WhoWeAre;

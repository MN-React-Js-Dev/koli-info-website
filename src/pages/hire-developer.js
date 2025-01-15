import Header from "@/commonComponent/Header";
import React, { Fragment, useEffect, useState } from "react";
import HireDevHeroSection from "@/PagesComponent/HireDeveloper/HeroSection";
import HireDevScreen from "@/PagesComponent/HireDeveloper/HireDevScreen";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";

const HireDeveloper = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title> Hire Dedicated Developers | Guaranteed Great Design Services</title>
        <meta
          name="description"
          content="Hire dedicated developers for exceptional design and development services. From sketches to final construction, we deliver quality with every project."
        />
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <HireDevHeroSection />
      <HireDevScreen />
      <Footer />
    </Fragment>
  );
};

export default HireDeveloper;

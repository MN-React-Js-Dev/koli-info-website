import React, { Fragment, useEffect, useState } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import CloudServiceHeroSection from "@/PagesComponent/CloudServices/HeroSection";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";
import AiMlHeroSection from "@/PagesComponent/ArtificialIntelligenceMachinLearning/HeroSection";
import AiandMlScreen from "@/PagesComponent/ArtificialIntelligenceMachinLearning/ArtificialIntelligenceMachinLearning";
import AiMlServices from "@/PagesComponent/ArtificialIntelligenceMachinLearning/Services";

const AimlServices = () => {
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
          KOLI Infotech Innovations | AI & Machine Learning Solutions!
        </title>
        <meta
          name="description"
          content="Transform your business with KOLI Infotech’s innovative AI, ML, and IoT solutions. Drive growth, efficiency, and success with our tailored services.Start today!"
        ></meta>
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <AiMlHeroSection />
      <AiandMlScreen />
      <AiMlServices />
      <Footer />
    </Fragment>
  );
};

export default AimlServices;

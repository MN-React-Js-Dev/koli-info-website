import React, { Fragment, useEffect, useState } from "react";
import Header from "@/commonComponent/Header";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Head from "next/head";
import Footer from "@/commonComponent/Footer";
import QaTestingHeroSection from "@/PagesComponent/QATesting/HeroSection";
import QaAndTestingServices from "@/PagesComponent/QATesting/Services";
import ClientWeServe from "@/commonComponent/ClientWeServe";

const QaTestingServices = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>QA Testing Services | Reliable Solutions for Digital Success</title>
        <meta
          name="description"
          content="Ensure precision and quality with our rigorous QA testing services.Transform your ideas into exceptional digital solutions with reliable,future-ready expertise."
        />
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <QaTestingHeroSection />
      {/* <QaandTestingScreen /> */}
      <ClientWeServe/>
      <QaAndTestingServices />
      <Footer />
    </Fragment>
  );
};

export default QaTestingServices;

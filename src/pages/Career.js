import CareerPageHeroSection from "@/PagesComponent/CareerPage/HeroSection";
import CareerScreen from "@/PagesComponent/CareerPage/CareerScreen";
import Header from "@/commonComponent/Header";
import React, { Fragment, useState, useEffect } from "react";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";
import ClientWeServe from "@/commonComponent/ClientWeServe";

const CareerPage = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Careers at KOLI Infotech| Build Your Future in Innovacation!</title>
        <meta
          name="description"
          content="Discover exciting career opportunities at KOLI Infotech. Join our dynamic team and shape to the future of technology with software and IT solutions.Apply today!"
        />
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <CareerPageHeroSection />
      <ClientWeServe/>
      <CareerScreen />
      <Footer />
    </Fragment>
  );
};

export default CareerPage;

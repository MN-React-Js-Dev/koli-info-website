import CareerPageHeroSection from "@/PagesComponent/CareerPage/HeroSection";
import CareerScreen from "@/PagesComponent/CareerPage/CareerScreen";
import Header from "@/commonComponent/Header";
import React, { Fragment, useState, useEffect } from "react";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import HeroSection from '@/PagesComponent/OurTeam/HeroSection';
import OurTeamScreen from "@/PagesComponent/OurTeam/OurTeamScreen";
import Head from "next/head";

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
        <title>Our Team | KOLI Infotech Pvt. Ltd.</title>
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <HeroSection />
      <OurTeamScreen />
      <Footer />
    </Fragment>
  );
};

export default CareerPage;

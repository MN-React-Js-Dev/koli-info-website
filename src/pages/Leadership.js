import LeadershipHeroSection from "@/PagesComponent/Leadership/HeroSection";
import LeadershipTeam from "@/PagesComponent/Leadership/LeadershipTeam";
import HeroSection from "@/PagesComponent/Testimonial/TestiHeroSection";
import Footer from "@/commonComponent/Footer";
import Header from "@/commonComponent/Header";
import LoaderComponent from "@/commonComponent/loaderComponent";
import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";

const Leadership = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Leadership | KOLI Infotech Pvt. Ltd.</title>
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <LeadershipHeroSection />
      <LeadershipTeam />
      <Footer />
    </Fragment>
  );
};

export default Leadership;

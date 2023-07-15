import React, { Fragment, useEffect, useState } from "react";
import DiscussIdeaHeroSection from "@/PagesComponent/DiscussYourIdea/HeroSection";
import DiscussIdeaScreen from "@/PagesComponent/DiscussYourIdea/DiscussIdeaScreen";
import Header from "@/commonComponent/Header";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";


const DiscussYourIdea = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Discuss Your Idea| KOLI Infotech Pvt. Ltd.</title>
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <DiscussIdeaHeroSection />
      <DiscussIdeaScreen />
      <Footer />
    </Fragment>
  );
};

export default DiscussYourIdea;

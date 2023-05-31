import CareerPageHeroSection from "@/PagesComponent/CareerPage/HeroSection";
import CareerScreen from "@/PagesComponent/CareerPage/CareerScreen";
import Header from "@/commonComponent/Header";
import React, { Fragment, useState, useEffect } from "react";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";

const CareerPage = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    1;
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  
  return (
    <Fragment>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <CareerPageHeroSection />
      <CareerScreen />
      <Footer />
    </Fragment>
  );
};

export default CareerPage;

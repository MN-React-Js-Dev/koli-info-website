import Header from "@/commonComponent/Header";
import React, { Fragment, useEffect, useState } from "react";
import HireDevHeroSection from "@/PagesComponent/HireDeveloper/HeroSection";
import HireDevScreen from "@/PagesComponent/HireDeveloper/HireDevScreen";
import LoaderComponent from "@/commonComponent/loaderComponent";

const HireDeveloper = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <HireDevHeroSection />
      <HireDevScreen />
    </Fragment>
  );
};

export default HireDeveloper;

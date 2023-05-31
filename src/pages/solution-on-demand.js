import React, { Fragment, useEffect, useState } from "react";
import Header from "@/commonComponent/Header";
import SolutionOnDemandHeroSection from "@/PagesComponent/SolutionOnDemand/HeroSection";
import SolutionOnDemandScreen from "@/PagesComponent/SolutionOnDemand/SolutionOnDemandScreen";
import LoaderComponent from "@/commonComponent/loaderComponent";

const SolutionOnDemand = () => {
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
      <SolutionOnDemandHeroSection />
      <SolutionOnDemandScreen />
    </Fragment>
  );
};

export default SolutionOnDemand;

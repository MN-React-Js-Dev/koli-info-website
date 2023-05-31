import React, { Fragment,useEffect,useState } from "react";
import DiscussIdeaHeroSection from "@/PagesComponent/DiscussYourIdea/HeroSection";
import DiscussIdeaScreen from "@/PagesComponent/DiscussYourIdea/DiscussIdeaScreen";
import Header from "@/commonComponent/Header";
import LoaderComponent from "@/commonComponent/loaderComponent";


const DiscussYourIdea = () => {
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
      <DiscussIdeaHeroSection />
      <DiscussIdeaScreen />
    </Fragment>
  );
};

export default DiscussYourIdea;

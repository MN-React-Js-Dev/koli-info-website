import React, { Fragment, useEffect, useState } from "react";
import TestiHeroSection from "@/PagesComponent/Testimonial/TestiHeroSection";
import HeroSection from "@/PagesComponent/Testimonial/TestiHeroSection";
import TestimonialOfOurClient from "@/PagesComponent/Testimonial/TestimonialOfOurClient";
import Header from "@/commonComponent/Header";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";

const TestimonialPage = () => {
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
      <TestiHeroSection />
      <TestimonialOfOurClient />
      <Footer />
    </Fragment>
  );
};
export default TestimonialPage;

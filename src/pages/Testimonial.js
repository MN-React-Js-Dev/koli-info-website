import React, { Fragment } from "react";
import TestiHeroSection from "@/PagesComponent/Testimonial/TestiHeroSection";
import HeroSection from "@/PagesComponent/Testimonial/TestiHeroSection";
import TestimonialOfOurClient from "@/PagesComponent/Testimonial/TestimonialOfOurClient";
import Header from "@/commonComponent/Header";

const TestimonialPage = () => {
  return (
    <Fragment>
      <Header />
      <TestiHeroSection />
      <TestimonialOfOurClient />
    </Fragment>
  );
};
export default TestimonialPage;

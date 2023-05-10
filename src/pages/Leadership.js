import LeadershipHeroSection from "@/PagesComponent/Leadership/HeroSection";
import LeadershipTeam from "@/PagesComponent/Leadership/LeadershipTeam";
import HeroSection from "@/PagesComponent/Testimonial/TestiHeroSection";
import Header from "@/commonComponent/Header";

import React, { Fragment } from "react";

const Leadership = () => {
  return (
    <Fragment>
      <Header />
      <LeadershipHeroSection />
      <LeadershipTeam />
    </Fragment>
  );
};

export default Leadership;

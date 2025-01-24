import React, { Fragment, useEffect, useState } from "react";
import TestiHeroSection from "@/PagesComponent/Testimonial/TestiHeroSection";
import TestimonialOfOurClient from "@/PagesComponent/Testimonial/TestimonialOfOurClient";
import Header from "@/commonComponent/Header";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";
import ClientWeServe from "@/commonComponent/ClientWeServe";

const TestimonialPage = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>KOLI Infotech|Trusted Client Testimonials Proven IT Services</title>
        <meta
          name="description"
          content="See why clients trust KOLI Infotech for IT services. Read testimonials and success stories showcasing our expertise, reliable IT solutions,customer satisfaction"
        />
      </Head>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <TestiHeroSection />
      <ClientWeServe/>
      <TestimonialOfOurClient />
      <Footer />
    </Fragment>
  );
};
export default TestimonialPage;

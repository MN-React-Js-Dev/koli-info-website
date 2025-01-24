import React, { Fragment, useEffect, useState } from "react";
import HeroSection from "@/PagesComponent/HomePage/HeroSection";
import OurPortfolio from "@/PagesComponent/HomePage/OurPortfolio";
import OurProcessSection from "@/PagesComponent/HomePage/OurProcessSection";
import OurServices from "@/PagesComponent/HomePage/OurServices";
import OurTopBlogs from "@/PagesComponent/HomePage/OurTopBlogs";
import ScheduleAnAppointment from "@/PagesComponent/HomePage/ScheduleAnAppointment";
import WhyChooseKOLIinfotech from "@/PagesComponent/HomePage/WhyChooseKOLIinfotech";
import Footer from "@/commonComponent/Footer";
import Header from "@/commonComponent/Header";
import OurValuableClients from "@/PagesComponent/HomePage/OurValuableClients";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Head from "next/head";
import ClientWeServe from "@/commonComponent/ClientWeServe";
import Accomplishments from "@/PagesComponent/Accomplishment/Accomplishments";
import Technologywework from "@/commonComponent/Technologywework";

const HomePage = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <Fragment>
      <div style={{ width: "100%", marginRight: ".5 rem" }}>
        <Head>
          <title>
            Top IT Solutions Provider in Surat | KOLI Infotech Pvt. Ltd.
          </title>
          <meta
            name="description"
            content="Grow with Surat's top IT company. KOLI Infotech offers innovative software, web development, and digital marketing, solutions to drive your business Start Now!."
          ></meta>
        </Head>
        {loader === true ? <LoaderComponent /> : console.log("null")}
        <Header />
        <HeroSection />
        <OurServices />
        <WhyChooseKOLIinfotech />
        <Technologywework />
        <OurProcessSection />
        <OurPortfolio />
        <ClientWeServe />
        <Accomplishments />
        <OurValuableClients />
        <OurTopBlogs />
        <ScheduleAnAppointment />
        <Footer />
      </div>
    </Fragment>
  );
};

export default HomePage;

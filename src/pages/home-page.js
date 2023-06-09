import React, { Fragment,useEffect,useState } from "react";
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


const HomePage = () => {
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
      <HeroSection />
      <OurProcessSection />
      <OurServices />
      <OurPortfolio />
      <WhyChooseKOLIinfotech />
      <OurValuableClients />
      <OurTopBlogs />
      <ScheduleAnAppointment />
      <Footer />
    </Fragment>
  );
};

export default HomePage;

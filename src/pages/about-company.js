import Header from "@/commonComponent/Header";
import React, { Fragment,useState,useEffect } from "react";
import CustomerCImage from "../assets/images/cc.png";
import Image from "next/image";
import { OUR_MISSION_TEXT, OUR_VISSON_TEXT } from "../commonComponent/commanText";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "@/commonComponent/Footer";

const AboutCompany = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);
  
  return (
    <Fragment>
      {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <section className="portfolio-section" style={{ background: "#E3E3FF" }}>
        <div className="container">
          <div
            className="row"
            style={{ alignItems: "center" }}
            data-aos="fade-up"
          >
            <div className="col-lg-6 mt-5">
              <h1 className="hero-sec-header">About Company</h1>
              <p className="para-for-hero">
                We are a company that offers design and develop services for you
                from initial sketches to the final construction.
              </p>
            </div>
            <div className="col-lg-6 ">
              <Image
                src={CustomerCImage}
                alt="Image not found"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="our-mission mt-5 mb-5">
        <div className="container" data-aos="fade-up">
          <h1 className="comman-heading">Our Mission</h1>
          <div className="hr-cst mb-3" />
          <p>{OUR_MISSION_TEXT}</p>
        </div>
      </section>
      <section className="our-mission mt-5 mb-5">
        <div className="container" data-aos="fade-up">
          <h1 className="comman-heading">Our Vission</h1>
          <div className="hr-cst mb-3" />
          <p>{OUR_VISSON_TEXT}</p>
        </div>
      </section>

      <section className="qualities-we-take">
        <div className="container" data-aos="fade-down">
          <h1 className="comman-heading">Qualities we take pride in</h1>
          <div className="hr-cst mb-3" />
          <div className="row mb-5">
            <div className="col-md-1 col-3 pt-4">
              <span className="number-class"> 01</span>
            </div>
            <div className="col-md-11 col-9 cst-boder-para p-3">
              <p>
                A team with years of development, design and marketing
                experience who understand the complexity and needs of your
                business.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-1 col-3 pt-4">
              <span className="number-class"> 02</span>
            </div>
            <div className="col-md-11 col-9 cst-boder-para p-3">
              <p>
                Our focus is on working closely with customers like you to fully
                comprehend your needs and build a solution tailormade for you.
                Moreover, we have integrated modern technologies to ensure you
                get best results for your business.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-1 col-3 pt-4">
              <span className="number-class"> 03</span>
            </div>
            <div className="col-md-11 col-9 cst-boder-para p-3">
              <p>
                We use cutting edge technology, flexibility and scalabilty to
                help meet your business needs, optimizing delivery time and
                minimizing cost.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-1 col-3 pt-4">
              <span className="number-class"> 04</span>
            </div>
            <div className="col-md-11 col-9 cst-boder-para p-3">
              <p>
                We have solved real life business problems just like yours and
                have therefore the ability to put ourselves in your shoes! We
                believe that our clients and our teammates are all partners in
                our successes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </Fragment>
  );
};

export default AboutCompany;

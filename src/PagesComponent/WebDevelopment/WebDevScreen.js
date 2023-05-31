import React, { Fragment,useEffect } from "react";
import Image from "next/image";
import webDevimg2 from "../../assets/images/webDevimg-2.png";
import smartphone from "../../assets/images/smartphone.png";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import Aos from "aos";
import "aos/dist/aos.css";

const WebDevScreen = () => {
  const data = [
    {
      service: "Custom Web App Development",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "E-commerce Solutions",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Technology Consulting",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Web Portal Development",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Custom CMS Web Development",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Cross-Platform Apps",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
  ];

  const industryWeServe = [
    {
      industry: "Healthcare",
    },
    {
      industry: "Retail & eCommerce",
    },
    {
      industry: "Banking & finance",
    },
    {
      industry: "Entertainment",
    },
    {
      industry: "Education & e-learning",
    },
    {
      industry: "Real estate",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="row mt-5" style={{ alignItems: "center" }} data-aos="zoom-out">
            <div className="col-lg-6 ">
              <Image src={webDevimg2} alt='Image not found' className="img-fluid testi-image" />
            </div>
            <div className="col-lg-6 mt-5">
              <h1 className="comman-heading">
                Top Web Application Development Agency
              </h1>
              <div className="cst-hr-for-process text-start mb-3" />
              <p className="para-for-hero">{COMMAN_TEXT}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 mt-5 comman-heading">
            Custom Mobile Application Development Company
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row" data-aos="fade-up">
            {data.map(({ service, detail }, index) => (
              <>
                <div className="col-sm-4 mb-4" key={index}>
                  <div className="p-5 WebDev-dashed-border">
                    <div className="text-center award-head-img award-head-img">
                      <h2>{service}</h2>
                      <Image
                        src={smartphone}
                        alt='Image not found'
                        className="mb-4 mt-4 img-fluid "
                      />
                    </div>
                    <p>{detail}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div
          className="container mt-5"
          style={{
            background: "#3F689F",
            color: "#fff",
            borderRadius: "20px",
          }}
          data-aos="fade-up"
        >
          <div className="row  text-center indstry-serve p-5 pt-5 pb-5" >
            <div className="col-lg-6">
              <h2>Looking For a Web </h2>
              <h2>Developer for Hire?</h2>
            </div>
            <div className="col-lg-6  hire-btn">
              <button className="fw-bold p-3 text-white btn btn">
                Hire Web Developers Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 mt-5 comman-heading">
            Industries We Serve
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row  text-center indstry-serve" data-aos="fade-down">
            {industryWeServe.map((item, index) => (
              <>
                <div className="col-sm-4 mb-5" key={index}>
                  <div className="container">
                    <div
                      class="card p-4"
                      style={{
                        background: "#C7C7FF",
                      }}
                    >
                      {item.industry}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WebDevScreen;

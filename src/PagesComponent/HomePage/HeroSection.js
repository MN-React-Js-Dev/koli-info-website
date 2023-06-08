import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
// import web_d_gif from "../../assets/images/web_d_gif.gif";
import { KOLI_INFOTECH_HOME_PAGE_PARAGRAPH } from "@/commonComponent/commanText/";

const HeroSection = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="hero-section hero-image mb-2">
        <div className="container">
          <div className="row" data-aos="zoom-out-down">
            <div className="col-lg-6 mt-5">
              <h1 className="hero-sec-header commanFont">
                Grow Your Business With The Finest IT Company
              </h1>
              <p className="para-for-hero subText commanFont">
                {KOLI_INFOTECH_HOME_PAGE_PARAGRAPH}
              </p>
              <a class="btn contact-us-btn" type="submit">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;

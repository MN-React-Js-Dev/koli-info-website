import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
// import homeHeroImage from '../../assets/images/web_d_gif.gif'
import homeHeroImage from "../../assets/images/web-gif.gif";
import { KOLI_INFOTECH_HOME_PAGE_PARAGRAPH } from "@/commonComponent/commanText/";

const HeroSection = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="hero-section mb-2">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 mt-5 text-start" data-aos="fade-down">
              <h1 className="home-hero-sec-header commanFont">Grow Your Business With The Finest IT Company</h1>
              <p className="para-for-hero subText commanFont">
                {KOLI_INFOTECH_HOME_PAGE_PARAGRAPH}
              </p>
              <a href="contact-us" class="btn contact-us-btn" type="submit">
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 text-center"  data-aos="fade-down home-hero-img">
              <Image src={homeHeroImage} alt='Image not found' className="img-fluid " />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;

import React, { Fragment, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import maingif1 from "../../assets/images/maingif1.gif";
import maingif2 from "../../assets/images/maingif2.gif";
import maingif3 from "../../assets/images/maingif3.gif";
import maingif4 from "../../assets/images/maingif4.gif";
import maingif5 from "../../assets/images/maingif5.gif";
import { KOLI_INFOTECH_HOME_PAGE_PARAGRAPH } from "@/commonComponent/commanText/";

const HeroSection = () => {
  const gifs = [maingif1, maingif2, maingif3, maingif4, maingif5];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload GIFs to prevent jerking
  useEffect(() => {
    gifs.forEach((gif) => {
      const img = new window.Image(); 
      img.src = gif; 
    });
  }, [gifs]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === gifs.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000); 

    return () => clearInterval(interval);
  }, [gifs]);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="hero-section mt-5 mb-5">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div
              className="col-lg-6 mt-5 text-start"
              data-aos="fade-down"
              style={{ bottom: 15 }}
            >
              <h1 className="home-hero-sec-header commanFont">
                Grow Your Business With The Finest IT Company
              </h1>
              <p className="para-for-hero subText commanFont">
                {KOLI_INFOTECH_HOME_PAGE_PARAGRAPH}
              </p>
              <a href="contact-us" className="btn contact-us-btn" type="submit">
                Contact Us
              </a>
            </div>
            <div
              className="col-lg-6 text-center"
              data-aos="fade-down home-hero-img"
            >
              <div className="custom-carousel d-flex justify-content-center">
                <Image
                  src={gifs[currentSlide]}
                  alt={`GIF ${currentSlide + 1}`}
                  className="img-fluid"
                  style={{ marginTop: 72, maxWidth: "100%", height: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;

import React, { Fragment,useEffect } from "react";
import webDevimg1 from "../../assets/images/webDevimg-1.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const WebDevHeroSection = () => {

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section
        className="testi-hero-image "
        style={{ backgroundColor: "#E3E3FF" }}
      >
        <div className="container text-center">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 mt-5 text-start" data-aos="fade-up">
              <h1 className="hero-sec-header">
                Custom Web Application Development Company
              </h1>
              <p className="para-for-hero">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
            <div className="col-lg-6 " data-aos="fade-up">
              <Image src={webDevimg1} alt='Image not found' className="img-fluid testi-image" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WebDevHeroSection;

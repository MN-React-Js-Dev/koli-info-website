import React, { Fragment } from "react";
import DataSecure1 from "../../assets/images/DataSecure-1.png";
import webDevimg1 from "../../assets/images/webDevimg-1.png";
import MobileHero from "../../assets/images/Mobile-hero.png";
import Image from "next/image";

const WebDevHeroSection = () => {
  return (
    <Fragment>
      <section
        className="testi-hero-image "
        style={{ backgroundColor: "#E3E3FF" }}
      >
        <div className="container text-center">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 mt-5 text-start">
              <h1 className="hero-sec-header">
                Custom Web Application Development Company
              </h1>
              <p className="para-for-hero">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
            <div className="col-lg-6 ">
              <Image src={webDevimg1} alt='Image not found' className="img-fluid testi-image" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WebDevHeroSection;

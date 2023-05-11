import React, { Fragment } from "react";
import DataSecure1 from "../../assets/images/DataSecure-1.png";
import webDevimg1 from "../../assets/images/webDevimg-1.png";
import onDmndHeroImg from "../../assets/images/onDmndHeroImg.png";
import Image from "next/image";

const SolutionOnDemandHeroSection = () => {
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
                On-demand App Development Company
              </h1>
              <p className="para-for-hero">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
              <a class="btn onDemndbtn m-4 p-3" type="submit">
                Click Here to Get Your Free Quote
              </a>
            </div>
            <div className="col-lg-6 ">
              <Image src={onDmndHeroImg} alt='Image not found' className="img-fluid testi-image" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SolutionOnDemandHeroSection;

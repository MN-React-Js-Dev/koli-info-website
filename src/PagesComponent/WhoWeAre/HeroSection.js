import React, { Fragment } from "react";
import DataSecure1 from "../../assets/images/DataSecure-1.png";
import LeadershipImage from "../../assets/images/leadership-image.png";
import Image from "next/image";

const WhoWeAreHeroSection = () => {
  return (
    <Fragment>
      <section
        className="testi-hero-image "
        style={{ backgroundColor: "#E3E3FF" }}
      >
        <div className="container text-center">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 mt-5">
              <h1 className="hero-sec-header">Who We Are</h1>
              <p className="para-for-hero">
                We are a company that offers design and develop services for you
                from initial sketches to the final construction.
              </p>
            </div>
            <div className="col-lg-6 ">
              <Image src={LeadershipImage} alt='Image not found' className="img-fluid testi-image" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WhoWeAreHeroSection;

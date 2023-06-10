import React, { Fragment, useEffect } from "react";
import ourteam1 from "../../assets/images/ourteam1.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const CareerPageHeroSection = () => {
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
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 mt-5 text-start" data-aos="zoom-out-right">
              <h1 className="hero-sec-header">OUR TEAM</h1>
              <p className="para-for-hero">
                From sketches to construction, our team brings your vision to
                life with design and development expertise.
              </p>
            </div>
            <div className="col-lg-6 " data-aos="zoom-out-left">
              <Image
                src={ourteam1}
                alt="Image not found"
                className="img-fluid testi-image"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CareerPageHeroSection;

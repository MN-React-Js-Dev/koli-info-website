import React, { Fragment, useEffect } from "react";
import LeadershipImage from "../../assets/images/leadership-image.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const WhoWeAreHeroSection = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 2000);
  }, []);

  return (
    <Fragment>
      <section
        className="testi-hero-image "
        style={{ backgroundColor: "#E3E3FF" }}
      >
        <div className="container text-center">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 mt-5" data-aos="fade-right">
              <h1 className="hero-sec-header">Who We Are</h1>
              <p className="para-for-hero">
                We are a company that offers design and develop services for you
                from initial sketches to the final construction.
              </p>
            </div>
            <div className="col-lg-6 " data-aos="fade-left">
              <Image
                src={LeadershipImage}
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

export default WhoWeAreHeroSection;

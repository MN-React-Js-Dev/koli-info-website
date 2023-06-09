import React, { Fragment,useEffect } from "react";
// import "@/styles/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1000);
  }, []);

  return (
    <Fragment>
      <section className="hero-section hero-image mb-5">
        <div className="container">
          <div className="row" data-aos="zoom-out-down">
            <div className="col-lg-6 mt-5">
              <h1 className="hero-sec-header commanFont heroSectionHeader">
                Ideas Into Reality
              </h1>
              <p className="para-for-hero subText commanFont">
                We are a company that offers design and develop services for you
                from initial sketches to the final construction.
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

import React, { Fragment, useEffect } from "react";
import ContactUs from "../../assets/images/ContactUs.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactUsHeroSection = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1200);
  }, []);

  return (
    <Fragment>
      <section
        className="testi-hero-image text-center"
        style={{ backgroundColor: "#E3E3FF" }}
      >
        <div className="container">
          <div className="row" style={{ alignItems: "center" }} data-aos="zoom-out">
            <div className="col-lg-6 text-start">
              <h1 className="hero-sec-header">Contact</h1>
              <p className="para-for-hero">
                We are a company that offers design and develop services for you
                from initial sketches to the final construction.
              </p>
            </div>
            <div className="col-lg-6 ">
              <Image
                src={ContactUs}
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

export default ContactUsHeroSection;

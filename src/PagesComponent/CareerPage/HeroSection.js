import React, { Fragment, useEffect } from "react";
import CareerImage from "../../assets/images/CareerImage.png";
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
            <div className="col-lg-6 mt-5 text-start" data-aos="fade-up">
              <h1 className="hero-sec-header">Join <span style={{color:"#3f689f"}}>KOLI</span> infotech</h1>
              <p className="para-for-hero">
                We are a company that offers design and develop services for you
                from initial sketches to the final construction.
              </p>
            </div>
            <div className="col-lg-6 text-start" data-aos="fade-up">
              <Image
                src={CareerImage}
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

import React, { Fragment, useEffect } from "react";
import HireHeroImg from "../../assets/images/HireDevImg-1.png";
import MobileHero from "../../assets/images/Mobile-hero.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const HireDevHeroSection = () => {

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
          <div className="row" style={{ alignItems: "center" }} >
            <div className="col-lg-6 mt-5 text-start" data-aos="fade-up">
              <h1 className="hero-sec-header">Hire Dedicated Developers</h1>
              <p className="para-for-hero">
                We are a company that offers design and develop services for you
                from initial sketches to the final construction.
              </p>
              <a class="btn contact-us-btn m-4 p-2" href="/contact-us" type="submit">
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 text-center" data-aos="fade-up">
              <Image src={HireHeroImg} alt='Image not found' className="img-fluid testi-image" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HireDevHeroSection;

import React, { Fragment,useEffect } from "react";
import onDmndHeroImg from "../../assets/images/onDmndHeroImg.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const SolutionOnDemandHeroSection = () => {

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
        <div className="container text-center" data-aos="fade-up">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 mt-5 text-start">
              <h1 className="hero-sec-header">
                On-demand App Development Company
              </h1>
              <p className="para-for-hero">
              We specialize in on-demand app development, delivering customized solutions to meet your specific business needs.
              </p>
              <a class="btn onDemndbtn m-4 p-3" type="submit">
                Click Here to Get Your Free Quote
              </a>
            </div>
            <div className="col-lg-6 ">
              <Image
                src={onDmndHeroImg}
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

export default SolutionOnDemandHeroSection;

import React from "react";
import CareerImage from "../../assets/images/CareerImage.png";
import Image from "next/image";

const CareerPageHeroSection = () => {
  return (
    <>
      <section
        className="testi-hero-image "
        style={{ backgroundColor: "#E3E3FF" }}
      >
        <div className="container">
          <div className="row" style={{alignItems:'center'}}>
            <div className="col-lg-6 mt-5">
              <h1 className="testimonial">Join Blue Infinity Tech</h1>
              <p className="para-for-hero">
                We are a company that offers design and develop services for you
                from initial sketches to the final construction.
              </p>
            </div>
            <div className="col-lg-6 ">
              <Image src={CareerImage} className="img-fluid testi-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPageHeroSection;
import React from "react";
import LeadershipImage from "../../assets/images/leadership-image.png";
import Image from "next/image";

const LeadershipHeroSection = () => {
  return (
    <>
      <section
        className="testi-hero-image "
        style={{ backgroundColor: "#E3E3FF" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <h1 className="testimonial">LEADERSHIP</h1>
              <p className="para-for-hero">
                We are a company that offers design and develop services for you
                from initial sketches to the final construction.
              </p>
            </div>
            <div className="col-lg-6 ">
              <Image src={LeadershipImage} className="img-fluid testi-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadershipHeroSection;

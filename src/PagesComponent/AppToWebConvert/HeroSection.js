import React from "react";
import DataSecure1 from "../../assets/images/DataSecure-1.png";
import webDevimg1 from "../../assets/images/webDevimg-1.png";
import MobileHero from "../../assets/images/Mobile-hero.png";
import WtoAppImage1 from "../../assets/images/WtoAppImage1.png";
import Image from "next/image";

const AppToWebHeroSection = () => {
  return (
    <>
      <section style={{ backgroundColor: "#023455", color: "#fff" }}>
        <div className="container">
          <h1 className="hero-sec-header pt-5 text-center">
          Convert App into Website
          </h1>
          <div className="row">
            {/* <div className="text-center m-3" style={{ height: "25rem" }}> */}
              <div class="input-group m-4 d-flex justify-content-center ">
                <input
                  type="text"
                  class=" text-input col-6 p-4 "
                  placeholder="Enter Your App URL"
                  aria-label="Enter Your App URL"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group m-4 d-flex justify-content-center ">
              <a
                href="#"
                class="btn btn-primary mt-3"
                style={{
                  borderRadius: "50px",
                  padding: "15px 70px",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                Convert
              </a>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
      
    </>
  );
};

export default AppToWebHeroSection;

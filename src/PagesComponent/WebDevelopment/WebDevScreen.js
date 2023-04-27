import React from "react";
import Image from "next/image";
import CostumMobi from "../../assets/images/costum-mobile.png";
import webDevimg2 from "../../assets/images/webDevimg-2.png";
import WebDesignImage from "../../assets/images/webdesign1.png";
import WebDesignImage2 from "../../assets/images/webdesign2.png";
import WebDesignImage3 from "../../assets/images/webdesign3.png";
import WebDesignImage4 from "../../assets/images/webdesign4.png";
import WebDesignImage5 from "../../assets/images/webdesign5.png";
import WebDesignImage6 from "../../assets/images/webdesign6.png";
import smartphone from "../../assets/images/smartphone.png";
import Ipod from "../../assets/images/ipad.png";
import Android from "../../assets/images/android1.png";
import webDev from "../../assets/images/ux1.png";
import userInterface1 from "../../assets/images/userInterface1.png";
import smartform1 from "../../assets/images/cross-platform1.png";

const WebDevScreen = () => {
  const data = [
    {
      service: "Web Designing",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Web Development",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Mobile Development",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Web Designing",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Web Development",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Mobile Development",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
  ];

  
  return (
    <>
      <section>
        <div className="container">
          {/* <div > */}
          <div className="row mt-5" style={{ alignItems: "center" }}>
            <div className="col-lg-6 ">
              <Image src={webDevimg2} className="img-fluid testi-image" />
            </div>
            <div className="col-lg-6 mt-5">
              <h1 className="comman-heading">
                Custom Mobile Application Development Company
              </h1>
              <div className="cst-hr-for-process mb-3" />
              <p className="para-for-hero">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 mt-5 comman-heading">
            Mobile App Development Services
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row">
            <div className="col-sm-4 mb-4">
              <div className="p-5 WebDev-dashed-border">
                <div className="text-center award-head-img award-head-img">
                  <h2>iPhone App Development</h2>
                  <Image src={smartphone} className="mb-4 mt-4 img-fluid " />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 WebDev-dashed-border">
                <div className="text-center award-head-img">
                  <h2>iPad App Development</h2>
                  <Image src={Ipod} className="mb-4 mt-4 img-fluid " />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 WebDev-dashed-border">
                <div className="text-center award-head-img">
                  <h2>Android App Development</h2>
                  <Image src={Android} className="mb-4 mt-4 img-fluid " />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 mb-4">
              <div className="p-5 WebDev-dashed-border">
                <div className="text-center award-head-img">
                  <h2>Web App Development</h2>
                  <Image src={webDev} className="mb-4 mt-4 img-fluid " />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 WebDev-dashed-border">
                <div className="text-center award-head-img">
                  <h2>Mobile App Design</h2>
                  <Image
                    src={userInterface1}
                    className="mb-4 mt-4 img-fluid "
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 WebDev-dashed-border">
                <div className="text-center award-head-img">
                  <h2>Cross-Platform Mobile Apps</h2>
                  <Image src={smartform1} className="mb-4 mt-4 img-fluid " />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container mt-5"
          style={{
            background: "#3F689F",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <div className="row  text-center indstry-serve p-5 pt-5 pb-5">
            <div className="col-lg-6">
              <h2>Looking For a Web </h2>
              <h2>Developer for Hire?</h2>
            </div>
            <div className="col-lg-6  hire-btn">
              <button className="fw-bold p-3 text-white btn btn">
                Hire Web Developers Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 mt-5 comman-heading">
            Industries We Serve
          </h1>
          <div className="cst-hr-for-process mb-5" />

          <div className="row  text-center indstry-serve">
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div
                  class="card p-4"
                  style={{
                    background: "#C7C7FF",
                  }}
                >
                  Healthcare
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-5">
              <div className="container">
                <div
                  class="card p-4"
                  style={{
                    background: "#C7C7FF",
                  }}
                >
                  Retail & eCommerce
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div
                  class="card p-4"
                  style={{
                    background: "#C7C7FF",
                  }}
                >
                  Banking & finance
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2 text-center indstry-serve">
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div
                  class="card p-4"
                  style={{
                    background: "#C7C7FF",
                  }}
                >
                  Entertainment
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-5">
              <div className="container">
                <div
                  class="card p-4"
                  style={{
                    background: "#C7C7FF",
                  }}
                >
                  Education & e-learning
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div
                  class="card p-4"
                  style={{
                    background: "#C7C7FF",
                  }}
                >
                  Real estate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevScreen;

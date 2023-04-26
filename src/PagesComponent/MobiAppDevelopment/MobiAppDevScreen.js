import React from "react";
import Image from "next/image";
import CostumMobi from "../../assets/images/costum-mobile.png";
import trophy from "../../assets/images/trophy.png";
import like from "../../assets/images/like.png";
import rating from "../../assets/images/rating.png";
import userInterface from "../../assets/images/user-interface.png";
import WebDesignImage from "../../assets/images/webdesign1.png";
import WebDesignImage2 from "../../assets/images/webdesign2.png";
import WebDesignImage3 from "../../assets/images/webdesign3.png";
import WebDesignImage4 from "../../assets/images/webdesign4.png";
import WebDesignImage5 from "../../assets/images/webdesign5.png";
import WebDesignImage6 from "../../assets/images/webdesign6.png";
import smartphone from '../../assets/images/smartphone.png';
import Ipod from '../../assets/images/ipad.png';
import Android from '../../assets/images/android1.png';
import webDev from '../../assets/images/ux1.png';
import userInterface1 from '../../assets/images/userInterface1.png';
import smartform1 from '../../assets/images/cross-platform1.png';

const MobiAppDevScreen = () => {
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
          <div className="awards">
            <div className="row m-5">
              <div className="col-sm-3 mb-3">
                <div className="p-3 text-center award-box">
                  <Image src={trophy} className="mb-4 mt-4 img-fluid " />
                  <p>
                    Awarded as the Best Mobile Application Development Company
                    by GESIA
                  </p>
                </div>
              </div>
              <div className="col-sm-3 mb-3">
                <div className="p-3 text-center award-box">
                  <Image src={like} className="mb-4 mt-4 img-fluid " />
                  <p>
                    Awarded as the Best Mobile Application Development Company
                    by GESIA
                  </p>
                </div>
              </div>
              <div className="col-sm-3 mb-3">
                <div className="p-3 text-center award-box">
                  <Image src={rating} className="mb-4 mt-4 img-fluid " />
                  <p>
                    Awarded as the Best Mobile Application Development Company
                    by GESIA
                  </p>
                </div>
              </div>
              <div className="col-sm-3 mb-3">
                <div className="p-3 text-center award-box">
                  <Image src={userInterface} className="mb-4 mt-4 img-fluid " />
                  <p>
                    Awarded as the Best Mobile Application Development Company
                    by GESIA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5" style={{ display: "flex" }}>
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-lg-7 mt-5">
                <h1 className=" bold-font">
                  Custom Mobile Application Development Company
                </h1>
                <div className="cst-hr-for-process mb-3" />
                <p className="para-for-hero">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore
                </p>
              </div>
              <div className="col-lg-5 ">
                <Image src={CostumMobi} className="img-fluid testi-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-services">
        <div className="container">
          <h1 className="text-center text-white pt-5 mt-5 bold-font">
            Mobile App Development Services
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row">
            <div className="col-sm-4 mb-4">
              <div className="p-5 awards-border">
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
              <div className="p-5 awards-border">
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
              <div className="p-5 awards-border">
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
              <div className="p-5 awards-border">
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
              <div className="p-5 awards-border">
                <div className="text-center award-head-img">
                  <h2>Mobile App Design</h2>
                  <Image src={userInterface1} className="mb-4 mt-4 img-fluid " />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 awards-border">
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
        <div className="container">
          <h1 className="text-center pt-5 mt-5 bold-font">
            Explore Our Mobile App Portfolio
          </h1>
          <div className="cst-hr-for-process mb-5" />

          <div className="row ">
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div
                  class="card p-4"
                  style={{
                    background:
                      " linear-gradient(180deg, #2A64F9 0%, #012E4D 100%)"
                  }}
                >
                  <div class="card-body">
                    <Image src={WebDesignImage} class="card-img-top" />
                  </div>
                </div>
                <div className="card-btm-text">
                  <h4>Web Design</h4>
                  <p>Website design</p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-5">
              <div className="container">
                <div
                  class="card  p-4"
                  style={{
                    background:
                      " linear-gradient(180deg, #E83030 0%, rgba(116, 13, 13, 0.97) 100%)",
                  }}
                >
                  <div class="card-body">
                    <Image src={WebDesignImage2} class="card-img-top" />
                  </div>
                </div>
                <div className="card-btm-text">
                  <h4>Web Design</h4>
                  <p>Website design</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div class="card  p-4" style={{ background: "#012E4D" }}>
                  <div class="card-body">
                    <Image src={WebDesignImage3} class="card-img-top" />
                  </div>
                </div>
                <div className="card-btm-text">
                  <h4>Web Design</h4>
                  <p>Website design</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div class="card  p-4" style={{ background: "#313131" }}>
                  <div class="card-body">
                    <Image src={WebDesignImage4} class="card-img-top" />
                  </div>
                </div>
                <div className="card-btm-text">
                  <h4>Web Design</h4>
                  <p>Website design</p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-5">
              <div className="container">
                <div class="card  p-4" style={{ background: "#6647C0" }}>
                  <div class="card-body">
                    <Image src={WebDesignImage5} class="card-img-top" />
                  </div>
                </div>
                <div className="card-btm-text">
                  <h4>Web Design</h4>
                  <p>Website design</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div class="card  p-4" style={{ background: "#E9A218" }}>
                  <div class="card-body">
                    <Image src={WebDesignImage6} class="card-img-top" />
                  </div>
                </div>
                <div className="card-btm-text">
                  <h4>Web Design</h4>
                  <p>Website design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobiAppDevScreen;

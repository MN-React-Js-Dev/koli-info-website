import React from "react";
import Image from "next/image";
import mobiScreen1 from "../../assets/images/Hire1.png";
import mobiScreen2 from "../../assets/images/Hire2.png";
import mobiScreen3 from "../../assets/images/Hire3.png";
import smartphone from "../../assets/images/smartphone.png";
import Ipod from "../../assets/images/ipad.png";
import Android from "../../assets/images/android1.png";
import webDev from "../../assets/images/ux1.png";
import userInterface1 from "../../assets/images/userInterface1.png";
import smartform1 from "../../assets/images/cross-platform1.png";
import Image2 from "../../assets/images/middle.png";
import Vector from "../../assets/images/Vector.png";
import EllipseBlue from "../../assets/images/EllipseBlue.png";

const HireDevScreen = () => {
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

  const Data = data.map((item) => {
    return item;
  });
  return (
    <>
      <section>
        <div className="container">
          <h1 className="text-center mt-5 bold-font">
            Hire Dedicated Developers
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row m-5 text-center">
            <div className="col-sm-4 mb-4">
              <Image src={mobiScreen1} className=" img-fluid " />
            </div>
            <div className="col-sm-4 mb-4">
              <Image src={mobiScreen2} className=" img-fluid " />
            </div>
            <div className="col-sm-4 mb-4">
              <Image src={mobiScreen3} className=" img-fluid " />
            </div>
          </div>
          <div className="text-center m-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>
            <a class="btn contact-us-btn m-4 p-2" type="submit">
              Hire Now
            </a>
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
          <div className="row m-5">
            <div className="text-center testi-detail-box">
              <Image src={Image2} className="round img-round-cst"/>
              <p className="text-center text-decoration-underline client-name  pt-3">
                John Doe
              </p>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <Image src={Vector} className="img-fluid " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HireDevScreen;

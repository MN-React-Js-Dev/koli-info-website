import React, { Fragment, useEffect } from "react";
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
import { COMMAN_TEXT } from "../../commonComponent/commanText";
import Aos from "aos";
import "aos/dist/aos.css";

const HireDevScreen = () => {
  const CardData = [
    {
      img: "../../assets/images/design1.png",
      heading: "Hire Full Stack Developers",
      descpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      img: "../../assets/images/web-development1.png",
      heading: "Hire iPhone Developers",
      descpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      img: "../../assets/images/applications1.png",
      heading: "Hire Android Developers",
      descpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      img: "../../assets/images/design1.png",
      heading: "Hire PHP Developers",
      descpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      img: "../../assets/images/web-development1.png",
      heading: "Hire Swift Developers",
      descpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      img: "../../assets/images/applications1.png",
      heading: "Hire on-Demand App Developers",
      descpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section>
        <div className="container">
          <h1 className="text-center mt-5 bold-font" data-aos="flip-up">
            Hire Dedicated Developers
          </h1>
          <div className="cst-hr-for-process mb-5" data-aos="flip-down"/>
          <div className="row m-5 text-center">
            <div className="col-sm-4 mb-4">
              <Image src={mobiScreen1} className=" img-fluid " data-aos="fade-right" />
            </div>
            <div className="col-sm-4 mb-4">
              <Image src={mobiScreen2} className=" img-fluid " data-aos="fade-up"/>
            </div>
            <div className="col-sm-4 mb-4">
              <Image src={mobiScreen3} className=" img-fluid " data-aos="fade-left"/>
            </div>
          </div>
          <div className="text-center m-5" data-aos="fade-down">
            <p>{COMMAN_TEXT}</p>
            <a class="btn contact-us-btn m-4 p-2" type="submit">
              Hire Now
            </a>
          </div>
        </div>
      </section>
      <section className="special-services">
        <div className="container">
          <h1 className="text-center text-white pt-5 mt-5 bold-font" data-aos="flip-down">
            Mobile App Development Services
          </h1>
          <div className="cst-hr-for-process mb-5" data-aos="flip-down"/>
          <div className="row" data-aos="fade-down">
            {CardData.map(({ heading, descpt }, index) => (
              <>
                <div className="col-sm-4 mb-4" key={index}>
                  <div className="p-5 awards-border">
                    <div className="text-center award-head-img award-head-img">
                      <h2>{heading}</h2>
                      <Image
                        src={smartphone}
                        alt='Image not found'
                        className="mb-4 mt-4 img-fluid "
                      />
                    </div>
                    <p>{descpt}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container" data-aos="zoom-in">
          <div className="row m-5">
            <div className="text-center testi-detail-box">
              <Image src={Image2} className="round img-round-cst" />
              <p className="text-center text-decoration-underline client-name  pt-3">
                John Doe
              </p>
              <p className="text-center">{COMMAN_TEXT}</p>
              <Image src={Vector}  alt='Image not found' className="img-fluid " />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HireDevScreen;

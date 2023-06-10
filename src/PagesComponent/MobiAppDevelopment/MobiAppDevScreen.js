import React, { Fragment, useEffect } from "react";
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
import smartphone from "../../assets/images/smartphone.png";
import { Inder } from "next/font/google";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import Aos from "aos";
import "aos/dist/aos.css";

const MobiAppDevScreen = () => {
  const data = [
    {
      service: "Custom Software Development",
      detail:
        "We offer custom software development services tailored to meet your specific business needs and requirements.",
    },
    {
      service: "Web Application Development",
      detail:
        "We specialize in web application development, creating robust and intuitive web-based solutions that empower businesses and enhance user experiences.",
    },
    {
      service: "Mobile Application Development",
      detail:
        "We offer comprehensive mobile application development services, crafting innovative and feature-rich apps for iOS and Android platforms.",
    },
    {
      service: "QA & Testing",
      detail:
        "Our dedicated QA and testing team ensures the highest quality standards for your software applications, performing rigorous testing and bug-fixing to deliver flawless products.",
    },
    {
      service: "Cloud & DevOps",
      detail:
        "Our Cloud and DevOps services help businesses leverage the power of cloud computing and streamline their development processes for faster, scalable, and more efficient software deployment.",
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
          <div className="awards">
            <div className="row m-5" data-aos="fade-up">
              <div className="col-sm-3 mb-3">
                <div className="p-3 text-center award-box">
                  <Image src={trophy} alt='Image not found' className="mb-4 mt-4 img-fluid " />
                  <p>
                    Awarded as the Best Mobile Application Development Company
                    by GESIA
                  </p>
                </div>
              </div>
              <div className="col-sm-3 mb-3">
                <div className="p-3 text-center award-box">
                  <Image src={like} alt='Image not found' className="mb-4 mt-4 img-fluid " />
                  <p>
                    Awarded as the Best Mobile Application Development Company
                    by GESIA
                  </p>
                </div>
              </div>
              <div className="col-sm-3 mb-3">
                <div className="p-3 text-center award-box">
                  <Image src={rating} alt='Image not found' className="mb-4 mt-4 img-fluid " />
                  <p>
                    Awarded as the Best Mobile Application Development Company
                    by GESIA
                  </p>
                </div>
              </div>
              <div className="col-sm-3 mb-3">
                <div className="p-3 text-center award-box">
                  <Image src={userInterface} alt='Image not found' className="mb-4 mt-4 img-fluid " />
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
              <div className="col-lg-7 mt-5" data-aos="fade-right">
                <h1 className=" bold-font">
                  Custom Mobile Application Development Company
                </h1>
                <div className="cst-hr-for-process mb-3" />
                <p className="para-for-hero">{COMMAN_TEXT}</p>
              </div>
              <div className="col-lg-5 " data-aos="fade-left">
                <Image src={CostumMobi} alt='Image not found' className="img-fluid testi-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-services">
        <div className="container">
          <h1 className="text-center text-white pt-5 mt-5 bold-font">
            Our Services
          </h1>
          <div className="cst-hr-for-process mb-5" />
          {/* <div className="row" data-aos="fade-up">
            {data.map(({ service, detail }, index) => (
              <>
                <div className="col-sm-4 mb-4" key={index}>
                  <div className="p-5 awards-border">
                    <div alt='Image not found' className="text-center award-head-img award-head-img">
                      <h2>{service}</h2>
                      <Image
                        src={smartphone}
                        alt="img"
                        className="mb-4 mt-4 img-fluid "
                      />
                    </div>
                    <p>{detail}</p>
                  </div>
                </div>
              </>
            ))}
          </div> */}
          <div className="row equal-height-row" data-aos="fade-up">
            {data.map(({ service, detail }, index) => (
              <div className="col-sm-4 mb-4 d-flex" key={index}>
                <div className="p-5 awards-border d-flex flex-column flex-fill">
                  <div alt='Image not found' className="text-center award-head-img">
                    <h2>{service}</h2>
                    <Image
                      src={smartphone}
                      alt="img"
                      className="mb-4 mt-4 img-fluid"
                    />
                  </div>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 mt-5 bold-font">
            Explore Our Portfolio
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row " data-aos="fade-up">
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div
                  class="card p-4"
                  style={{
                    background:
                      " linear-gradient(180deg, #2A64F9 0%, #012E4D 100%)",
                  }}
                >
                  <div class="card-body">
                    <Image src={WebDesignImage} alt='Image not found' class="card-img-top" />
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
                    <Image src={WebDesignImage2} alt='Image not found' class="card-img-top" />
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
                    <Image src={WebDesignImage3} alt='Image not found' class="card-img-top" />
                  </div>
                </div>
                <div className="card-btm-text">
                  <h4>Web Design</h4>
                  <p>Website design</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2" data-aos="fade-up">
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div class="card  p-4" style={{ background: "#313131" }}>
                  <div class="card-body">
                    <Image src={WebDesignImage4} alt='Image not found' class="card-img-top" />
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
                    <Image src={WebDesignImage5} alt='Image not found' class="card-img-top" />
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
                    <Image src={WebDesignImage6} alt='Image not found' class="card-img-top" />
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
    </Fragment>
  );
};

export default MobiAppDevScreen;

import Header from "@/commonComponent/Header";
import Image from "next/image";
import PortfolioImage from "../assets/images/portfolioimage.png";
import WebDesignImage from "../assets/images/webdesign1.png";
import WebDesignImage2 from "../assets/images/webdesign2.png";
import WebDesignImage3 from "../assets/images/webdesign3.png";
import WebDesignImage4 from "../assets/images/webdesign4.png";
import WebDesignImage5 from "../assets/images/webdesign5.png";
import WebDesignImage6 from "../assets/images/webdesign6.png";
import { Link } from "react-router-dom";

const portfolio = () => {
  return (
    <>
      <Header />
      <section className="portfolio-section" style={{ background: "#E3E3FF" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="mt-5">
                <h1 className="hero-sec-header">Portfolio</h1>
                <p className="para-for-hero">
                  We are a company that offers design and develop services for
                  you from initial sketches to the final construction.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <Image src={PortfolioImage} class="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="our-portfolio">
        <div className="container">
          <h1 className="text-center mt-5 bold-font">Our Portfolio</h1>

          <div class="col-12 mb-5 mt-3 mx-auto">
            <div class="d-flex justify-content-center">
              <ul class="nav nav-pills p-3" style={{ background: "#E4ECFF" }}>
                <li class="nav-item mx-2">
                  <a class="text-black" href="#">
                    All Project
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="text-black" href="#">
                    Web Design
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="text-black" href="#">
                    Logo Design
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="text-black" href="#">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row ">
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div
                  class="card p-3"
                  style={{
                    background:
                      " linear-gradient(180deg, #2A64F9 0%, #012E4D 100%)",
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
                  class="card  p-3"
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
                <div class="card  p-3" style={{ background: "#012E4D" }}>
                  <div class="card-body">
                    <Image src={WebDesignImage3} class="card-img-top" />
                  </div>
                </div>
                <div className="card-btm-text">
                  <h4>Web Design</h4>
                  <p> Website design</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-4 mb-5">
              <div className="container">
                <div class="card  p-3" style={{ background: "#313131" }}>
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
                <div class="card  p-3" style={{ background: "#6647C0" }}>
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
                <div class="card  p-3" style={{ background: "#E9A218" }}>
                  <div class="card-body">
                    <Image src={WebDesignImage6} class="card-img-top" />
                  </div>
                </div>
                <div className="card-btm-text">
                  <h4>Web Design</h4>
                  <p> Website design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default portfolio;

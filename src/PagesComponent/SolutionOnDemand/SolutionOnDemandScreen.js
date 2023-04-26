import React from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SODimage1 from "../../assets/images/SODimage1.png";
import SODimage2 from "../../assets/images/SODimage2.png";
import SODimage3 from "../../assets/images/SODimage3.png";
import smartphone from "../../assets/images/smartphone.png";
import Ipod from "../../assets/images/ipad.png";
import Android from "../../assets/images/android1.png";
import bookindMdl from "../../assets/images/bookindMdl.png";
import appPay from "../../assets/images/appPay.png";
import order from "../../assets/images/order.png";
import schedule from "../../assets/images/schedule.png";
import trackOrder from "../../assets/images/track.png";
import realTimecall from "../../assets/images/realTcall.png";
import onDemCrsl1 from "../../assets/images/onDemCrsl-1.png";
import onDemCrsl2 from "../../assets/images/onDemCrsl-2.png";
import onDemCrsl3 from "../../assets/images/onDemCrsl-3.png";
import whiteBackg from "../../assets/images/whiteBackg.png";

const SolutionOnDemandScreen = () => {
  
  
  return (
    <>
      <section>
        <div
          className="container mt-5"
          style={{
            background: "#012E4D",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <div className="row  text-center p-5 m-5">
            <div className="col-lg-4">
              <div className="whiteBack">
                {/* <Image src={whiteBackg} className="whiteBack" /> */}
                <Image className="SODimage1 img-fluid" src={SODimage1} />
              </div>
              <p>Developed 40+ On-Demand Mobile Apps and Solutions</p>
            </div>
            <div className="col-lg-4">
              <div className="whiteBack">
                <Image className="SODimage1 img-fluid" src={SODimage2} />
              </div>
              <p>A Dedicated Team of On-Demand App Developers</p>
            </div>
            <div className="col-lg-4">
              <div className="whiteBack">
                <Image className="SODimage1 img-fluid" src={SODimage3} />
              </div>
              <p>Developed 40+ On-Demand Mobile Apps and Solutions</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 mt-5 bold-font">
            Top On Demand App Development Company
          </h1>
          <div className="cst-hr-for-process mb-3" />
          <div className="row">
            <div className="text-center m-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
              <a
                href="#"
                class="btn btn-danger m-4"
                style={{
                  borderRadius: "50px",
                  padding: "15px 55px",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                Get Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 bold-font">
            Key Features of On-Demand App Solutions
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row">
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={bookindMdl} className="mb-4 mt-4 img-fluid " />
                <p>Booking Module</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={appPay} className="mb-4 mt-4 img-fluid " />
                <p>In-App Payments</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={order} className="mb-4 mt-4 img-fluid " />
                <p>Ordering on-The-Go</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={schedule} className="mb-4 mt-4 img-fluid " />
                <p>Scheduling a booking/ order</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={trackOrder} className="mb-4 mt-4 img-fluid " />
                <p>Order Tracking</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={realTimecall} className="mb-4 mt-4 img-fluid " />
                <p>Real-Time calls and Messages</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="onDemandImageCarousal">
          <div className="container">
            <h1 className="text-center pt-5">Our Services</h1>
            <div className="cst-hr-for-process mb-5"></div>
            <div className="row">
              <div className="col-sm-4 ">
                <div className="card image-carousel">
                  <Image src={onDemCrsl1} className=" " />
                </div>
              </div>
              <div className="col-sm-4 ">
                <div className="card image-carousel">
                  <Image src={onDemCrsl2} className=" " />
                </div>
              </div>
              <div className="col-sm-4 ">
                <div className="card image-carousel">
                  <Image src={onDemCrsl3} className=" " />
                </div>
              </div>
            </div>
            <div className="text-center mt-5 pb-5 arrow-btn">
              <button className="btn btn-ai-class ">
                <AiOutlineLeft />
              </button>
              <button className="btn btn-ai-class">
                <AiOutlineRight />
              </button>
            </div>
          </div>
      </section> */}
      <section className="onDemandImageCarousal">
        <div className="container">
          <h1 className="text-center pt-5">Our Services</h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="row">
            {/* -------------------------------------------- */}
            {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image src={onDemCrsl1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <Image src={onDemCrsl1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <Image src={onDemCrsl1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner">
                <div class="item active">
                  <Image
                    src={onDemCrsl1}
                    alt="Los Angeles"
                    style="width:100%;"
                  />
                </div>

                <div class="item">
                  <Image src={onDemCrsl1} alt="Chicago" style="width:100%;" />
                </div>

                <div class="item">
                  <Image src={onDemCrsl1} alt="New york" style="width:100%;" />
                </div>
              </div>

              <a
                class="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

            {/* -------------------------------------------- */}

            <button className="btn btn-ai-class ">
              <AiOutlineLeft />
            </button>
            <button className="btn btn-ai-class">
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionOnDemandScreen;

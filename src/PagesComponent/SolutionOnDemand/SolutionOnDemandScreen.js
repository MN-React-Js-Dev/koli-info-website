import React, { useEffect, useState, useRef, Fragment } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SODimage1 from "../../assets/images/SODimage1.png";
import SODimage2 from "../../assets/images/SODimage2.png";
import SODimage3 from "../../assets/images/SODimage3.png";
import bookindMdl from "../../assets/images/bookindMdl.png";
import onDemCrsl1 from "../../assets/images/onDemCrsl-1.png";
import onDemCrsl2 from "../../assets/images/onDemCrsl-2.png";
import onDemCrsl3 from "../../assets/images/onDemCrsl-3.png";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import Aos from "aos";
import "aos/dist/aos.css";

const SolutionOnDemandScreen = () => {
  const data = [
    {
      service: "Booking Module",
      detail:
        "Our booking module provides a seamless and user-friendly platform for customers to easily book services or appointments.",
    },
    {
      service: "In-App Payments",
      detail:
        "Our in-app payments feature enables secure and convenient transactions directly within the app, providing a seamless user experience.",
    },
    {
      service: "Ordering on-The-Go",
      detail:
        "Our ordering on-the-go feature allows users to conveniently place orders and make purchases directly from their mobile devices, anytime and anywhere.",
    },
    {
      service: "Scheduling a booking/ order",
      detail:
        "Our scheduling feature enables users to easily schedule/book appointments or orders based on their preferred date, time, and availability.",
    },
    {
      service: "Order Tracking",
      detail:
        "Our order tracking system allows users to track the progress and status of their orders in real-time, providing transparency and peace of mind.",
    },
    {
      service: "Real-Time calls and Messages",
      detail:
        "Our real-time communication feature enables users to make instant voice and video calls, as well as exchange messages in real-time, fostering seamless and efficient communication.",
    },
  ];
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section>
        <div
          className="container mt-5"
          style={{
            background: "#3F689F",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <div className="row  text-center p-5 m-5" data-aos="fade-down">
            <div className="col-lg-4">
              <div className="whiteBack m-3">
                <Image
                  className="SODimage1 img-fluid"
                  alt="Image not found"
                  src={SODimage1}
                />
              </div>
              <p>Developed 40+ On-Demand Mobile Apps and Solutions</p>
            </div>
            <div className="col-lg-4">
              <div className="whiteBack m-3">
                <Image
                  className="SODimage1 img-fluid"
                  alt="Image not found"
                  src={SODimage2}
                />
              </div>
              <p>A Dedicated Team of On-Demand App Developers</p>
            </div>
            <div className="col-lg-4">
              <div className="whiteBack m-3">
                <Image
                  className="SODimage1 img-fluid"
                  alt="Image not found"
                  src={SODimage3}
                />
              </div>
              <p>Developed 40+ On-Demand Mobile Apps and Solutions</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container" data-aos="fade-up">
          <h1 className="text-center pt-5 mt-5 comman-heading">
            Top On Demand App Development Company
          </h1>
          <div className="cst-hr-for-process mb-3" />
          <div className="row m-5">
            <div className="text-center">
              <p>{COMMAN_TEXT}</p>
              <a
                href="#"
                className="btn btn-danger m-4 get-consultancy"
                style={{
                  borderRadius: "50px",
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
      <section className="onDemandImageCarousal m-3">
        <div className="" data-aos="zoom-in">
          <h1 className="text-center pt-5 comman-heading">
            Top On-Demand Mobile Apps & Solutions Developed by Us
          </h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="row blog text-center">
            <div className="img-slide-box" alt="Image not found" ref={carousel}>
              <div className="item">
                <div className="image">
                  {/* ------------------------------------------------------------------------ */}
                  <Image
                    src={onDemCrsl1}
                    alt="image"
                    className="slide-img m-2"
                  />
                  <Image
                    src={onDemCrsl2}
                    alt="image"
                    className="slide-img m-2"
                  />
                  <Image
                    src={onDemCrsl3}
                    alt="image"
                    className="slide-img m-2"
                  />
                  <Image
                    src={onDemCrsl1}
                    alt="image"
                    className="slide-img m-2"
                  />
                  <Image
                    src={onDemCrsl2}
                    alt="image"
                    className="slide-img m-2"
                  />
                  <Image
                    src={onDemCrsl3}
                    alt="image"
                    className="slide-img m-2"
                  />
                  <Image
                    src={onDemCrsl1}
                    alt="image"
                    className="slide-img m-2"
                  />
                  {/* ------------------------------------------------------------------------ */}
                </div>
              </div>
            </div>
            <div className="buttons m-3">
              <button onClick={handleLeftClick} className="m-3 p-3">
                <AiOutlineLeft />
              </button>
              <button onClick={handleRightClick} className="m-3 p-3">
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 comman-heading">
            Key Features of On-Demand App Solutions
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row" data-aos="zoom-out" >
            {data.map(({ service, detail }, index) => (
              <>
                <div className="col-sm-4 mb-4 d-flex" key={index}>
                  <div className="p-5 bold-p WebDev-dashed-border text-center ">
                    <Image
                      src={bookindMdl}
                      alt="Image not found"
                      className="mb-4 mt-4 img-fluid "
                    />
                    <p>{service}</p>
                    <span>{detail}</span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SolutionOnDemandScreen;

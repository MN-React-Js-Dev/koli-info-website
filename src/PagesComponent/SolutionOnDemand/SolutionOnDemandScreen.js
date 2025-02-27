import React, { useEffect, useRef, Fragment } from "react";
import Image from "next/image";
import BookingModule from "../../assets/images/BookingModule.png";
import InAppPayments from "../../assets/images/InAppPayments.png";
import OrderingonTheGo from "../../assets/images/OrderingonTheGo.png";
import SchedulingabookingOrder from "../../assets/images/SchedulingabookingOrder.png";
import OrderTracking from "../../assets/images/OrderTracking.png";
import LiveChat from "../../assets/images/LiveChat.png";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import Aos from "aos";
import "aos/dist/aos.css";
import ClientWeServe from "@/commonComponent/ClientWeServe";

const SolutionOnDemandScreen = () => {
  const data = [
    {
      image: BookingModule,
      service: "Booking Module",
      detail:
        "Our booking module provides a seamless and user-friendly platform for customers to easily book services or appointments.",
    },
    {
      image: InAppPayments,
      service: "In-App Payments",
      detail:
        "Our in-app payments feature enables secure and convenient transactions directly within the app, providing a seamless user experience.",
    },
    {
      image: OrderingonTheGo,
      service: "Ordering on-The-Go",
      detail:
        "Our ordering on-the-go feature allows users to conveniently place orders and make purchases directly from their mobile devices, anytime and anywhere.",
    },
    {
      image: SchedulingabookingOrder,
      service: "Scheduling a booking/ order",
      detail:
        "Our scheduling feature enables users to easily schedule/book appointments or orders based on their preferred date, time, and availability.",
    },
    {
      image: OrderTracking,
      service: "Order Tracking",
      detail:
        "Our order tracking system allows users to track the progress and status of their orders in real-time, providing transparency and peace of mind.",
    },
    {
      image: LiveChat,
      service: "Real-Time calls and Messages",
      detail:
        "Our real-time communication feature enables users to make instant voice and video calls, as well as exchange messages in real-time.",
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

  const gradientColors = [
    "linear-gradient(to bottom, #416BDF, #10064d)",
    "linear-gradient(to bottom, #B8008F, #922460)",
    "linear-gradient(to bottom, #01B380, #00A28B)",
    "linear-gradient(to bottom, #2B2B2B, #040404)",
    "linear-gradient(to bottom, #3C60CF, #120952)",
    "linear-gradient(to bottom, #772263, #49072C)",
  ];

  return (
    <Fragment>
      {/* <section>
        <div
          className="container mt-5"
          style={{
            background: "#3F689F",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <div className="row  text-center px-3 py-3" data-aos="fade-down">
            <div className="col-lg-4 col-sm-12">
              <div className="whiteBack m-3">
                <Image
                  className="SODimage1 img-fluid"
                  alt="Image not found"
                  src={SODimage1}
                />
              </div>
              <p>Developed 40+ On-Demand Mobile Apps and Solutions</p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="whiteBack m-3">
                <Image
                  className="SODimage1 img-fluid"
                  alt="Image not found"
                  src={SODimage2}
                />
              </div>
              <p>A Dedicated Team of On-Demand App Developers</p>
            </div>
            <div className="col-lg-4  col-sm-12">
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
      </section> */}
      <section>
        <div className="container" data-aos="fade-up">
          <h2 className="text-center pt-5 mt-5 comman-heading">
            Top On Demand App Development Company
          </h2>
          <div className="cst-hr-for-process mb-3" />
          <div className="row m-5 get-consultancy">
            <div className="text-center">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {COMMAN_TEXT}
              </p>
            </div>
            <div className="text-center">
              <a href="#" className="btn onDemndbtn mt-3 py-2" type="submit">
                Get Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-5">
        <ClientWeServe />
      </section>
      {/* <section className="onDemandImageCarousal m-3">
        <div className="container">
          <div className="" data-aos="fade-up">
            <h2 className="text-center pt-5 comman-heading">
              Top On-Demand Solutions Developed by Us
            </h2>
            <div className="cst-hr-for-process mb-5"></div>
            <div className="row blog text-center">
              <div className="img-slide-box" alt="Image not found" ref={carousel}>
                <div className="item">
                  <div className="logos-image">
                    <Image
                      src={AmericanExpress}
                      alt="image"
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                    />
                    <Image
                      src={Onfleek}
                      alt="image"
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                    />
                    <Image
                      src={ByjusLogo1}
                      alt="image"
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                    />
                    <Image
                      src={jodiBanao}
                      alt="image"
                      className="slide-img m-2  p-2 WebDev-dashed-border"
                    />
                    <Image
                      src={HDFC}
                      alt="image"
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                    />
                    <Image
                      src={SetFlow}
                      alt="image"
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                    />
                    <Image
                      src={Axis}
                      alt="image"
                      className="slide-img m-2 p-2 WebDev-dashed-border"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <span className="px-3 arrowIcon" ><BsFillArrowLeftCircleFill style={{ color: "black" }} onClick={handleLeftClick} /></span>
                </motion.div>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <span className="px-3 arrowIcon"><BsFillArrowRightCircleFill style={{ color: "black" }} onClick={handleRightClick} /></span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="mt-5">
        <div className="container">
          <h1 className="text-center pt-5 comman-heading fs-2">
            Key Features of On-Demand App Solutions
          </h1>
          <div className="cst-hr-for-process mb-5" />
          {/* <div className="row g-5 pt-5" data-aos="fade-up">
            {data.map(({ image, service, detail }, index) => (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12 g-3 mb-4 d-flex" key={index}>
                  <div className="bold-p WebDev-dashed-border text-center">
                    <Image
                      src={image}
                      alt="Image not found"
                      className="mb-4 mt-4 solutionImage"
                    />
                    <p>{service}</p>
                    <span>{detail}</span>
                  </div>
                </div>
              </>
            ))}
          </div> */}
          <div className="row g-4 pt-4 mt-4" data-aos="fade-up">
            {data.map(({ image, service, detail }, index) => (
              <div
                className="feature-card col-lg-6 col-md-6 col-sm-12"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div
                  className="text-center"
                  style={{
                    background: gradientColors[index % gradientColors.length],
                    borderRadius: "12px",
                    padding: "40px",
                    minHeight: "280px",
                  }}
                >
                  <Image
                    src={image}
                    alt="Feature"
                    className="mb-3 feature-image"
                  />
                  <h5 className="fw-bold">{service}</h5>
                  <span className="text-white">{detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SolutionOnDemandScreen;

import React, { useEffect, useState, useRef, Fragment } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SODimage1 from "../../assets/images/SODimage1.png";
import SODimage2 from "../../assets/images/SODimage2.png";
import SODimage3 from "../../assets/images/SODimage3.png";
import onDemCrsl1 from "../../assets/images/onDemCrsl-1.png";
// --------------------------------------------------------------------
import AppDevelopment from '.././../assets/images/mobile-app-development-trends.png'
// import AppDevelopment from '.././../assets/images/App-development.jpg'
import mobileApp from '.././../assets/images/vaival-application.png'
import AppTesting from '.././../assets/images/mobile-app-testing.jpg'
import AppSecuriry from '.././../assets/images/mobile-application-security.jpg'
import AppTestingQa from '.././../assets/images/mobile-app-development-testing-QA.png'
import BookingModule from '../../assets/images/BookingModule.png'
import InAppPayments from '../../assets/images/InAppPayments.png'
import OrderingonTheGo from '../../assets/images/OrderingonTheGo.png'
import SchedulingabookingOrder from '../../assets/images/SchedulingabookingOrder.png'
import OrderTracking from '../../assets/images/OrderTracking.png'
import LiveChat from '../../assets/images/LiveChat.png'
// - ------------------------ out top project on demand -----------------------------------
import AmericanExpress from '../../assets/images/AmericanExpress.png'
import ByjusLogo1 from '../../assets/images/ByjusLogo1.png'
import HDFC from '../../assets/images/HDFC.png'
import Axis from '../../assets/images/Axis.png'
import Onfleek from "../../assets/images/onfleek.png";
import SetFlow from '../../assets/images/SetFlow.png'
import jodiBanao from '../../assets/images/jodiBanao.png'
import { motion } from "framer-motion";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

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
          <div className="row m-5 get-consultancy">
            <div className="text-center">
              <p>{COMMAN_TEXT}</p>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="btn btn-danger m-4"
                type="submit"
              >
                Get Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="onDemandImageCarousal m-3">
        <div className="container">
          <div className="" data-aos="fade-up">
            <h1 className="text-center pt-5 comman-heading">
              Top On-Demand Solutions Developed by Us
            </h1>
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
              {/*   <div className="buttons m-3">
                <button onClick={handleLeftClick} className="m-4 p-1">
    
                  <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={LeftArrow}></Image>
                </button>
                <button onClick={handleRightClick} className="m-4 p-1">
                  <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={RightArrow}></Image>
                </button>
              </div> */}
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
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 comman-heading">
            Key Features of On-Demand App Solutions
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row" data-aos="fade-up" >
            {data.map(({ image, service, detail }, index) => (
              <>
                <div className="col-sm-4 mb-4 d-flex" key={index}>
                  <div className="p-5 bold-p WebDev-dashed-border text-center">
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
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SolutionOnDemandScreen;

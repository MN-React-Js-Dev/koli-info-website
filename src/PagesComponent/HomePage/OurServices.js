import React, { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { getAllOurServicesStart } from "@/Redux/module/getOurServiceAction";
import { useDispatch, useSelector } from "react-redux";
import Design1 from "../../assets/images/design1.png";
import AppDevelopment from "../../assets/images/app-develop.png";
import AIML from "../../assets/images/app-ai.jpg";
import cloud from "../../assets/images/cloud.png";
import Testing from "../../assets/images/quality-test.png";
import webDevimg from "../../assets/images/webDevimg-1.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  const dispatch = useDispatch();
  const [ourService, setOurService] = useState();
  const carousel = useRef(null);
  const dataSelector = useSelector((state) => state?.getOurServices);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  useEffect(() => {
    if (dataSelector != null) {
      setOurService(dataSelector?.ourServices?.data?.rows);
    }
  }, [dataSelector]);

  useEffect(() => {
    dispatch(getAllOurServicesStart());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="our-services mt-5" style={{ paddingTop: "50px" }}>
        <div className="wrap-our-service">
          <div className="container">
            <h1 className="text-center comman-heading text-white pt-5">
              Our Services
            </h1>
            <div className="cst-hr-for-process mb-5"></div>
            <div className="service-carousel">
              <button className="arrow-button" onClick={handleLeftClick}>
                <AiOutlineDoubleLeft style={{ color: "whitesmoke" }} />
              </button>
              <div
                className="img-slide-box"
                ref={carousel}
                data-aos="fade-down"
              >
                <div className="service-card">
                  <Image
                    src={Testing}
                    alt="QA & Testing"
                    className="service-image"
                  />
                  <h2>QA & Testing</h2>
                  <p>
                    A QA Tester tests the functionality and usability of new or
                    existing software before it goes live.
                  </p>
                </div>
                <div className="service-card">
                  <Image
                    src={AppDevelopment}
                    alt="App Development"
                    className="service-image"
                  />
                  <h2>Mobile Application Development</h2>
                  <p>
                    Mobile application development involves creating software
                    applications for mobile devices.
                  </p>
                </div>
                <div className="service-card">
                  <Image src={AIML} alt="AI & ML" className="service-image" />
                  <h2>AI & Machine Learning</h2>
                  <p>
                    AI enables computers to think like humans, while machine
                    learning helps computers develop intelligence.
                  </p>
                </div>
                <div className="service-card">
                  <Image
                    src={webDevimg}
                    alt="Web Development"
                    className="service-image"
                  />
                  <h2>Web Application Development</h2>
                  <p>
                    Web application development involves creating apps delivered
                    to users' devices over the Internet.
                  </p>
                </div>
                <div className="service-card">
                  <Image
                    src={cloud}
                    alt="Cloud & DevOps"
                    className="service-image"
                  />
                  <h2>Cloud & DevOps</h2>
                  <p>
                    Cloud Developers specialize in creating, deploying, and
                    managing cloud-based systems securely and efficiently.
                  </p>
                </div>
                <div className="service-card">
                  <Image
                    src={Design1}
                    alt="Custom Software Development"
                    className="service-image"
                  />
                  <h2>Custom Software Development</h2>
                  <p>
                    Custom software development is the process of creating and
                    maintaining software tailored for specific users.
                  </p>
                </div>
              </div>
              <button className="arrow-button" onClick={handleRightClick}>
                <AiOutlineDoubleRight style={{ color: "whitesmoke" }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .arrow-button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #333;
          z-index: 10;
        }

        .img-slide-box {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          width: 100%;
          padding: 40px;
        }
        .service-card {
          flex: 0 0 calc(26% - 0.9rem);
          text-align: center;
          background: #fff;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          background-color: #87ceeb;
          transform: translateY(-10px);
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
        }

        .service-image {
          width: 100%;
          height: auto;
          margin-bottom: 1rem;
          border-radius: 10px;
        }

        .service-card h2 {
          font-size: 1.25rem;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .service-card p {
          font-size: 1rem;
          color: #777;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .service-card {
            flex: 0 0 calc(40% - 3.2rem);
          }
        }

        @media (max-width: 768px) {
          .service-card {
            flex: 0 0 calc(45% - 4rem);
            padding: 1.5rem;
            width: -webkit-fill-available;
            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
            border: 1px solid red;
          }
          .service-image {
            margin-bottom: 1rem;
            border-radius: 8px;
          }
          .service-card h2 {
            font-size: 1.2rem;
          }

          .service-card p {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 320px) {
          .service-card {
            flex: 0 0 100%;
            padding: 1.25rem;
            margin: 0 auto;
            background: #fff;
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
            border: 1px solid #eaeaea;
          }

          .service-image {
            border-radius: 8px;
            width: 100%;
            height: auto;
            margin-bottom: 1rem;
          }

          .service-card h2 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }

          .service-card p {
            font-size: 0.8rem;
            line-height: 1.4;
          }
        }

        .img-slide-box::-webkit-scrollbar {
          height: 8px;
        }
        .img-slide-box::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </Fragment>
  );
};

export default OurServices;

import React, { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { getAllOurServicesStart } from "@/Redux/module/getOurServiceAction";
import { useDispatch, useSelector } from "react-redux";
import Design1 from "../../assets/images/design1.png";
// import Testing from "../../assets/images/Qatesting.png";
import AppDevelopment from "../../assets/images/app-develop.png";
import AIML from "../../assets/images/app-ai.jpg";
// import webDevimg from "../../assets/images/webDevimg-1.png";
import cloud from "../../assets/images/cloud.png";
import costumeDev from "../../assets/images/costume-dev.png";
import LeftArrow from '.././../assets/images/leftArrow.png'
import RightArrow from '.././../assets/images/rightArrow.png'
// ---------------------------------------------------------------
import Testing from '.././../assets/images/quality-test.png'
import webDevimg from '.././../assets/images/webDevimg-1.png'

// ---------------------------------------------------------------
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsArrowLeftCircleFill, BsArrowRightCircle, BsFillArrowRightCircleFill } from "react-icons/bs";

const OurServices = () => {
  const dispatch = useDispatch();
  const [ourService, setOurService] = useState();
  const carousel = useRef(null);
  const dataSelector = useSelector((state) => state?.getOurServices);

  console.log('ourService~~~~~~~~~~~~~~.', ourService);

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
      <section className="our-services">
        <div className="wrap-our-service">
          <div className="container">
            <h1 className="text-center comman-heading text-white pt-5">
              Our Services
            </h1>
            <div className="cst-hr-for-process mb-5"></div>
            <div style={{ display: 'flex' }}>
              <div >
                
                <span className="px-3 arrowIcon" ><AiOutlineDoubleLeft style={{ color: "black", marginTop: '16.5rem' }} onClick={handleLeftClick} /></span>
              </div>
              <div
                className="img-slide-box"
                ref={carousel}
                data-aos="fade-down"
              >
                <div className="col-md-4 mb-4">
                  <div className="card p-3 cst-border-cls service-card">
                    <Image
                      src={Testing}
                      alt='QA & Testing'
                      className="mb-4 mt-4 service-image img-fluid"
                    />
                    <h2 className="serviceheadingText">QA & Testing</h2>
                    <p className="serviceText commanFont">A QA Tester is a professional who tests the functionality and usability of new or existing software before it goes live to ensure it is bug-free. They work closely with developers, providing them feedback on what needs improvement in order to produce top-</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card p-3 cst-border-cls service-card">
                    <Image
                      src={AppDevelopment}
                      alt='App development'
                      className="mb-4 mt-4 service-image img-fluid"
                    />
                    <h2 className="serviceheadingText">Mobile application development</h2>
                    <p className="serviceText commanFont">Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card p-3 cst-border-cls service-card">
                    <Image
                      src={AIML}
                      alt='AI and machine learning'
                      className="mb-4 mt-4 service-image img-fluid"
                    />
                    <h2 className="serviceheadingText">Artificial Intelligence and Machine learning</h2>
                    <p className="serviceText commanFont">An “intelligent” computer uses AI to think like a human and perform tasks on its own. Machine learning is how a computer system develops its intelligence. One way to train a computer to mimic human reasoning is to use a neural network.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card p-3 cst-border-cls service-card">
                    <Image
                      src={webDevimg}
                      alt='QA & Testing'
                      className="mb-4 mt-4 service-image img-fluid"
                    />
                    <h2 className="serviceheadingText">Web Application Development</h2>
                    <p className="serviceText commanFont">Web application development is the creation of application programs that reside on remote servers and are delivered to the users device over the Internet.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card p-3 cst-border-cls service-card">
                    <Image
                      src={cloud}
                      alt='QA & Testing'
                      className="mb-4 mt-4 service-image img-fluid"
                    />
                    <h2 className="serviceheadingText">Cloud & Devops</h2>
                    <p className="serviceText commanFont">Cloud Developers are essentially software engineers with a specialization in cloud computing. That means on top of development experience, Cloud Developers must have a solid understanding of cloud systems — not only how they operate, but how to deploy them securely, efficiently, and with little-to-no downtime.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card p-3 cst-border-cls service-card">
                    <Image
                      src={Design1}
                      alt='QA & Testing'
                      className="mb-4 mt-4 service-image img-fluid"
                    />
                    <h2 className="serviceheadingText">Custom software development</h2>
                    <p className="serviceText commanFont">Custom software development is the process of designing, creating, deploying and maintaining software for a specific set of users, functions or organizations</p>
                  </div>
                </div>
              </div>
              <div>
                <span className="px-3 arrowIcon"><AiOutlineDoubleRight style={{ color: "black", marginTop: '16.5rem' }} onClick={handleRightClick} /></span>
              </div>
            </div>
            {/* <div className="d-flex justify-content-center">
              <motion.div
                className="box mb-3"
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <span className="px-3 arrowIcon"><BsArrowLeftCircleFill style={{ color: "white" }} onClick={handleLeftClick}/></span>
              </motion.div>
              <motion.div
                className="box mb-3"
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <span className="px-3 arrowIcon"><BsFillArrowRightCircleFill style={{ color: "white" }} onClick={handleRightClick}/></span>
              </motion.div>
            </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurServices;

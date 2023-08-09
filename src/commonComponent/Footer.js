import React, { Fragment, useEffect } from "react";
import SVGlogo from "../assets/Logo/SVGlogo.svg";
import hiring from "../assets/images/hiring.png"
import arrow from "../assets/images/up-arrow.png"
import circleElement from "../assets/images/circleElement.png"
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { color, motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section>
        <hr className="row ml-4 mr-4" />
        <div className="container" data-aos="fade-up">
          <div style={{ display: 'flex', flexDirection: 'column' }} >
            <div className="row col-12 mt-5 text-center">
              <div
                className="col-lg-4  cst-footer-logo text-center"
                style={{ bottom: "70px" }}
              >
                <Image src={SVGlogo} className="mt-5 cst-footer-logo" />
                <p
                  style={{
                    marginBottom: "10px",
                    fontSize: 15,
                  }}
                >
                  {`We are company that offer's all type of services`}
                </p>
                <div className="d-flex justify-content-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -90,
                      borderRadius: "100%",
                    }}
                  >
                    <div className="px-3" data-aos="fade-up">
                      <Link
                        href="https://www.facebook.com/koli.infotech/"
                        className="nav-link active"
                        target="_blank"
                      >
                        <BsFacebook
                          className="icon"
                          style={{ color: "#3F689F", fontSize: "30px" }}
                        />
                      </Link>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: 90,
                      borderRadius: "100%",
                    }}
                  >
                    <div className="px-3" data-aos="fade-up">
                      <Link
                        href="https://twitter.com/Koli_Infotech/"
                        className="nav-link active"
                        target="_blank"
                      >
                        <BsTwitter
                          className="icon"
                          style={{
                            color: "#3F689F",
                            fontSize: "30px",
                            marginLeft: "2%",
                          }}
                        />
                      </Link>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: 90,
                      borderRadius: "100%",
                    }}
                  >
                    <div className="px-3" data-aos="fade-up">
                      <Link
                        href="https://www.instagram.com/koli_infotech/"
                        className="nav-link active"
                        target="_blank"
                      >
                        <BsInstagram
                          className="icon"
                          style={{
                            color: "#3F689F",
                            fontSize: "30px",
                            marginLeft: "2%",
                          }}
                        />
                      </Link>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: 90,
                      borderRadius: "100%",
                    }}
                  >
                    <div className="px-3" data-aos="fade-up">
                      <Link
                        href="https://www.youtube.com/@koliinfotech"
                        className="nav-link active"
                        target="_blank"
                      >
                        <BsYoutube
                          className="icon"
                          style={{
                            color: "#3F689F",
                            fontSize: "30px",
                            marginLeft: "2%",
                          }}
                        />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="col-lg-4">
                <p style={{ fontSize: 20, fontWeight: "bold" }}>Services</p>
                <div
                // style={{ display: "flex", flexDirection: 'row' }}
                >
                  <div >
                    <Link href="/mobile-app-development" className="nav-link"><p className="footerActivemenu">Custom Software Development</p></Link>
                    <Link href="/mobile-app-development" className="nav-link"><p className="footerActivemenu">Web Application Development</p></Link>
                    <Link href="/mobile-app-development" className="nav-link"><p className="footerActivemenu">Mobile Application Development</p></Link>

                    {/* </div>
                  <div className="ml-2"> */}
                    <Link href="/mobile-app-development" className="nav-link active"> <p className="footerActivemenu">Cloud & DevOps</p></Link>
                    <Link href="/mobile-app-development" className="nav-link active"><p className="footerActivemenu">Artificial Intelligence & Machine Learning </p></Link>
                    <Link href="/mobile-app-development" className="nav-link active"><p className="footerActivemenu">QA & Testing</p></Link>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-1" >
                <hr className="vertical-line" />
              </div> */}
              <div className="col-lg-4">
                <p
                  style={{ fontSize: 20, fontWeight: "bold" }}
                >Pages</p>
                <div
                // style={{ display: "flex", flexDirection: 'row' }}
                >
                  <div className="">
                    <Link href="/about-company" className="nav-link active">
                      <p className="footerActivemenu">About</p>
                    </Link>
                    <Link href="/Career" className="nav-link active">
                      <p className="footerActivemenu">Jobs</p>
                    </Link>
                    <Link href="/our-team" className="nav-link active">
                      <p className="footerActivemenu">Team</p>
                    </Link>
                    <Link href="/testimonial" className="nav-link active">
                      <p className="footerActivemenu">Testimonials</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div >
              <div style={{ display: "flex", flexDirection: 'row' }}>
                <div className="row col-lg-12  mt-5">
                  <div className="col-lg-4 text-center">
                    <h4>Contacts</h4>
                    <p>info@koliinfotech.com</p>
                    <p>
                      +91-9773149186 <br />
                      +91-8200591443
                    </p>
                  </div>
                  {/* <div className="col-lg-1" >
                    <hr className="vertical-line" />
                  </div> */}
                  <div className="row col-lg-8 text-center">
                    <h4 className="text-center">Our Address</h4>
                    <div className="col-lg-6">
                      <p style={{ fontSize: 15, fontWeight: "bold" }}>
                        HEAD OFFICE - SURAT
                      </p>
                      <p>4087- 4094, Rajmahal mall, Dindoli Surat, Gujarat - 394210</p>
                    </div>
                    <div className="col-lg-6">
                      <p style={{ fontSize: 15, fontWeight: "bold" }}>
                        BRANCH OFFICE - AHMEDABAD
                      </p>
                      <p>A - 501, Sahajanand Complex Shahibaug, Ahmedabad - 380004</p>
                      <Link
                        href="mailto:info@koliinfotech.com"
                        className="nav-link active"
                        target="_blank"
                      >
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="row ml-4 mr-4" />
      <div className="container" >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1%',
          marginTop: '3%',
          width: '100%',
        }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }} className="hiringClass">
              {/* <Image src={circleElement} style={{ position: 'absolute', }} /> */}
              <p style={{ fontWeight: 'bold', fontSize: 20, margin: 0, marginLeft: 40 }}>WE ARE HIRING!</p>
              <Image src={hiring} style={{ height: 30, width: 30, marginLeft: 15 }} />
            </div>
            <div className="hiringClass">
              <p style={{ fontSize: 20, marginLeft: 40, }}>Join Our Team.</p>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
            <Link href="/Career" className="nav-link active c" style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ fontWeight: 'bold', color: '#0d6efd', marginRight: 5 }}>Apply Now</p>
              <Image src={arrow} style={{ height: 40, width: 40, marginBottom: 15, marginRight: 40 }} />
            </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <hr className="row ml-4 mr-4" />
      <section>
        <div
          style={{ textAlign: "center", marginBottom: "1%", marginTop: "1%" }}
        >
          <span>&copy;</span>
          <span>2023 KOLI Infotech Pvt. Ltd. | All rights reserved.</span>
        </div>
      </section>

    </Fragment>
  );
};

export default Footer;

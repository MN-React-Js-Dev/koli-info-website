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
import { motion } from "framer-motion";
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
            <div className="row col-12  mt-5">
              <div
                className="col-lg-4  cst-footer-logo"
                style={{ bottom: "70px" }}
              >
                <Image src={SVGlogo} className="mt-5 cst-footer-logo" />
                <p
                  style={{
                    marginBottom: "10px",
                    // marginLeft: "16px",
                    fontSize: 15,
                  }}
                >
                  {`We are company that offer's all type of services`}
                </p>
                <div className="d-flex ">
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
                        href="https://www.facebook.com/"
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
                        href="https://twitter.com/home?lang=en"
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
                <p style={{ fontSize: 20, fontWeight: "bold", display: "flex", justifyContent: 'center' }}>Services</p>
                <div style={{ display: "flex", flexDirection: 'row' }}>
                  <div >
                    <Link href="/mobile-app-development" className="nav-link"><p className="footerActivemenu">Custom Software Development</p></Link>
                    <Link href="/mobile-app-development" className="nav-link"><p className="footerActivemenu">Web Application Development</p></Link>
                    <Link href="/mobile-app-development" className="nav-link"><p className="footerActivemenu">Mobile Application Development</p></Link>

                  </div>
                  <div className="ml-2">
                    <Link href="/mobile-app-development" className="nav-link active"> <p className="footerActivemenu">Cloud & DevOps</p></Link>
                    <Link href="/mobile-app-development" className="nav-link active"><p className="footerActivemenu">Artificial Intelligence & Machine Learning </p></Link>
                    <Link href="/mobile-app-development" className="nav-link active"><p className="footerActivemenu">QA & Testing</p></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <p style={{ fontSize: 20, fontWeight: "bold", display: "flex", justifyContent: 'center' }}>Pages</p>
                <div style={{ display: "flex", flexDirection: 'row' }}>
                  <div className="ml-5">
                    <p className="footerActivemenu">About </p>
                    <Link href="/career" className="nav-link active">
                      <p>Jobs</p>
                    </Link>
                    <Link href="/leadership" className="nav-link active">
                      <p className="footerActivemenu">Team</p>
                    </Link>
                  </div>
                  <div className="ml-5">
                    <Link href="/testimonial" className="nav-link active">
                      <p className="footerActivemenu">Tesimonials</p>
                    </Link>
                    <p className="footerActivemenu">Blog</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="row col-12  mt-1">
              <div className="col-lg-4"></div>
              <div className="col-lg-8">
                <p style={{ fontSize: 20, fontWeight: "bold", display: "flex", justifyContent: 'center', marginRight: 300 }}>Our Address</p>
                <div style={{ display: "flex", flexDirection: 'row' }}>
                  <div className="col-lg-4">
                    <p style={{ fontSize: 17, fontWeight: "bold" }}>
                      HEAD OFFICE - SURAT
                    </p>
                    <p>4087- 4094, Rajmahal mall, Dindoli Surat, Gujarat - 394210</p>
                  </div>
                  <div className="col-lg-5">
                    <p style={{ fontSize: 17, fontWeight: "bold" }}>
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

                  <div className="col-lg-1" >
                    <hr className="vertical-line" />
                  </div>
                  <div className="col-lg-4">
                    <p>info@koliinfotech.com</p>
                    <p>
                      +91-9773149186 <br />
                      +91-8200591443
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <hr className="row ml-4 mr-4" />
      <div className="container" data-aos="fade-up">
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
            }}>
              <Image src={circleElement} style={{ position: 'absolute', }} />
              <p style={{ fontWeight: 'bold', fontSize: 20, margin: 0, marginLeft: 40, }}>WE ARE HIRING!</p>
              <Image src={hiring} style={{ height: 30, width: 30, marginLeft: 15 }} />
            </div>
            <div>
              <p style={{ fontSize: 20, marginLeft: 40, }}>Join Our Team.</p>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Link href="/Career" className="nav-link active" style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ fontWeight: 'bold', color: '#0d6efd', marginRight: 5 }}>Apply Now</p>
              <Image src={arrow} style={{ height: 40, width: 40, marginBottom: 15, marginRight: 40 }} />
            </Link>
          </div>
        </div>
      </div>
      <hr className="row ml-4 mr-4" />
      <section>
        <div
          style={{ textAlign: "center", marginBottom: "1%", marginTop: "1%" }}
        >
          <span>&copy;</span>
          <span>2023 KOLI infotech Pvt. Ltd. | All rights reserved.</span>
        </div>
      </section>

    </Fragment>
  );
};

export default Footer;

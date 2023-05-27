import React, { Fragment, useEffect } from "react";
import SVGlogo from "../assets/Logo/SVGlogo.svg";
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
          <div className="row col-12  mt-5" >
            <div
              className="col-lg-5  cst-footer-logo"
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
               {`We are company that offer's all type of services` } 
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
                  <div className="px-3"  data-aos="fade-up">
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
                  <div className="px-3"  data-aos="fade-up">
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
                  <div className="px-3"  data-aos="fade-up">
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
                  <div className="px-3"  data-aos="fade-up">
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
            <div className="col-lg-2">
              <p style={{ fontSize: 20, fontWeight: "bold" }}>Services</p>
              <p>How it Works</p>
              <p>Guarantee</p>
              <p>Security</p>
              <p>Report bug</p>
              <p>Pricing</p>
            </div>
            <div className="col-lg-2">
              <p style={{ fontSize: 20, fontWeight: "bold" }}>Pages</p>
              <p>About Singleton</p>
              <Link href="/career" className="nav-link active">
                <p>Jobs</p>
              </Link>
              <p>Team</p>
              <Link href="/testimonial" className="nav-link active">
                <p>Tesimonials</p>
              </Link>
              <p>Blog</p>
            </div>
            <div className="col-lg-3">
              <p style={{ fontSize: 20, fontWeight: "bold" }}>Our Address</p>
              <p style={{ fontSize: 17, fontWeight: "bold" }}>
                HEAD OFFICE - SURAT
              </p>
              <p>4087- 4094, Rajmahal mall, Dindoli</p>
              <p>Surat, Gujarat - 394210</p>
              <p style={{ fontSize: 17, fontWeight: "bold" }}>
                BRANCH OFFICE - AHMEDABAD
              </p>
              <p>A - 501, Sahajanand Complex Shahibaug, Ahmedabad - 380004</p>
              <Link
                href="mailto:info@koliinfotech.com"
                className="nav-link active"
                target="_blank"
              >
                <p>info@koliinfotech.com</p>
              </Link>
              <p>
                +91-9773149186 <br />
                +91-8200591443
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="row ml-4 mr-4" />
      <section>
        <div
          style={{ textAlign: "center", marginBottom: "4%", marginTop: "4%" }}
        >
          <span>&copy;</span>
          <span>2023 KOLI infotech Pvt. Ltd. | All rights reserved.</span>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;

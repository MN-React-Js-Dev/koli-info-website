import React, { Fragment } from "react";
import BlueLogo from "../assets/Logo/bluelogo.png";
import Link from "next/link";
import Image from "next/image";
import SVGlogo from "../assets/Logo/SVGlogo.svg";
import { motion } from "framer-motion";

const Header = () => {
   
   return (
    <Fragment>
      <section> 
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid cst-nav p-3 header">
                <Link href="/" className="nav-link active">
                  <Image src={SVGlogo} alt={BlueLogo} className="img-fluid" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      ></a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <ul className="navbar-nav me-auto  mb-lg-0 header-ul"
                    >
                      <motion.div
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <li className="nav-item">
                          <Link
                            className="nav-link active header-links "
                            aria-current="page"
                            href="/about-company"
                          >
                            <span>Company</span>
                          </Link>
                        </li>
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
                        <li className="nav-item">
                          <Link
                            className="nav-link active header-links"
                            aria-current="page"
                            href="/mobile-app-development"
                          >
                            <span>Services</span>
                          </Link>
                        </li>
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
                        <li className="nav-item">
                          <Link
                            className="nav-link active header-links"
                            aria-current="page"
                            href="/solution-on-demand"
                          >
                            <span> Solutions</span>
                          </Link>
                        </li>
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
                        <li className="nav-item">
                          <Link
                            className="nav-link active header-links"
                            aria-current="page"
                            href="/portfolio"
                          >
                            <span>OurPortfolio</span>
                          </Link>
                        </li>
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
                        <li className="nav-item">
                          <Link
                            className="nav-link active header-links"
                            aria-current="page"
                            href="/OurCulture"
                          >
                            <span>OurCulture</span>
                          </Link>
                        </li>
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
                        <li className="nav-item">
                          <Link
                            className="nav-link active header-links"
                            aria-current="page"
                            href="/Career"
                          >
                            <span>Career</span>
                          </Link>
                        </li>
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
                        <li className="nav-item">
                          <Link
                            className="btn contact-us-btn header-links"
                            type="submit"
                            href="/contact-us"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </motion.div>
                    </ul>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;

import React, { Fragment } from "react";
import BlueLogo from "../assets/Logo/bluelogo.png";
import Link from "next/link";
import Image from "next/image";
import SVGlogo from "../assets/Logo/SVGlogo.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter()
  return (
    <Fragment>
      <section>
        <div className="header-wrap">
          <div className="container" >
            <div className="row">
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid cst-nav header">
                  <Link href="/" className="nav-link active">
                    <Image src={SVGlogo} alt={BlueLogo} className="img-fluid" style={{marginLeft: "-8px"}}/>
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
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                        ></Link>
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
                          <li class="nav-item dropdown">
                            <span class="nav-link drop-btn" aria-expanded="false">
                              Company
                            </span>
                            <ul class="dropdown-menu collap-manu">
                              <li><Link class="dropdown-item" href="/who-we-are">Who We Are!</Link></li>
                              <li><Link class="dropdown-item" href="/our-team">Our Team</Link></li>
                              <li><Link class="dropdown-item" href="/testimonial">Testimoial</Link></li>
                              <li><Link class="dropdown-item" href="/portfolio">Our Portfolio</Link></li>
                              <li><Link class="dropdown-item" href="/about-company">About Us</Link></li>
                              <li><Link class="dropdown-item" href="/OurCulture">Our Culture</Link></li>
                            </ul>
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
                          <li class="nav-item dropdown">
                            <span class="nav-link drop-btn" aria-expanded="false">
                              Services
                            </span>
                            <ul class="dropdown-menu collap-manu">
                              <li><Link class="dropdown-item" href="/web-development">Web Development</Link></li>
                              <li><Link class="dropdown-item" href="/mobile-app-development">Mobile App Development</Link></li>
                              <li><Link class="dropdown-item" href="/data-security">Data Security</Link></li>
                              <li><Link class="dropdown-item" href="/hire-developer">Hire Dedicated Developers</Link></li>
                            </ul>
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
                              className={`${router.pathname === "/solution-on-demand" ? 'activemenu' : ''}  nav-link active header-links `}
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
                              className={`${router.pathname === "/Career" ? 'activemenu' : ''}  nav-link active header-links `}
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
        </div>
      </section>
    </Fragment>
  );
};

export default Header;

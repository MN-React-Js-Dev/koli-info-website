import React, { Fragment } from "react";
import BlueLogo from "../assets/Logo/bluelogo.png";
import Link from "next/link";
import Image from "next/image";
import SVGlogo from "../assets/Logo/SVGlogo.svg";

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
                    <ul className="navbar-nav me-auto  mb-lg-0 header-ul">
                      <li className="nav-item">
                        <Link
                          className="nav-link active header-links"
                          aria-current="page"
                          href="/aboutCompany"
                        >
                          Company
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active header-links"
                          aria-current="page"
                          href="/MobiAppDevelopment"
                        >
                          Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active header-links"
                          aria-current="page"
                          href="/SolutionOnDemand"
                        >
                          Solutions
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active header-links"
                          aria-current="page"
                          href="/portfolio"
                        >
                          Our Portfolio
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active header-links"
                          aria-current="page"
                          href="/Career"
                        >
                          Career
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="btn contact-us-btn header-links"
                          type="submit"
                          href="/ContactUs"
                        >
                          Contact Us
                        </Link>
                      </li>
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

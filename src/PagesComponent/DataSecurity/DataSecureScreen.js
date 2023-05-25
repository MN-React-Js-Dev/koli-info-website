import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import DataSecure2 from "../../assets/images/DataSecure-2.png";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import Aos from "aos";
import "aos/dist/aos.css";

const DataSecureScreen = () => {

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1200);
  }, []);

  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="row"></div>
          <h1 className=" text-center mt-5 comman-heading" data-aos="fade-down">Data Privacy</h1>
          <div className="cst-hr-for-process mb-3" data-aos="fade-up"/>
          <div className="Data-border" data-aos="fade-up">
            <p>{COMMAN_TEXT}</p>
            <br />
            <p>{COMMAN_TEXT}</p>
            <br />
            <p>{COMMAN_TEXT}</p>
          </div>
          <h1 className="text-center mt-5 comman-heading"  data-aos="fade-down">
            OverView Of Our NDA
          </h1>
          <div className="cst-hr-for-process mb-3"  data-aos="fade-up" />
          <div className="p-3"  data-aos="fade-down">
            <p>{COMMAN_TEXT}</p>
            <br />
            <p>{COMMAN_TEXT}</p>
          </div>
          <div style={{ display: "flex" }} className="text-center row">
            <div className="col-lg-6 data-li">
              <p className="key-clauses comman-heading"  data-aos="flip-up">
                Key Clauses of an NDA
              </p>
              <ul class="list-group text-start"  data-aos="fade-right">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </li>
                <li> sed do eiusmod tempor incididunt ut labore et dolore </li>
                <li>magna aliqua. Ut enim ad minim veniam, quis nostrud </li>
                <li>exercitation ullamco laboris nisi ut aliquip ex ea </li>
                <li>commodo consequat. Duis aute irure dolor in </li>
                <li>reprehenderit in voluptate velit esse cillum dolore</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <Image
                src={DataSecure2}
                style={{ height: "300px", width: "300px" }}
              ></Image>
            </div>
          </div>
          <h1 className="text-center mt-5 comman-heading"  data-aos="flip-down">
            How We Keep Your App Idea Safe
          </h1>
          <div className="cst-hr-for-process mb-3" />
          <div className="Data-border" data-aos="fade-up">
            <p>{COMMAN_TEXT}</p>
            <br />
            <p>{COMMAN_TEXT}</p>
            <br />
            <p>{COMMAN_TEXT}</p>
          </div>
          <h1 className="text-center mt-5 comman-heading"data-aos="flip-up">
            Security Measures to Prevent Data Breach
          </h1>
          <div className="cst-hr-for-process mb-3" />
          <div className="Data-border" data-aos="fade-down">
            <p>{COMMAN_TEXT}</p>
          </div>
          <div style={{ display: "flex" }} className="text-center row mt-5">
            <div className="col-lg-6 data-li" data-aos="fade-down">
              <p className="key-clauses" style={{ fontWeight: "bold" }}>
                General Security
              </p>
              <ul class="list-group text-start">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </li>
                <li> sed do eiusmod tempor incididunt ut labore et dolore </li>
                <li>magna aliqua. Ut enim ad minim veniam, quis nostrud </li>
                <li>exercitation ullamco laboris nisi ut aliquip ex ea </li>
                <li>commodo consequat. Duis aute irure dolor in </li>
                <li>reprehenderit in voluptate velit esse cillum dolore</li>
              </ul>
            </div>
            <div className="col-lg-6 data-li" data-aos="fade-up">
              <p className="key-clauses" style={{ fontWeight: "bold" }}>
                Network Security
              </p>
              <ul class="list-group text-start">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </li>
                <li> sed do eiusmod tempor incididunt ut labore et dolore </li>
                <li>magna aliqua. Ut enim ad minim veniam, quis nostrud </li>
                <li>exercitation ullamco laboris nisi ut aliquip ex ea </li>
                <li>commodo consequat. Duis aute irure dolor in </li>
                <li>reprehenderit in voluptate velit esse cillum dolore</li>
              </ul>
            </div>
          </div>
          <h1 className="text-center mt-5 comman-heading" data-aos="fade-down">
            Operational Security
          </h1>
          <div className="cst-hr-for-process mb-3" />
          <div className="Data-border mb-5" data-aos="fade-up">
            <p>{COMMAN_TEXT}</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default DataSecureScreen;

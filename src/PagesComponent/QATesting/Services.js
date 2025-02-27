import React, { Fragment, useEffect } from "react";
import {
  AIML_P5,
  AIML_P6,
  QATEST_P1,
  QATEST_P2,
  QATEST_P3,
  QATEST_P4,
  QATEST_P7,
  QATEST_P8,
} from "@/commonComponent/commanText";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import automationTesting from "../../assets/images/automation-testing.gif";
import manualtesting from "../../assets/images/manualtesting.gif";
import securitySoftwareTesting from "../../assets/images/securitySoftwareTesting.gif";
import performanceTesting from "../../assets/images/performance-testing.gif";
import ApiTesting from "../../assets/images/ApiTesting.gif";

const QaAndTestingServices = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="mb-5 why-choos" style={{ marginTop: "120px" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6" data-aos="fade-right">
              <h3 className="whychooseTxt commanFont">Automation Testing</h3>
              <div className="hr-cst mb-3"></div>
              <p>{QATEST_P1}</p>
              <p>{QATEST_P2}</p>
            </div>
            <div className="col-sm-6">
              <Image
                className="img-fluid img-responsive rounded mb-5"
                src={automationTesting}
                alt="Image not found"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Image
                className="img-fluid img-responsive rounded mb-5 "
                src={manualtesting}
                alt="Image not found"
              />
            </div>
            <div className="col-sm-6" data-aos="fade-right">
              <h2 className="whychooseTxt commanFont">Manual Testing</h2>
              <div className="hr-cst mb-3"></div>
              <p>{QATEST_P3}</p>
              <p>{QATEST_P4}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row">
            <div className="col-sm-6" data-aos="fade-right">
              <h3 className="whychooseTxt commanFont">
                Security Software Testing
              </h3>
              <div className="hr-cst mb-3"></div>
              <p>{AIML_P5}</p>
              <p>{AIML_P6}</p>
            </div>
            <div className="col-sm-6">
              <Image
                className="img-fluid img-responsive rounded mb-5 "
                src={securitySoftwareTesting}
                alt="Image not found"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Image
                className="img-fluid img-responsive rounded mb-5 "
                src={performanceTesting}
                alt="Image not found"
              />
            </div>
            <div className="col-sm-6" data-aos="fade-right">
              <h3 className="whychooseTxt commanFont">Performance Testing</h3>
              <div className="hr-cst mb-3"></div>
              <p>{QATEST_P7}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row">
            <div className="col-sm-6" data-aos="fade-right">
              <h3 className="whychooseTxt commanFont">API Testing</h3>
              <div className="hr-cst mb-3"></div>
              <p>{QATEST_P8}</p>
            </div>
            <div className="col-sm-6">
              <Image
                className="img-fluid img-responsive rounded mb-5 "
                src={ApiTesting}
                alt="Image not found"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default QaAndTestingServices;

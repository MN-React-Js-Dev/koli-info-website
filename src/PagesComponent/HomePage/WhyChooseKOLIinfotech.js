import React, { Fragment, useEffect } from "react";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import TeamofficeImg from "../../assets/images/teamoffice.png";
import html5 from "../../assets/images/html5.png";
import css3 from "../../assets/images/css3.png";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import nodejs from "../../assets/images/nodejs.png";
import python from "../../assets/images/python.png";
import angularjs from "../../assets/images/angularjs.png";
import flutter from "../../assets/images/flutter.png";
import php from "../../assets/images/php.png";
import mysql from "../../assets/images/mysql.png";
import android from "../../assets/images/android.png";
import java from "../../assets/images/java.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const WhyChooseKOLIinfotech = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row">
            <div className="col-sm-6" data-aos="fade-right">
              <h1 className="whychooseTxt commanFont">Why Choose</h1>
              <h1 className="whychooseTxt commanFont">KOLI infotech Pvt.Ltd</h1>
              <div className="hr-cst mb-3"></div>
              <p>{COMMAN_TEXT}</p>
            </div>
            <div className="col-sm-6" data-aos="fade-left">
              <Image
                src={TeamofficeImg}
                alt="Image not found"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div
            class="row brand-style-1"
            style={{ marginTop: "100px", marginBottom: "80px" }}
          >
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={html5}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={css3}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={javascript}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={react}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={nodejs}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={python}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 mt-5 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={angularjs}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 mt-5 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={flutter}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 mt-5 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={php}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 mt-5 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={mysql}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 mt-5 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={android}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 mt-5 text-center"
              data-Aos="fade-up"
            >
              <div class="client-logo">
                <div
                  class="client-logo-img wow fadeInUp animated"
                  data-wow-delay="0.1s"
                >
                  <Image
                    src={java}
                    alt="Image not found"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WhyChooseKOLIinfotech;

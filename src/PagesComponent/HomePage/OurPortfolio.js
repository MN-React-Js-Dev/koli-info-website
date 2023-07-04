import React, { Fragment, useEffect } from "react";
import GridImage1 from "../../assets/images/IdesignImage.png";
import TTPM from "../../assets/images/ttpm.png";
import jodiBanao from "../../assets/images/jodiBanao.png";
import Onfleek from "../../assets/images/onfleek.png";
import School from "../../assets/images/1467.png";
import Image from "next/image";
import Aos from "aos";
import Link from "next/link";
import "aos/dist/aos.css";

const OurPortfolio = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="our-portfolio ">
        <div className="main-div-for-portfolio pb-5">
          <div class="container">
            <h1 class="text-center pt-5 comman-heading">Our Portfolio</h1>
            <div className="cst-hr-for-process mb-5"></div>
            <div data-aos="zoom-in portfolio">
              <div className="row">
                <div className="col-sm-3">
                  <Image
                    src={TTPM}
                    className="img-fluid"
                    alt="Image not found"
                  />
                </div>
                <div className="col-sm-3">
                  <div className="p-3 pt-5">
                    <h3 className="mobileHeadText commanFont">TTPM</h3>
                    <p className="subHeadText commanHead2">
                      Our Android app development team leverages the latest
                      frameworks like Flutter, Kotlin, and React Native to
                      create high-quality apps with smooth functionality.
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <Image
                    src={jodiBanao}
                    className="img-fluid"
                    alt="Image not found"
                  />
                </div>
                <div className="col-sm-3">
                  <div className="p-3 pt-5">
                    <h3 className="mobileHeadText commanFont">Jodi Banao</h3>
                    <p className="subHeadText commanHead2">
                      Jodii App is available in 10 languages. Jodii App paid benefits are free for women (up to 10 contacts on govt ID proof verification and profile photo submission)
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="p-3 pt-5">
                    <h3 className="mobileHeadText commanFont">
                      onfleek
                    </h3>
                    <p className="subHeadText commanHead2">
                      OnFleek is a passionate start up of humble beginnings established by a duo of dynamic brand consultants with rich experience in Strategic Consultancy in Brand & Digital Marketing.
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <Image
                    src={Onfleek}
                    className="img-fluid"
                    alt="Image not found"
                  />
                </div>
                <div className="col-sm-3">
                  <div className="p-3 pt-5">
                    <h3 className="mobileHeadText commanFont">
                      Shivam Vidhyalay
                    </h3>
                    <p className="subHeadText commanHead2">
                      Comming Soon...!
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <Image
                    src={School}
                    className="img-fluid img"
                    alt="Image not found"
                  />
                </div>
              </div>
            </div>
            <div className="portfolio-view-more pl-3">
              <Link href='/portfolio'>View more...</Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurPortfolio;

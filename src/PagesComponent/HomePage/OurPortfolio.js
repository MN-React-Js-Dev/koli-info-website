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
          <div class="container text-center">
            <h1 class="text-center pt-5 comman-heading">Our Portfolio</h1>
            <div className="cst-hr-for-process mb-5"></div>
            <div data-aos="zoom-in portfolio ">
              <div className="row col-lg-12">
                <div className="col-lg-3">
                  <Image
                    src={TTPM}
                    className=" our-portfolio-image"
                    alt="Image not found"
                  />
                </div>
                <div className="col-lg-3">
                  <div className="p-3 ">
                    <h3 className="mobileHeadText commanFont">TTPM</h3>
                    <p className="subHeadText commanHead2">
                      TigerTron is post maker website.Wich use to create Cripto currency promoting posters and banners.They manage theie user data and utilities.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <Image
                    src={jodiBanao}
                    className="our-portfolio-image text-center"
                    alt="Image not found"
                  />
                </div>
                <div className="col-lg-3">
                  <div className="p-3">
                    <h3 className="mobileHeadText commanFont">Jodi Banao</h3>
                    <p className="subHeadText commanHead2">
                      Jodii App is available in 10 languages. Jodii App paid benefits are free for women (up to 10 contacts on govt ID proof verification and profile photo submission)
                    </p>
                  </div>
                </div>
              </div>
              <div className="row pt-5 col-lg-12">
                <div className="col-lg-3">
                  <div className="p-3">
                    <h3 className="mobileHeadText commanFont">
                      onfleek
                    </h3>
                    <p className="subHeadText commanHead2">
                      OnFleek is a beauty parlour application that provide users with beauty products and service.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <Image
                    src={Onfleek}
                    alt="Image not found"
                  />
                </div>
                <div className="col-lg-3">
                  <div className="p-3">
                    <h3 className="mobileHeadText commanFont">
                      Shivam Vidhyalay
                    </h3>
                    <p className="subHeadText commanHead2">
                      Comming Soon...!
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <Image
                    src={School}
                    className="our-portfolio-image"
                    alt="Image not found"
                  />
                </div>
              </div>
            </div>
            <div className="portfolio-view-more">
              <Link href='/portfolio' class="btn contact-us-btn" type="submit">
                View more...
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurPortfolio;

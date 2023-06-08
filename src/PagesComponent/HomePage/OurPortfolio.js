import React, { Fragment, useEffect } from "react";
import GridImage1 from "../../assets/images/IdesignImage.png";
import Image from "next/image";
import Aos from "aos";
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
            <div data-aos="zoom-in">
              <div className="row">
                <div className="col-sm-3">
                  <Image
                    src={GridImage1}
                    className="img-fluid"
                    alt="Image not found"
                  />
                </div>
                <div className="col-sm-3">
                  <div className="p-3 pt-5">
                    <h3 className="mobileHeadText commanFont">Mobile App</h3>
                    <p className="subHeadText commanHead2">
                      Our Android app development team leverages the latest
                      frameworks like Flutter, Kotlin, and React Native to
                      create high-quality apps with smooth functionality.
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <Image
                    src={GridImage1}
                    className="img-fluid"
                    alt="Image not found"
                  />
                </div>
                <div className="col-sm-3">
                  <div className="p-3 pt-5">
                    <h3 className="mobileHeadText commanFont">Mobile App</h3>
                    <p className="subHeadText commanHead2">
                      Our Android app development team leverages the latest
                      frameworks like Flutter, Kotlin, and React Native to
                      create high-quality apps with smooth functionality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="p-3 pt-5">
                    <h3 className="mobileHeadText commanFont">
                      Web Development
                    </h3>
                    <p className="subHeadText commanHead2">
                      Our web design & development company offers end-to-end
                      services that cover everything from design and development
                      to maintenance and support, ensuring a seamless and
                      hassle-free experience. We create elite, responsive and
                      matchless websites with our excellent technology stacks,
                      making your dreams into reality.
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <Image
                    src={GridImage1}
                    className="img-fluid"
                    alt="Image not found"
                  />
                </div>
                <div className="col-sm-3">
                  <div className="p-3 pt-5">
                    <h3 className="mobileHeadText commanFont">
                      Web Development
                    </h3>
                    <p className="subHeadText commanHead2">
                      Our web design & development company offers end-to-end
                      services that cover everything from design and development
                      to maintenance and support, ensuring a seamless and
                      hassle-free experience. We create elite, responsive and
                      matchless websites with our excellent technology stacks,
                      making your dreams into reality.
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <Image
                    src={GridImage1}
                    className="img-fluid"
                    alt="Image not found"
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

export default OurPortfolio;

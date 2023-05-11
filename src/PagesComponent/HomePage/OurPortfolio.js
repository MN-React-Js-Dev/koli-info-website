import React, { Fragment, useEffect } from "react";
import GridImage1 from "../../assets/images/IdesignImage.png";
import GridImage2 from "../../assets/images/grid2image.png";
import Image from "next/image";

const OurPortfolio = () => {
  return (
    <Fragment>
      <section className="our-portfolio ">
        <div className="main-div-for-portfolio pb-5">
          <div class="container">
            <h1 class="text-center pt-5 comman-heading">Our Portfolio</h1>
            <div className="cst-hr-for-process mb-5"></div>
            <div className="row">
              <div className="col-sm-3">
                <Image src={GridImage1} className="img-fluid" alt='Image not found' />
              </div>
              <div className="col-sm-3">
                <div className="p-3 pt-5">
                  <h3 className="mobileHeadText commanFont">Mobile App</h3>
                  <p className="subHeadText commanHead2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <Image src={GridImage1} className="img-fluid" alt='Image not found' />
              </div>
              <div className="col-sm-3">
                <div className="p-3 pt-5">
                  <h3 className="mobileHeadText commanFont">Mobile App</h3>
                  <p className="subHeadText commanHead2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="p-3 pt-5">
                  <h3 className="mobileHeadText commanFont">Web Development</h3>
                  <p className="subHeadText commanHead2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <Image src={GridImage1} className="img-fluid" alt='Image not found' />
              </div>
              <div className="col-sm-3">
                <div className="p-3 pt-5">
                  <h3 className="mobileHeadText commanFont">Mobile App</h3>
                  <p className="subHeadText commanHead2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <Image src={GridImage1} className="img-fluid" alt='Image not found' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurPortfolio;

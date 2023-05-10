import React, { Fragment } from "react";
import ImageOne from "../../assets/images/circleimage (1).png";
import ImageTwo from "../../assets/images/circleimage (2).png";
import ImageThree from "../../assets/images/circleimage (3).png";
import ImageFoure from "../../assets/images/circleimage (4).png";
import RightImage from "../../assets/images/OurProcessBg.png";
import ourprocessAnimation from "../../assets/images/ourprocessAnimation.png";
import Image from "next/image";

const OurProcessSection = () => {
  return (
    <Fragment>
      <section className="our-process-section mb-5">
        <div className="container ">
          <h2 className="comman-heading text-center">
            Our Process
          </h2>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="row">
            <div>
              <ul className="cst-our-process">
                <li>
                  <div className="circle first-circle"></div>
                  {/* <Image
                  className="img-fluid"
                 
                  src={ourprocessAnimation}
                /> */}
                  <h2 className="text-center mt-3 mx-3 processList">
                    Planning
                  </h2>
                </li>
                <li>
                  <div className="circle second-circle mx-3"></div>
                  <h2 className="text-center mt-3 processList">Designing</h2>
                </li>
                <li>
                  <div className="circle third-circle mx-3"></div>
                  <h2 className="text-center mt-3 processList">Development</h2>
                </li>
                <li>
                  <div className="circle fourth-circle mx-3"></div>
                  <h2 className="text-center mt-3 processList">Testing</h2>
                </li>
                <li>
                  <div className="circle fifth-circle mx-3"></div>
                  <h2 className="text-center mt-3 processList">Delivery</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurProcessSection;

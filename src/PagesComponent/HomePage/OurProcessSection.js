import React, { Fragment, useEffect, useRef } from "react";
import ourProcessSection from "../../assets/images/ourProcessSection.png";
import Image from "next/image";
import Designing from "../../assets/images/Designing.png";
import Development from "../../assets/images/Development.png";
import testing2 from "../../assets/images/testing2.png";
import delivery from "../../assets/images/delivery.png";


const OurProcessSection = () => {
  return (
    <Fragment>
      <section className="our-process-section mb-5">
        <div className="container ">
          <h2 className="comman-heading text-center">Our Process</h2>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="row">
            <div>
              <ul className="cst-our-process">
                <li>
                  {/* <div className="circle first-circle"></div> */}
                  <Image
                    style={{ height: 200, width:200 }}
                    alt={"no image found"}
                    // className="img-fluid"
                    src={ourProcessSection}
                  />
                  <h2 className="text-center mt-3 mx-3 processList">
                    Planning
                  </h2>
                </li>
                <li>
                  {/* <div className="circle second-circle mx-3"></div> */}
                  <Image
                    style={{ height: 200, width:200 }}
                    alt={"no image found"}
                    // className="img-fluid"
                    // width={'20px'}
                    // height={'auto'}
                    src={Designing}
                  />
                  <h2 className="text-center mt-3 processList">Designing</h2>
                </li>
                <li>
                  {/* <div className="circle third-circle mx-3"></div> */}
                  <Image
                    style={{ height: 200, width:200 }}
                    alt={"no image found"}
                    // className="img-fluid"
                    // width={'20px'}
                    // height={'auto'}
                    src={Development}
                  />
                  <h2 className="text-center mt-3 processList">Development</h2>
                </li>
                <li>
                  {/* <div className="circle fourth-circle mx-3"></div> */}
                  <Image
                    style={{ height: 200, width:200 }}
                    alt={"no image found"}
                    // className="img-fluid"
                    // width={'20px'}
                    // height={'auto'}
                    src={testing2}
                  />
                  <h2 className="text-center mt-3 processList">Testing</h2>
                </li>
                <li>
                  {/* <div className="circle fifth-circle mx-3"></div> */}
                  <Image
                    style={{ height: 200, width:200 }}
                    alt={"no image found"}
                    // className="img-fluid"
                    // width={'20px'}
                    // height={'auto'}
                    src={delivery}
                  />
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

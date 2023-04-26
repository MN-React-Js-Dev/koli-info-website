import React from "react";
import Image from "next/image";
import mapImage from "../../assets/images/map.png";

const ContactUsScreen = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row  m-3 d-flex">
            {/* <div className=""> */}
              <div className="col-lg-5 p-3">
                <h1 className=" pt-5 mt-5 bold-font">Share Your App URL</h1>
                <div className="cst-hr-for-process" />
                <div className=" m-2 mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                    name="Your Name"
                  />
                </div>
                <div className=" m-2 mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    name="Email"
                  />
                </div>
                <div className=" m-2 mb-3">
                  <input
                    type="Number"
                    class="form-control"
                    placeholder="Phone Number"
                    name="Phone Number"
                  />
                </div>
                <a class="btn contact-us-btn m-3" type="submit">
                  Send Now
                </a>
                <div className="m-3 mb-4">
                  <p className="boldP">USA :</p>
                  <p>
                    We are a company that offers design and develop services for
                    you from initial sketches to the final construction.
                  </p>
                </div>
                <div className="m-3">
                  <p  className="boldP">India :</p>
                  <p>
                    We are a company that offers design and develop services for
                    you from initial sketches to the final construction.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 p-3">
                <Image src={mapImage} className="img-fluid" />
              </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsScreen;

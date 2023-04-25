import React from "react";
import Image from "next/image";
import mapImage from "../../assets/images/map.png";

const ContactUsScreen = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row text-center m-5">
            <div className="d-flex">
              <div className="col-5 p-3">
                <h1 className=" pt-5 mt-5 bold-font">Share Your App URL</h1>
                <div className="cst-hr-for-process " />
              </div>
              <div className="col-7 p-3">
                <Image src={mapImage} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsScreen;

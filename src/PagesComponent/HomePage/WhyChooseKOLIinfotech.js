import React, { Fragment, useEffect } from "react";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import TeamofficeImg from "../../assets/images/teamoffice.png";
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
            <div className="col-sm-6"  data-aos="fade-right">
              <h1 className="whychooseTxt commanFont">Why Choose</h1>
              <h1 className="whychooseTxt commanFont">KOLI infotech</h1>
              <div className="hr-cst mb-3"></div>
              <p>{COMMAN_TEXT}</p>
            </div>
            <div className="col-sm-6" data-aos="fade-left">
              <Image src={TeamofficeImg}  alt='Image not found' className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WhyChooseKOLIinfotech;

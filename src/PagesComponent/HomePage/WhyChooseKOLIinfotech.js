import React, { useEffect } from "react";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import TeamofficeImg from "../../assets/images/teamoffice2.png";
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
    <section className="mb-5 mt-5 why-choos" style={{ paddingTop: "60px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h1 className="whychooseTxt fw-bold text-center text-lg-start">
              Why Choose <span style={{ color: "#3f689f" }}>KOLI</span> Infotech
              Pvt. Ltd.
            </h1>
            <div className="hr-cst mb-3 mx-auto mx-lg-0"></div>
            <p className="text-muted text-center text-lg-start">
              {COMMAN_TEXT}
            </p>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-down">
            <Image
              className="img-fluid rounded mx-auto d-block"
              src={TeamofficeImg}
              alt="Image not found"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKOLIinfotech;

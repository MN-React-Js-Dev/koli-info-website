import React, { Fragment, useEffect } from "react";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import TeamofficeImg from "../../assets/images/teamoffice2.png";
import html5 from "../../assets/images/html5.png";
import css3 from "../../assets/images/css3.png";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import nodejs from "../../assets/images/nodejs.png";
import python from "../../assets/images/python.png";
import angularjs from "../../assets/images/angularjs.png";
import flutter from "../../assets/images/flutter.png";
import php from "../../assets/images/php.png";
import mysql from "../../assets/images/mysql.png";
import android from "../../assets/images/android.png";
import java from "../../assets/images/java.png";
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
    <>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row">
            <div className="col-sm-6" >
              <h1 className="whychooseTxt commanFont ">Why Choose</h1>
              <h1 className="whychooseTxt commanFont"><span style={{color:"#3f689f"}}>KOLI</span> infotech Pvt. Ltd.</h1>
              <div className="hr-cst mb-3"></div>
              <p>{COMMAN_TEXT}</p>
            </div>
            <div className="col-sm-6" data-aos="fade-down">
              <Image
                className="img-fluid img-responsive rounded"
                src={TeamofficeImg}
                alt="Image not found"
              />
            </div>
          </div>
        </div>
      </section>
   </>
  );
};

export default WhyChooseKOLIinfotech;

import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import CostumMobi from "../../assets/images/costum-mobile.png";
import trophy from "../../assets/images/trophy.png";
import like from "../../assets/images/like.png";
import rating from "../../assets/images/rating.png";
import userInterface from "../../assets/images/user-interface.png";
import WebDesignImage from "../../assets/images/webdesign1.png";
import WebDesignImage2 from "../../assets/images/webdesign2.png";
import WebDesignImage3 from "../../assets/images/webdesign3.png";
import WebDesignImage4 from "../../assets/images/webdesign4.png";
import WebDesignImage5 from "../../assets/images/webdesign5.png";
import WebDesignImage6 from "../../assets/images/webdesign6.png";
import smartphone from "../../assets/images/smartphone.png";
import { Inder } from "next/font/google";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import Aos from "aos";
import "aos/dist/aos.css";




const DescriptionSection = () => {

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section>
        <div className="container">

          <div className="container">
            <h1 className="text-center  pt-5  bold-font" data-aos="flip-down">
              ReactNative Developer</h1>
            <div className="cst-hr-for-process" data-aos="flip-down" />

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <h1 style={{ color: '#2a64f9', fontSize: 20 }} data-aos="flip-down">
                2+ Years Experience</h1>
              <h1 style={{ color: '#2a64f9', fontSize: 20 }} data-aos="flip-down">
                2+ Years Experience</h1>
              <h1 style={{ color: '#2a64f9', fontSize: 20 }} data-aos="flip-down">
                2+ Years Experience</h1>
            </div>
            <div className="mt-5">
              <p>We are looking for an experienced and passionate ReactNative Developer.</p>
              <p>Do you consider yourself to be a creative/out-of-the-box thinker in an effort to raise the bar high in development? If yes, you might just be the right member we are looking for. </p>
            </div>
          </div>
        </div>
      </section>


    </Fragment>
  );
};

export default DescriptionSection;

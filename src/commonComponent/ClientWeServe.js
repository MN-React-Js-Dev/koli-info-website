import React, { Fragment } from "react";
import Image from "next/image";
import Slider from "react-slick";
import AmericanExpress from "../assets/images/AmericanExpress.png";
import ByjusLogo1 from "../assets/images/ByjusLogo1.png";
import HDFC from "../assets/images/HDFC.png";
import Axis from "../assets/images/Axis.png";
import ooredoo from "../assets/images/Ooredoo-Logo.png";
import Astrosadhna from "../assets/images/Astrosadhna2.webp";
import SetFlow from "../assets/images/SetFlow.png";
import jodiBanao from "../assets/images/jodiBanao.png";
import turing from "../assets/images/Turing_Logo.jpg";
import aaban from "../assets/images/aabanlogo_new.png";
import VoiceocLogo from "../assets/images/voiceoc_newest.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientWeServe = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <section className="onDemandImageCarousal m-3">
        <div className="container">
          <h3 className="text-center pt-5 comman-heading">Clients We Served</h3>
          <div className="cst-hr-for-process mb-5"></div>
          <Slider {...settings}>
            <div className="slide-item">
              <Image
                src={AmericanExpress}
                alt="American Express"
                className="slide-img"
              />
            </div>

            <div className="slide-item">
              <Image src={ByjusLogo1} alt="Byju's Logo" className="slide-img" />
            </div>
            <div className="slide-item">
              <Image
                src={jodiBanao}
                alt="Jodi Banao Logo"
                className="slide-img"
              />
            </div>
            <div className="slide-item">
              <Image src={HDFC} alt="HDFC Logo" className="slide-img" />
            </div>
            <div className="slide-item">
              <Image src={SetFlow} alt="SetFlow Logo" className="slide-img" />
            </div>
            <div className="slide-item">
              <Image src={Axis} alt="Axis Logo" className="slide-img" />
            </div>
            <div className="slide-item">
              <Image src={ooredoo} alt="ooredoo Logo" className="slide-img" />
            </div>
            <div className="slide-item">
              <Image
                src={Astrosadhna}
                alt="Astrosadhna Logo"
                className="slide-img"
              />
            </div>
            <div className="slide-item">
              <Image src={turing} alt="Turing Logo" className="slide-img" />
            </div>
            <div className="slide-item">
              <Image
                src={VoiceocLogo}
                alt="Voiceoc Logo"
                className="slide-img"
              />
            </div>
            <div className="slide-item">
              <Image src={aaban} alt="Aaban Logo" className="slide-img" />
            </div>
          </Slider>
        </div>
      </section>
    </Fragment>
  );
};

export default ClientWeServe;

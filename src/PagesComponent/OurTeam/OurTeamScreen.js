import React, { useState, useRef, Fragment, useEffect } from "react";
import CEOimage from '../../assets/images/ajay-koli.jpeg'
import CTOimage from '../../assets/images/Nihal-koli.jpg'
import Avtar from '../../assets/images/middle.png'
import Image from "next/image";
import LeftArrow from '.././../assets/images/leftArrow.png'
import RightArrow from '.././../assets/images/rightArrow.png'
import Aos from "aos";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "aos/dist/aos.css";
import { CEO_QUOTES } from "@/commonComponent/commanText";
import { CTO_QUOTES } from "@/commonComponent/commanText";

const OurTeamScreen = () => {
  const data = [
    {
      image: CEOimage,
      Name: "Ajay Koli",
      Position: "Chief Executive Office",
    },
    {
      image: CTOimage,
      Name: "Nihal Koli",
      Position: "Chief Technician Office",
    },
  ];
  const carousel = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);
  const carousel2 = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const handleLeftClickForTM = (e) => {
    e.preventDefault();
    carousel2.current.scrollLeft -= carousel2.current.offsetWidth;
  };
  const handleRightClickForTM = (e) => {
    e.preventDefault();
    carousel2.current.scrollLeft += carousel2.current.offsetWidth;
  };
  return (
    <Fragment>
      <section className="our-services">
        <div className="container">
          <div className=" mb-5" />
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-sm-4 mb-4">
              <div className="p-5" style={{ textAlign: 'center' }}>
                <Image
                  src={CEOimage}
                  alt='Image not find !'
                  className="img-fluid"
                  style={{ height: '300px', width: '260px', borderRadius: '10px' }}
                />
                <h3 >Ajay Koli</h3>
                <p className=" commanFont">Chief Executive Officer</p>
              </div>
            </div>
            <div className="col-sm-8 mb-4">
              <p>{CEO_QUOTES}</p>
            </div>
          </div>
          {/* <div className=" mb-5" /> */}
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-sm-8 mb-4">
              <p>{CTO_QUOTES}</p>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5" style={{ textAlign: 'center' }}>
                <Image
                  src={CTOimage}
                  alt='Image not find !'
                  className="img-fluid"
                  style={{ height: '300px', borderRadius: '10px' }}
                />
                <h3 >Nihal Koli</h3>
                <p className="commanFont">Chief Technology Officer</p>
              </div>
            </div>
          </div>
          <h1 class="text-center pt-5 comman-heading">Our Team Leaders</h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className=" mb-5" />
          <div className="row">
            <div
              className="img-slide-box"
              ref={carousel}
              data-aos="fade-down"
            >
              <div className="col-sm-4 mb-3">
                <div className="card p-5 cst-border-cls" style={{ alignItems: 'center' }}>
                  <Image
                    src={Avtar}
                    alt='team leader image'
                    className="mb-4 mt-4 img-fluid "
                  />
                  <h2 className="serviceheadingText">Team Leader</h2>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card p-5 cst-border-cls" style={{ alignItems: 'center' }}>
                  <Image
                    src={Avtar}
                    alt='team leader image'
                    className="mb-4 mt-4 img-fluid "
                  />
                  <h2 className="serviceheadingText">Team Leader</h2>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card p-5 cst-border-cls" style={{ alignItems: 'center' }}>
                  <Image
                    src={Avtar}
                    alt='team leader image'
                    className="mb-4 mt-4 img-fluid "
                  />
                  <h2 className="serviceheadingText">Team Leader</h2>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card p-5 cst-border-cls" style={{ alignItems: 'center' }}>
                  <Image
                    src={Avtar}
                    alt='team leader image'
                    className="mb-4 mt-4 img-fluid "
                  />
                  <h2 className="serviceheadingText">Team Leader</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons m-3 text-center">
            <button onClick={handleLeftClick} className="m-4 p-1">
              {/* <AiOutlineLeft /> */}
              <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={LeftArrow}></Image>
            </button>
            <button onClick={handleRightClick} className="m-4 p-1">
              {/* <AiOutlineRight /> */}
              <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={RightArrow}></Image>
            </button>
          </div>
          <h1 class="text-center pt-5 comman-heading">Our Team Members</h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className=" mb-5" />
          <div className="row">
            <div
              className="img-slide-box"
              ref={carousel2}
              data-aos="fade-down"
            >
              <div className="col-sm-4 mb-3">
                <div className="card p-5 cst-border-cls" style={{ alignItems: 'center' }}>
                  <Image
                    src={Avtar}
                    alt='team leader image'
                    className="mb-4 mt-4 img-fluid "
                  />
                  <h2 className="serviceheadingText">Team Member</h2>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card p-5 cst-border-cls" style={{ alignItems: 'center' }}>
                  <Image
                    src={Avtar}
                    alt='team leader image'
                    className="mb-4 mt-4 img-fluid "
                  />
                  <h2 className="serviceheadingText">Team Member</h2>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card p-5 cst-border-cls" style={{ alignItems: 'center' }}>
                  <Image
                    src={Avtar}
                    alt='team leader image'
                    className="mb-4 mt-4 img-fluid "
                  />
                  <h2 className="serviceheadingText">Team Member</h2>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card p-5 cst-border-cls" style={{ alignItems: 'center' }}>
                  <Image
                    src={Avtar}
                    alt='team leader image'
                    className="mb-4 mt-4 img-fluid "
                  />
                  <h2 className="serviceheadingText">Team Member</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons m-3 text-center">
            <button onClick={handleLeftClickForTM} className="m-4 p-1">
              {/* <AiOutlineLeft /> */}
              <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={LeftArrow}></Image>
            </button>
            <button onClick={handleRightClickForTM} className="m-4 p-1">
              {/* <AiOutlineRight /> */}
              <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={RightArrow}></Image>
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default OurTeamScreen;

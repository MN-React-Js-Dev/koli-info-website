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
import { getAllEmployeeStart } from "@/Redux/module/getAllEmployee";
import { useDispatch, useSelector } from "react-redux";

const OurTeamScreen = () => {
  const [data, setData] = useState()
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state?.employeeData?.allemployee)

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

  useEffect(() => {
    if (employeeData != null) {
      setData(employeeData?.data?.data?.rows);
    }
  }, [employeeData]);

  useEffect(() => {
    dispatch(getAllEmployeeStart());
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
                  className="lead-image"
                  // style={{ height: '300px', width: '260px', borderRadius: '10px' }}
                />
                <h3 >Ajay Koli</h3>
                <p className=" commanFont">Chief Executive Officer</p>
              </div>
            </div>
            <div className="col-sm-8 mb-4 ourTeam-quotes">
              <p>{CEO_QUOTES}</p>
            </div>
          </div>
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-sm-8 mb-4">
              <p className="text-start ourTeam-quotes">{CTO_QUOTES}</p>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5" style={{ textAlign: 'center' }}>
                <Image
                  src={CTOimage}
                  alt='Image not find !'
                  className="lead-image"
                  // style={{ height: '300px', borderRadius: '10px' }}
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
              {data?.map((item, index) => {
                if (item.position == "Team Leader") {
                  console.log('employeeData~~~~~~~>', item.firstName);
                  return (
                    <div className="col-sm-4 mb-3" key={index}>
                      <div className="card p-1 team-card" >
                        <Image
                          src={item.image}
                          width={100}
                          height={100}
                          alt='team leader image'
                          className="mb-4 mt-4  team-images"
                        />
                        <h2 className="serviceheadingText">{item.firstName + " " + item.lastName}</h2>
                        <span>{item.position}</span>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className="buttons m-3 text-center">
            <button onClick={handleLeftClick} className="m-4 p-1">
              <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={LeftArrow}></Image>
            </button>
            <button onClick={handleRightClick} className="m-4 p-1">
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
              {data?.map((item,index) => {
                if (item.position !== "Team Leader") {
                  return (
                    <div className="col-sm-4 mb-3" key={index}>
                      <div className="card p-1 pb-2 team-card" style={{ alignItems: 'center', minHeight: '390px' }}>
                        <Image
                          src={item.image}
                          width={100}
                          height={100}
                          alt='team leader image'
                          className="mb-4 mt-4 team-images "
                        />
                        <h2 className="serviceheadingText">{item.firstName + " " + item.lastName}</h2>
                        <span>{item.position}</span>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className="buttons m-3 text-center">
            <button onClick={handleLeftClickForTM} className="m-4 p-1">
              <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={LeftArrow}></Image>
            </button>
            <button onClick={handleRightClickForTM} className="m-4 p-1">
              <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={RightArrow}></Image>
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default OurTeamScreen;

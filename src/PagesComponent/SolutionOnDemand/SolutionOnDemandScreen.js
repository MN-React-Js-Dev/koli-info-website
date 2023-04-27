import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SODimage1 from "../../assets/images/SODimage1.png";
import SODimage2 from "../../assets/images/SODimage2.png";
import SODimage3 from "../../assets/images/SODimage3.png";
import bookindMdl from "../../assets/images/bookindMdl.png";
import appPay from "../../assets/images/appPay.png";
import order from "../../assets/images/order.png";
import schedule from "../../assets/images/schedule.png";
import trackOrder from "../../assets/images/track.png";
import realTimecall from "../../assets/images/realTcall.png";
import onDemCrsl1 from "../../assets/images/onDemCrsl-1.png";
import onDemCrsl2 from "../../assets/images/onDemCrsl-2.png";
import onDemCrsl3 from "../../assets/images/onDemCrsl-3.png";
// ------------------------------------------------------------------

const SolutionOnDemandScreen = () => {
  // const handleDragStart = (e) => e.preventDefault();
  // const [data, setData] = useState([]);
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <>
      <section>
        <div
          className="container mt-5"
          style={{
            background: "#3F689F",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <div className="row  text-center p-5 m-5">
            <div className="col-lg-4">
              <div className="whiteBack">
                {/* <Image src={whiteBackg} className="whiteBack" /> */}
                <Image className="SODimage1 img-fluid" src={SODimage1} />
              </div>
              <p>Developed 40+ On-Demand Mobile Apps and Solutions</p>
            </div>
            <div className="col-lg-4">
              <div className="whiteBack">
                <Image className="SODimage1 img-fluid" src={SODimage2} />
              </div>
              <p>A Dedicated Team of On-Demand App Developers</p>
            </div>
            <div className="col-lg-4">
              <div className="whiteBack">
                <Image className="SODimage1 img-fluid" src={SODimage3} />
              </div>
              <p>Developed 40+ On-Demand Mobile Apps and Solutions</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 mt-5 comman-heading">
            Top On Demand App Development Company
          </h1>
          <div className="cst-hr-for-process mb-3" />
          <div className="row m-5">
            <div className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
              <a
                href="#"
                className="btn btn-danger m-4 get-consultancy"
                style={{
                  borderRadius: "50px",
                  // padding: "15px 55px",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                Get Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="onDemandImageCarousal m-3">
        <div className="">
          <h1 className="text-center pt-5 comman-heading">Top On-Demand Mobile Apps & Solutions
            Developed by Us</h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="row blog text-center">
            <div className="img-slide-box" ref={carousel}>
              <div className="item">
                <div className="image">
                  {/* ------------------------------------------------------------------------ */}
                  <Image src={onDemCrsl1} alt="image" className="slide-img m-2" />
                  <Image src={onDemCrsl2} alt="image" className="slide-img m-2" />
                  <Image src={onDemCrsl3} alt="image" className="slide-img m-2" />
                  <Image src={onDemCrsl1} alt="image" className="slide-img m-2" />
                  <Image src={onDemCrsl2} alt="image" className="slide-img m-2" />
                  <Image src={onDemCrsl3} alt="image" className="slide-img m-2" />
                  <Image src={onDemCrsl1} alt="image" className="slide-img m-2" />
                  {/* ------------------------------------------------------------------------ */}
                </div>
              </div>
            </div>
            <div className="buttons m-3">
              <button onClick={handleLeftClick} className="m-3 p-3"><AiOutlineLeft /></button>
              <button onClick={handleRightClick} className="m-3 p-3"><AiOutlineRight /></button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 comman-heading">
            Key Features of On-Demand App Solutions
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row">
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={bookindMdl} className="mb-4 mt-4 img-fluid " />
                <p>Booking Module</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={appPay} className="mb-4 mt-4 img-fluid " />
                <p>In-App Payments</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={order} className="mb-4 mt-4 img-fluid " />
                <p>Ordering on-The-Go</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={schedule} className="mb-4 mt-4 img-fluid " />
                <p>Scheduling a booking/ order</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={trackOrder} className="mb-4 mt-4 img-fluid " />
                <p>Order Tracking</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="p-5 bold-p WebDev-dashed-border text-center ">
                <Image src={realTimecall} className="mb-4 mt-4 img-fluid " />
                <p>Real-Time calls and Messages</p>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default SolutionOnDemandScreen;

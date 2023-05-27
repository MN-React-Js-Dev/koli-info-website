import React, { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { getAllOurServicesStart } from "@/Redux/module/getOurServiceAction";
import { useDispatch, useSelector } from "react-redux";
import Design1 from "../../assets/images/design1.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  const dispatch = useDispatch();
  const [ourService, setOurService] = useState();
  const carousel = useRef(null);
  const dataSelector = useSelector((state) => state?.getOurServices);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  useEffect(() => {
    if (dataSelector != null) {
      setOurService(dataSelector?.ourServices?.data?.rows);
    }
  }, [dataSelector]);

  useEffect(() => {
    dispatch(getAllOurServicesStart());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="our-services">
        <div className="wrap-our-service">
          <div className="container">
            <h1 className="text-center comman-heading text-white pt-5">
              Our Services
            </h1>
            <div className="cst-hr-for-process mb-5"></div>
            <div className="row">
              <div
                className="img-slide-box"
                ref={carousel}
                data-aos="fade-down"
              >
                {ourService?.map(({ title, description }, index) => {
                  return (
                    <div className="col-sm-4 mb-4" key={index}>
                      <div className="card p-5 cst-border-cls service-card">
                        <Image
                          src={Design1}
                          alt={title}
                          className="mb-4 mt-4 img-fluid "
                        />
                        <h2 className="serviceheadingText">{title}</h2>
                        <p className="serviceText commanFont">{description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="buttons m-3 text-center">
              <button onClick={handleLeftClick} className="m-3 p-3">
                <AiOutlineLeft />
              </button>
              <button onClick={handleRightClick} className="m-3 p-3">
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurServices;

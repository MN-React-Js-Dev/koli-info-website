import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import CircleImg from "../../assets/images/circle.png";
import nodejs from "../../assets/images/nodejs.png";
import { getAllCurrentOpeningsStart } from "@/Redux/module/getAllCurrentOpenings";
import { useDispatch, useSelector } from "react-redux";
import Footer from "@/commonComponent/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const CareerScreen = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const Data = useSelector((state) => state?.currentOpening?.CurrentOpenings);

  useEffect(() => {
    dispatch(getAllCurrentOpeningsStart());
  }, []);

  useEffect(() => {
    if (Data != null) {
      setData(Data?.data?.data?.rows);
    }
  }, [Data]);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="testi-hero-image ">
        <div className="container">
          <h1 className=" text-center mt-5 comman-heading">Current Openings</h1>
          <div className="cst-hr-for-process mb-5" />
          {data?.map(({ job_title, experience, location }, index) => (
            <>
              <div class="card mt-3 mb-4 pt-2 pb-2 px-3" key={index} data-aos="fade-down">
                <div class="card-body">
                  <div
                    className="row card-items"
                    style={{ alignItems: "center" }}
                  >
                    <div className="col-sm-1">
                      <Image className="card-image " src={nodejs}></Image>
                    </div>
                    <div
                      className="col-sm-9"
                      style={{
                        alignItems: "center",
                        paddingLeft: "20px",
                        justifyContent: "center",
                      }}
                    >
                      <h5 className="bold-font">{job_title}</h5>
                      <span className="bold-font"> Experience : </span>
                      <span>{experience} Years</span>
                      <br />
                      <span className="bold-font"> Location : </span>
                      <span>{location}</span>
                    </div>
                    <div className="col-sm-1">
                      <a
                        href="#"
                        class="btn apply-now p-2"
                        style={{ borderRadius: "170px" }}
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default CareerScreen;

import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import CircleImg from "../../assets/images/circle.png";
import nodejs from "../../assets/images/nodejs.png";
import { getAllCurrentOpeningsStart } from "@/Redux/module/getAllCurrentOpenings";
import { useDispatch, useSelector } from "react-redux";
import Footer from "@/commonComponent/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from 'next/link'
import { useRouter } from "next/router";


const CareerScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [data, setData] = useState();
  const [openingId, SetOpeningId] = useState();
  const Data = useSelector((state) => state?.currentOpening?.CurrentOpenings);

  useEffect(() => {
    dispatch(getAllCurrentOpeningsStart());
  }, []);

  useEffect(() => {
    if (Data != null) {
      setData(Data?.data?.data?.rows);
    }
  }, [Data]);
  console.log('career page data~~~~~.',data);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  const handleClick = (id) => {
    const Id = { Id: id };
    console.log(" Id ", Id);
    router.push({
      pathname: "/JobDescription",
      query: Id
    });
  };


  return (
    <Fragment>
      <section className="testi-hero-image ">
        <div className="container">
          <h1 className=" text-center mt-5 comman-heading">Current Openings</h1>
          <div className="cst-hr-for-process mb-5" />
          {data?.map(({ job_title, experience, location, id, image }, index) => (
            <>
              <div class="card mt-3 mb-4 pt-2 pb-2 px-3 opening-card" key={index} data-aos="fade-down">
                <div class="card-body">
                  <div
                    className="row card-items"
                    style={{ alignItems: 'center' }}
                  >
                    <div className="col-sm-1">
                      {/* <Image className="card-image img-fluid " src={image} width={100} height={100} /> */}
                      <img className="card-image img-fluid " src={image} width={100} height={100} />
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
                      <span
                        onClick={() => handleClick(id)}
                        class="btn apply-now p-2"
                        style={{ borderRadius: "170px" }}
                      >
                        Apply Now
                      </span>
                    </div>
                  </div>
                </div>
              </div >
            </>
          ))}
        </div>
      </section>
    </Fragment >
  );
};

export default CareerScreen;

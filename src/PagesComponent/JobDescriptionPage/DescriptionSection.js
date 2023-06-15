import React, { Fragment, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { getSingleOpenings } from "@/Redux/module/getSingleOpenings";
import ReactHtmlParser from 'react-html-parser';


const DescriptionSection = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const Id = router.query;
  const [openingData, setOpeningData] = useState()
  const data = useSelector((State) => State.SingleOpenings)
  console.log(" data", openingData);

  useEffect(() => {
    dispatch(getSingleOpenings(Id))
  }, [])

  useEffect(() => {
    setOpeningData(data?.Openings?.data?.ourOpenings)
  }, [data.loading])

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  const handleClick = () => {
    const ID = Id ;
    console.log("sdasdasd", ID);
    router.push({
      pathname: "/ApplyJob",
      query: ID
    });
  };

  return (
    <Fragment>
      <section>
        <div className="container">

          <div className="container">
            <h1 className="text-center  pt-5  bold-font" data-aos="flip-down">
              {openingData?.job_title}</h1>
            <div className="cst-hr-for-process" data-aos="flip-down" />

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <h1 style={{ color: '#2a64f9', fontSize: 20 }} data-aos="flip-down">
                {openingData?.experience} YEARS</h1>
              <h1 style={{ color: '#2a64f9', fontSize: 20 }} data-aos="flip-down">
                FULL-TIME </h1>
              <h1 style={{ color: '#2a64f9', fontSize: 20 }} data-aos="flip-down">
                {openingData?.location.toUpperCase()}</h1>
            </div>
            <div className="mt-5">
              {ReactHtmlParser(openingData?.description)}
            </div>
            <div class="d-flex justify-content-center">
              <a class="btn contact-us-btn m-4 p-2 mb-5" type="submit" onClick={() => handleClick()}>
                Apply for this job
              </a>
            </div>
          </div>
        </div>
      </section>


    </Fragment>
  );
};

export default DescriptionSection;

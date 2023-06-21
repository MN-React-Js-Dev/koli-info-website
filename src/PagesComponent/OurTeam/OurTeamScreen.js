import React, { useState, useRef, Fragment, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllOurBlogStart } from "@/Redux/module/getOurBlogAction";
import Mobile1 from "../../assets/images/mobile1.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const OurTeamScreen = () => {
  const data = [
    {
      Image: Mobile1,
      Name: "Ajay Koli",
      Position: "Chief Executive Office",
      
      Image: Mobile1,
      Name: "Ajay Koli",
      Position: "Chief Executive Office",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="top-blogs">
        <div className="container">
          <h1 className=" text-center mt-5 bold-font">Our Top Blogs</h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="row">
            <div className="img-slide-box" data-aos="flip-up">
              {data?.map(({ Image, Name, Position }, index) => {
                return (
                  <div className="col-sm-6" key={index}>
                    <div class="card m-3 service-card">
                      <Image
                        src={Image}
                        alt="Image not found"
                        className="card-img-top"
                      />
                      <div class="card-body">
                        <h3>{Name}</h3>
                        <p class="card-text">{Position}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurTeamScreen;

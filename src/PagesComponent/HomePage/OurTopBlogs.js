import React, { useState, useRef, Fragment, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllOurBlogStart } from "@/Redux/module/getOurBlogAction";
import { motion } from "framer-motion";
import Mobile1 from "../../assets/images/mobile1.png";
import LeftArrow from '.././../assets/images/leftArrow.png'
import RightArrow from '.././../assets/images/rightArrow.png'
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsArrowLeftCircleFill, BsArrowRightCircle, BsArrowRightCircleFill, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const OurTopBlogs = () => {
  const carousel = useRef(null);
  const dispatch = useDispatch();
  const [ourBlogs, setOurBlogs] = useState();
  const data = useSelector((state) => state?.getOurBlog);
  console.log('getOurBlog~~~~~~>', ourBlogs);
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  useEffect(() => {
    if (data != null) {
      setOurBlogs(data?.ourBlog?.data?.data);
    }
  }, [data]);

  useEffect(() => {
    dispatch(getAllOurBlogStart());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="">
        <div className="container">
          <h1 className=" text-center mt-5 bold-font">Our Top Blogs</h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="row">
            <div className="img-slide-box" ref={carousel}
              // data-aos="flip-up"
              data-aos="fade-down"
            >
              {ourBlogs?.rows?.map(
                ({ created_at, title, description, image }, index) => {
                  return (
                    <div className="col-sm-4" key={index}>
                      <div class="card m-3 topblog-card">
                        {/* <div class="date-cst">
                          <span class="day">{created_at}</span>
                        </div> */}
                        <img
                          src={image}
                          width={100}
                          height={100}
                          alt="Image not found"
                          className="card-img-top"
                        />
                        <div class="card-body">
                          <h3>{title}</h3>
                          <p class="card-text">{description}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <span className="px-3 arrowIcon" ><BsFillArrowLeftCircleFill style={{ color: "black" }} onClick={handleLeftClick} /></span>
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
             <span className="px-3 arrowIcon"><BsFillArrowRightCircleFill style={{ color: "black" }} onClick={handleRightClick} /></span>
            </motion.div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurTopBlogs;

import React, { useState, useRef, Fragment, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllOurBlogStart } from "@/Redux/module/getOurBlogAction";
import Mobile1 from "../../assets/images/mobile1.png";
import LeftArrow from '.././../assets/images/leftArrow.png'
import RightArrow from '.././../assets/images/rightArrow.png'
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const OurTopBlogs = () => {
  const carousel = useRef(null);
  const dispatch = useDispatch();
  const [ourBlogs, setOurBlogs] = useState();
  const data = useSelector((state) => state?.getOurBlog);
  console.log('getOurBlog~~~~~~>',ourBlogs);
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
                        <Image
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
          <div className="buttons m-3 text-center">
          <button onClick={handleLeftClick} className="m-4 p-1">
                {/* <AiOutlineLeft /> */}
                <Image style={{borderRadius:'50%', height:'40px',width:'40px'}} src={LeftArrow}></Image>
              </button>
              <button onClick={handleRightClick} className="m-4 p-1">
                {/* <AiOutlineRight /> */}
                <Image style={{borderRadius:'50%', height:'40px',width:'40px'}} src={RightArrow }></Image>
              </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurTopBlogs;

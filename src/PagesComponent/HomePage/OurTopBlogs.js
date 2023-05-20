import Image from "next/image";
import React, { useState, useRef, Fragment } from "react";
import Mobile1 from "../../assets/images/mobile1.png";
import Mobile2 from "../../assets/images/mobile2.png";
import skyBlueLeft from "../../assets/images/skyBlueLeft.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllOurBlogStart } from "@/Redux/module/getOurBlogAction";
import { useEffect } from "react";

const OurTopBlogs = () => {
  const carousel = useRef(null);
  const dispatch = useDispatch();
  const [ourBlogs, setOurBlogs] = useState();
  const data = useSelector((state) => state?.getOurBlog);
  console.log('our blogs~~>',ourBlogs)

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

  return (
    <Fragment>
      <section className="top-blogs">
        <div className="container">
          <h1 className=" text-center mt-5 comman-heading">Our Top Blogs</h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="row">
            <div className="img-slide-box" ref={carousel}>
              {ourBlogs?.rows?.map(
                ({ created_at, title, description }, index) => {
                  return (
                    <div className="col-sm-6" key={index}>
                      <div class="card m-3 service-card">
                        <div class="date-cst">
                          {/* <span class="day">{created_at}</span> */}
                          <span>{ (new Date(created_at)).toLocaleDateString() }</span>
                        </div>
                        <Image src={Mobile1} alt='Image not found' className="card-img-top" />
                        <div class="card-body">
                          <h3 className="blog-card-titile">{title}</h3>
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
            <button onClick={handleLeftClick} className="m-3" style={{padding:"11px 16px"}}>
              <AiOutlineLeft />
            </button>
            <button onClick={handleRightClick} className="m-3" style={{padding:"11px 16px"}}>
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurTopBlogs;

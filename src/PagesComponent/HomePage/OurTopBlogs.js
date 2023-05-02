import Image from "next/image";
import React, { useState,useRef } from "react";
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
    <>
      <section className="top-blogs">
        <div className="container">
          <h1 className=" text-center mt-5 bold-font">Our Top Blogs</h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="row">
            <div className="img-slide-box" ref={carousel}>
              {ourBlogs?.rows?.map((data) => {
                return (
                  <div className="col-sm-6">
                    <div class="card m-3 service-card">
                      <div class="date-cst">
                        <span class="day">{data?.created_at}</span>
                      </div>
                      <Image src={Mobile1} className="card-img-top" />
                      <div class="card-body">
                        <h3>{data?.title}</h3>
                        <p class="card-text">{data?.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="buttons m-3 text-center">
              <button onClick={handleLeftClick} className="m-3 p-3"><AiOutlineLeft /></button>
              <button onClick={handleRightClick} className="m-3 p-3"><AiOutlineRight /></button>
            </div>
        </div>
      </section>
    </>
  );
};

export default OurTopBlogs;

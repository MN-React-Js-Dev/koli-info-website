import Image from "next/image";
import React, { useState } from "react";
import Mobile1 from "../../assets/images/mobile1.png";
import Mobile2 from "../../assets/images/mobile2.png";
import skyBlueLeft from "../../assets/images/skyBlueLeft.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllOurBlogStart } from "@/Redux/module/getOurBlogAction";
import { useEffect } from "react";

const OurTopBlogs = () => {
  const dispatch = useDispatch();
  const [ourBlogs, setOurBlogs] = useState()
  const data = useSelector((state) => state?.getOurBlog);

  useEffect(() => {
    if (data!= null) {
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
            {ourBlogs?.rows?.map((data) => {
              return (
                <div className="col-sm-6">
                  <div class="card m-3">
                    <div class="date-cst">
                      <span class="day">{data?.created_at}</span>
                    </div>
                    <Image src={Mobile1} className="card-img-top" />
                    <div class="card-body">
                      <h3>{data?.title}</h3>
                     <p class="card-text">
                        {data?.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-sm-6">
              <div class="card m-3">
                <div class="date-cst">
                  <span class="day">April 12, 2022</span>
                </div>
                <Image src={Mobile2} className="card-img-top" />
                <div class="card-body">
                  <h3>Mobile App Development</h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTopBlogs;

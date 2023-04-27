import Image from "next/image";
import React from "react";
import Mobile1 from "../../assets/images/mobile1.png";
import Mobile2 from "../../assets/images/mobile2.png";
import skyBlueLeft from "../../assets/images/skyBlueLeft.png";


const OurTopBlogs = () => {
  return (
    <>
      <section className="top-blogs">
        <div className="container">
          <h1 className=" text-center mt-5 bold-font">Our Top Blogs</h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="row">
            <div className="col-sm-6">
              <div class="card m-3">
                <div class="date-cst">
                  <span class="day">April 12, 2022</span>
                </div>
                <Image src={Mobile1} className="card-img-top" />
                <div class="card-body">
                  <h3>Mobile App Development</h3>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTopBlogs;

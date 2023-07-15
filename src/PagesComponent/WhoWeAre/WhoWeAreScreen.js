import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Image1 from "../../assets/images/WhoWeAreImage-1.png";
import Image2 from "../../assets/images/WhoWeAreImage-2.png";
import Design1 from "../../assets/images/design1.png";
import WebDevelopment1 from "../../assets/images/web-development1.png";
import Applications1Img from "../../assets/images/applications1.png";
import { getAllOurServicesStart } from "@/Redux/module/getOurServiceAction";
import { useDispatch, useSelector } from "react-redux";
import { ABOUT_KOLI_INFOTECH } from "@/commonComponent/commanText";
import Aos from "aos";
import "aos/dist/aos.css";

const WhoWeAreScreen = () => {
  const dispatch = useDispatch();
  const [ourService, setOurService] = useState();
  const dataSelector = useSelector((state) => state?.getOurServices);
  console.log('ourService~~~~~~~~>',ourService);

  useEffect(() => {
    if (dataSelector != null) {
      setOurService(dataSelector?.ourServices?.data?.rows);
    }
  }, [dataSelector]);

  useEffect(() => {
    dispatch(getAllOurServicesStart());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="p-5" style={{ display: "flex" }}>
            <div className="row" style={{ alignItems: "center" }} data-aos="fade-down" >
              <div className="col-lg-6 mt-5">
                <h1 className="text-center comman-heading">
                  About <span style={{color:"#3f689f",fontWeight:'bold'}}>KOLI</span> infotech
                </h1>
                <div className="cst-hr-for-process mb-3" />
                <p className="para-for-hero">{ABOUT_KOLI_INFOTECH}</p>
              </div>
              <div className="col-lg-6 ">
                <Image
                  src={Image1}
                  alt="Image not found"
                  className="img-fluid testi-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-services">
        <div className="container">
          <h1 className="text-center text-white pt-5 mt-5 comman-heading">
            Services We Specialise In
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row" data-aos="fade-up">
            {ourService?.map(({ title, description,icon }, index) => (
              <>
                <div className="col-sm-4 mb-4" key={index}>
                  <div className="card p-5 cst-border-cls service-card">
                    <Image
                      src={icon}
                      width={100}
                      height={100}
                      alt="img"
                      className="mb-4 mt-4 img-fluid rounded"
                    />
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 mt-5 comman-heading">
            Customized Business Solutions
          </h1>
          <div className="cst-hr-for-process mb-5" />
          <div className="row mb-4" data-aos="fade-up">
            <div className="col-sm-4 mb-4">
              <div className=" p-3 cst-border-cls">
                <Image
                  src={Design1}
                  alt="Image not found"
                  className="mb-4 mt-4 img-fluid "
                />
                <h2>Web Designing</h2>
                 <p style={{maxHeight:'100px',minHeight:'100px'}}>
                Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className=" p-3 cst-border-cls">
                <Image
                  src={WebDevelopment1}
                  alt="Image not found"
                  className="mb-4 mt-4 img-fluid "
                />
                <h2>Web Development</h2>
                <p style={{maxHeight:'100px',minHeight:'100px'}}>
                Web development is the building and maintenance of websites; it&apos;s the work that happens behind the scenes to make a website look great
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className=" p-3 cst-border-cls">
                <Image
                  src={Applications1Img}
                  alt="Image not found"
                  className="mb-4 mt-4 img-fluid "
                />
                <h2>Mobile Development</h2>
                <p style={{maxHeight:'100px',minHeight:'100px'}}>
                Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-5">
        {/* <div className="row mt-5 mb-5 "> */}
          <Image src={Image2} alt="Image not found" className="img-fluid" style={{width:'100%'}}/>
        {/* </div> */}
      </section>
    </Fragment>
  );
}

export default WhoWeAreScreen;

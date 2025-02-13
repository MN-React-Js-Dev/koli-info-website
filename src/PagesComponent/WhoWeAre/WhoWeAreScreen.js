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
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-services">
        <div className="container">
          <h3 className="text-center text-white pt-5 mt-5 fs-3 comman-heading">
            Services We Specialise In
          </h3>
          <div className="cst-hr-for-process mb-5" />
          <div className="row" data-aos="fade-up">
            {ourService?.map(({ title, description,icon }, index) => (
              <>
                <div className="col-sm-4 mb-4" key={index}>
                  <div className="card p-5 cst-border-cls service-card">
                    <img
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
          <h3 className="text-center pt-5 mt-5 comman-heading">
            Customized Business Solutions
          </h3>
          <div className="cst-hr-for-process mb-5" />
          <div className="row mb-4" data-aos="fade-up">
            <div className="col-sm-4 mb-4">
              <div className=" p-3 cst-border-cls">
                <Image
                  src={Design1}
                  alt="Image not found"
                  className="mb-4 mt-4 img-fluid "
                />
                <h3>Web Designing</h3>
                 <p style={{maxHeight:'130px',minHeight:'130px'}}>
                Web design refers to the design of websites that are displayed on the internet.It usually refers to the user experience aspects of website development rather than software development.
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
                <h3>Web Development</h3>
                <p style={{maxHeight:'120px',minHeight:'120px'}}>
                Web development involves building and maintaining websites, ensuring a seamless behind-the-scenes process to make websites visually appealing and fully functional.
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
                <h3>Mobile Development</h3>
                <p style={{maxHeight:'120px',minHeight:'120px'}}>
                Mobile app development involves creating software for mobile devices, typically using a network connection to interact with remote computing resources for functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-5">
        
        {/* <div className="row mt-5 mb-5 "> */}
          <Image src={Image2} alt="Image not found" className="img-fluid whoweareimag" style={{width:'100%',height:'auto'}}/>
        {/* </div> */}
       
      </section>
    </Fragment>
  );
}

export default WhoWeAreScreen;

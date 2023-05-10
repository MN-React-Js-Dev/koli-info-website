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

  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="p-5" style={{ display: "flex" }}>
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-lg-6 mt-5">
                <h1 className="text-center comman-heading">
                  About KOLI infotech
                </h1>
                <div className="cst-hr-for-process mb-3" />
                <p className="para-for-hero">{ABOUT_KOLI_INFOTECH}</p>
              </div>
              <div className="col-lg-6 ">
                <Image src={Image1} className="img-fluid testi-image" />
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
          <div className="row">
            {ourService?.map(({ title, description }, index) => (
              <>
                <div className="col-sm-4 mb-4" key={index}>
                  <div className="card p-5 cst-border-cls service-card">
                    <Image
                      src={Design1}
                      alt="img"
                      className="mb-4 mt-4 img-fluid "
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
          <div className="row mb-4">
            <div className="col-sm-4 mb-4">
              <div className=" p-3 cst-border-cls">
                <Image src={Design1} className="mb-4 mt-4 img-fluid " />
                <h2>Web Designing</h2>
                <p>{}</p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className=" p-3 cst-border-cls">
                <Image src={WebDevelopment1} className="mb-4 mt-4 img-fluid " />
                <h2>Web Development</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className=" p-3 cst-border-cls">
                <Image
                  src={Applications1Img}
                  className="mb-4 mt-4 img-fluid "
                />
                <h2>Mobile Development</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row mt-5 mb-5">
          <Image src={Image2} className="img-fluid" />
        </div>
      </section>
    </Fragment>
  );
};

export default WhoWeAreScreen;

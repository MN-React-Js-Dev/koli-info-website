import { useDispatch, useSelector } from "react-redux";
import Header from "@/commonComponent/Header";
import Image from "next/image";
import PortfolioImage from "../assets/images/portfolioimage.png";
import WebDesignImage from "../assets/images/webdesign1.png";
import { getAllOurProductStart } from "@/Redux/module/getOurProductAction";
import { getAllOurServicesStart } from "@/Redux/module/getOurServiceAction";
import { Fragment, useEffect, useState } from "react";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const dispatch = useDispatch();
  const [ourProduct, setOurProduct] = useState();
  const [ourService, setOurService] = useState();
  const [dataID, setDataID] = useState();
  const data = useSelector((state) => state?.getOurProduct);
  const serviceData = useSelector((state) => state?.getOurServices);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1200);
  }, []);

  useEffect(() => {
    if (data != null) {
      setOurProduct(data?.ourProduct?.data?.data);
    }
  }, [data]);

  useEffect(() => {
    if (serviceData != null) {
      setOurService(serviceData?.ourServices?.data?.rows);
    }
  }, [serviceData]);

  useEffect(() => {
    dispatch(getAllOurProductStart());
  }, []);

  useEffect(() => {
    dispatch(getAllOurServicesStart());
  }, []);

  return (
    <Fragment>
       {loader === true ? <LoaderComponent /> : console.log("null")}
      <Header />
      <section className="portfolio-section" style={{ background: "#E3E3FF" }}>
        <div className="container" data-aos="zoom-out">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-sm-6 mt-5">
              <h1 className="hero-sec-header">Portfolio</h1>
              <p className="para-for-hero">
                We are a company that offers design and develop services for you
                from initial sketches to the final construction.
              </p>
            </div>
            <div className="col-sm-6">
              <Image src={PortfolioImage} alt='Image not found' class="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="our-portfolio">
        <div className="container" data-aos="fade-down">
          <h1 className="text-center mt-5 bold-font">Our Portfolio</h1>
          <div class="col-12 mb-5 mt-3 mx-auto  d-flex justify-content-center">
            {ourService?.map(({ title, id }, index) => {
              return (
                <ul class="nav nav-pills p-3" key={index} style={{ background: "#E4ECFF" }}>
                  <li class="nav-item mx-2">
                    <a class="text-black" onClick={() => setDataID(id)}>
                      {title}
                    </a>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="row ">
            {ourProduct?.rows?.map(
              ({ id, our_service_id, title, description }, index) => {
                if (dataID === our_service_id) {
                  return (
                    <div className="col-md-4 mb-5 mt-3" key={index}>
                      <div
                        className="container"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div
                          class="card p-3"
                          style={{
                            background:
                              " linear-gradient(180deg, #2A64F9 0%, #012E4D 100%)",
                          }}
                        >
                          <div class="card-body">
                            <Image src={WebDesignImage} alt='Image not found' class="card-img-top" />
                          </div>
                        </div>
                        <div style={{ fontSize: 21, fontWeight: "600" }}>
                          <h4>{title}</h4>
                          <p>{description}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              }
            )}
          </div>
          <div className="row mb-2"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;

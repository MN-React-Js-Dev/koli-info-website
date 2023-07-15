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
import Footer from "@/commonComponent/Footer";
import { motion } from "framer-motion";
import Head from "next/head";

const Portfolio = () => {
  const dispatch = useDispatch();
  const [ourProduct, setOurProduct] = useState();
  const [ourService, setOurService] = useState();
  const [dataID, setDataID] = useState(16);
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
    }, 1500);
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
      <Head>
        <title>Our Portfolio | KOLI Infotech Pvt. Ltd.</title>
      </Head>
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
            <div className="col-sm-6 text-center">
              <Image
                src={PortfolioImage}
                alt="Image not found"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-portfolio">
        <div className="container" data-aos="fade-down">
          <h1 className="text-center mt-5 bold-font mb-5">Our Portfolio</h1>
          <div className="row" style={{ background: "#E4ECFF" }}>
            {ourService?.map(({ title, id }, index) => {
              return (
                <>
                  <div className="col-sm-4 pt-4 text-center" style={{ display: 'flex', justifyContent: 'center' }} onClick={() => { setDataID(id) }}>
                    <p className="pb-4 w-50 portfolio-service">{title}</p>
                  </div>
                </>
              );
            })}

          </div>

          <div className="row mb-5 mt-5">
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
                            <Image
                              src={WebDesignImage}
                              alt="Image not found"
                              class="card-img-top"
                            />
                          </div>
                        </div>
                        <div
                          className="m-3"
                        // style={{ fontSize: 21, fontWeight: "600" }}
                        >
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
      <section>
        <Footer />
      </section>
    </Fragment>
  );
};

export default Portfolio;

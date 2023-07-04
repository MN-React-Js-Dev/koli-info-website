import React, { Fragment, useEffect, useState } from "react";
import client1 from "../../assets/images/middle.png";
import Vector from "../../assets/images/Vector.png";
import Image from "next/image";
import Image2 from "../../assets/images/2.png";
import { getAllOurClientStart } from "@/Redux/module/getOurClientsAction";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

const TestimonialOfOurClient = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const dataSelector = useSelector((state) => state?.getOurClients?.ourClients);

  useEffect(() => {
    if (dataSelector != null) {
      setData(dataSelector?.data?.rows);
    }
  }, [dataSelector]);

  useEffect(() => {
    dispatch(getAllOurClientStart());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="testi-hero-image ">
        <div className="container">
          <div className="row">
            <div className="mt-5 mb-5">
              <h1 className="text-center mt-5 comman-heading" data-aos="flip-down">
                Testimonial Of Our Client
              </h1>
              <div className="cst-hr-for-process mb-5" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="mt-5 align-middle"
                data-aos="fade-down"
              >
                <Image src={client1} className="client-image-2" />
                <Image src={client1} className="client-image-2" />
              </div>
              {data?.map(({ name, review }, index) => (
                <>
                  <div
                    className="text-center mt-5 testi-detail-box"
                    key={index}
                    data-aos="fade-up"
                  >
                    <Image
                      src={Image2}
                      alt="Image not found"
                      className="round img-round-cst"
                    />
                    <p className="text-center text-decoration-underline client-name  pt-3">
                      {name}
                    </p>
                    <p className="text-center">{review}</p>
                    <Image
                      src={Vector}
                      alt="Image not found"
                      className="img-fluid "
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TestimonialOfOurClient;

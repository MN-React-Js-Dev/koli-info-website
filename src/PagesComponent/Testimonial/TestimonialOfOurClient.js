import React, { useEffect, useState } from "react";
import client1 from "../../assets/images/middle.png";
import Vector from "../../assets/images/Vector.png";
import Image from "next/image";
import Image2 from "../../assets/images/2.png";
import Image3 from "../../assets/images/3.png";
import Image4 from "../../assets/images/4.png";
import Image5 from "../../assets/images/5.png";
import { getAllOurClientStart } from "@/Redux/module/getOurClientsAction";
import { useDispatch, useSelector } from "react-redux";

const TestimonialOfOurClient = () => {
  // const Data = [
  //   {
  //     name: "John Doe",
  //     review:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris",
  //   },
  //   {
  //     name: "John Doe",
  //     review:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris",
  //   },
  //   {
  //     name: "John Doe",
  //     review:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris",
  //   },
  //   {
  //     name: "John Doe",
  //     review:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris",
  //   },
  // ];
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const dataSelector = useSelector((state) => state?.getOurClients?.ourClients);

  useEffect(() => {
    if (dataSelector != null) {
      setData(dataSelector?.data?.rows);
    }
  }, [dataSelector]);
  console.log("Data is here", data);

  useEffect(() => {
    dispatch(getAllOurClientStart());
  }, []);

  return (
    <>
      <section className="testi-hero-image ">
        <div className="container">
          <div className="row">
            <div className="mt-5 mb-5">
              <h1 className="text-center mt-5 comman-heading">
                Testimonial Of Our Client
              </h1>
              <div className="cst-hr-for-process mb-5" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="mt-5 align-middle"
              >
                <Image src={client1} className="client-image-2" />
                <Image src={client1} className="client-image-2" />
              </div>
              {data.map(({ name, review }, index) => (
                <>
                  <div
                    className="text-center mt-5 testi-detail-box"
                    key={index}
                  >
                    <Image src={Image2} className="round img-round-cst" />
                    <p className="text-center text-decoration-underline client-name  pt-3">
                      {name}
                    </p>
                    <p className="text-center">{review}</p>
                    <Image src={Vector} className="img-fluid " />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialOfOurClient;

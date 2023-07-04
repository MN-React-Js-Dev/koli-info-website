import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOurClientStart } from "@/Redux/module/getOurClientsAction";
import Profile from "../../assets/images/profile.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const OurValuableClients = () => {
  const [clients, setClients] = useState();
  const dispatch = useDispatch();
  const dataSelector = useSelector((state) => state?.getOurClients);

  useEffect(() => {
    dispatch(getAllOurClientStart());
  }, []);

  useEffect(() => {
    if (dataSelector != null) {
      setClients(dataSelector?.ourClients?.data?.rows);
    }
  }, [dataSelector]);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="our-valuable-clients mb-5 mt-5">
        <div className="container">
          <h1 className="text-center mt-5 comman-heading">
            Our Valuable Clients
          </h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div class="container-fluid" data-aos="fade-up">
            <div class="row">
              {clients?.map(({ review, name }, index) => (
                <div class="col-md-3 mb-5" key={index}>
                  <div
                    className="client-box ratangale-one mt-3" /* style={{height:'300px', width:"280px"}} */
                  >
                    <div className="text-center">
                      <div>
                      <Image className="mt-3 mb-3" src={Profile} />
                      </div>
                      <div>
                      <span style={{fontWeight:'bold'}}>{name}</span>
                      </div>
                      {review?.length > 25 ? review.substring(0, 25) + "..." : ""}
                      {/* <span>{review}</span> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurValuableClients;

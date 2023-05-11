import React, { Fragment, useEffect, useState } from "react";
import Profile from "../../assets/images/profile.png";
import Image from "next/image";
import blueRight from "../../assets/images/blueRight.png";
import { useSelector, useDispatch } from "react-redux";
import { getAllOurClientStart } from "@/Redux/module/getOurClientsAction";

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

  return (
    <Fragment>
      <section className="our-valuable-clients mb-5 mt-5">
        <div className="container">
          <h1 className="text-center mt-5 comman-heading">
            Our Valuable Clients
          </h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div class="container-fluid">
            <div class="row">
              {clients?.map(({ review, name }, index) => (
                <div class="col-md-3" key={index}>
                  <div className="client-box ratangale-one mt-3">
                    <div className="text-center">
                      <Image src={Profile} />
                      <span className="t-dark">{name}</span>
                      <span>{review}</span>
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

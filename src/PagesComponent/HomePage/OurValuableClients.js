import React, { useEffect, useState } from "react";
import Profile from "../../assets/images/profile.png";
import Image from "next/image";
import blueRight from "../../assets/images/blueRight.png";
import { useSelector, useDispatch } from "react-redux";
import { getAllOurClientStart } from "@/Redux/module/getOurClientsAction";
// import Profile from '../../assets/images/profile.png'

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
    <>
      <section className="our-valuable-clients mb-5 mt-5">
        <div className="container">
          <h1 className="text-center mt-5 comman-heading">
            Our Valuable Clients
          </h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div class="container-fluid">
            <div class="row">
              {clients?.map((item, index) => (
                <div class="col-md-3" key={index}>
                  <div className="client-box ratangale-one mt-3">
                    <div className="text-center">
                        <Image src={Profile}/>
                        <span className="t-dark">{item.name}</span>
                        <span>{item.review}</span>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div class="col-md-3"><div className='client-box ratangale-two mt-5'></div></div>
                            <div class="col-md-3"><div className='client-box ratangale-three mt-3'></div></div>
                            <div class="col-md-3"><div className='client-box ratangale-foure mt-5'></div></div>
                        </div>
                        <div class="row">
                            <div class="col-md-3"><div className='client-box ratangale-six mt-3'></div></div>
                            <div class="col-md-3"><div className='client-box ratangale-seven mt-5'></div></div>
                            <div class="col-md-3"><div className='client-box ratangale-eight mt-3'></div></div>
                            <div class="col-md-3"><div className='client-box ratangale-nine mt-5'></div></div> */}
            </div>
          </div>
        </div>
        {/* <Image src={blueRight} style={{ float: 'right' }} /> */}
      </section>
    </>
  );
};

export default OurValuableClients;

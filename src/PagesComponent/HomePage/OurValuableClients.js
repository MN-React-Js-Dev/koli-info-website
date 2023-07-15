import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOurClientStart, getSingleClientStart } from "@/Redux/module/getOurClientsAction";
import { SlClose } from "react-icons/sl";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

import Modal from 'react-modal'

const OurValuableClients = () => {
  const [clients, setClients] = useState();
  const [singleClient, setSingleClient] = useState()
  const dispatch = useDispatch();
  const dataSelector = useSelector((state) => state?.getOurClients);
  const clientData = useSelector((state) => state?.getOurClients?.singleClient?.data)


  useEffect(() => {
    dispatch(getAllOurClientStart());
  }, []);

  useEffect(() => {
    if (dataSelector != null) {
      setClients(dataSelector?.ourClients?.data?.rows);
    }
  }, [dataSelector]);

  useEffect(() => {
    if (clientData != null) {
      setSingleClient(clientData?.ourClientData);
    }
  }, [clientData]);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  const [isOpen, setIsOpen] = useState(false)
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: "20%",
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px'
    }
  }

  const openModal = (id) => {
    dispatch(getSingleClientStart(id));
    setIsOpen(true)
  }

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
              {clients?.map(({ review, name, profilePicture, id }, index) => (
                <div class="col-md-3 mb-5" key={index}>
                  <div
                    className="client-box ratangale-one mt-3 "
                  >
                    <div className="text-center" onClick={() => openModal(id)}>
                      <div>
                        <Image className="mt-3 mb-3 rounded img-fluid" src={profilePicture} width={100} height={100} alt="cliet image" />
                      </div>
                      <div>
                        <span style={{ fontWeight: 'bold' }}>{name}</span>
                      </div>
                      {review?.length > 25 ? review.substring(0, 25) + "..." : ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Modal
            isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            <div className="text-center">
              <SlClose className="modal-closs-btn" onClick={() => setIsOpen(false)} alt="close button" />
              <h4>{singleClient?.name}</h4>
            </div>
            <span style={{ fontSize: 13 }}>{singleClient?.review}</span>
          </Modal>
        </div>
      </section>
    </Fragment>
  );
};

export default OurValuableClients;

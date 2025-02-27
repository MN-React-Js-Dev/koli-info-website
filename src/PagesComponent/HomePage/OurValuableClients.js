// import React, { Fragment, useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   getAllOurClientStart,
//   getSingleClientStart,
// } from "@/Redux/module/getOurClientsAction";
// import { SlClose } from "react-icons/sl";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import Modal from "react-modal";

// const OurValuableClients = () => {
//   const [clients, setClients] = useState();
//   const [singleClient, setSingleClient] = useState();
//   const dispatch = useDispatch();
//   const dataSelector = useSelector((state) => state?.getOurClients);
//   const clientData = useSelector(
//     (state) => state?.getOurClients?.singleClient?.data
//   );

//   useEffect(() => {
//     dispatch(getAllOurClientStart());
//   }, []);

//   useEffect(() => {
//     if (dataSelector != null) {
//       setClients(dataSelector?.ourClients?.data?.rows);
//     }
//   }, [dataSelector]);

//   useEffect(() => {
//     if (clientData != null) {
//       setSingleClient(clientData?.ourClientData);
//     }
//   }, [clientData]);

//   useEffect(() => {
//     setTimeout(() => {
//       Aos.init();
//     }, 1500);
//   }, []);

//   const [isOpen, setIsOpen] = useState(false);
//   const customStyles = {
//     overlay: {
//       backgroundColor: "rgba(0, 0, 0, 0.6)",
//     },
//     content: {
//       top: "30%",
//       borderRadius: "10px",
//       width: "80%",
//       maxWidth: "500px",
//       margin: "0 auto",
//       maxHeight: "38vh",
//     },
//   };

//   const openModal = (id) => {
//     dispatch(getSingleClientStart(id));
//     setIsOpen(true);
//   };

//   return (
//     <Fragment>
//       <section className="our-valuable-clients mb-5 mt-5">
//         <div className="container">
//           <h1 className="text-center mt-5 comman-heading">
//             Our Valuable Clients
//           </h1>
//           <div className="cst-hr-for-process mb-5"></div>
//           <div class="container-fluid" data-aos="fade-up">
//             <div class="row">
//               {clients > 0 ? (
//                  {clients?.map(({ review, name, profilePicture, id }, index) => (
//                   <div class="col-md-3 mb-5" key={index}>
//                     <div className="client-box ratangale-one mt-3 ">
//                       <div className="text-center" onClick={() => openModal(id)}>
//                         <div>
//                           <img
//                             className="mt-3 mb-3 rounded img-fluid"
//                             src={profilePicture}
//                             width={100}
//                             height={100}
//                             alt="cliet image"
//                           />
//                         </div>
//                         <div>
//                           <span style={{ fontWeight: "bold" }}>{name}</span>
//                         </div>
//                         {review?.length > 25
//                           ? review.substring(0, 25) + "..."
//                           : ""}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               ):(
//                 <div className="text-center mt-5">
//                 <h4 className="text-muted">🚀 No Current Openings Available!</h4>
//                 <p>Stay tuned for future opportunities.</p>
//               </div>
//               )}

//             </div>
//           </div>
//           <Modal
//             isOpen={isOpen}
//             onRequestClose={() => setIsOpen(false)}
//             style={customStyles}
//           >
//             <div className="text-center">
//               <SlClose
//                 className="modal-closs-btn"
//                 onClick={() => setIsOpen(false)}
//                 alt="close button"
//               />
//               <h4>{singleClient?.name}</h4>
//             </div>
//             <span style={{ fontSize: 13 }}>{singleClient?.review}</span>
//           </Modal>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default OurValuableClients;

import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllOurClientStart,
  getSingleClientStart,
} from "@/Redux/module/getOurClientsAction";
import { SlClose } from "react-icons/sl";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "react-modal";

const OurValuableClients = () => {
  const [clients, setClients] = useState([]);
  const [singleClient, setSingleClient] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const dataSelector = useSelector((state) => state?.getOurClients);
  const clientData = useSelector(
    (state) => state?.getOurClients?.singleClient?.data
  );

  useEffect(() => {
    dispatch(getAllOurClientStart());
  }, [dispatch]);

  useEffect(() => {
    if (dataSelector?.ourClients?.data?.rows) {
      setClients(dataSelector.ourClients.data.rows);
    }
  }, [dataSelector]);

  useEffect(() => {
    if (clientData?.ourClientData) {
      setSingleClient(clientData.ourClientData);
    }
  }, [clientData]);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "30%",
      borderRadius: "10px",
      width: "80%",
      maxWidth: "500px",
      margin: "0 auto",
      maxHeight: "38vh",
    },
  };

  const openModal = (id) => {
    dispatch(getSingleClientStart(id));
    setIsOpen(true);
  };

  return (
    <Fragment>
      <section className="our-valuable-clients mb-5 mt-5">
        <div className="container">
          <h1 className="text-center mt-5 comman-heading">
            Our Valuable Clients
          </h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="container-fluid" data-aos="fade-up">
            <div className="row">
              {clients?.length > 0 ? (
                clients.map(({ review, name, profilePicture, id }, index) => (
                  <div className="col-md-3 mb-5" key={index}>
                    <div
                      className="client-box ratangale-one mt-3 text-center"
                      onClick={() => openModal(id)}
                    >
                      <img
                        className="mt-3 mb-3 rounded img-fluid"
                        src={profilePicture}
                        width={100}
                        height={100}
                        alt="Client"
                      />
                      <div>
                        <span style={{ fontWeight: "bold" }}>{name}</span>
                      </div>
                      <p className="text-muted">
                        {review?.length > 25
                          ? review.substring(0, 25) + "..."
                          : review}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center mt-5">
                  <h4 className="text-muted">🚀 No Clients Available!</h4>
                  <p>Stay tuned for future updates.</p>
                </div>
              )}
            </div>
          </div>
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
          >
            <div className="text-center">
              <SlClose
                className="modal-close-btn"
                onClick={() => setIsOpen(false)}
              />
              <h4>{singleClient?.name}</h4>
              <p style={{ fontSize: "13px" }}>{singleClient?.review}</p>
            </div>
          </Modal>
        </div>
      </section>
    </Fragment>
  );
};

export default OurValuableClients;

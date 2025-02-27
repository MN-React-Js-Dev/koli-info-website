// import React, { Fragment, useEffect, useState } from "react";
// import Vector from "../../assets/images/Vector.png";
// import Image from "next/image";
// import star from "../../assets/images/star.png";
// import { getAllOurClientStart } from "@/Redux/module/getOurClientsAction";
// import { useDispatch, useSelector } from "react-redux";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const TestimonialOfOurClient = () => {
//   const dispatch = useDispatch();
//   const [data, setData] = useState();
//   const dataSelector = useSelector((state) => state?.getOurClients?.ourClients);


//   useEffect(() => {
//     if (dataSelector != null) {
//       setData(dataSelector?.data?.rows);
//     }
//   }, [dataSelector]);

//   useEffect(() => {
//     dispatch(getAllOurClientStart());
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       Aos.init();
//     }, 1500);
//   }, []);

//   return (
//     <Fragment>
//       <section className="testi-hero-image ">
//         <div className="container">
//           <div className="row">
//             <div className="mt-5 mb-5">
//               <h1 className="text-center mt-5 comman-heading" data-aos="flip-down">
//               Stories of Success
//               </h1>
//               <div className="cst-hr-for-process mb-5" />
              
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                 }}
//                 className="mt-5 align-middle"
//                 data-aos="fade-down"
//               >
//                 <Image src={star} className="client-image-2" />
//                 <Image src={star} className="client-image-2" />
//               </div>
//               {data.length > 0 ? (
//                 {data?.map(({ name, review, profilePicture }, index) => (
//                   <>
//                     <div
//                       className="text-center mt-5 testi-detail-box"
//                       key={index}
//                       data-aos="fade-up"
//                     >
//                       <img
//                         src={profilePicture}
//                         width={100}
//                         height={100}
//                         alt="Image not found"
//                         className="round img-round-cst"
//                       />
//                       <p className="text-center text-decoration-underline client-name  pt-3">
//                         {name}
//                       </p>
//                       <p className="text-center">{review}</p>
//                       <Image
//                         src={Vector}
//                         alt="Image not found"
//                         className="img-fluid "
//                       />
//                     </div>
//                   </>
//                 ))}
//               ):(
//                 <div className="text-center mt-5">
//                 <h4 className="text-muted">🚀 No Current Openings Available!</h4>
//                 <p>Stay tuned for future opportunities.</p>
//               </div>
//               )}
              
//             </div>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default TestimonialOfOurClient;


import React, { Fragment, useEffect, useState } from "react";
import Vector from "../../assets/images/Vector.png";
import Image from "next/image";
import star from "../../assets/images/star.png";
import { getAllOurClientStart } from "@/Redux/module/getOurClientsAction";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

const TestimonialOfOurClient = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const dataSelector = useSelector((state) => state?.getOurClients?.ourClients);

  useEffect(() => {
    if (dataSelector) {
      setData(dataSelector?.data?.rows || []);
    }
  }, [dataSelector]);

  useEffect(() => {
    dispatch(getAllOurClientStart());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="testi-hero-image">
        <div className="container">
          <div className="row">
            <div className="mt-5 mb-5">
              <h1 className="text-center mt-5 comman-heading" data-aos="flip-down">
                Stories of Success
              </h1>
              <div className="cst-hr-for-process mb-5" />

              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="mt-5 align-middle"
                data-aos="fade-down"
              >
                <Image src={star} className="client-image-2" alt="Star Icon" width={50} height={50} />
                <Image src={star} className="client-image-2" alt="Star Icon" width={50} height={50} />
              </div>

              {data.length > 0 ? (
                data.map(({ name, review, profilePicture }, index) => (
                  <Fragment key={index}>
                    <div className="text-center mt-5 testi-detail-box" data-aos="fade-up">
                      <img
                        src={profilePicture}
                        width={100}
                        height={100}
                        alt="Client profile"
                        className="round img-round-cst"
                      />
                      <p className="text-center text-decoration-underline client-name pt-3">{name}</p>
                      <p className="text-center">{review}</p>
                      <Image src={Vector} alt="Vector Icon" className="img-fluid" width={50} height={50} />
                    </div>
                  </Fragment>
                ))
              ) : (
                <div className="text-center mt-5">
                  <h4 className="text-muted">🚀 No Current Testimonials Available!</h4>
                  <p>Stay tuned for future updates.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TestimonialOfOurClient;

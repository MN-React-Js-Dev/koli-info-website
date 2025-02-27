// import React, { Fragment, useEffect } from "react";
// import {
//   CLOUDS_P1,
//   CLOUDS_P10,
//   CLOUDS_P11,
//   CLOUDS_P2,
//   CLOUDS_P4,
//   CLOUDS_P5,
//   CLOUDS_P7,
//   CLOUDS_P8,
// } from "@/commonComponent/commanText";
// import awsclouds from "../../assets/images/awsclouds.jpg";
// import GoogleCloudServices from "../../assets/images/Google-Cloud-Services.jpg";
// import jenikinsservices from "../../assets/images/jenikinsservices.png";
// import docker from "../../assets/images/docker.jpg";
// import Image from "next/image";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const Cloudservices = () => {
//   useEffect(() => {
//     setTimeout(() => {
//       Aos.init();
//     }, 1500);
//   }, []);

//   return (
//     <Fragment>
//       <section className="mb-5 why-choos" style={{ marginTop: "50px" }}>
//         <div className="container">
//           <div className="row gap-10">
//             <div className="col-lg-8 col-md-12 col-sm-12" data-aos="fade-right">
//               <h3 className="whychooseTxt commanFont text-center">
//                 AWS Services
//               </h3>
//               <div className="hr-cst mb-3"></div>
//               <p
//                 style={{
//                   textTransform: "capitalize",
//                   textAlign: "justify",
//                   wordSpacing: "-3px",
//                 }}
//               >
//                 {CLOUDS_P1}
//               </p>
//               <p
//                 style={{
//                   textTransform: "capitalize",
//                   textAlign: "justify",
//                   wordSpacing: "-3px",
//                 }}
//               >
//                 {CLOUDS_P2}
//               </p>
//             </div>
//             <div className="col-lg-4 col-md-12 col-sm-12">
//               <Image
//                 className="img-fluid rounded mb-5"
//                 src={awsclouds}
//                 alt="Image not found"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="mb-5 mt-5 why-choos">
//         <div className="container">
//           <div className="row" style={{marginTop:'100px'}}>
//             <div className="col-lg-4 col-sm-8 mt-3">
//               <Image
//                 className="img-fluid rounded"
//                 src={GoogleCloudServices}
//                 alt="Image not found"
//               />
//             </div>
//             <div className="col-lg-8 col-sm-4" data-aos="fade-right">
//               <h3 className="whychooseTxt commanFont">GCP Services</h3>
//               <div className="hr-cst mb-3"></div>
//               <p
//                 style={{
//                   textTransform: "capitalize",
//                   textAlign: "justify",
//                   wordSpacing: "-3px",
//                 }}
//               >
//                 {CLOUDS_P4}
//               </p>
//               <p
//                 style={{
//                   textTransform: "capitalize",
//                   textAlign: "justify",
//                   wordSpacing: "-3px",
//                 }}
//               >
//                 {CLOUDS_P5}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="mb-5 mt-5 why-choos">
//         <div className="container">
//           <div className="row" style={{marginTop:'100px'}}>
//             <div className="col-lg-8 col-sm-6" data-aos="fade-right">
//               <h3 className="whychooseTxt commanFont">Jenkins Services</h3>
//               <div className="hr-cst mb-3"></div>
//               <p
//                 style={{
//                   textTransform: "capitalize",
//                   textAlign: "justify",
//                   wordSpacing: "-3px",
//                 }}
//               >
//                 {CLOUDS_P7}
//               </p>
//               <p
//                 style={{
//                   textTransform: "capitalize",
//                   textAlign: "justify",
//                   wordSpacing: "-3px",
//                 }}
//               >
//                 {CLOUDS_P8}
//               </p>
//             </div>
//             <div className="col-lg-4 col-sm-6">
//               <Image
//                 className="img-fluid  rounded mb-5"
//                 src={jenikinsservices}
//                 alt="Image not found"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="mb-5 mt-5 why-choos">
//         <div className="container">
//           <div className="row" style={{marginTop:'100px'}}>
//             <div className="col-lg-4 col-sm-6">
//               <Image
//                 className="img-fluid rounded mb-5"
//                 src={docker}
//                 alt="Image not found"
//               />
//             </div>
//             <div className="col-lg-8 col-sm-6" data-aos="fade-right">
//               <h2 className="whychooseTxt commanFont fs-4">
//                 Docker/Kubernetes Services
//               </h2>
//               <div className="hr-cst mb-3"></div>
//               <p
//                 style={{
//                   textTransform: "capitalize",
//                   textAlign: "justify",
//                   wordSpacing: "-3px",
//                 }}
//               >
//                 {CLOUDS_P10}
//               </p>
//               <p
//                 style={{
//                   textTransform: "capitalize",
//                   textAlign: "justify",
//                   wordSpacing: "-3px",
//                 }}
//               >
//                 {CLOUDS_P11}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default Cloudservices;

// import React, { Fragment, useEffect } from "react";
// import {
//   CLOUDS_P1,
//   CLOUDS_P10,
//   CLOUDS_P11,
//   CLOUDS_P2,
//   CLOUDS_P4,
//   CLOUDS_P5,
//   CLOUDS_P7,
//   CLOUDS_P8,
// } from "@/commonComponent/commanText";
// import awsclouds from "../../assets/images/awsclouds.jpg";
// import GoogleCloudServices from "../../assets/images/Google-Cloud-Services.jpg";
// import jenikinsservices from "../../assets/images/jenikinsservices.png";
// import docker from "../../assets/images/docker.jpg";
// import Image from "next/image";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const Cloudservices = () => {
//   useEffect(() => {
//     setTimeout(() => {
//       Aos.init();
//     }, 1500);
//   }, []);

//   return (
//     <Fragment>
//       <section className="mb-5 why-choos" style={{ marginTop: "50px" }}>
//         <div className="container">
//           <div className="row row-cols-1 row-cols-lg-2 align-items-center">
//             <div className="col" data-aos="fade-right">
//               <h3 className="whychooseTxt commanFont text-center fs-4 fs-md-3">
//                 AWS Services
//               </h3>
//               <div className="hr-cst mb-3"></div>
//               <p className="text-justify">{CLOUDS_P1}</p>
//               <p className="text-justify">{CLOUDS_P2}</p>
//             </div>
//             <div className="col">
//               <Image
//                 className="img-fluid rounded w-100"
//                 src={awsclouds}
//                 alt="AWS Services"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mb-5 mt-5 why-choos">
//         <div className="container">
//           <div className="row row-cols-1 row-cols-lg-2 align-items-center">
//             <div className="col">
//               <Image
//                 className="img-fluid rounded w-100"
//                 src={GoogleCloudServices}
//                 alt="Google Cloud Services"
//               />
//             </div>
//             <div className="col" data-aos="fade-right">
//               <h3 className="whychooseTxt commanFont fs-4 fs-md-3">
//                 GCP Services
//               </h3>
//               <div className="hr-cst mb-3"></div>
//               <p className="text-justify">{CLOUDS_P4}</p>
//               <p className="text-justify">{CLOUDS_P5}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mb-5 mt-5 why-choos">
//         <div className="container">
//           <div className="row row-cols-1 row-cols-lg-2 align-items-center">
//             <div className="col" data-aos="fade-right">
//               <h3 className="whychooseTxt commanFont fs-4 fs-md-3">
//                 Jenkins Services
//               </h3>
//               <div className="hr-cst mb-3"></div>
//               <p className="text-justify">{CLOUDS_P7}</p>
//               <p className="text-justify">{CLOUDS_P8}</p>
//             </div>
//             <div className="col">
//               <Image
//                 className="img-fluid rounded w-100"
//                 src={jenikinsservices}
//                 alt="Jenkins Services"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mb-5 mt-5 why-choos">
//         <div className="container">
//           <div className="row row-cols-1 row-cols-lg-2 align-items-center">
//             <div className="col">
//               <Image
//                 className="img-fluid rounded w-100"
//                 src={docker}
//                 alt="Docker & Kubernetes"
//               />
//             </div>
//             <div className="col" data-aos="fade-right">
//               <h2 className="whychooseTxt commanFont fs-4 fs-md-3">
//                 Docker/Kubernetes Services
//               </h2>
//               <div className="hr-cst mb-3"></div>
//               <p className="text-justify">{CLOUDS_P10}</p>
//               <p className="text-justify">{CLOUDS_P11}</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default Cloudservices;



import React, { Fragment, useEffect } from "react";
import {
  CLOUDS_P1,
  CLOUDS_P10,
  CLOUDS_P11,
  CLOUDS_P2,
  CLOUDS_P4,
  CLOUDS_P5,
  CLOUDS_P7,
  CLOUDS_P8,
} from "@/commonComponent/commanText";
import awsclouds from "../../assets/images/awsclouds.jpg";
import GoogleCloudServices from "../../assets/images/Google-Cloud-Services.jpg";
import jenikinsservices from "../../assets/images/jenikinsservices.png";
import docker from "../../assets/images/docker.jpg";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Cloudservices = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="mb-5 why-choos" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col" data-aos="fade-right">
              <h3 className="whychooseTxt commanFont text-center fs-4 fs-md-3">
                AWS Services
              </h3>
              <div className="hr-cst mb-3"></div>
              <p className="text-justify">{CLOUDS_P1}</p>
              <p className="text-justify">{CLOUDS_P2}</p>
            </div>
            <div className="col text-center">
              <Image
                className="img-fluid rounded mx-auto d-block"
                src={awsclouds}
                alt="AWS Services"
                style={{ maxWidth: "480px", width: "100%",borderRadius:'30px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col text-center">
              <Image
                className="img-fluid rounded mx-auto d-block"
                src={GoogleCloudServices}
                alt="Google Cloud Services"
                style={{ maxWidth: "480px", width: "100%" }}
              />
            </div>
            <div className="col" data-aos="fade-right">
              <h3 className="whychooseTxt commanFont fs-4 fs-md-3">
                GCP Services
              </h3>
              <div className="hr-cst mb-3"></div>
              <p className="text-justify">{CLOUDS_P4}</p>
              <p className="text-justify">{CLOUDS_P5}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col" data-aos="fade-right">
              <h3 className="whychooseTxt commanFont fs-4 fs-md-3">
                Jenkins Services
              </h3>
              <div className="hr-cst mb-3"></div>
              <p className="text-justify">{CLOUDS_P7}</p>
              <p className="text-justify">{CLOUDS_P8}</p>
            </div>
            <div className="col text-center">
              <Image
                className="img-fluid rounded mx-auto d-block"
                src={jenikinsservices}
                alt="Jenkins Services"
                style={{ maxWidth: "480px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col text-center">
              <Image
                className="img-fluid rounded mx-auto d-block"
                src={docker}
                alt="Docker & Kubernetes"
                style={{ maxWidth: "480px", width: "100%" }}
              />
            </div>
            <div className="col" data-aos="fade-right">
              <h2 className="whychooseTxt commanFont fs-4 fs-md-3">
                Docker/Kubernetes Services
              </h2>
              <div className="hr-cst mb-3"></div>
              <p className="text-justify">{CLOUDS_P10}</p>
              <p className="text-justify">{CLOUDS_P11}</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Cloudservices;

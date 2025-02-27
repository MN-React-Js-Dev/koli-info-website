// import React, { Fragment, useEffect } from "react";
// import Image from "next/image";
// import CostumMobi from "../../assets/images/costum-mobile.png";
// import trophy from "../../assets/images/trophy.png";
// import like from "../../assets/images/like.png";
// import rating from "../../assets/images/rating.png";
// import userInterface from "../../assets/images/user-interface.png";
// import { COMMAN_TEXT } from "@/commonComponent/commanText";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import ClientWeServe from "@/commonComponent/ClientWeServe";
// import OurServices from "../HomePage/OurServices";
// import OurPortfolio from "../HomePage/OurPortfolio";

// const MobiAppDevScreen = () => {
//   const data = [
//     {
//       service: "Custom Software Development",
//       detail:
//         "We offer custom software development services tailored to meet your specific business needs and requirements.",
//     },
//     {
//       service: "Web Application Development",
//       detail:
//         "We specialize in web application development, creating robust and intuitive web-based solutions that empower businesses and enhance user experiences.",
//     },
//     {
//       service: "Mobile Application Development",
//       detail:
//         "We offer comprehensive mobile application development services, crafting innovative and feature-rich apps for iOS and Android platforms.",
//     },
//     {
//       service: "QA & Testing",
//       detail:
//         "Our dedicated QA and testing team ensures the highest quality standards for your software applications, performing rigorous testing and bug-fixing to deliver flawless products.",
//     },
//     {
//       service: "Cloud & DevOps",
//       detail:
//         "Our Cloud and DevOps services help businesses leverage the power of cloud computing and streamline their development processes for faster, scalable, and more efficient software deployment.",
//     },
//   ];

//   useEffect(() => {
//     setTimeout(() => {
//       Aos.init();
//     }, 1500);
//   }, []);

//   return (
//     <Fragment>
//       <section>
//         <h2 className="text-center comman-heading mt-5">Our Awards</h2>
//         <div className="cst-hr-for-process mb-5"></div>
//         <div className="container">
//           <div className="awards">
//             <div className="row m-5" data-aos="fade-up">
//               <div className="col-sm-3 mb-3 award-card">
//                 <div className="p-3 text-center award-box">
//                   <Image
//                     src={trophy}
//                     alt="Image not found"
//                     className="mb-4 mt-4 img-fluid "
//                   />
//                   <p>
//                     Awarded as the Best Mobile Application Development Company
//                     by GESIA
//                   </p>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-3 award-card">
//                 <div className="p-3 text-center award-box">
//                   <Image
//                     src={like}
//                     alt="Image not found"
//                     className="mb-4 mt-4 img-fluid "
//                   />
//                   <p>
//                     Awarded as the Best Mobile Application Development Company
//                     by GESIA
//                   </p>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-3 award-card">
//                 <div className="p-3 text-center award-box">
//                   <Image
//                     src={rating}
//                     alt="Image not found"
//                     className="mb-4 mt-4 img-fluid "
//                   />
//                   <p>
//                     Awarded as the Best Mobile Application Development Company
//                     by GESIA
//                   </p>
//                 </div>
//               </div>
//               <div className="col-sm-3 mb-3 award-card">
//                 <div className="p-3 text-center award-box">
//                   <Image
//                     src={userInterface}
//                     alt="Image not found"
//                     className="mb-4 mt-4 img-fluid "
//                   />
//                   <p>
//                     Awarded as the Best Mobile Application Development Company
//                     by GESIA
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <ClientWeServe />
//           <div className="p-5 mt-5" style={{ display: "flex" }}>
//             <div className="row" style={{ alignItems: "center" }}>
//               <div className="col-lg-7 mt-5" data-aos="fade-up">
//                 <h3 className=" bold-font fs-2">
//                   Custom Mobile Application Development Company
//                 </h3>
//                 <div className="cst-hr-for-process mb-3" />
//                 <p className="para-for-hero">{COMMAN_TEXT}</p>
//               </div>
//               <div className="col-lg-5 " data-aos="fade-up">
//                 <Image
//                   src={CostumMobi}
//                   alt="Image not found"
//                   className="img-fluid testi-image"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Our Srvices Section start here */}
//       {/* <section className="special-services">
//         <div className="container">
//           <h3 className="text-center text-white pt-5 mt-5 bold-font fs-1">
//             Our Services
//           </h3>
//           <div className="cst-hr-for-process mb-5" />
//          <div className="row equal-height-row" data-aos="fade-up">
//             {data.map(({ service, detail }, index) => (
//               <div className="col-sm-4 mb-4 d-flex" key={index}>
//                 <div className="p-5 awards-border d-flex flex-column flex-fill">
//                   <div
//                     alt="Image not found"
//                     className="text-center award-head-img"
//                   >
//                     <h3>{service}</h3>
//                     <Image
//                       src={smartphone}
//                       alt="img"
//                       className="mb-4 mt-4 img-fluid"
//                     />
//                   </div>
//                   <p>{detail}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//       <OurServices />
//       {/* Our Portfolio Section Start Here */}
//       {/* <section>
//         <div className="container">
//           <h1 className="text-center pt-5 mt-5 bold-font">
//             Explore Our Portfolio
//           </h1>
//           <div className="cst-hr-for-process mb-5" />
//           <div className="row " data-aos="fade-up">
//             <div className="col-sm-4 mb-5">
//               <div className="container">
//                 <div
//                   class="card p-4"
//                   style={{
//                     background:
//                       " linear-gradient(180deg, #2A64F9 0%, #012E4D 100%)",
//                   }}
//                 >
//                   <div class="card-body">
//                     <Image
//                       src={WebDesignImage}
//                       alt="Image not found"
//                       class="card-img-top"
//                     />
//                   </div>
//                 </div>
//                 <div className="card-btm-text">
//                   <h3 className="fs-3">Web Design</h3>
//                   <p>Website design</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-sm-4 mb-5">
//               <div className="container">
//                 <div
//                   class="card  p-4"
//                   style={{
//                     background:
//                       " linear-gradient(180deg, #E83030 0%, rgba(116, 13, 13, 0.97) 100%)",
//                   }}
//                 >
//                   <div class="card-body">
//                     <Image
//                       src={WebDesignImage2}
//                       alt="Image not found"
//                       class="card-img-top"
//                     />
//                   </div>
//                 </div>
//                 <div className="card-btm-text">
//                   <h3 className="fs-3">Web Design</h3>
//                   <p>Website design</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-4 mb-5">
//               <div className="container">
//                 <div class="card  p-4" style={{ background: "#012E4D" }}>
//                   <div class="card-body">
//                     <Image
//                       src={WebDesignImage3}
//                       alt="Image not found"
//                       class="card-img-top"
//                     />
//                   </div>
//                 </div>
//                 <div className="card-btm-text">
//                   <h3 className="fs-3">Web Design</h3>
//                   <p>Website design</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row mb-2" data-aos="fade-up">
//             <div className="col-sm-4 mb-5">
//               <div className="container">
//                 <div class="card  p-4" style={{ background: "#313131" }}>
//                   <div class="card-body">
//                     <Image
//                       src={WebDesignImage4}
//                       alt="Image not found"
//                       class="card-img-top"
//                     />
//                   </div>
//                 </div>
//                 <div className="card-btm-text">
//                   <h3 className="fs-3">Web Design</h3>
//                   <p>Website design</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-4 mb-5">
//               <div className="container">
//                 <div class="card  p-4" style={{ background: "#6647C0" }}>
//                   <div class="card-body">
//                     <Image
//                       src={WebDesignImage5}
//                       alt="Image not found"
//                       class="card-img-top"
//                     />
//                   </div>
//                 </div>
//                 <div className="card-btm-text">
//                   <h3 className="fs-3">Web Design</h3>
//                   <p>Website design</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-4 mb-5">
//               <div className="container">
//                 <div class="card  p-4" style={{ background: "#E9A218" }}>
//                   <div class="card-body">
//                     <Image
//                       src={WebDesignImage6}
//                       alt="Image not found"
//                       class="card-img-top"
//                     />
//                   </div>
//                 </div>
//                 <div className="card-btm-text">
//                   <h3 className="fs-3">Web Design</h3>
//                   <p>Website design</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
//       <OurPortfolio />
//     </Fragment>
//   );
// };

// export default MobiAppDevScreen;

import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import CostumMobi from "../../assets/images/costum-mobile.png";
import trophy from "../../assets/images/trophy.png";
import like from "../../assets/images/like.png";
import rating from "../../assets/images/rating.png";
import userInterface from "../../assets/images/user-interface.png";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import ClientWeServe from "@/commonComponent/ClientWeServe";
import OurServices from "../HomePage/OurServices";
import OurPortfolio from "../HomePage/OurPortfolio";

const MobiAppDevScreen = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const awardsData = [
    { img: trophy, text: "Best Mobile App Development" },
    { img: like, text: "Top Rated Software Firm 2023" },
    { img: rating, text: "Excellent Customer Satisfaction" },
    { img: userInterface, text: "Best UI/UX Innovation" },
  ];
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="text-center pt-5 comman-heading">Our Awards</h2>
        <div className="cst-hr-for-process mb-5"></div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center align-center mb-5">
          {awardsData.map((award, index) => (
            <div key={index} className="col-md-6 col-lg-3" >
              <div
                className="award-card py-4 text-center shadow-lg rounded-4 bg-white"
                data-aos="fade-up"
                style={{minHeight:'180px'}}
              >
                <Image
                  src={award.img}
                  alt="Award Icon"
                  className="img-fluid mb-3"
                  style={{ maxWidth: "80px" }}
                />
                <p className="fw-semibold text-dark">{award.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ClientWeServe />
      <div className="container mt-5 py-5">
        <div className="row align-items-center">
          <div className="col-lg-7" data-aos="fade-right">
            {/* <h4 className="text-center pt-5 comman-heading">
               Custom Mobile Application Development
            </h4> */}
               <h2 className="text-center pt-5 mt-5 comman-heading" >
               Custom Mobile Application Development
          </h2>
            <div className="cst-hr-for-process mb-3"></div>
            <p className="text-muted fs-5">{COMMAN_TEXT}</p>
          </div>
          <div className="col-lg-5 text-center" data-aos="fade-right">
            <Image
              src={CostumMobi}
              alt="Custom Mobile App Development"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>
      </div>
      <OurServices />
      <OurPortfolio />
    </section>
  );
};

export default MobiAppDevScreen;

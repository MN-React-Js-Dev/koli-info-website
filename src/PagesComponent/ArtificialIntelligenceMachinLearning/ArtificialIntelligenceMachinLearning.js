// import React, { Fragment, useEffect, useRef } from "react";
// import Image from "next/image";
// import webDevimg2 from "../../assets/images/webDevimg-2.png";
// import smartphone from "../../assets/images/smartphone.png";
// import pc from "../../assets/images/ux1.png";
// import { COMMAN_TEXT } from "@/commonComponent/commanText";
// import Link from "next/link";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import AmericanExpress from "../../assets/images/AmericanExpress.png";
// import ByjusLogo1 from "../../assets/images/ByjusLogo3.jpg";
// import HDFC from "../../assets/images/HDFC.png";
// import Axis from "../../assets/images/Axis_Bank2.png";
// import ooredoo from "../../assets/images/Ooredoo-Logo.png";
// import Astrosadhna from "../../assets/images/Astrosadhna2.webp";
// import Onfleek from "../../assets/images/onfleek.png";
// import SetFlow from "../../assets/images/SetFlow.png";
// import jodiBanao from "../../assets/images/jodiBanao.png";
// import turing from "../../assets/images/Turing_Logo.jpg"
// import aaban from "../../assets/images/aabansolution.jpg"
// import AmazonEC2 from "../../assets/images/AmazonEC2.png";
// import Elastic from "../../assets/images/Elastic.png";
// import S3Bucket from "../../assets/images/S3Bucket.png";
// import { motion } from "framer-motion";
// import {
//   BsFillArrowLeftCircleFill,
//   BsFillArrowRightCircleFill,
// } from "react-icons/bs";
// import amazons3 from "../../assets/images/amazons3.png";
// import voice_oc from "../../assets/images/voice_oc.png";
// import VoiceocLogo from "../../assets/images/Voice_oc_4.png";
// import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

// const AiandMlScreen = () => {
//   const carousel = useRef(null);
//   const imageWidth = useRef(0);
//   const currentImageIndex = useRef(0);

//   const handleLeftClick = (e) => {
//     e.preventDefault();
//     carousel.current.scrollLeft -= imageWidth.current;
//   };

//   const handleRightClick = (e) => {
//     e.preventDefault();
//     carousel.current.scrollLeft += imageWidth.current;
//   };

//   useEffect(() => {
//     Aos.init();

//     const autoScroll = setInterval(() => {
//       if (carousel.current) {
//         const maxScrollLeft =
//           carousel.current.scrollWidth - carousel.current.clientWidth;

//         if (carousel.current.scrollLeft >= maxScrollLeft) {
//           carousel.current.scrollTo({
//             left: 0,
//             behavior: "smooth",
//           });
//         } else {
//           carousel.current.scrollTo({
//             left: carousel.current.scrollLeft + imageWidth.current,
//             behavior: "smooth",
//           });
//         }
//       }
//     }, 2000);

//     const firstImage = carousel.current.querySelector(".slide-img");
//     if (firstImage) {
//       imageWidth.current = firstImage.offsetWidth + 16;
//     }

//     return () => clearInterval(autoScroll);
//   }, []);

//   return (
//     <Fragment>
//       <section className="onDemandImageCarousal m-3">
//         <div className="container">
//           <div data-aos="fade-up">
//             <h3 className="text-center pt-5 comman-heading">
//               Clients that have trusted us over the years
//             </h3>
//             <div className="cst-hr-for-process mb-5"></div>
//             <div className="text-center" style={{ display: "flex" }}>
//               <div>
//                 <span className="px-3 arrowIcon">
//                   <AiOutlineDoubleLeft
//                     style={{ color: "black" }}
//                     onClick={handleLeftClick}
//                     className="leftarrow"
//                   />
//                 </span>
//               </div>
//               <div
//                 className="img-slide-box"
//                 alt="Image not found"
//                 ref={carousel}
//                 style={{
//                   display: "flex",
//                   overflowX: "auto",
//                   scrollBehavior: "smooth",
//                 }}
//               >
//                 <Image
//                   src={AmericanExpress}
//                   alt="American Express"
//                   style={{objectFit:'contain'}}
//                   className="slide-img m-2 p-2 WebDev-dashed-border"
//                 />
//                 <Image
//                   src={VoiceocLogo}
//                   alt="Voiceoc Logo"
//                   style={{objectFit:'contain'}}
//                   className="slide-img m-2 p-2 WebDev-dashed-border"
//                 />
//                 <Image
//                   src={ByjusLogo1}
//                   alt="Byju's Logo"
//                   style={{objectFit:'contain'}}
//                   className="slide-img m-2 p-2 WebDev-dashed-border"
//                 />
//                 <Image
//                   src={jodiBanao}
//                   alt="Jodi Banao Logo"
//                   style={{objectFit:'contain'}}
//                   className="slide-img m-2 p-2 WebDev-dashed-border"
//                 />
//                 <Image
//                   src={HDFC}
//                   alt="HDFC Logo"
//                   style={{objectFit:'contain'}}
//                   className="slide-img m-2 p-2 WebDev-dashed-border"
//                 />
//                 <Image
//                   src={SetFlow}
//                   alt="SetFlow Logo"
//                   style={{objectFit:'contain'}}
//                   className="slide-img m-2 p-2 WebDev-dashed-border"
//                 />
//                 <Image
//                   src={Axis}
//                   alt="Axis Logo"
//                   style={{objectFit:'contain'}}
//                   className="slide-img m-2 p-2 WebDev-dashed-border"
//                 />
//                  <Image
//                   src={ooredoo}
//                   alt="ooredoo Logo"
//                   style={{objectFit:'contain'}}
//                   className="slide-img m-2 p-2 WebDev-dashed-border"
//                 />
//                  <Image
//                   src={Astrosadhna}
//                   alt="ooredoo Logo"
//                   style={{objectFit:'contain'}}
//                   className="slide-img m-2 p-2 WebDev-dashed-border"
//                 />
//                  <Image
//                   src={turing}
//                   alt="turing Logo"
//                   style={{objectFit:'contain'}}
//                   className="slide-img m-2 p-2 WebDev-dashed-border"
//                 />
//                  <Image
//                   src={aaban}
//                   alt="aaban Logo"
//                   style={{objectFit:'contain'}}
//                   className="slide-img m-2 p-2 WebDev-dashed-border"
//                 />
//               </div>
//               <div>
//                 <span className="px-3 arrowIcon">
//                   <AiOutlineDoubleRight
//                     style={{ color: "black" }}
//                     onClick={handleRightClick}
//                     className="rightarrow"
//                   />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*   <div className="buttons m-3">
// //                 <button onClick={handleLeftClick} className="m-4 p-1">

// //                   <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={LeftArrow}></Image>
// //                 </button>
// //                 <button onClick={handleRightClick} className="m-4 p-1">
// //                   <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={RightArrow}></Image>
// //                 </button>
// //               </div> */}
//       {/*          <div className="d-flex justify-content-center">
// //                                 <motion.div
// //                                     className="box"
// //                                     whileHover={{ scale: 1.1 }}
// //                                     transition={{
// //                                         type: "spring",
// //                                         stiffness: 400,
// //                                         damping: 10,
// //                                     }}
// //                                 >
// //                                     <span className="px-3 arrowIcon" ><BsFillArrowLeftCircleFill style={{ color: "black" }} onClick={handleLeftClick} /></span>
// //                                 </motion.div>
// //                                 <motion.div
// //                                     className="box"
// //                                     whileHover={{ scale: 1.1 }}
// //                                     transition={{
// //                                         type: "spring",
// //                                         stiffness: 400,
// //                                         damping: 10,
// //                                     }}
// //                                 >
// //                                     <span className="px-3 arrowIcon"><BsFillArrowRightCircleFill style={{ color: "black" }} onClick={handleRightClick} /></span>
// //                                 </motion.div>
// //                             </div> */}
//     </Fragment>
//   );
// };

// export default AiandMlScreen;
//New Updated code using React-slick-Caraousal

import React, { Fragment } from "react";
import Image from "next/image";
import Slider from "react-slick";
import AmericanExpress from "../../assets/images/AmericanExpress.png";
import ByjusLogo1 from "../../assets/images/ByjusLogo3.jpg";
import HDFC from "../../assets/images/HDFC.png";
import Axis from "../../assets/images/Axis_Bank2.png";
import ooredoo from "../../assets/images/Ooredoo-Logo.png";
import Astrosadhna from "../../assets/images/Astrosadhna2.webp";
import SetFlow from "../../assets/images/SetFlow.png";
import jodiBanao from "../../assets/images/jodiBanao.png";
import turing from "../../assets/images/Turing_Logo.jpg";
import aaban from "../../assets/images/aabansolution.jpg";
import VoiceocLogo from "../../assets/images/Voice_oc_4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const AiandMlScreen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <section className="onDemandImageCarousal m-3">
        <div className="container">
          <h3 className="text-center pt-5 comman-heading">Clients We Served</h3>
          <div className="cst-hr-for-process mb-5"></div>
          <Slider {...settings}>
            <div className="slide-item">
              <Image
                src={AmericanExpress}
                alt="American Express"
                className="slide-img m-2 p-2 WebDev-dashed-border"
              />
            </div>
            <div className="slide-item">
              <Image
                src={VoiceocLogo}
                alt="Voiceoc Logo"
                className="slide-img m-2 p-2 WebDev-dashed-border"
              />
            </div>
            <div className="slide-item">
              <Image
                src={ByjusLogo1}
                alt="Byju's Logo"
                className="slide-img m-2 p-2 WebDev-dashed-border"
              />
            </div>
            <div className="slide-item">
              <Image
                src={jodiBanao}
                alt="Jodi Banao Logo"
                className="slide-img m-2 p-2 WebDev-dashed-border"
              />
            </div>
            <div className="slide-item">
              <Image
                src={HDFC}
                alt="HDFC Logo"
                className="slide-img m-2 p-2 WebDev-dashed-border"
              />
            </div>
            <div className="slide-item">
              <Image
                src={SetFlow}
                alt="SetFlow Logo"
                className="slide-img m-2 p-2 WebDev-dashed-border"
              />
            </div>
            <div className="slide-item">
              <Image
                src={Axis}
                alt="Axis Logo"
                className="slide-img m-2 p-2 WebDev-dashed-border"
              />
            </div>
            <div className="slide-item">
              <Image
                src={ooredoo}
                alt="ooredoo Logo"
                className="slide-img m-2 p-2 WebDev-dashed-border"
              />
            </div>
            <div className="slide-item">
              <Image
                src={Astrosadhna}
                alt="Astrosadhna Logo"
                className="slide-img m-2 p-2 WebDev-dashed-border"
              />
            </div>
            <div className="slide-item">
              <Image
                src={turing}
                alt="Turing Logo"
                className="slide-img m-2 p-2 WebDev-dashed-border"
              />
            </div>
            <div className="slide-item">
              <Image
                src={aaban}
                alt="Aaban Logo"
                className="slide-img m-2 p-2 WebDev-dashed-border"
              />
            </div>
          </Slider>
        </div>
        <style jsx>{`
          .slide-item {
            padding: 8px; 
          }

          .slide-img {
            width: 100%;
            height: auto;
            object-fit: contain;
            border: 1px dashed #ddd;
            padding: 10px;
            background: #f9f9f9;
            border-radius: 8px;
          }

          @media (max-width: 1024px) {
            .slide-item {
              display: flex;
              justify-content: center;
              gap: 10px;
              padding: 6px;
            }
          }

          @media (max-width: 768px) {
            .slide-item {
              display: flex;
              justify-content: center;
              gap: 10px;
            }
          }

          @media (max-width: 480px) {
            .slide-item {
              display: flex;
              justify-content: center;
              gap: 10px;
              padding: 20px; 
            }
          }
        `}</style>
      </section>
    </Fragment>
  );
};

export default AiandMlScreen;

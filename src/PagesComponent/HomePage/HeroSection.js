import React, { Fragment, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
// import homeHeroImage from "../../assets/images/web-gif.gif";
// import homeHeroImage1 from '../../assets/images/homeHeroImage1.gif';
// import mainherosection1 from '../../assets/images/mainherosection1.gif';
// import mainherosection2 from '../../assets/images/mainherosection2.gif'
import maingif1 from '../../assets/images/maingif1.gif';
import maingif2 from '../../assets/images/maingif2.gif';
import maingif3 from '../../assets/images/maingif3.gif';
import maingif4 from '../../assets/images/maingif4.gif';
import maingif5 from '../../assets/images/maingif5.gif';
import { KOLI_INFOTECH_HOME_PAGE_PARAGRAPH } from "@/commonComponent/commanText/";

const HeroSection = () => {
  const gifs = [
    maingif1,
    maingif2,
    maingif3,
    maingif4,
    maingif5
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === gifs.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [gifs]);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1500);
  }, []);

  return (
    <Fragment>
      <section className="hero-section mb-2">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 mt-5 text-start" data-aos="fade-down" style={{bottom:15}}>
              <h1 className="home-hero-sec-header commanFont">Grow Your Business With The Finest IT Company</h1>
              <p className="para-for-hero subText commanFont">
                {KOLI_INFOTECH_HOME_PAGE_PARAGRAPH}
              </p>
              <a href="contact-us" className="btn contact-us-btn" type="submit">
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 text-center" data-aos="fade-down home-hero-img">
              <div className="custom-carousel" style={{ height: 400, width: 500, marginLeft: 100 }}>
                <Image src={gifs[currentSlide]} alt={`GIF ${currentSlide + 1}`} style={{marginTop:72}} />
              </div>
              {/* <p>Current Slide: {currentSlide + 1}</p> */}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;

// import React, { Fragment, useEffect, useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// // import homeHeroImage from '../../assets/images/web_d_gif.gif'
// import homeHeroImage from "../../assets/images/web-gif.gif";
// import homeHeroImage1 from '../../assets/images/homeHeroImage1.gif'
// import { KOLI_INFOTECH_HOME_PAGE_PARAGRAPH } from "@/commonComponent/commanText/";

// const HeroSection = () => {

//   const gifs = [
//     homeHeroImage,
//     homeHeroImage1
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) =>
//         prevSlide === gifs.length - 1 ? 0 : prevSlide + 1
//       );
//     }, 4000); // Change the interval as needed

//     return () => clearInterval(interval);
//   }, [gifs]);

//   useEffect(() => {
//     setTimeout(() => {
//       Aos.init();
//     }, 1500);
//   }, []);

//   return (
//     <Fragment>
//       <section className="hero-section mb-2">
//         <div className="container">
//           <div className="row" style={{ alignItems: "center" }}>
//             <div className="col-lg-6 mt-5 text-start" data-aos="fade-down">
//               <h1 className="home-hero-sec-header commanFont">Grow Your Business With The Finest IT Company</h1>
//               <p className="para-for-hero subText commanFont">
//                 {KOLI_INFOTECH_HOME_PAGE_PARAGRAPH}
//               </p>
//               <a href="contact-us" class="btn contact-us-btn" type="submit">
//                 Contact Us
//               </a>
//             </div>
//             <div className="col-lg-6 text-center" data-aos="fade-down home-hero-img">
//               {/* <Image src={homeHeroImage} alt='Image not found' className="img-fluid " /> */}
//               <div className="custom-carousel">
//                 <img src={process.env.PUBLIC_URL + gifs[currentSlide]} alt={`GIF ${currentSlide + 1}`} />
//               </div>
//               <p>Current Slide: {currentSlide + 1}</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default HeroSection;

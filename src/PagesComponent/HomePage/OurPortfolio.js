//old code
// import React, { Fragment, useEffect } from "react";
// import TTPM from "../../assets/images/ttpm.png";
// import jodiBanao from "../../assets/images/jodiBanao.png";
// import Onfleek from "../../assets/images/onfleek.png";
// import School from "../../assets/images/1467.png";
// import Image from "next/image";
// import Aos from "aos";
// import Link from "next/link";
// import "aos/dist/aos.css";
// import HDFC from "../../assets/images/HDFC.png";
// import Astrosadhna from "../../assets/images/Astrosadhna2.webp";
// import ByjusLogo1 from "../../assets/images/ByjusLogo1.png";
// import ooredoo from "../../assets/images/Ooredoo-Logo.png";
// import turing from "../../assets/images/Turing_Logo.jpg";

// const OurPortfolio = () => {
//   useEffect(() => {
//     setTimeout(() => {
//       Aos.init();
//     }, 1500);
//   }, []);

//   return (
//     <Fragment>
//       <section className="our-portfolio ">
//         <div className="main-div-for-portfolio pb-5">
//           <div class="container text-center">
//             <h1 class="text-center pt-5 comman-heading">Our Portfolio</h1>
//             <div className="cst-hr-for-process mb-5"></div>
//             <div data-aos="zoom-in portfolio">
//               <div className="row col-lg-12">
//                 <div className="col-lg-3">
//                   <Image
//                     src={HDFC}
//                     className="our-portfolio-image img-fluid"
//                     alt="Image not found"
//                   />
//                 </div>
//                 <div className="col-lg-3">
//                   <div className="p-3 ">
//                     <h3 className="mobileHeadText commanFont">TTPM</h3>
//                     <p className="subHeadText commanHead2">
//                       TigerTron is post maker website.Wich use to create Cripto
//                       currency promoting posters and banners.They manage theie
//                       user data and utilities.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="col-lg-3">
//                   <Image
//                     src={Astrosadhna}
//                     className="our-portfolio-image text-center img-fluid"
//                     alt="Image not found"
//                   />
//                 </div>
//                 <div className="col-lg-3">
//                   <div className="p-3">
//                     <h3 className="mobileHeadText commanFont">Jodi Banao</h3>
//                     <p className="subHeadText commanHead2">
//                       Jodii App is available in 10 languages. Jodii App paid
//                       benefits are free for women (up to 10 contacts on govt ID
//                       proof verification and profile photo submission)
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="row pt-5 col-lg-12">
//                 <div className="col-lg-3">
//                   <div className="p-3">
//                     <h3 className="mobileHeadText commanFont">Byju's</h3>
//                     <p className="subHeadText commanHead2">
//                       Byju's is a beauty parlour application that provide users
//                       with beauty products and service.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="col-lg-3">
//                   <Image
//                     src={ByjusLogo1}
//                     alt="Image not found"
//                     className="img-fluid"
//                     style={{ objectFit: "contain" }}
//                   />
//                 </div>

//                 <div className="col-lg-3">
//                   <div className="p-3">
//                     <h3 className="mobileHeadText commanFont">ooredoo</h3>
//                     <p className="subHeadText commanHead2">
//                       ooredoo is Best app
//                     </p>
//                   </div>
//                 </div>
//                 <div className="col-lg-3">
//                   <Image
//                     src={ooredoo}
//                     className="our-portfolio-image img-fuild"
//                     alt="Image not found"
//                   />
//                 </div>
//               </div>
//               {/* third row */}
//               <div className="row pt-5 col-lg-12">
//                 <div className="col-lg-3">
//                   <Image
//                     src={turing}
//                     alt="Image not found"
//                     className="img-fluid"
//                     style={{ objectFit: "contain" }}
//                   />
//                 </div>
//                 <div className="col-lg-3">
//                   <div className="p-3">
//                     <h3 className="mobileHeadText commanFont">turing</h3>
//                     <p className="subHeadText commanHead2">
//                       turing is a beauty parlour application that provide users
//                       with beauty products and service.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="portfolio-view-more">
//               <Link href="/portfolio" class="btn contact-us-btn" type="submit">
//                 View more...
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default OurPortfolio;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Aos from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import HDFC from "../../assets/images/HDFC.png";
import Astrosadhna from "../../assets/images/astrosadhna_new.png";
import ByjusLogo1 from "../../assets/images/ByjusLogo_new.png";
import Ooredoo from "../../assets/images/Ooredoo_new.png";
import Turing from "../../assets/images/Turing_Logo1.png";
import Axis from "../../assets/images/Axis.png";

const OurPortfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imageMap = {
    "HDFC.png": HDFC,
    "astrosadhna_new.png": Astrosadhna,
    "ByjusLogo_new.png": ByjusLogo1,
    "Ooredoo_new.png": Ooredoo,
    "Turing_Logo1.png": Turing,
    "Axis.png": Axis,
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch("/portfoliodata.json");
        if (!response.ok) {
          throw new Error("Failed to fetch portfolio data");
        }
        const data = await response.json();
        setPortfolioData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchPortfolioData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="our-portfolio py-5">
      <div className="main-div-for-portfolio">
        <div className="container text-center">
          <h1 className="comman-heading px-4 py-4 text-white">Our Portfolio</h1>
          <div className="cst-hr-for-process mb-5"></div>
          <div className="row mx-auto ms-auto m-auto d-flex justify-content-center align-items-center g-4 portfolio-wrapper">
            {portfolioData.map((item, index) => (
              <div key={index} className="col-md-6">
                <div data-aos="fade-up" className="portfolio-item">
                  <Image
                    src={imageMap[item.image]}
                    alt={item.title}
                    className="img-fluid"
                    style={{ width: "100%" }}
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="portfolio-view-more mt-5">
            <Link href="/portfolio" className="btn contact-us-btn">
              View More...
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;

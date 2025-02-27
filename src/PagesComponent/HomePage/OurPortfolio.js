import React, { useEffect, useState } from "react";
import Image from "next/image";
import Aos from "aos";
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

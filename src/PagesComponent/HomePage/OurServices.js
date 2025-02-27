import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaMobileAlt,
  FaRobot,
  FaCloud,
  FaLaptopCode,
  FaCogs,
  FaClipboardCheck,
} from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";

const OurServices = () => {
  const router = useRouter();
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/services.json");
        const data = await response.json();
        setServicesData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services data:", error);
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 2000);
  }, []);

  const handleServiceClick = (serviceLink) => {
    router.push(serviceLink);
  };

  const handleLearnMoreClick = (serviceLink) => {
    router.push(serviceLink);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const iconMap = {
    "Web Application Development": <FaLaptopCode />,
    "Mobile Application Development": <FaMobileAlt />,
    "AI & Machine Learning": <FaRobot />,
    "Cloud & DevOps": <FaCloud />,
    "Custom Software Development": <FaCogs />,
    "QA & Testing": <FaClipboardCheck />,
  };

  return (
    <Fragment>
      <section
        className="our-services"
        style={{
          paddingTop: "30px",
          paddingBottom: "50px",
          background: "rgba(238,238,238,0.2)",
        }}
      >
        <div className="container">
          <h1 className="text-center pt-5" style={{ color: "#212529" }}>
            Our Services
          </h1>
          <h3 style={{ color: "#212529" }}>
            Leading Software Development Company
          </h3>
          <div className="cst-hr-for-process mt-4"></div>

          <div className="row g-3 mt-5">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12 mb-4"
                data-aos="fade-up"
                onClick={() => handleServiceClick(service.link)}
              >
                <div className="card shadow rounded p-4 service-card">
                  <div className="d-flex justify-center align-items-center gap-3">
                    <div className="service-icon">{iconMap[service.title]}</div>
                    <h3 className="service-title mt-3">{service.title}</h3>
                  </div>

                  <p className="service-description">{service.description}</p>
                  <div
                    className="learn-more-btn"
                    onClick={() => handleLearnMoreClick(service.link)}
                  >
                    <span>Learn More</span>
                    <RiArrowRightLine className="arrow-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-card {
          color: #333;
          text-align: center;
          padding: 25px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          background-color: rgb(255 255 255);
          max-width: 415px !important;
          min-height: 300px !important;
          position: relative;
          border-radius: 25px !important;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 0 auto !important;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          background-color: #2a64f9;
          color: white;
          cursor:pointer;
        }

        .service-icon {
          font-size: 40px;
          color: #333;
          transition: color 0.3s ease;
        }

        .service-card:hover .service-icon {
          color: #f5f5f5;
        }

        .service-card:hover .learn-more-btn {
          border: 1px solid #fff;
          color: #fff;
        }
        .service-card:hover .service-description {
          color: #fff;
        }

        .service-title {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .service-description {
          font-size: 16px;
          color: #555;
          margin-bottom: 10px;
          text-align: justify;
          line-break: anywhere;
        }

        .learn-more-btn {
          position: relative;
          transition: all 0.3s ease-in-out;
          padding: 10px 15px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #0a58ca;
          gap: 10px;
          font-weight: bold;
          outline: none;
          overflow: hidden;
          font-size: 15px;
          cursor: pointer;
          width: 150px;
          color: #0652dd;
        }
        .learn-more-btn:hover {
          border: 1px solid #fff;
        }

        .arrow-icon {
          width: 24px;
          height: 24px;
          transition: all 0.3s ease-in-out;
        }

        .learn-more-btn:hover :hover {
          transform: scale(1.05);
        }

        .learn-more-btn:hover .arrow-icon {
          transform: translate(10px);
        }

        .learn-more-btn:hover::before {
          animation: shine 1.5s ease-out infinite;
        }

        .learn-more-btn::before {
          content: "";
          position: absolute;
          width: 100px;
          height: 100%;
          background-image: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0) 70%
          );
          top: 0;
          left: -100px;
          opacity: 0.6;
        }

        @keyframes shine {
          0% {
            left: -100px;
          }

          60% {
            left: 100%;
          }

          to {
            left: 100%;
          }
        }

        @media (max-width: 768px) {
          .service-card {
            padding: 15px;
            margin: 0 auto !important;
            min-height: 300px !important;
          }

          .service-title {
            font-size: 1rem;
          }
        }
        @media (max-width: 1024px) {
          .service-card {
            padding: 15px;
            margin: 0 auto !important;
            min-height: 350px !important;
          }

          .service-title {
            font-size: 1rem;
          }
        }
        @media (max-width: 1400px) {
          .service-card {
            margin: 0 auto !important;
            min-height: 310px !important;
          }

          .service-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default OurServices;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import { TechnologyimageMap } from "../Maps/Imagesmap";

const Technologywework = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/technologyData.json");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching technology data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container my-5" style={{ paddingTop: "50px" }}>
      <h2 className="text-center mb-4">Technologies We Work</h2>
      <div className="cst-hr-for-process mb-5"></div>
      <p className="text-center">
        We have worked with <strong> 150+ clients</strong> in the past
        <strong> 10+ years</strong> across various industries, resolving
        complexities and providing optimal software solutions.
      </p>

      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-12 mb-3">
            <div className="d-flex align-items-center justify-content-between client-we-serve">
              <div className="d-flex align-items-center client-icon-section">
                <i
                  className={`fa ${category.icon} me-2 text-primary`}
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="mb-0" style={{ fontSize: "20px" }}>
                  {category.name}
                  <i className="fa fa-angle-right ms-1"></i>
                </h5>
              </div>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {category.clients.map((client, i) => (
                  <div
                    key={i}
                    className="d-flex flex-column align-items-center mx-2 my-2 flex-wrap"
                  >
                    <Tooltip
                      title={
                        <span style={{ fontSize: "1rem" }}>{client.name}</span>
                      }
                      placement="bottom"
                      arrow
                    >
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={TechnologyimageMap[client.image]}
                          alt={client.name}
                          className="img-fluid mb-2"
                          style={{
                            width: "130px",
                            height: "58px",
                            objectFit: "contain",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologywework;

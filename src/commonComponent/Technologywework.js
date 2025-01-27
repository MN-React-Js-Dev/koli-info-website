import React from "react";
import Image from "next/image";
import Vuejs from "../assets/images/Vuejs.png";
import reactImage from "../assets/images/React.webp";
import Nextjs from "../assets/images/nextjs.png";
import angular from "../assets/images/angularjs.png";
import nodejs from "../assets/images/nodejs.png";
import laravel from "../assets/images/laravel.png";
import python from "../assets/images/python.png";
import php from "../assets/images/php.png";
import flutter from "../assets/images/flutter.png";
import android from "../assets/images/android.png";
import ios from "../assets/images/apple.png";
import mongodb from "../assets/images/mongodb.png";
import mysql from "../assets/images/mysqlnew.png";
import postgreashsql from "../assets/images/postgreashsql.png";
import firebase from "../assets/images/firebase.png";
import aws from "../assets/images/aws.png";
import docker from "../assets/images/dockernew1.png";
import cicd from "../assets/images/cicd.png";
import kubernets from "../assets/images/kubernets.png";
import microsoftteam from "../assets/images/microsoftteam.png";
import jira from "../assets/images/jira.png";
import slack from "../assets/images/slack.png";
import clickup from "../assets/images/clickup.png";

const Technologywework = () => {
  const categories = [
    {
      name: "Frontend",
      icon: "fas fa-code",
      clients: [
        { image: reactImage },
        { image: angular },
        { image: Vuejs },
        { image: Nextjs },
      ],
    },
    {
      name: "Backend",
      icon: "fas fa-server",
      clients: [
        { image: nodejs },
        { image: python },
        { image: laravel },
        { image: php },
      ],
    },
    {
      name: "Mobile Development",
      icon: "fas fa-mobile-alt",
      clients: [
        { image: reactImage },
        { image: flutter },
        { image: android },
        { image: ios },
      ],
    },
    {
      name: "Database",
      icon: "fas fa-database",
      clients: [
        { image: mongodb },
        { image: postgreashsql },
        { image: firebase },
        { image: mysql },
      ],
    },
    {
      name: "DevOps and Cloud",
      icon: "fas fa-cogs",
      clients: [
        { image: aws },
        { image: docker },
        { image: kubernets },
        { image: cicd },
      ],
    },
    {
      name: "Project Management",
      icon: "fas fa-clipboard-list",
      clients: [
        { image: microsoftteam },
        { image: jira },
        { image: slack },
        { image: clickup },
      ],
    },
  ];

  return (
    <div className="container my-5" style={{ paddingTop: "50px" }}>
      <h2 className="text-center mb-4">Technologies We Work</h2>
      <div className="cst-hr-for-process mb-5"></div>
      <p className="text-center">
        We have worked with <strong> 50+ clients </strong> in the past
        <strong> 7 years </strong> across various industries resolving
        complexities and differentiating them with optimum software solutions
        suitable to their business proposition.
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
                    {client.image && (
                      <Image
                        src={client.image}
                        alt={client.name}
                        className="img-fluid mb-2"
                        style={{
                          width: "130px",
                          height: "58px",
                          objectFit: "contain",
                        }}
                      />
                    )}
                    <span
                      className="badge bg-light text-dark px-3 py-2 border text-center"
                      style={{
                        fontSize: "1rem",
                        borderRadius: "10px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        width: "auto",
                      }}
                    >
                      {client.name}
                    </span>
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

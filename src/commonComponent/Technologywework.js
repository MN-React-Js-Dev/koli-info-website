// import React from "react";
// import Image from "next/image";
// import Tooltip from "@mui/material/Tooltip";
// import Vuejs from "../assets/images/Vuejs.png";
// import reactImage from "../assets/images/React.webp";
// import Nextjs from "../assets/images/nextjs.png";
// import angular from "../assets/images/angularjs.png";
// import nodejs from "../assets/images/nodejs.png";
// import laravel from "../assets/images/laravel.png";
// import python from "../assets/images/python.png";
// import rubyrails from "../assets/images/Ruby_on_Rails-Logo.png";
// import flutter from "../assets/images/flutter.png";
// import android from "../assets/images/android.png";
// import ios from "../assets/images/apple.png";
// import mongodb from "../assets/images/mongodb.png";
// import mysql from "../assets/images/mysqlnew.png";
// import postgreashsql from "../assets/images/postgreashsql.png";
// import firebase from "../assets/images/firebase.png";
// import aws from "../assets/images/aws.png";
// import docker from "../assets/images/dockernew1.png";
// import cicd from "../assets/images/cicd.png";
// import kubernets from "../assets/images/kubernets.png";
// import microsoftteam from "../assets/images/microsoftteam.png";
// import jira from "../assets/images/jira.png";
// import slack from "../assets/images/slack.png";
// import clickup from "../assets/images/clickup.png";
// import googalchat from "../assets/images/googal chat_logo.png";
// import asana from "../assets/images/asana.png";
// import trello from "../assets/images/trello.png";
// import zoom from "../assets/images/Zoom.png";

// const Technologywework = () => {
//   const categories = [
//     {
//       name: "Frontend",
//       icon: "fas fa-code",
//       clients: [
//         { image: reactImage, name: "React", url: "https://react.dev/" },
//         { image: angular, name: "Angular", url: "https://angular.io/" },
//         {
//           image: Vuejs,
//           name: "Vue.js",
//           url: "https://vuejs.org/guide/introduction.html",
//         },
//         { image: Nextjs, name: "Next.js", url: "https://nextjs.org/" },
//       ],
//     },
//     {
//       name: "Backend",
//       icon: "fas fa-server",
//       clients: [
//         { image: nodejs, name: "Node.js", url: "https://nodejs.org/" },
//         { image: python, name: "Python", url: "https://www.python.org/" },
//         { image: laravel, name: "Laravel", url: "https://laravel.com/" },
//         {
//           image: rubyrails,
//           name: "Ruby on Rails",
//           url: "https://rubyonrails.org/",
//         },
//       ],
//     },
//     {
//       name: "Mobile Development",
//       icon: "fas fa-mobile-alt",
//       clients: [
//         {
//           image: reactImage,
//           name: "React Native",
//           url: "https://reactnative.dev/",
//         },
//         { image: flutter, name: "Flutter", url: "https://flutter.dev/" },
//         {
//           image: android,
//           name: "Android",
//           url: "https://developer.android.com/",
//         },
//         { image: ios, name: "iOS", url: "https://developer.apple.com/ios/" },
//       ],
//     },
//     {
//       name: "Database",
//       icon: "fas fa-database",
//       clients: [
//         { image: mongodb, name: "MongoDB", url: "https://www.mongodb.com/" },
//         {
//           image: postgreashsql,
//           name: "PostgreSQL",
//           url: "https://www.postgresql.org/",
//         },
//         {
//           image: firebase,
//           name: "Firebase",
//           url: "https://firebase.google.com/",
//         },
//         { image: mysql, name: "MySQL", url: "https://www.mysql.com/" },
//       ],
//     },
//     {
//       name: "DevOps and Cloud",
//       icon: "fas fa-cogs",
//       clients: [
//         { image: aws, name: "AWS", url: "https://aws.amazon.com/" },
//         { image: docker, name: "Docker", url: "https://www.docker.com/" },
//         { image: kubernets, name: "Kubernetes", url: "https://kubernetes.io/" },
//         {
//           image: cicd,
//           name: "CI/CD",
//           url: "https://about.gitlab.com/topics/ci-cd/",
//         },
//       ],
//     },
//     {
//       name: "Project Management",
//       icon: "fas fa-clipboard-list",
//       clients: [
//         { image: asana, name: "Asana", url: "https://asana.com/" },
//         {
//           image: jira,
//           name: "Jira",
//           url: "https://www.atlassian.com/software/jira",
//         },
//         { image: trello, name: "Trello", url: "https://trello.com/" },
//         { image: clickup, name: "ClickUp", url: "https://clickup.com/" },
//       ],
//     },
//     {
//       name: "Communication",
//       icon: "fas fa-comments",
//       clients: [
//         {
//           image: microsoftteam,
//           name: "Microsoft Teams",
//           url: "https://www.microsoft.com/en-us/microsoft-teams",
//         },
//         { image: slack, name: "Slack", url: "https://slack.com/" },
//         {
//           image: googalchat,
//           name: "Google Chat",
//           url: "https://chat.google.com/",
//         },
//         { image: zoom, name: "Zoom", url: "https://zoom.us/" },
//       ],
//     },
//   ];
//   return (
//     <div className="container my-5" style={{ paddingTop: "50px" }}>
//       <h2 className="text-center mb-4">Technologies We Work</h2>
//       <div className="cst-hr-for-process mb-5"></div>
//       <p className="text-center">
//         We have worked with <strong>50+ clients</strong> in the past
//         <strong>7 years</strong> across various industries resolving
//         complexities and differentiating them with optimum software solutions
//         suitable to their business proposition.
//       </p>

//       <div className="row">
//         {categories.map((category, index) => (
//           <div key={index} className="col-12 mb-3">
//             <div className="d-flex align-items-center justify-content-between client-we-serve">
//               <div className="d-flex align-items-center client-icon-section">
//                 <i
//                   className={`fa ${category.icon} me-2 text-primary`}
//                   style={{ fontSize: "18px" }}
//                 ></i>
//                 <h5 className="mb-0" style={{ fontSize: "20px" }}>
//                   {category.name}
//                   <i className="fa fa-angle-right ms-1"></i>
//                 </h5>
//               </div>
//               <div className="d-flex flex-wrap justify-content-center align-items-center">
//                 {category.clients.map((client, i) => (
//                   <div
//                     key={i}
//                     className="d-flex flex-column align-items-center mx-2 my-2 flex-wrap"
//                   >
//                     <Tooltip
//                       title={
//                         <span style={{ fontSize: "1rem" }}>{client.name}</span>
//                       }
//                       placement="bottom"
//                       arrow
//                     >
//                       <a
//                         href={client.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Image
//                           src={client.image}
//                           alt={client.name}
//                           className="img-fluid mb-2"
//                           style={{
//                             width: "130px",
//                             height: "58px",
//                             objectFit: "contain",
//                             cursor: "pointer",
//                           }}
//                         />
//                       </a>
//                     </Tooltip>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Technologywework;

//json api data
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

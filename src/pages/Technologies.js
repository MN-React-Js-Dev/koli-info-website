import { useState } from "react";
import html5Image from "../assets/images//html5_new.png";
import React from "../assets/images/React.webp";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import nodejs from "../assets/images/nodejs.png";
import expressjs from "../assets/images/express-js.png";
import python from "../assets/images/python.png";
import php from "../assets/images/php.png";
import flutter from "../assets/images/flutter.png";
import android from "../assets/images/android.png";
import ios from "../assets/images/apple.png";
import aws from "../assets/images/aws.png";
import terraform from "../assets/images/terraform.png";
import SectionTitle from "@/commonComponent/SectionTitle";
import docker from "../assets/images/dockernew.png";
import OurExpertiseBox from "@/PagesComponent/OurExpertise/OurExpertiseBox";

const expertiseData = [
  {
    category: "Frontend",
    subtechnologies: [
      { name: "React.js", image: React },
      { name: "HTML5", image: html5Image },
      { name: "CSS", image: css },
      { name: "JavaScript", image: js },
    ],
  },
  {
    category: "Backend",
    subtechnologies: [
      { name: "Node.js", image: nodejs },
      { name: "Express.js", image: expressjs },
      { name: "Python", image: python },
      { name: "Php", image: php },
    ],
  },
  {
    category: "Mobile Development",
    subtechnologies: [
      { name: "React Native", image: React },
      { name: "Flutter", image: flutter },
      { name: "Android", image: android },
      { name: "iOS", image: ios },
    ],
  },
  {
    category: "Cloud Computing",
    subtechnologies: [
      { name: "AWS", image: aws },
      { name: "terraform", image: terraform },
      { name: "Docker", image: docker },
    ],
  },
];

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [activeSubtechnologies, setActiveSubtechnologies] = useState(
    expertiseData[0].subtechnologies
  );

  const handleTabClick = (category) => {
    setActiveTab(category);
    const selectedCategory = expertiseData.find(
      (item) => item.category === category
    );
    setActiveSubtechnologies(selectedCategory.subtechnologies);
  };

  return (
    <section id="expertise" className="py-5">
      <div className="container">
        <SectionTitle
          title="Our Expertise"
          paragraph="We specialize in modern web technologies to build cutting-edge applications. Explore the core skills we excel at."
          center
          width="665px"
        />

        <div className="mb-4 d-flex flex-column justify-content-center flex-md-row">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {expertiseData.map((categoryData) => (
              <button
                key={categoryData.category}
                className={`btn btn-outline-primary py-2 px-4 border-bottom-0 ${
                  activeTab === categoryData.category
                    ? "text-primary"
                    : "text-muted"
                }`}
                onClick={() => handleTabClick(categoryData.category)}
              >
                {categoryData.category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="row justify-content-center g-4">
          {activeSubtechnologies.map((subtechnology) => (
            <div className="col-12 col-md-4 col-lg-3" key={subtechnology.name}>
              <OurExpertiseBox
                image={subtechnology.image}
                title={subtechnology.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

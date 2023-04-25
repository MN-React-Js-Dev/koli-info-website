import React from "react";
import Image from "next/image";
import conpiesImg from "../../assets/images/compies.png";
import Image2 from "../../assets/images/middle.png";
import Vector from "../../assets/images/Vector.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const DiscussIdeaScreen = () => {
  const data = [
    {
      service: "Web Designing",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Web Development",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Mobile Development",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Web Designing",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Web Development",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      service: "Mobile Development",
      detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
  ];

  const Data = data.map((item) => {
    return item;
  });
  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-5" style={{ alignItems: "center" }}></div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col-12 mb-4 text-center">
                  <Image src={conpiesImg} className="img-fluid " />
                </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row m-5">
            <div className="text-center testi-detail-box">
              <Image src={Image2} className="round img-round-cst" />
              <p className="text-center text-decoration-underline client-name  pt-3">
                John Doe
              </p>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <Image src={Vector} className="img-fluid " />
              <div className="text-center mt-5 pb-5">
                <button className="btn btn-ai-class">
                  <AiOutlineLeft className="slide-btn" />
                </button>
                <button className="btn btn-ai-class">
                  <AiOutlineRight className="slide-btn" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscussIdeaScreen;

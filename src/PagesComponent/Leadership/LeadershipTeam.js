import React from "react";
import Image from "next/image";
import LeaderImg from "../../assets/images/leader.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const LeadershipTeam = () => {
  const data = [
    {
      LeaderName: "John Doe",
      Position: "Founder,Ceo",
      Descrition:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation ullamco laboris",
      imageUrl: "../../assets/images/leader.png",
    },
    {
      LeaderName: "John Doe",
      Position: "Founder,Ceo",
      Descrition:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation ullamco laboris",
    },

    {
      LeaderName: "John Doe",
      Position: "Founder,Ceo",
      Descrition:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation ullamco laboris",
    },

    {
      LeaderName: "John Doe",
      Position: "Founder,Ceo",
      Descrition:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation ullamco laboris",
    },
  ];

  const Data = data.map((item) => {
    return item;
  });
  console.log("item.111..", Data);

  return (
    <>
      <section className="testi-hero-image ">
        <div className="container">
          <h1 className="text-center mt-5 bold-font">Meet Our Leadership Team</h1>
          <div className="cst-hr-for-process mb-5" />
          {Data.map((item) => (
            <>
              <div className="row  mt-5 mb-5" style={{ alignItems: "center" }}>
                <div className="col-sm-4 leaderImg">
                  <Image src={LeaderImg} style={{ borderRadius: "50%" }} />
                </div>
                <div className="col-lg-8 " style={{ alignItems: "center" }}>
                  <div>
                    <div className="bold-font" style={{ fontSize: "20px"}}>
                      {item.LeaderName}
                    </div>
                  </div>
                  <p>{item.Position}</p>
                  <div className="text-cener">
                    <p>{item.Descrition}</p>
                    <BsFacebook
                      style={{
                        color: "#2A64F9",
                        fontSize: "43px",
                        margin: "3px",
                      }}
                    />
                    <AiFillTwitterCircle
                      style={{
                        color: "#2A64F9",
                        fontSize: "48px",
                        margin: "3px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default LeadershipTeam;

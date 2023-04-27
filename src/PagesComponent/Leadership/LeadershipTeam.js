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

 
 
  return (
    <>
      <section className="testi-hero-image ">
        <div className="container">
          <h1 className="text-center mt-5 comman-heading">Meet Our Leadership Team</h1>
          <div className="cst-hr-for-process mb-5" />
          {data.map((item,index) => (
            <>
              <div className="row  mt-5 mb-5" style={{ alignItems: "center" }} key={index}>
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

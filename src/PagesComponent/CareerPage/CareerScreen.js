import React from "react";
import Image from "next/image";
import CircleImg from "../../assets/images/circle.png";

const CareerScreen = () => {
  const data = [
    {
      position: "Sr. PPC Specialist",
      Experience: "3+ Years",
      Location: "Ahemdabad",
    },
    {
      position: "QA Manager",
      Experience: "3+ Years",
      Location: "Ahemdabad",
    },
    {
      position: "Quality Analyst",
      Experience: "3+ Years",
      Location: "Ahemdabad",
    },
    {
      position: "React Native Developer",
      Experience: "3+ Years",
      Location: "Ahemdabad",
    },
    {
      position: "Software Developer – Android",
      Experience: "3+ Years",
      Location: "Ahemdabad",
    },
    {
      position: "Software Engineer – ReactJs",
      Experience: "3+ Years",
      Location: "Ahemdabad",
    },
    {
      position: "Sr. PPC Specialist",
      Experience: "3+ Years",
      Location: "Ahemdabad",
    },
  ];
  return (
    <>
      <section className="testi-hero-image ">
        <div className="container">
          <h1 className=" text-center mt-5 comman-heading">Current Openings</h1>
          <div className="cst-hr-for-process mb-5" />
          {data.map((item) => (
            <>
              <div class="card mt-4 mb-4 pt-2 pb-2 px-3 ">
                <div class="card-body">
                  <div
                    className="row card-items"
                    style={{ alignItems: "center" }}
                  >
                    <div className="col-sm-2">
                      <Image className="card-image " src={CircleImg}></Image>
                    </div>
                    <div
                      className="col-sm-7"
                      style={{
                        alignItems: "center",
                        paddingLeft: "20px",
                        justifyContent: "center",
                      }}
                    >
                      <h5 className="bold-font">{item.position}</h5>
                      <span className="bold-font"> Experience : </span>
                      <span>{item.Experience}</span>
                      <br />
                      <span className="bold-font"> Location : </span>
                      <span>{item.Location}</span>
                    </div>
                    <div className="col-sm-3">
                      <a
                        href="#"
                        class="btn apply-now p-2"
                        style={{ borderRadius: "170px" }}
                      >
                        Apply Now
                      </a>
                    </div>
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

export default CareerScreen;

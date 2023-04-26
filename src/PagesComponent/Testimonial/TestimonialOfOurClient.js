import React from "react";
import client1 from "../../assets/images/middle.png";
import Vector from "../../assets/images/Vector.png";
import Image from "next/image";
import Image2 from "../../assets/images/2.png";
import Image3 from "../../assets/images/3.png";
import Image4 from "../../assets/images/4.png";
import Image5 from "../../assets/images/5.png";

const TestimonialOfOurClient = () => {
  const Data = [
    {
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris",
    },
    {
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris",
    },
    {
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris",
    },
    {
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris",
    },
  ];
 
  return (
    <>
      <section className="testi-hero-image ">
        <div className="container">
          <div className="row">
            <div className="mt-5 mb-5">
              <h1 className="text-center mt-5 bold-font">
                Testimonial Of Our Client
              </h1>
              <div className="cst-hr-for-process mb-5" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="mt-5 align-middle"
              >
                <Image src={client1} className="client-image-2" />
                <div>
                  <Image src={client1} className="round img-round-cst" />
                  <p className="text-center text-decoration-underline client-name pt-3">
                    John Doe
                  </p>
                </div>
                <Image src={client1} className="client-image-2" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image src={client1} className="rounded client-image-3" />
                <p className="text-center review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                {/* </div> */}
                <Image src={client1} className="rounded client-image-3" />
              </div>
              {Data.map((item,index) => (
                <>
                  <div className="text-center mt-5 testi-detail-box" key={index}>
                    <Image src={Image2} className="round img-round-cst" />
                    <p className="text-center text-decoration-underline client-name  pt-3">
                      {item.name}
                    </p>
                    <p className="text-center">
                      {item.review}
                    </p>
                    <Image src={Vector} className="img-fluid " />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialOfOurClient;

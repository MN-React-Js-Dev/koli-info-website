import React from "react";
import Image from "next/image";
import webDevimg2 from "../../assets/images/webDevimg-2.png";
import WtoAppImage1 from "../../assets/images/WtoAppImage1.png";
import mobileLeft from "../../assets/images/mobileLeft.png";
import mobileRight from "../../assets/images/mobileRight.png";
import android from "../../assets/images/android.png";
import apple from "../../assets/images/apple.png";

const AppToWebScreen = () => {
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

  
  return (
    <>
      <section>
        <div className="container">
          <h1 className="text-center pt-5 mt-5 bold-font">
            Share Your App URL
          </h1>
          <div className="cst-hr-for-process " />
          <div className="row">
            <div className="text-center m-5">
              <p>
                You just share your website URL with us, and our team of mobile
                app developers will handle the rest.
              </p>
              <div>
                <Image src={WtoAppImage1} />
              </div>
              <a
                href="#"
                class="btn m-4"
                style={{
                  backgroundColor: "#FF5E42",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "15px 55px",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                Convert App to Web
              </a>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#F8F2F9" }}>
        <div className="container">
          <div className="row mt-5" style={{ alignItems: "center" }}>
            <div className="col-lg-6 ">
              <Image src={mobileLeft} className="img-fluid testi-image" />
            </div>
            <div className="col-lg-6 mt-5">
              <Image src={android} />
              <h1 className=" bold-font">Website to Android App</h1>
              <div className="cst-hr-for-process mb-3" />
              <p className="para-for-hero">
                Decided to turn your existing website into an Android app?
                That’s great. Our Android app developers will turn your entire
                website into an Android app.
              </p>
              <a
                href="#"
                class="btn m-4"
                style={{
                  backgroundColor: "#FF5E42",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "15px 55px",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                Convert Android to App
              </a>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#F8F2F9" }}>
        <div className="container">
          <div className="row mt-5" style={{ alignItems: "center" }}>
            <div className="col-lg-6 mt-5">
              <Image src={apple} />
              <h1 className=" bold-font">Website to iOS App</h1>
              <div className="cst-hr-for-process mb-3" />
              <p className="para-for-hero">
                We do have a dedicated team of iOS developers, who will convert
                your business website into an iOS app.
              </p>
              <a
                href="#"
                class="btn m-4"
                style={{
                  backgroundColor: "#FF5E42",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "15px 55px",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                Convert iSO to App
              </a>
            </div>
            <div className="col-lg-6 ">
              <Image src={mobileRight} className="img-fluid testi-image" />
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center pt-5 mt-5 bold-font">
        Ready to Convert Website into App?
      </h1>
      <div className="cst-hr-for-process " />
      <section>
        <div
          className="container mt-5"
          style={{
            background: "#012E4D",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <div className="row  text-center p-5 m-5">
            <div className="col-lg-2">
              <Image className=" img-fluid" src={android} />
            </div>
            <div className="col-lg-5 text-start">
              <span style={{ fontWeight: "bold" }}>Android</span>
              <br />
              <span>
                We have an expert developer team to convert your CMS or
                eCommerce website into App. Get in touch with our Android app
                expert and discuss your requirements in detail. Just book your
                free consultation now.
              </span>
            </div>
            <div className="col-lg-5">
              <a
                href="#"
                class="btn m-4"
                style={{
                  backgroundColor: "#FF5E42",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "15px 25px",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                Consult Android  App Experts
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container mt-5"
          style={{
            background: "#012E4D",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <div className="row  text-center p-5 m-5">
            <div className="col-lg-2">
              <Image className=" img-fluid" src={apple} />
            </div>
            <div className="col-lg-5 text-start">
              <span style={{ fontWeight: "bold" }}>iOS</span>
              <br />
              <span>
              Whether you have a static or dynamic website that you want to turn into an iOS app, just share your requirements with our iOS app expert and get the best possible solution now.
              </span>
            </div>
            <div className="col-lg-5">
              <a
                href="#"
                class="btn m-4"
                style={{
                  backgroundColor: "#FF5E42",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "15px 25px",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                Consult iOS App Experts
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppToWebScreen;

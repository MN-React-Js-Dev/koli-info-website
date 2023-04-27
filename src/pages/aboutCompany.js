import Header from "@/commonComponent/Header";
import React from "react";
import CustomerCImage from "../assets/images/cc.png";
import Image from "next/image";

const aboutCompany = () => {
  return (
    <>
      <Header />
      <section className="portfolio-section" style={{ background: "#E3E3FF" }}>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
          <div className='col-lg-6 mt-5'>
                <h1 className='hero-sec-header'>About Company</h1>
                <p className='para-for-hero'>
                  We are a company that offers design and develop services for
                  you from initial sketches to the final construction.
                </p>
            </div>
            <div className="col-lg-6 ">
              <Image src={CustomerCImage} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="our-mission mt-5 mb-5">
        <div className="container">
          <h1 className='comman-heading'>Our Mission</h1>
          <div className="hr-cst mb-3"/>
          <p>
            Most awesome businesses and ideas are in vain because they could not
            overcome the technological barriers that came with it. Throughout
            the world, people in different areas have unequal amount of
            opportunities with unique skill sets and we would like to bring that
            together. We are a diverse team of professionals from different
            countries coming together with that premise in mind and to help
            people achieve their dreams. We believe that technology should not
            be a barrier to starting a business or turning an idea into reality
            because it is the technological age. Let us help you or someone else
            turn their dreams into reality by connecting with us! Most awesome
            businesses and ideas are in vain because they could not overcome the
            technological barriers that came with it. Throughout the world,
            people in different areas have unequal amount of opportunities with
            unique skill sets and we would like to bring that together. We are a
            diverse team of professionals from different countries coming
            together with that premise in mind and to help people achieve their
            dreams. We believe that technology should not be a barrier to
            starting a business or turning an idea into reality because it is
            the technological age. Let us help you or someone else turn their
            dreams into reality by connecting with us!
          </p>
        </div>
      </section>

      <section className="qualities-we-take">
        <div className="container">
          <h1 className='comman-heading'>Qualities we take pride in</h1>
          <div className="hr-cst mb-3"/>
          <div className="row mb-5">
            <div className="col-md-1 col-3 pt-4">
              <span className="number-class"> 01</span>
            </div>
            <div className="col-md-11 col-9 cst-boder-para p-3">
              <p>
                A team with years of development, design and marketing
                experience who understand the complexity and needs of your
                business.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-1 col-3 pt-4">
              <span className="number-class"> 02</span>
            </div>
            <div className="col-md-11 col-9 cst-boder-para p-3">
              <p>
                Our focus is on working closely with customers like you to fully
                comprehend your needs and build a solution tailormade for you.
                Moreover, we have integrated modern technologies to ensure you
                get best results for your business.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-1 col-3 pt-4">
              <span className="number-class"> 03</span>
            </div>
            <div className="col-md-11 col-9 cst-boder-para p-3">
              <p>
                We use cutting edge technology, flexibility and scalabilty to
                help meet your business needs, optimizing delivery time and
                minimizing cost.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-1 col-3 pt-4">
              <span className="number-class"> 04</span>
            </div>
            <div className="col-md-11 col-9 cst-boder-para p-3">
              <p>
                We have solved real life business problems just like yours and
                have therefore the ability to put ourselves in your shoes! We
                believe that our clients and our teammates are all partners in
                our successes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default aboutCompany;

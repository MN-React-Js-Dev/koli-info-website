import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import Customer from "../../assets/images/value.png";
import Respect from "../../assets/images/honesty.png";
import Excellence from "../../assets/images/excellence.png";
import Integrity from "../../assets/images/collaborate.png";
import Innovation from "../../assets/images/idea.png";
import Teamwork from "../../assets/images/teamwork.png";
import "aos/dist/aos.css";


const MissionSection = () => {
    const data = [
        {
            service: "Customer-Centricity",
            detail:
                "We prioritize our customers' needs and provide tailored solutions to ensure their success and satisfaction.",
            image: Customer
        },
        {
            service: "Respect",
            detail:
                "We value and treat everyone with respect, fostering a collaborative and inclusive work environment.",
            image: Respect
        },
        {
            service: "Excellence",
            detail:
                " We strive for excellence in everything we do, delivering high-quality products and services to meet and exceed customer expectations.",
            image: Excellence
        },
        {
            service: "Integrity",
            detail:
                "We uphold the highest ethical standards, maintaining transparency and trustworthiness in all our relationships and actions.",
            image: Integrity
        },
        {
            service: "Innovation",
            detail:
                "We encourage and embrace innovation, continuously seeking new ideas and solutions to drive growth and stay ahead in the industry.",
            image: Innovation
        },
        {
            service: "Teamwork",
            detail:
                "We believe in the power of teamwork, fostering a supportive and collaborative environment where individuals can thrive and achieve collective success.",
            image: Teamwork
        },
    ];
    useEffect(() => {
        setTimeout(() => {
            Aos.init();
        }, 1500);
    }, []);

    return (
        <Fragment>
            <section className="our-mission mt-5 mb-5">
                <div className="container" data-aos="fade-up">
                    <h1 className="text-center">Mission and Values</h1>
                    <div className="cst-hr-for-process mb-5" />
                    <p style={{ textAlign: 'center' }}>At KoliInfotech, our mission is to cultivate a vibrant and inclusive work culture that inspires creativity, collaboration, and personal growth. We strive to create an environment where every team member feels valued, motivated, and empowered to achieve their best. By fostering a positive work culture, we aim to drive exceptional results for our clients while promoting employee satisfaction and well-being.</p>
                    <div className="row equal-height-row" data-aos="fade-up" >
                        {data.map(({ service, detail, image }, index) => (
                            <>
                                <div className="col-sm-4 mb-4 d-flex" key={index}>
                                    <div className="p-5 bold-p WebDev-dashed-border text-center">
                                        <Image
                                            src={image}
                                            alt="Image not found"
                                            className="mb-4 mt-4 img-fluid "
                                            style={{ height: 100, width: 100 }}
                                        />
                                        <p>{service}</p>
                                        <span>{detail}</span>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default MissionSection;

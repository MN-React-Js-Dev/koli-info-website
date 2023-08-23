import React, { Fragment, useEffect } from "react";
import DataSecure1 from "../../assets/images/DataSecure-1.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import coustomeSoftware from '../../assets/images/coustomeSoftware.gif'



const CoustomSoftwareHeroSection = () => {

    useEffect(() => {
        setTimeout(() => {
            Aos.init();
        }, 1500);
    }, []);

    return (
        <Fragment>
            <section
                className="testi-hero-image "
                style={{ backgroundColor: "#E3E3FF" }}
            >
                <div className="container">
                    <div className="row" style={{ alignItems: "center" }}>
                        <div className="col-lg-6 mt-5 text-start" data-aos="fade-up">
                            <h1 className="hero-sec-header">Precision Software Solutions: Building Your Future</h1>
                            <p className="para-for-hero">
                                Turning Imagination into Excellence: From Concept to Perfection, We Craft Your Digital Dreams with Meticulous QA & Testing. Let's Elevate Your Vision into a Seamless Reality.
                            </p>
                        </div>
                        <div className="col-lg-6 text-start" data-aos="fade-up">
                            <Image src={coustomeSoftware} alt='Image not found' className="img-fluid" style={{ marginLeft: "80px", height: "150%", width: "70%" }} />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default CoustomSoftwareHeroSection;
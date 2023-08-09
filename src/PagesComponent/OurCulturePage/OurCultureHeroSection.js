import React, { Fragment, useEffect } from "react";
import CareerImage from "../../assets/images/CareerImage.png";
import culture from "../../assets/images/culture.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const OurCultureHeroSection = () => {

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
                        <div className="col-lg-6 mt-5 text-start" data-aos="fade-down">
                            <h1 className="hero-sec-header">Our Culture</h1>
                            <p className="para-for-hero">
                                Company culture is crucial for fostering a positive and productive work environment.</p>
                        </div>
                        <div className="col-lg-6 " data-aos="fade-down">
                            <Image
                                src={culture}
                                alt="Image not found"
                                className="img-fluid testi-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default OurCultureHeroSection;

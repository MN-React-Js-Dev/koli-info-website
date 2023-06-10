import React, { Fragment, useEffect } from "react";
import JobDescriptionHero from "../../assets/images/jobDiscription.png"
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const JobDescriptionHeroSection = () => {

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
                <div className="container text-center">
                    <div className="row" style={{ alignItems: "center" }} >
                        <div className="col-lg-6 mt-5 text-start" data-aos="fade-right">
                            <h1 className="hero-sec-header">Hire Dedicated Developers</h1>
                            <p className="para-for-hero">
                                Looking to hire a skilled developer to join our team and contribute to our projects.
                            </p>
                            <a class="btn contact-us-btn m-4 p-2" type="submit">
                                Contact Us
                            </a>
                        </div>
                        <div className="col-lg-6 " data-aos="fade-left">
                            <Image src={JobDescriptionHero} alt='Image not found' className="img-fluid testi-image" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default JobDescriptionHeroSection;

import React, { Fragment, useEffect } from "react";
import DataSecure1 from "../../assets/images/DataSecure-1.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import AIML from '../../assets/images/AIML.png'



const AiMlHeroSection = () => {

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
                            <h1 className="hero-sec-header">Artificial Intelligence & Machine Learning</h1>
                            <p className="para-for-hero">
                                "From inception to integration, we actualize your AI & ML aspirations through comprehensive cloud development. Elevate your concepts as we seamlessly translate visions into cloud-powered reality."
                            </p>
                        </div>
                        <div className="col-lg-6 text-start" data-aos="fade-up">
                            <Image src={AIML} alt='Image not found' className="img-fluid" style={{ marginLeft: "80px", height: "150%", width: "70%" }} />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default AiMlHeroSection;

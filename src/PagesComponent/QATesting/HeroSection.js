import React, { Fragment, useEffect } from "react";
import DataSecure1 from "../../assets/images/DataSecure-1.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import mainqatesting from  '../../assets/images/mainqatesting.gif'



const QaTestingHeroSection = () => {

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
                            <h1 className="hero-sec-header">Where Excellence Meets Precision - Discover the Future of Testing with Us!</h1>
                            <p className="para-for-hero">
                            From ideation to precision validation, we bring your digital dreams to life through rigorous QA & Testing. Transform your vision into flawless reality
                            </p>
                        </div>
                        <div className="col-lg-6 text-start" data-aos="fade-up">
                            <Image src={mainqatesting} alt='Image not found' className="img-fluid" style={{ marginLeft: "80px", height: "150%", width: "70%" }} />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default QaTestingHeroSection;

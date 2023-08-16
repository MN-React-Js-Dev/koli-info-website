import React, { Fragment, useEffect } from "react";
import DataSecure1 from "../../assets/images/DataSecure-1.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import CloudService1 from '../../assets/images/CloudService1.png'


const CloudServiceHeroSection = () => {

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
                            <h1 className="hero-sec-header">Cloud Development</h1>
                            <p className="para-for-hero">
                            Elevate your concepts with our end-to-end cloud development. From idea to implementation, we bring your visions to the cloud.
                            </p>
                        </div>
                        <div className="col-lg-6 text-start" data-aos="fade-up">
                            <Image src={CloudService1} alt='Image not found' className="img-fluid" style={{marginLeft:"80px", height:"150%", width:"70%"}} />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default CloudServiceHeroSection;

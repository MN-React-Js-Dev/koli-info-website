import React, { Fragment, useEffect } from "react";
import { CLOUDS_P1, CLOUDS_P10, CLOUDS_P11, CLOUDS_P2, CLOUDS_P3, CLOUDS_P4, CLOUDS_P5, CLOUDS_P6, CLOUDS_P7, CLOUDS_P8, CLOUDS_P9, COMMAN_TEXT } from "@/commonComponent/commanText";
import awsservicescloud from "../../assets/images/awsservicescloud.png";
import GoogleCloudServices from '../../assets/images/Google-Cloud-Services.jpg'
import jenikinsservices from '../../assets/images/jenikinsservices.png'
import docker from '../../assets/images/docker.jpg'
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Cloudservices = () => {
    useEffect(() => {
        setTimeout(() => {
            Aos.init();
        }, 1500);
    }, []);

    return (
        <Fragment>
            <section className="mb-5 mt-5 why-choos">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6" >
                            <h1 className="whychooseTxt commanFont">AWS Services</h1>
                            <div className="hr-cst mb-3"></div>
                            <p>{CLOUDS_P1}</p>
                            <p>{CLOUDS_P2}</p>
                            <p>{CLOUDS_P3}</p>
                        </div>
                        <div className="col-sm-6" data-aos="fade-down" >
                            <Image
                                className="img-fluid img-responsive rounded mb-5"
                                src={awsservicescloud}
                                alt="Image not found"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5 mt-5 why-choos">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mt-3" data-aos="fade-down" >
                            <Image
                                className="img-fluid img-responsive rounded"
                                src={GoogleCloudServices}
                                alt="Image not found"
                            />
                        </div>
                        <div className="col-sm-6" >
                            <h1 className="whychooseTxt commanFont">GCP Services</h1>
                            <div className="hr-cst mb-3"></div>
                            <p>{CLOUDS_P4}</p>
                            <p>{CLOUDS_P5}</p>
                            <p>{CLOUDS_P6}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5 mt-5 why-choos">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6" >
                            <h1 className="whychooseTxt commanFont">Jenkins Services</h1>
                            <div className="hr-cst mb-3"></div>
                            <p>{CLOUDS_P7}</p>
                            <p>{CLOUDS_P8}</p>
                            <p>{CLOUDS_P9}</p>
                        </div>
                        <div className="col-sm-6" data-aos="fade-down">
                            <Image
                                className="img-fluid img-responsive rounded mb-5"
                                src={jenikinsservices}
                                alt="Image not found"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5 mt-5 why-choos">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6" data-aos="fade-down">
                            <Image
                                className="img-fluid img-responsive rounded mb-5"
                                src={docker}
                                alt="Image not found"
                            />
                        </div>
                        <div className="col-sm-6" >
                            <h1 className="whychooseTxt commanFont">Docker/Kubernetes Services</h1>
                            <div className="hr-cst mb-3"></div>
                            <p>{CLOUDS_P10}</p>
                            <p>{CLOUDS_P11}</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Cloudservices;

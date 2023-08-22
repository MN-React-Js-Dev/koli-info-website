import React, { Fragment, useEffect } from "react";
import {CSD_P1, CSD_P2, CSD_P3, CSD_P4, CSD_P5, CSD_P6, CSD_P7, CSD_P8} from "@/commonComponent/commanText";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import DigitalTransformation from '../../assets/images/DigitalTransformation.gif'
import ProductEngineering from '../../assets/images/ProductEngineering.gif'
import EnterpriseApplications from '../../assets/images/EnterpriseApplications.gif'
import IntegrationServices from '../../assets/images/IntegrationServices.gif'

const CoustomSoftwareDServices = () => {

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
                        <div className="col-sm-6" data-aos="fade-right" >
                            <h1 className="whychooseTxt commanFont">
                                Digital Transformation</h1>
                            <div className="hr-cst mb-3"></div>
                            <p>{CSD_P1}</p>
                            <p>{CSD_P2}</p>
                        </div>
                        <div className="col-sm-6" data-aos="fade-left" >
                            <Image
                                className="img-fluid img-responsive rounded mb-5"
                                src={DigitalTransformation}
                                alt="Image not found"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5 mt-5 why-choos">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6" data-aos="fade-left" >
                            <Image
                                className="img-fluid img-responsive rounded mb-5 "
                                src={ProductEngineering}
                                alt="Image not found"
                            />
                        </div>
                        <div className="col-sm-6" data-aos="fade-right" >
                            <h1 className="whychooseTxt commanFont">Product Engineering</h1>
                            <div className="hr-cst mb-3"></div>
                            <p>{CSD_P3}</p>
                            <p>{CSD_P4}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5 mt-5 why-choos">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6" data-aos="fade-right" >
                            <h1 className="whychooseTxt commanFont">Enterprise Applications</h1>
                            <div className="hr-cst mb-3"></div>
                            <p>{CSD_P5}</p>
                            <p>{CSD_P6}</p>
                        </div>
                        <div className="col-sm-6" data-aos="fade-left" >
                            <Image
                                className="img-fluid img-responsive rounded mb-5 img-class"
                                src={EnterpriseApplications}
                                alt="Image not found"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5 mt-5 why-choos">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6" data-aos="fade-left" >
                            <Image
                                className="img-fluid img-responsive rounded mb-5 "
                                src={IntegrationServices}
                                alt="Image not found"
                            />
                        </div>
                        <div className="col-sm-6" data-aos="fade-right" >
                            <h1 className="whychooseTxt commanFont">Integration Services</h1>
                            <div className="hr-cst mb-3"></div>
                            <p>{CSD_P7}</p>
                            <p>{CSD_P8}</p>
                        </div>
                    </div>
                </div>
            </section>


        </Fragment>
    );
};

export default CoustomSoftwareDServices;

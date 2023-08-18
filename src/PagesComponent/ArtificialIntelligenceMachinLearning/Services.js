import React, { Fragment, useEffect } from "react";
import { AIML_P1, AIML_P2, AIML_P3, AIML_P4, AIML_P5, AIML_P6 } from "@/commonComponent/commanText";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import AIAnimation from '../../assets/images/AIAnimation.gif'
import AiML from '../../assets/images/AiML.gif'
import AiMlFinal from '../../assets/images/AiMlFinal.gif'
import chatboatFinal from '../../assets/images/chatboatFinal.gif'
import chatboatSmall from '../../assets/images/chatboat_small.gif'
import IOT from '../../assets/images/IoT.gif'
import IOT_Development from '../../assets/images/IOT_Development.gif'

const AiMlServices = () => {
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
                            <h1 className="whychooseTxt commanFont">AI & ML Development</h1>
                            <div className="hr-cst mb-3"></div>
                            <p>{AIML_P1}</p>
                            <p>{AIML_P2}</p>
                        </div>
                        <div className="col-sm-6" data-aos="fade-left" >
                            <Image
                                className="img-fluid img-responsive rounded mb-5"
                                src={AiMlFinal}
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
                                src={chatboatSmall}
                                alt="Image not found"
                            />
                        </div>
                        <div className="col-sm-6" data-aos="fade-right" >
                            <h1 className="whychooseTxt commanFont">Chatbot Development</h1>
                            <div className="hr-cst mb-3"></div>
                            <p>{AIML_P3}</p>
                            <p>{AIML_P4}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5 mt-5 why-choos">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6" data-aos="fade-right" >
                            <h1 className="whychooseTxt commanFont">IoT Development
                            </h1>
                            <div className="hr-cst mb-3"></div>
                            <p>{AIML_P5}</p>
                            <p>{AIML_P6}</p>
                        </div>
                        <div className="col-sm-6" data-aos="fade-left" >
                            <Image
                                className="img-fluid img-responsive rounded mb-5 img-class"
                                src={IOT_Development}
                                alt="Image not found"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
};

export default AiMlServices;

import React, { Fragment, useEffect, useRef } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import AmericanExpress from '../../assets/images/AmericanExpress.png'
import ByjusLogo1 from '../../assets/images/ByjusLogo1.png'
import HDFC from '../../assets/images/HDFC.png'
import Axis from '../../assets/images/Axis.png'
import Onfleek from "../../assets/images/onfleek.png";
import SetFlow from '../../assets/images/SetFlow.png'
import jodiBanao from '../../assets/images/jodiBanao.png'
import { motion } from "framer-motion";
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";



const CoustomSoftwareScreen = () => {
    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    useEffect(() => {
        setTimeout(() => {
            Aos.init();
        }, 1500);
    }, []);

    return (
        <Fragment>
            <section className="onDemandImageCarousal m-3">
                <div className="container">
                    <div className="" data-aos="fade-up">
                        <h1 className="text-center pt-5 comman-heading">
                            Clients that have trusted us over the years
                        </h1>
                        <div className="cst-hr-for-process mb-5"></div>
                        <div className="row blog text-center">
                            <div className="img-slide-box" alt="Image not found" ref={carousel}>
                                <div className="item">
                                    <div className="logos-image">
                                        <Image
                                            src={AmericanExpress}
                                            alt="image"
                                            className="slide-img m-2 p-2 WebDev-dashed-border"
                                        />
                                        <Image
                                            src={Onfleek}
                                            alt="image"
                                            className="slide-img m-2 p-2 WebDev-dashed-border"
                                        />
                                        <Image
                                            src={ByjusLogo1}
                                            alt="image"
                                            className="slide-img m-2 p-2 WebDev-dashed-border"
                                        />
                                        <Image
                                            src={jodiBanao}
                                            alt="image"
                                            className="slide-img m-2  p-2 WebDev-dashed-border"
                                        />
                                        <Image
                                            src={HDFC}
                                            alt="image"
                                            className="slide-img m-2 p-2 WebDev-dashed-border"
                                        />
                                        <Image
                                            src={SetFlow}
                                            alt="image"
                                            className="slide-img m-2 p-2 WebDev-dashed-border"
                                        />
                                        <Image
                                            src={Axis}
                                            alt="image"
                                            className="slide-img m-2 p-2 WebDev-dashed-border"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*   <div className="buttons m-3">
                <button onClick={handleLeftClick} className="m-4 p-1">
    
                  <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={LeftArrow}></Image>
                </button>
                <button onClick={handleRightClick} className="m-4 p-1">
                  <Image style={{ borderRadius: '50%', height: '40px', width: '40px' }} src={RightArrow}></Image>
                </button>
              </div> */}
                            <div className="d-flex justify-content-center">
                                <motion.div
                                    className="box"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10,
                                    }}
                                >
                                    <span className="px-3 arrowIcon" ><AiOutlineLeft style={{ color: "black" }} onClick={handleLeftClick} /></span>
                                </motion.div>
                                <motion.div
                                    className="box"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10,
                                    }}
                                >
                                    <span className="px-3 arrowIcon"><AiOutlineRight style={{ color: "black" }} onClick={handleRightClick} /></span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
};

export default CoustomSoftwareScreen;

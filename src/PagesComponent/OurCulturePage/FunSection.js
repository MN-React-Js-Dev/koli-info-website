import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import Customer from "../../assets/images/party.jpg";
import opning from "../../assets/images/open.jpg";
import brithday from "../../assets/images/brithday.jpg";
// import Lunch from "../../assets/images/Lunch.jpg";
import Lunch from "../../assets/images/Lunch2.jpg";
import chris from "../../assets/images/chris.jpg";
import offSite from "../../assets/images/offSite.jpg";
import saturday from "../../assets/images/saturday.jpg";
import seminar from "../../assets/images/seminar.jpg";
import "aos/dist/aos.css";


const FunSection = () => {
    const data = [
        {
            Topics: "Seminar",
            image: seminar
        },
        {
            Topics: "Birthday Celebration",
            image: brithday
        },
        {
            Topics: "Festival Celebration",
            image: chris
        },
        {
            Topics: "Team Lunch",
            image: Lunch
        },
        {
            Topics: "Outdoor Picnic",
            image: offSite
        },
        {
            Topics: "Friday Fun",
            image: saturday
        },
    ];
    useEffect(() => {
        setTimeout(() => {
            Aos.init();
        }, 1500);
    }, []);

    return (
        <Fragment>
            <section className="our-mission mt-5 mb-5">
                <div className="container" data-aos="fade-up">
                <div style={{justifyContent:'center', alignSelf:'center',alignItems:'center', textAlign:'center'}}>
                <iframe
                    // width="853" 
                    // height="480"
                    width="100%"
                    height="580"
                    src={`https://www.youtube.com/embed/JNxOw9rbX9c`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    
                />

            </div>
                    <h1 className="text-center mt-5">Employee Engagement  Activities</h1>
                    <div className="cst-hr-for-process mb-5" />
                    <div className="row" data-aos="fade-up" >
                        <div className="bold-p text-center ">

                            <Image
                                src={opning}
                                alt="Image not found"
                                className="img-fluid rounded"
                            // style={{ borderRadius: 50, height: 600, width: '100%'  }}
                            />
                        </div>
                        <p style={{ fontSize: 25, fontWeight: 'bold' }} className="text-center mb-5 mt-3">Client Visit</p>

                        {data.map(({ Topics, image }, index) => (
                            <>
                                <div className="col-sm-6 mb-6" key={index}>
                                    <div className="bold-p text-center" data-aos="fade-down">
                                        <Image
                                            src={image}
                                            alt="Image not found"
                                            className="img-fluid"
                                            style={{ borderRadius: 25, height: 400, width: 600 }}
                                        />
                                    </div>
                                    <p style={{ fontSize: 25, fontWeight: 'bold' }} className="text-center mb-5 mt-3">{Topics}</p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default FunSection;

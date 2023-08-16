import React, { Fragment, useEffect, useState } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import CloudServiceHeroSection from "@/PagesComponent/CloudServices/HeroSection";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";
import AiMlHeroSection from "@/PagesComponent/ArtificialIntelligenceMachinLearning/HeroSection";
import AiandMlScreen from "@/PagesComponent/ArtificialIntelligenceMachinLearning/ArtificialIntelligenceMachinLearning";


const AimlServices = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, []);

    return (
        <Fragment>
            <Head>
                <title>A.I & M.L | KOLI Infotech Pvt. Ltd.</title>
            </Head>
            {loader === true ? <LoaderComponent /> : console.log("null")}
            <Header />
            <AiMlHeroSection />
            <AiandMlScreen />
            <Footer />
        </Fragment>
    );
};

export default AimlServices;

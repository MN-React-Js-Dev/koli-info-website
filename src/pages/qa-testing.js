import React, { Fragment, useEffect, useState } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import CloudServiceHeroSection from "@/PagesComponent/CloudServices/HeroSection";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";
import QaTestingHeroSection from "@/PagesComponent/QATesting/HeroSection";
import QaandTestingScreen from '@/PagesComponent/QATesting/LogoScreen'
import QaAndTestingServices from "@/PagesComponent/QATesting/Services";



const QaTestingServices = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Q.A & Testing | KOLI Infotech Pvt. Ltd.</title>
            </Head>
            {loader === true ? <LoaderComponent /> : console.log("null")}
            <Header />
            <QaTestingHeroSection />
            <QaandTestingScreen />
            <QaAndTestingServices />
            <Footer />
        </Fragment>
    );
};

export default QaTestingServices;

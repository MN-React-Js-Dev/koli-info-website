import React, { Fragment, useEffect, useState } from "react";
import DataSecureScreen from "@/PagesComponent/DataSecurity/DataSecureScreen";
import Header from "@/commonComponent/Header";
import CloudServiceHeroSection from "@/PagesComponent/CloudServices/HeroSection";
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from "@/commonComponent/Footer";
import Head from "next/head";
import CoustomSoftwareHeroSection from "@/PagesComponent/CoustomSoftwareDevelopment/HeroSection";
import CoustomSoftwareScreen from "@/PagesComponent/CoustomSoftwareDevelopment/LogoScreen";
import CoustomSoftwareDServices from "@/PagesComponent/CoustomSoftwareDevelopment/Services";



const CoustomSoftwareServices = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Coustom Software | KOLI Infotech Pvt. Ltd.</title>
            </Head>
            {loader === true ? <LoaderComponent /> : console.log("null")}
            <Header />
            <CoustomSoftwareHeroSection />
            <CoustomSoftwareScreen />
            <CoustomSoftwareDServices />
            <Footer />
        </Fragment>
    );
};

export default CoustomSoftwareServices;

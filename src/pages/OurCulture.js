
import Header from '@/commonComponent/Header'
import React, { Fragment, useState, useEffect } from 'react'
import LoaderComponent from "@/commonComponent/loaderComponent";
import OurCultureHeroSection from '@/PagesComponent/OurCulturePage/OurCultureHeroSection';
import MissionSection from '@/PagesComponent/OurCulturePage/MissionSection';
import FunSection from '@/PagesComponent/OurCulturePage/FunSection';
import Footer from '@/commonComponent/Footer'



const OurCulture = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, []);

    return (
        <Fragment>
            {loader === true ? <LoaderComponent /> : console.log("null")}
            <Header />
            <OurCultureHeroSection />
            <MissionSection />
            <FunSection/>
            <Footer />
        </Fragment>
    )
}

export default OurCulture
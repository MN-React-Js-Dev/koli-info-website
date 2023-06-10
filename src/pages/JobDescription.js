
import Header from '@/commonComponent/Header'
import React, { Fragment, useState, useEffect } from 'react'
import LoaderComponent from "@/commonComponent/loaderComponent";
import JobDescriptionHeroSection from '@/PagesComponent/JobDescriptionPage/JobDescriptionHeroSection';
import DescriptionSection from '@/PagesComponent/JobDescriptionPage/DescriptionSection';
import Footer from '@/commonComponent/Footer'



const JobDescription = () => {
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
            <JobDescriptionHeroSection />
            <DescriptionSection/>
            <Footer />
        </Fragment>
    )
}

export default JobDescription
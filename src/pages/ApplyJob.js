
import Header from '@/commonComponent/Header'
import React, { Fragment, useState, useEffect } from 'react'
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from '@/commonComponent/Footer'
import JobDescriptionHeroSection from '@/PagesComponent/JobDescriptionPage/JobDescriptionHeroSection';
import FormSection from '@/PagesComponent/ApplyJobPage/FormSection';
import Head from "next/head";



const ApplyJob = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Apply Job | KOLI Infotech Pvt. Ltd.</title>
            </Head>
            {loader === true ? <LoaderComponent /> : console.log("null")}
            <Header />
            <JobDescriptionHeroSection />
            <FormSection />
            <Footer />
        </Fragment>
    )
}

export default ApplyJob
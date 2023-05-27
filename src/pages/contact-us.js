import DataSecureScreen from '@/PagesComponent/DataSecurity/DataSecureScreen'
import Header from '@/commonComponent/Header'
import ContactUsHeroSection from '@/PagesComponent/ContactUs/HeroSection'
import ContactUsScreen from '@/PagesComponent/ContactUs/ContactUsScreen'
import React, { Fragment,useState,useEffect } from 'react'
import LoaderComponent from "@/commonComponent/loaderComponent";
import Footer from '@/commonComponent/Footer'

 

const ContactUs = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }, []);
    return (
        <Fragment>
             {loader === true ? <LoaderComponent /> : console.log("null")}
            <Header/>
            <ContactUsHeroSection/>
            <ContactUsScreen/>
            <Footer />
        </Fragment>
    )
}

export default ContactUs
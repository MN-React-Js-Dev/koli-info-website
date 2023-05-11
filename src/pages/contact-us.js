import DataSecureScreen from '@/PagesComponent/DataSecurity/DataSecureScreen'
import Header from '@/commonComponent/Header'
import ContactUsHeroSection from '@/PagesComponent/ContactUs/HeroSection'
import ContactUsScreen from '@/PagesComponent/ContactUs/ContactUsScreen'
import React, { Fragment } from 'react'
 

const ContactUs = () => {
    return (
        <Fragment>
            <Header/>
            <ContactUsHeroSection/>
            <ContactUsScreen/>
        </Fragment>
    )
}

export default ContactUs
import DataSecureScreen from '@/PagesComponent/DataSecurity/DataSecureScreen'
import Header from '@/commonComponent/Header'
import ContactUsHeroSection from '@/PagesComponent/ContactUs/HeroSection'
import ContactUsScreen from '@/PagesComponent/ContactUs/ContactUsScreen'
import React from 'react'
 

const ContactUs = () => {
    return (
        <>
            <Header/>
            <ContactUsHeroSection/>
            <ContactUsScreen/>
        </>
    )
}

export default ContactUs
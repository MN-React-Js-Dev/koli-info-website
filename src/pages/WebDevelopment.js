import DataSecureScreen from '@/PagesComponent/DataSecurity/DataSecureScreen'
import Header from '@/commonComponent/Header'
import WebDevHeroSection from '@/PagesComponent/WebDevelopment/HeroSection'
import WebDevScreen from '@/PagesComponent/WebDevelopment/WebDevScreen'
import React from 'react'
 

const WebDevelopment = () => {
    return (
        <>
            <Header/>
            <WebDevHeroSection/>
            <WebDevScreen/>
        </>
    )
}

export default WebDevelopment
import DataSecureScreen from '@/PagesComponent/DataSecurity/DataSecureScreen'
import Header from '@/commonComponent/Header'
import MobiAppDevHeroSection from '@/PagesComponent/MobiAppDevelopment/HeroSection'
import MobiAppDevScreen from '@/PagesComponent/MobiAppDevelopment/MobiAppDevScreen'
import React from 'react'
 

const MobiAppDevelopment = () => {
    return (
        <>
            <Header/>
            <MobiAppDevHeroSection/>
            <MobiAppDevScreen/>
        </>
    )
}

export default MobiAppDevelopment
import DataSecureScreen from '@/PagesComponent/DataSecurity/DataSecureScreen'
import Header from '@/commonComponent/Header'
import WebToAppHeroSection from '@/PagesComponent/WebToAppConvert/HeroSection'
import WebToAppScreen from '@/PagesComponent/WebToAppConvert/WebToAppScreen'
import AppToWebScreen from '@/PagesComponent/AppToWebConvert/AppToWebScreen'
import AppToWebHeroSection from '@/PagesComponent/AppToWebConvert/HeroSection'
import React from 'react'
 

const AppToWebConvert = () => {
    return (
        <>
            <Header/>
            <AppToWebHeroSection/>
            <AppToWebScreen/>
        </>
    )
}

export default AppToWebConvert
import Header from '@/commonComponent/Header'
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
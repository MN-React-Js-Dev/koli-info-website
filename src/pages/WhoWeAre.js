import DataSecureScreen from '@/PagesComponent/DataSecurity/DataSecureScreen'
import Header from '@/commonComponent/Header'
import WhoWeAreHeroSection from '@/PagesComponent/WhoWeAre/HeroSection'
import WhoWeAreScreen from '@/PagesComponent/WhoWeAre/WhoWeAreScreen'
import React from 'react'
 

const WhoWeAre = () => {
    return (
        <>
            <Header/>
            <WhoWeAreHeroSection/>
            <WhoWeAreScreen/>
        </>
    )
}

export default WhoWeAre
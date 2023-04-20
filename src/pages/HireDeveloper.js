import Header from '@/commonComponent/Header'
import React from 'react'
import HireDevHeroSection from '@/PagesComponent/HireDeveloper/HeroSection'
import HireDevScreen from '@/PagesComponent/HireDeveloper/HireDevScreen'
 

const HireDeveloper = () => {
    return (
        <>
            <Header/>
            <HireDevHeroSection/>
            <HireDevScreen/>
        </>
    )
}

export default HireDeveloper
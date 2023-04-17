import CareerPageHeroSection from '@/PagesComponent/CareerPage/HeroSection'
import CareerScreen from '@/PagesComponent/CareerPage/CareerScreen'
import Header from '@/commonComponent/Header'
import React from 'react'
 

const CareerPage = () => {
    return (
        <>
            <Header/>
            <CareerPageHeroSection/>
            <CareerScreen/>
        </>
    )
}

export default CareerPage
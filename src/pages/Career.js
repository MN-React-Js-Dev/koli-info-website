import CareerPageHeroSection from '@/PagesComponent/CareerPage/HeroSection'
import CareerScreen from '@/PagesComponent/CareerPage/CareerScreen'
import Header from '@/commonComponent/Header'
import React, { Fragment } from 'react'
 

const CareerPage = () => {
    return (
        <Fragment>
            <Header/>
            <CareerPageHeroSection/>
            <CareerScreen/>
        </Fragment>
    )
}

export default CareerPage
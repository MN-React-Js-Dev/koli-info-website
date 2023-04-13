import HeroSection from '@/PagesComponent/HomePage/HeroSection'
import OurProcessSection from '@/PagesComponent/HomePage/OurProcessSection'
import OurServices from '@/PagesComponent/HomePage/OurServices'
import Header from '@/commonComponent/Header'
import React from 'react'
 

const HomePage = () => {
    return (
        <>
            <Header/>
            <HeroSection />
            <OurProcessSection />
            <OurServices />
        </>
    )
}

export default HomePage
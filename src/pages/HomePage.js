import React from 'react'
import HeroSection from '@/PagesComponent/HomePage/HeroSection'
import OurPortfolio from '@/PagesComponent/HomePage/OurPortfolio'
import OurProcessSection from '@/PagesComponent/HomePage/OurProcessSection'
import OurServices from '@/PagesComponent/HomePage/OurServices'
import OurTopBlogs from '@/PagesComponent/HomePage/OurTopBlogs'
import ScheduleAnAppointment from '@/PagesComponent/HomePage/ScheduleAnAppointment'
import WhyChooseBlueInfinity from '@/PagesComponent/HomePage/WhyChooseBlueInfinity'
import Footer from '@/commonComponent/Footer'
import Header from '@/commonComponent/Header'
 

const HomePage = () => {
    return (
        <>
            <Header/>
            <HeroSection />
            <OurProcessSection />
            <OurServices />
            <OurPortfolio/>
            <WhyChooseBlueInfinity/>
            <OurTopBlogs/>
            <ScheduleAnAppointment/>
            <Footer/>
        </>
    )
}

export default HomePage
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
import TestimonialPage from './Testimonial'
import TestiHeroSection from '@/PagesComponent/Testimonial/TestiHeroSection'
import TestimonialOfOurClient from '@/PagesComponent/Testimonial/TestimonialOfOurClient'
import LeadershipHeroSection from '@/PagesComponent/Leadership/HeroSection'
import LeadershipPage from './Leadership'
import LeadershipTeam from '@/PagesComponent/Leadership/LeadershipTeam'

import OurValuableClients from '@/PagesComponent/HomePage/OurValuableClients'

 

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
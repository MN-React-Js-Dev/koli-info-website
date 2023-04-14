import HeroSection from '@/PagesComponent/HomePage/HeroSection'
import OurProcessSection from '@/PagesComponent/HomePage/OurProcessSection'
import OurServices from '@/PagesComponent/HomePage/OurServices'
import Header from '@/commonComponent/Header'
import React from 'react'
// ------------------------------------------------------
import TestimonialPage from './Testimonial'
import TestiHeroSection from '@/PagesComponent/Testimonial/TestiHeroSection'
import TestimonialOfOurClient from '@/PagesComponent/Testimonial/TestimonialOfOurClient'
// ------------------------------------------------------
import LeadershipHeroSection from '@/PagesComponent/Leadership/HeroSection'
import LeadershipPage from './Leadership'
import LeadershipTeam from '@/PagesComponent/Leadership/LeadershipTeam'
 

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
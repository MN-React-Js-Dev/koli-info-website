import LeadershipHeroSection from '@/PagesComponent/Leadership/HeroSection'
import LeadershipTeam from '@/PagesComponent/Leadership/LeadershipTeam'
import HeroSection from '@/PagesComponent/Testimonial/TestiHeroSection'
import Header from '@/commonComponent/Header'
import React from 'react'
 

const LeadershipPage = () => {
    return (
        <>
            <Header/>
            <LeadershipHeroSection />
            <LeadershipTeam/>
        </>
    )
}

export default LeadershipPage
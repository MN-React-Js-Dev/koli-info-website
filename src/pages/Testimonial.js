import TestiHeroSection from '@/PagesComponent/Testimonial/TestiHeroSection'
import HeroSection from '@/PagesComponent/Testimonial/TestiHeroSection'
import Header from '@/commonComponent/Header'
import React from 'react'
 

const TestimonialPage = () => {
    return (
        <>
            <Header/>
            <TestiHeroSection/>
            <TestimonialOfOurClient/> 
        </>
    )
}

export default TestimonialPage
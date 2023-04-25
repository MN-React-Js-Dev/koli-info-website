import DiscussIdeaHeroSection from '@/PagesComponent/DiscussYourIdea/HeroSection'
import DiscussIdeaScreen from '@/PagesComponent/DiscussYourIdea/DiscussIdeaScreen'
import Header from '@/commonComponent/Header'
import React from 'react'
 

const DiscussYourIdea = () => {
    return (
        <>
            <Header/>
            <DiscussIdeaHeroSection/>
            <DiscussIdeaScreen/>
        </>
    )
}

export default DiscussYourIdea
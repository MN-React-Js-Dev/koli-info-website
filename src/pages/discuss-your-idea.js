import React, { Fragment } from 'react'
import DiscussIdeaHeroSection from '@/PagesComponent/DiscussYourIdea/HeroSection'
import DiscussIdeaScreen from '@/PagesComponent/DiscussYourIdea/DiscussIdeaScreen'
import Header from '@/commonComponent/Header'
 

const DiscussYourIdea = () => {
    return (
        <Fragment>
            <Header/>
            <DiscussIdeaHeroSection/>
            <DiscussIdeaScreen/>
        </Fragment>
    )
}

export default DiscussYourIdea
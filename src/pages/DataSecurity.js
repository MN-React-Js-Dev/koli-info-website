import DataSecureScreen from '@/PagesComponent/DataSecurity/DataSecureScreen'
import DataSecureHeroSection from '@/PagesComponent/DataSecurity/HeroSection'
import Header from '@/commonComponent/Header'
import React from 'react'
 

const DataSecurity = () => {
    return (
        <>
            <Header/>
            <DataSecureHeroSection/>
            <DataSecureScreen/>
        </>
    )
}

export default DataSecurity
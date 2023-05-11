import React, { Fragment } from 'react'
import DataSecureScreen from '@/PagesComponent/DataSecurity/DataSecureScreen'
import DataSecureHeroSection from '@/PagesComponent/DataSecurity/HeroSection'
import Header from '@/commonComponent/Header'
 

const DataSecurity = () => {
    return (
        <Fragment>
            <Header/>
            <DataSecureHeroSection/>
            <DataSecureScreen/>
        </Fragment>
    )
}

export default DataSecurity
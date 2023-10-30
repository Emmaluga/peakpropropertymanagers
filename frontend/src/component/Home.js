import React from 'react'
import Hero from "./Hero"
import Intro from './Intro'
import CompaniesLogo from './CompaniesLogo'
import Howitworks from './Howitworks'
import Guides from './Guides'
import Featuresproperty from './Featuresproperty'
import Neighbourhood from './Neighbourhood'
import Peakproad from './Peakproad'
import Featureblogs from './Featureblogs'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home'>

        <Hero />
        <Intro />
        <CompaniesLogo />
        <Howitworks />
        <Guides />
        <Featuresproperty />
        <Neighbourhood />
        <Peakproad />
        <Featureblogs />
        <Footer />
      
    </div>
  )
}

export default Home

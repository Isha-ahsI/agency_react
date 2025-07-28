import React from 'react'
import HeroSection from '../components/home/HeroSection'
import TrustedBrands from '../components/home/TrustedBrands'
import AboutUs from '../components/home/AboutUs'
import Services from '../components/home/Services'
import Pricing from '../components/home/Pricing'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBrands />
      <AboutUs />
      <Services />
      <Pricing />
    </div>
  )
}

export default Home

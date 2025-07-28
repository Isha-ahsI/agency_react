import React from 'react'
import HeroSection from '../components/home/HeroSection'
import TrustedBrands from '../components/home/TrustedBrands'
import AboutUs from '../components/home/AboutUs'
import Services from '../components/home/Services'
import Pricing from '../components/home/Pricing'
import Features from '../components/home/Features'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBrands />
      <AboutUs />
      <Services />
      <Features />
      <Pricing />

    </div>
  )
}

export default Home

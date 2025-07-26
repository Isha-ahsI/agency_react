import React from 'react'
import HeroSection from '../components/home/HeroSection'
import TrustedBrands from '../components/home/TrustedBrands'
import AboutUs from '../components/home/AboutUs'
import Services from '../components/home/Services'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBrands />
      <AboutUs />
      <Services />
    </div>
  )
}

export default Home

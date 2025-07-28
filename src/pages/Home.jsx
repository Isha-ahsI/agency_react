import React from 'react'
import HeroSection from '../components/home/HeroSection'
import TrustedBrands from '../components/home/TrustedBrands'
import AboutUs from '../components/home/AboutUs'
import Services from '../components/home/Services'
import Pricing from '../components/home/Pricing'
import Features from '../components/home/Features'
import Team from '../components/home/Team'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBrands />
      <AboutUs />
      <Services />
      <Features />
      <Pricing />
      <Team />
    </div>
  )
}

export default Home

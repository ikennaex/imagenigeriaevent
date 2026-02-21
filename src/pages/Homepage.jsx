import React from 'react'
import Herosection from '../components/Herosection'
import About from '../components/About'
import OurWork from '../components/OurWork'
import OurBelief from '../components/OurBelief'
import PartnerWithUs from '../components/PartnerWithUs'
import Footer from '../components/Footer'
import UpcomingEvent from '../components/UpcomingEvent'
import Team from '../components/Team'

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <About />
      <Team />
      <OurWork />
      <UpcomingEvent />
    </div>
  )
}

export default Homepage

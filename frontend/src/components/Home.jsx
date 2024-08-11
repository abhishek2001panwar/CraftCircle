import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import FeaturedCrafts from './FeaturedCrafts'
import ContactUs from './ContactUs'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <FeaturedCrafts/>
        <ContactUs  />
        <Footer />
    </div>
  )
}

export default Home
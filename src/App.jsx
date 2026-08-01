import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FrameScrollAnimation from './components/FrameScrollAnimation'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Achievements from './components/Achievements'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <FrameScrollAnimation frameCount={240} />
      <About />
      <Portfolio />
      <Achievements />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App

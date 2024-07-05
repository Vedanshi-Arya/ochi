import React from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import Eyes from './components/Eyes'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Ready from './components/Ready'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';





function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen'>
      
      
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/> 
      <Eyes/>
      <Featured/>
      <Cards/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default App
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react'
import Header from './components/header/header.jsx'
import './App.css'
import Home from './components/home/home.jsx'
import Data from './components/home/Data.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import ScrollUp from './components/scrollup/ScrollUp.jsx'
import Footer from './components/footer/Footer.jsx'
import Education from './components/education/Education.jsx'
import Transitioneffect from './components/TransitionEffect/Transitioneffect.jsx'
import { Router } from 'react-router-dom'
import ParticleContainer from './ParticleContainer.jsx'


const App=()=>{
return( 
 <>

  <Transitioneffect/>
  <div className='w-[32px] h-[32px] bg-black fixed top-0 left-0 pointer-events-none z-50'></div>   
  <Header/>
  {/* <ParticleContainer/> */}
  <main className='main'>
    
    
 
    <Home />

   
    <About />

    
    <Skills />
=
    <Education/>
  </main>
  <Footer/>
  <ScrollUp/>

  </>
)
}
export default App

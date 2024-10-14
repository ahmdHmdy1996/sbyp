import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import './home.css'
const Home = () => {
  return (
    <div className='container m-auto'>
      <Navbar/>
      <Hero/>
      <LogoBar/>
    </div>
  )
}

export default Home
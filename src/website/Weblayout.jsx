import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const Weblayout = () => {
  return (
    <>
        <Navbar/>

        <div className='content'>
            <Outlet/>
        </div>


        <Footer/>
    
    </>
  )
}

export default Weblayout
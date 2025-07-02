import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import './Main.css';
import Contact from '../pages/Contact';
import Education from '../pages/Education';
import Footer from '../pages/Footer';

import Welcome from './Welcome';
import Navbar from './Navbar';


const Main = () => {
  return (
    <div className='main'>

        <Navbar/>
   
       
        <div id='home'>
            <Home/>
        </div>

        <div id='about'>
            <About/>

        </div>

        <div id='education'>
          <Education/>

        </div>
        <div id='contact'>
         <Contact/>

        </div>
        <Footer/>
         </div>
  )
}

export default Main
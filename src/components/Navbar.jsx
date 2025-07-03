import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

  return (
    <nav ref={navRef}>
      <div className="navbar-container">
        <div className="nav-left">
          <a href="#home" className="brand"> #Aravind</a>
          
        </div>

        <div className="nav-right">
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a className='nav-link' href="#home">Home</a></li>
            <li><a className='nav-link' href="#about">About</a></li>
            <li><a className='nav-link' href="#education">Education</a></li>
            <li><a className='nav-link' href="#Project" onClick={(e)=>{
               e.preventDefault(); // prevents default navigation
  alert("Sorry! this page is currently unavailable. It will be available later.");
            }}>Projects</a></li>
            <li><a className='nav-link' href="#contact">Contact</a></li>
        
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

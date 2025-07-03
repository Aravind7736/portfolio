import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      
      <p>© 2025 Aravind Sabu</p>

      <ul className="footer-links">
        <li><a  className="footer-link" href="#home">Home</a></li>
        <li ><a  className="footer-link" href="#projects">Projects</a></li>
        <li><a  className="footer-link" href="#contact">Contact</a></li>
      </ul>

      <div className="footer-icons">
        <a href="https://github.com/yourusername" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedin /></a>
        <a href="mailto:youremail@example.com"><FaEnvelope /></a>
      </div>
   



    </div>
  )
}

export default Footer
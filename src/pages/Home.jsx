import React, { useEffect } from 'react';
import './Home.css';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/Aravind Sabu.pdf"; // Ensure this path is correct
    a.download = "Aravind Sabu.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view'); // Removes the class when out of view
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach(el => {
      el.classList.remove('in-view'); // Reset state
      observer.observe(el);
    });
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className='main-body'>
      <Left-section>
        <h1 className='home-heading animate-on-scroll'>Hi, I'm <br />
          <span className='home-heading-1 animate-on-scroll'>Aravind Sabu</span>
        </h1>
        <h2 className='home-heading-2 animate-on-scroll'>Computer engineer</h2>
        <p className='home-paragraph animate-on-scroll'> "Aspiring computer engineer ready to learn and contribute to innovative solutions. <br />
          Passionate about technology and eager to apply my knowledge to real-world problems."
        </p>
        <button onClick={handleDownload} className='slice animate-on-scroll'>
          <span className="text">Download CV</span>
        </button>
        <div className='logo animate-on-scroll'>
          <a className='logo-insta' href="https://www.instagram.com/__._aravind___/" target="_blank" rel="noreferrer"><FaInstagram /></a>&nbsp;
          <a className='logo-insta' href="#contact"><FaEnvelope /></a>&nbsp;
          <a className='logo-insta' href="https://www.linkedin.com/in/aravind-sabu-017880356"><FaLinkedin /></a>
        </div>
      </Left-section>
      <Right-section>
        <img className='image animate-on-scroll' src="/image/home-image.gif" alt="error" width="500px" height="500px" />
      </Right-section>
    </div>
  );
};

export default Home;

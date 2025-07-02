import React, { useEffect } from 'react';
import './About.css';


// for Animation
export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
          } else {
            entry.target.classList.remove('in-view'); // Removes class when out of view
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach(el => {
      el.classList.remove('in-view'); // Reset when page loads
      observer.observe(el);
    });
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  

  // about contants

  
  return (
  <div className='about-main'>
 <header className='about-main-head'>
  ABOUT ME
 </header>
 <div className='about-container'>
 <left-section-about>
  <div className="line animate-on-scroll">

      <p>HELLO👋I'M</p>
      <section className='animation animate-on-scroll'>
          <div className='first' >
             <div>ARAVIND</div>
          </div>
          <div className='second' >
             <div>WEB DEVELOPER</div>
         </div>
          <div className='third' >
            <div>PROGRAMMER</div>
          </div>
      </section>
</div>

 </left-section-about>


 <right-section-about>

<p className='about-p animate-on-scroll'>

  Highly motivated and enthusiastic Computer Engineering diploma graduate from Kerala. 
  Strong academic background with keen interest in technology and innovation. 
  Looking for opportunities to apply my technical skills and knowledge in a challenging 
  and growth-oriented environment across diverse areas in the tech industry. </p>
 </right-section-about>


 </div>
   </div>
  );
}

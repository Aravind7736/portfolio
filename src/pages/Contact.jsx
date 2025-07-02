import React from 'react'
import './Contact.css';

import emailjs from 'emailjs-com';

import {  FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useRef } from 'react';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7736', 'template_a30cq0m', form.current, 'OCUlaQVsHtj-jwX8T')
      .then((result) => {
        alert('Message sent!');
      }, (error) => {
        alert('Failed to send message.');
        console.error(error);
      });
  };
  
  return (
  <div className='contact-section'>
      <header className='contact-head'>
        CONTACT
      </header>
    <section className='contact-container'>
        <div className='contact-left'>
          <div class="info-contact animate-on-scroll">
            <div className="rotate-box">

              <div class="up animate-on-scroll">
                <button class="card1">
                  <div className='instagram'>
                    <a className='logo-insta' href="https://www.instagram.com/__._aravind___/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                  </div>
                </button>
                <button class="card2">
                  <div className='whatapp'>
                    <a className='logo-insta' href=" https://wa.me/qr/D6MC75JP62PEJ1" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                  </div>
                </button>
              </div>

              <div class="down animate-on-scroll">
                <button class="card3">
                  <div className='linkedin'>
                    <a className='logo-insta' href="https://www.linkedin.com/in/aravind-sabu-017880356"><FaLinkedin /></a>
                  </div>
                </button>
                <button class="card4">
                   <div className='github'>
                    <a className='logo-insta' href="https://github.com/Aravind7736"><FaGithub /></a>
                  </div>

                </button>
              </div>
            </div>
          </div>
        </div>


        <div className='contact-right'>
          <div className='form-container'>
            <form className='form' ref={form} onSubmit={sendEmail}>
              <div className='input'>
              <input className='input-sections' type="text" name="name" placeholder="Your Name" required />
              </div>
              <div  className='input'>
              <input  className='input-sections' type="email" name="email" placeholder="Your Email" required />
              </div>
              <div >
              <textarea className='text-area' name="message" placeholder="Your Message" required />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
    </section>
  </div>


  )
}

export default Contact
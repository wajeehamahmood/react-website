import React from 'react';
import Logo from "../Assets/Logo.svg";

import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper'>

      {/* Section One */}
      <div className='footer-section-one'>

        <div className='footer-logo-container'>
          <img src={Logo} alt='logo' />
        </div>

        <div className='footer-icons'>
          <BsTwitter />
          <FaLinkedin />
          <BsYoutube />
          <FaFacebook />
        </div>

      </div>

      {/* Section Two */}
      <div className='footer-section-two'>

        <div className='footer-section-columns'>
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Work</span>
          <span>Testimonials</span>
        </div>

        <div className='footer-section-columns'>
          <span>0344-232323</span>
          <span>rosya2@gmail.com</span>
          <span>contact@food.com</span>
        </div>

        <div className='footer-section-columns'>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>

      </div>

    </div>
  );
};

export default Footer;
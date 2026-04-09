import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='about-section-container'>

      <div className='about-background-image-container'>
        <img src={AboutBackground} alt="background" />
      </div>

      <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt="about" />
      </div>

      <div className='about-section-text-container'>

        <p className='primary-subheading'>
          About
        </p>

        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>

        <p className='primary-text'>
          Foodie brings a world of flavors right to your fingertips, making it easy to explore and enjoy your favorite dishes anytime.
        </p>

        <p className='primary-text'>
          Craving something delicious? Foodie delivers your favorite meals hot and fresh right to your doorstep in minutes.
        </p>

        <div className='about-buttons-container'>
          <button className='secondary-button'>Learn More</button>

          <button className='watch-video-button'>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>

      </div>

    </div>
  );
};

export default About;
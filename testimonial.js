import React from 'react';
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <div className='testimonial-section-wrapper'>

      <div className='testimonial-section-top'>
        <p className='primary-subheading'>Testimonials</p>
        <h1 className='primary-heading'>
          WHAT THEY ARE SAYING
        </h1>
        <p className='primary-text'>
          Our customers say the food is delicious, the delivery is fast, and the service is excellent every time.
        </p>
      </div>

      <div className='testimonial-section-bottom'>

        <img src={ProfilePic} alt='profile' />

        <p>
          Our customers love the tasty food, quick delivery, and amazing service.
        </p>

        <div className='testimonials-star-container'>
          <AiFillStar style={{ color: "gold" }} />
          <AiFillStar style={{ color: "gold" }} />
          <AiFillStar style={{ color: "gold" }} />
          <AiFillStar  style={{ color: "gold" }}/>
          <AiFillStar  style={{ color: "gold" }}/>
        </div>

        <h2>John Doe</h2>

      </div>

    </div>
  );
};

export default Testimonial;


import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {

  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Pick your perfect meal and enjoy delicious flavors made just for you! 🍽️"
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Get your meals delivered quickly and fresh to your doorstep! 🚚"
    },
    {
      image: ChooseMeals,
      title: "Choose Meals",
      text: "Choose your perfect meal from a wide variety of delicious options! 🍽️"
    }
  ];

  return (
    <div className='work-section-wrapper'>

      <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-heading'>How It Works</h1>
        <p className='primary-text'>
          Customers love the tasty food, quick delivery, and excellent service!
        </p>
      </div>

      <div className='work-section-bottom'>
        {workInfoData.map((data, index) => (
          <div className='work-section-info' key={index}>
            <div className='info-boxes-img-container'>
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Work;
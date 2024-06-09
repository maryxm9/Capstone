import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import restaurantsData from '../../DrinksData.json';
import './BusinessMenu.scss';
import StarRating from '../../components/StarRating/StarRating';

function BusinessMenu() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    // Find the restaurant by id
    const foundRestaurant = restaurantsData.restaurants.find((restaurant) => restaurant.id === id);
    setRestaurant(foundRestaurant);
  }, [id]);

  const handleFlip = (drinkId) => {
    setFlipped((prevFlipped) => ({
      ...prevFlipped,
      [drinkId]: !prevFlipped[drinkId]
    }));
  };

  if (!restaurant) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="menu-drink-container">
      {restaurant.drinks.map((drink) => (
        <div 
          className={`menu-drink-list ${flipped[drink.id] ? 'flipped' : ''}`} 
          key={drink.id} 
          onClick={() => handleFlip(drink.id)}
        >
          <div className="menu-drink-inner">
            <div className="menu-drink-front">
              <div className="menu-img-container">
                <img
                  className="menu-img"
                  src={`${process.env.PUBLIC_URL}/assets/images/${drink.image}`}
                  alt={drink.name}
                />
              </div>
              <h3>{drink.name}</h3>
              <p>Price: ${drink.price}</p>
              <StarRating rating={drink.rating} />
            </div>
            <div className="menu-drink-back">
              <p>{drink.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BusinessMenu;

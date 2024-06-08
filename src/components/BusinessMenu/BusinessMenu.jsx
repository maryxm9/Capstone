import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import restaurantsData from '../../DrinksData.json';
import './BusinessMenu.scss';
import StarRating from '../../components/StarRating/StarRating';

function BusinessMenu() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // Find the restaurant by id
    const foundRestaurant = restaurantsData.restaurants.find((restaurant) => restaurant.id === id);
    setRestaurant(foundRestaurant);
  }, [id]);

  if (!restaurant) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ul className="drink-container">
        {restaurant.drinks.map((drink) => (
          <li className="drink-list" key={drink.id}>
            <div className="drink-img-container">
              <img
                className="drink-img"
                src={`${process.env.PUBLIC_URL}/assets/images/${drink.image}`}
                alt={drink.name}
              />
            </div>
            <h3>{drink.name}</h3>
            <p>{drink.description}</p>
            <p>Price: ${drink.price}</p>
            <StarRating rating={drink.rating} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessMenu;

import React from 'react';
import { Link } from 'react-router-dom';
import restaurantsData from '../../DrinksData.json';
import './RatingsPage.scss';

function RatingsPage() {
  // Highest to lowest rating
  const compareRatings = (a, b) => b.rating - a.rating;

  return (
    <div>
      <h1>Bubble Tea Ratings</h1>
      <div className="bubble-tea-list">
        {restaurantsData.restaurants.map((restaurant) => (
          <div className="restaurant" key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <ul className="drink-container">
              {restaurant.drinks.sort(compareRatings).map((drink) => (
                <li className="drink" key={drink.id}>
                  <Link to={`/business/${restaurant.id}`}>
                    <div className="drink-img-container">
                      <img
                        className="drink-img"
                        src={`${process.env.PUBLIC_URL}/assets/images/${drink.image}`}
                        alt={drink.name}
                      />
                    </div>
                    <div className="drink-details">
                      <h3>{drink.name}</h3>
                      <p>Price: ${drink.price}</p>
                      <p>Store: {restaurant.name}</p>
                      <p>Rating: {drink.rating}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingsPage;


import React from 'react';
import { Link } from 'react-router-dom';
import restaurantsData from '../../DrinksData.json';
import './RatingsPage.scss';

function RatingsPage() {
  const allDrinks = restaurantsData.restaurants.reduce((acc, curr) => {
    return [...acc, ...curr.drinks];
  }, []);

  // Highest to lowest rating
  const compareRatings = (a, b) => b.rating - a.rating;

  return (
    <div>
      <h1>Bubble Tea Ratings</h1>
      <div className="bubble-tea-list">
        <ul className="drink-container">
          {allDrinks.sort(compareRatings).map((drink) => (
            <li className="drink" key={drink.id}>
              <Link to={`/business/${drink.id}`}>
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
                  <p>Store: {drink.store}</p>
                  <p>Rating: {drink.rating}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RatingsPage;

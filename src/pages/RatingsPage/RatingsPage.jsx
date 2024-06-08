import React from "react";
import { Link } from "react-router-dom";
import restaurantsData from "../../DrinksData.json";
import "./RatingsPage.scss";
import StarRating from "../../components/StarRating/StarRating"; 

function RatingsPage() {
  const allDrinks = restaurantsData.restaurants.reduce((acc, curr) => {
    const drinksWithStoreInfo = curr.drinks.map((drink) => ({
      ...drink,
      storeId: curr.id,
      storeName: curr.name,
    }));
    return [...acc, ...drinksWithStoreInfo];
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
              <Link to={`/business/${drink.storeId}`}>
                <div className="drink-row">
                  <div className="drink-img-container">
                    <img
                      className="drink-img"
                      src={`${process.env.PUBLIC_URL}/assets/images/${drink.image}`}
                      alt={drink.name}
                    />
                  </div>
                  <div className="drink-details">
                    <h3>{drink.name}</h3>
                    <p>${drink.price}</p>
                    <p>Store: {drink.storeName}</p>
                    <div className="star-ratings">
                    <StarRating rating={drink.rating} />{drink.rating}</div>
                  </div>
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


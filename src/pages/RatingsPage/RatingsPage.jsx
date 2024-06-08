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
          {allDrinks.sort(compareRatings).map((drink, index) => (
            <li className="drink" key={drink.id}>
              <div className="drink-row">
                <h3>#{index + 1}</h3>
                <div className="drink-img-container">
                  <img
                    className="drink-img"
                    src={`${process.env.PUBLIC_URL}/assets/images/${drink.image}`}
                    alt={drink.name}
                  />
                </div>
                <div className="drink-details">
                  <div className="drink-details-left">
                    <Link
                      to={`/business/${drink.storeId}`}
                      className="rating-links"
                    >
                      <h3>{drink.name}</h3>
                      <p>${drink.price}</p>
                      <p>{drink.storeName}</p>
                    </Link>
                  </div>
                  <div className="star-ratings">
                    <StarRating rating={drink.rating} />
                    <p>{drink.rating.toFixed(1)}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RatingsPage;

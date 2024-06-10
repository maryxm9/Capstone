import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import restaurantsData from "../../DrinksData.json";
import "./BusinessMenu.scss";
import StarRating from "../../components/StarRating/StarRating";
import axios from "axios";

function BusinessMenu() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [newRatings, setNewRatings] = useState({});

  useEffect(() => {
    // Find the restaurant by id
    const foundRestaurant = restaurantsData.restaurants.find(
      (restaurant) => restaurant.id === id
    );
    setRestaurant(foundRestaurant);
  }, [id]);

  const handleRatingChange = (drinkId, e) => {
    const rating = parseFloat(e.target.value);
    setNewRatings((prevRatings) => ({
      ...prevRatings,
      [drinkId]: rating,
    }));
    console.log("New Ratings: ", {
      ...newRatings,
      [drinkId]: rating,
    });
  };

  const handleRatingSubmit = async (drinkId) => {
    const newRating = newRatings[drinkId];
    if (newRating !== undefined) {
      try {
        const response = await axios.post(
          `http://localhost:3000/api/businesses/${id}/drinks/${drinkId}/rating`,
          { rating: newRating }
        );

        const updatedRestaurant = {
          ...restaurant,
          drinks: restaurant.drinks.map((drink) => {
            if (drink.id === drinkId) {
              return { ...drink, rating: response.data.newRating };
            }
            return drink;
          }),
        };

        setRestaurant(updatedRestaurant);

        setNewRatings((prevRatings) => {
          const newRatingsCopy = { ...prevRatings };
          delete newRatingsCopy[drinkId];
          return newRatingsCopy;
        });
      } catch (error) {
        console.error("Error updating rating:", error);
      }
    }
  };

  if (!restaurant) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="menu-drink-container">
      {restaurant.drinks.map((drink) => (
        <div className="menu-drink-list" key={drink.id}>
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
            <div className="rating-input">
              <select
                value={newRatings[drink.id] || ""}
                onChange={(e) => handleRatingChange(drink.id, e)}
              >
                <option value="">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button onClick={() => handleRatingSubmit(drink.id)}>
                Submit
              </button>
            </div>
            <p className="description">{drink.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BusinessMenu;
import React from 'react';
import DrinksData from '../../DrinksData.json';

function HomePage() {
  // Find the highest-rated bubble tea drink
  let highestRatedDrink = null;
  let shopName = null;

  for (const restaurant of DrinksData.restaurants) {
    for (const drink of restaurant.drinks) {
      if (!highestRatedDrink || drink.rating > highestRatedDrink.rating) {
        highestRatedDrink = drink;
        shopName = restaurant.name;
      }
    }
  }

  return (
    <div>
      <h1>Welcome to the Bubble Tea Shop!</h1>
      <h2>Highest Rated Bubble Tea:</h2>
      <p>Drink: {highestRatedDrink.name}</p>
      <p>Shop Name: {shopName}</p>
    </div>
  );
}

export default HomePage;

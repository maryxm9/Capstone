import React from "react";
import DrinksData from "../../DrinksData.json";
import "./HomePage.scss";

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
    <section className="container">
      <div className="left-container">
        <h2 className="highest-rated-title">Highest Rated Bubble Tea:</h2>
        {/* <img
            className="drink-img"
            src={`${process.env.PUBLIC_URL}/assets/images/No1.PNG`}
            alt={highestRatedDrink.name}
          /> */}
      </div>
      <div className="centered-container">
        <div className="drink-container">
          <img
            className="drink-img"
            src={`${process.env.PUBLIC_URL}/assets/images/${highestRatedDrink.image}`}
            alt={highestRatedDrink.name}
          />
          <img
            src={`${process.env.PUBLIC_URL}assets/images/Spin.png`}
            alt="spin"
            className="spinning-circle"
          />
        </div>
      </div>
      <div className="right-container">
        <p className="highest-rated-name">{highestRatedDrink.name}</p>
        <p className="highest-rated-shop">From: {shopName}</p>
      </div>
    </section>
  );
}

export default HomePage;

import React from 'react';
import './StarRating.scss';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <span key={index} className="star full-star">★</span>
        ))}
      {halfStar && <span className="star half-star">★</span>}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <span key={index} className="star empty-star">★</span>
        ))}
    </div>
  );
};

export default StarRating;

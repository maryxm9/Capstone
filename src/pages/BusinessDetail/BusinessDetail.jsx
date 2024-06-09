import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BusinessMenu from "../../components/BusinessMenu/BusinessMenu";
import "./BusinessDetail.scss";

function BusinessDetail() {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/businesses/${id}`)
      .then((response) => {
        setBusiness(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the business:", error);
      });
  }, [id]);

  if (!business) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{business.name}</h1>
      <img className="detail-img" src={business.image_url} alt={business.name} />
      <p>{business.location.display_address.join(", ")}</p>
      <p>Rating: {business.rating}</p>
      <p>Review Count: {business.review_count}</p>
      <a href={business.url} target="_blank" rel="noopener noreferrer">
        View on Yelp
      </a>
      <BusinessMenu />
    </div>
  );
}

export default BusinessDetail;



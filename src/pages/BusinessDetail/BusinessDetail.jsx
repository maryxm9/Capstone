import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
    <div className="business-detail-container">
      <h1>{business.name}</h1>
      {/* <img
        className="detail-img"
        src={business.image_url}
        alt={business.name}
      /> */}
      <div className="business-info">
        <p>
          <span className="info-label">Address:</span>{" "}
          <span className="info-value">
            {business.location.display_address.join(", ")}
          </span>
        </p>
        <p>
          <span className="info-label">Rating:</span>{" "}
          <span className="info-value">{business.rating}</span>
        </p>
        <p>
          <span className="info-label">Review Count:</span>{" "}
          <span className="info-value">{business.review_count}</span>
        </p>
        <a href={business.url} target="_blank" rel="noopener noreferrer">
          View on Yelp
        </a>
      </div>
      <BusinessMenu />
    </div>
  );
}

export default BusinessDetail;

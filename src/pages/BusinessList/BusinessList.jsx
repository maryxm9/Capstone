import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BusinessList.scss";

function BusinessList({ searchTerm }) {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/businesses")
      .then((response) => {
        setBusinesses(response.data.businesses);
      })
      .catch((error) => {
        console.error("Error fetching the businesses:", error);
      });
  }, []);

  const filteredBusinesses = businesses.filter((business) =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ul className="business-container">
        {filteredBusinesses.map((business) => (
          <li className="business-list" key={business.id}>
            <Link className="business-link" to={`/business/${business.id}`}>
              <div className="business-img-container">
                <img
                  className="business-img"
                  src={business.image_url}
                  alt={business.name}
                />
              </div>
              <p className="business-name">{business.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessList;

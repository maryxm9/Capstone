import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <header className="header">
      <div className="nav">
        <div className="nav__logo">
          <Link className="logo_link" to="/"></Link>
        </div>
        <div className="nav__links">
          <Link className="nav__home" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="nav__businesses" to="/businesses">
            <h3>Businesses</h3>
          </Link>
          <Link className="nav__ratings" to="/ratings">
            <h3>Ratings</h3>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navigation;

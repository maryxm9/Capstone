import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import BusinessDetail from "./pages/BusinessDetail/BusinessDetail";

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/businesses')
      .then(response => {
        setBusinesses(response.data.businesses);
      })
      .catch(error => {
        console.error('Error fetching the businesses:', error);
      });
  }, []);

  return (
    <div>
      <h1>Business List</h1>
      <ul>
        {businesses.map((business) => (
          <li key={business.id}>
            <Link to={`/business/${business.id}`}>{business.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Best BOBA</h1>
        </header>
        <Routes>
          <Route path="/" element={<BusinessList />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

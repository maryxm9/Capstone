import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import BusinessDetail from "./pages/BusinessDetail/BusinessDetail";
import Navigation from "./components/Navigation/Navigation";
import BusinessList from "./pages/BusinessList/BusinessList";
import HomePage from "./pages/HomePage/HomePage";
import RatingsPage from "./pages/RatingsPage/RatingsPage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Navigation searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="App">
        <header className="App-header"></header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/businesses" element={<BusinessList searchTerm={searchTerm} />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
          <Route path="/ratings" element={<RatingsPage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

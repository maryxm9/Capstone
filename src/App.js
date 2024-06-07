import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.scss";
import BusinessDetail from "./pages/BusinessDetail/BusinessDetail";
import Navigation from "./components/Navigation/Navigation";
import BusinessList from "./pages/BusinessList/BusinessList";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      {<Navigation />}
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/businesses" element={<BusinessList />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

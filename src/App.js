import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.scss";
import BusinessDetail from "./pages/BusinessDetail/BusinessDetail";
import Navigation from "./components/Navigation/Navigation";
import BusinessList from "./pages/BusinessList/BusinessList";

function App() {
  return (
    <Router>
      {<Navigation />}
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Best BOBA</h1>
        </header>
        <Routes>
          <Route path="/businesses" element={<BusinessList />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

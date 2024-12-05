// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Reserve from "./pages/Reserve";
import Tickets from "./pages/Tickets";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="mainContainer">
        <div className="appNavBar">
          <Navbar />
        </div>
        <div className="routeContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </div>
        <div className="appFooter">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
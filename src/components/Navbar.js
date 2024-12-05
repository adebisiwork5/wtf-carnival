import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../images/carnival-bg.png"; 

function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="WTF Carnival Logo" className="logo-img" />
        </Link>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/event">Events</Link></li>
        <li><Link to="/reserve">Reservations</Link></li>
        <li><Link to="/tickets">Tickets</Link></li>
      </ul>
      <div className="ticket-button-wrapper">
        <button className="ticket-button">Buy Tickets</button>
      </div>


      <div className="hamburger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
}

export default Navbar;

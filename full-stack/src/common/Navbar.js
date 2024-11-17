import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Language Learning Platform</h1>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/materials/grammar">Grammar</Link>
        <Link to="/materials/vocabulary">Vocabulary</Link>
        <Link to="/materials/audio">Audio</Link>
      </div>
    </nav>
  );
};

export default Navbar;

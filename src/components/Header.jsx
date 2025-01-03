import React from 'react';
import '../Styles/Header.css'; 
import './Home';

const Header = () => (
  <header className="header">
    <h1>Portfolio</h1>
    <nav className="nav">
      <a href="Home.jsx">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Portfolio</a>
      <a href="#">Contact</a>
    </nav>
  </header>
);

export default Header;
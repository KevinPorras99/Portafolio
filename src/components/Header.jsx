import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';

const Header = () => (
  <header className="header">
    <h1>Kevin's Portfolio</h1>
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About me</NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
    </nav>
  </header>
);

export default Header;
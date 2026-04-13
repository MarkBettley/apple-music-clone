import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <i className="fab fa-apple"></i>
        <span>Apple Music</span>
      </div>
      <nav className="header__nav">
        <ul>
          <li>Biblioteca</li>
          <li>Radio</li>
          <li>Buscar</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
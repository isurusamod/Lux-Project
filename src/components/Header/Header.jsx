import React, { useState } from 'react';
import './Header.css';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="lux-header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <button 
              className="menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
            <div className="logo">
              <h1>LUX</h1>
            </div>
            <nav className="main-nav">
              <ul>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Collections</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Journal</a></li>
              </ul>
            </nav>
            <div className="header-actions">
              <button className="search-btn">🔍</button>
              <button className="account-btn">👤</button>
              <button className="cart-btn">
                🛍️
                <span className="cart-count">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
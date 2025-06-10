import React from 'react';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <div className="mobile-menu-content">
        <nav>
          <ul>
            <li><a href="#" onClick={onClose}>Shop</a></li>
            <li><a href="#" onClick={onClose}>Collections</a></li>
            <li><a href="#" onClick={onClose}>About</a></li>
            <li><a href="#" onClick={onClose}>Journal</a></li>
            <li><a href="#" onClick={onClose}>Account</a></li>
            <li><a href="#" onClick={onClose}>Search</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
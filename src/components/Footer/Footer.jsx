import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="lux-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Shop</h3>
            <ul>
              <li><a href="#">All Products</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Customer Care</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Size Guide</a></li>
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Lux. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
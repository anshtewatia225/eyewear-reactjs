import * as Route from '@/constants/routes';
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  TwitterOutlined
} from '@ant-design/icons';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-block">
          <div className="block-title">
            <h2 className="brand-logo">Eyewear</h2>
          </div>
          <div className="block-content">
            <p>Your premium destination for the finest eyewear. Quality, style, and comfort in every frame.</p>
          </div>
        </div>
        <div className="footer-block">
          <div className="block-title">
            <h3>Shop</h3>
          </div>
          <div className="block-content">
            <ul>
              <li><a href={Route.SHOP}>All Products</a></li>
              <li><a href={Route.FEATURED_PRODUCTS}>Featured</a></li>
              <li><a href={Route.RECOMMENDED_PRODUCTS}>Recommended</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-block">
          <div className="block-title">
            <h3>Support</h3>
          </div>
          <div className="block-content">
            <ul>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Shipping Policy</a></li>
              <li><a href="/">Returns</a></li>
              <li><a href="/">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-block">
          <div className="block-title">
            <h3>Stay Connected</h3>
          </div>
          <div className="block-content">
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FacebookOutlined /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><InstagramOutlined /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><TwitterOutlined /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer"><GithubOutlined /></a>
            </div>
            <p>Subscribe to our newsletter for latest updates.</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          <span>&copy; {new Date().getFullYear()} Eyewear Store. All Rights Reserved.</span>
        </div>
        <div className="footer-credits">
          <span>Developed by <a href="/">Ansh Tewatia</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

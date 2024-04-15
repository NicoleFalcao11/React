import React from 'react';
import './Footstyle.css';

const Footer = () => {

    return (
        <div>
            <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name">The Book Store</span>
        </div>
        <div class="media-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="footer-box">
          <li class="link_name">Store</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Get started</a></li>
        </ul>
        <ul class="footer-box">
          <li class="link_name">Services</li>
          <li><a href="#">Buy Books</a></li>
          <li><a href="#">Sell Books</a></li>
          <li><a href="#">Buy stationary</a></li>
          <li><a href="#">Buy stationary</a></li>
        </ul>
        <ul class="footer-box">
          <li class="link_name">Account</li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">My account</a></li>
          <li><a href="#">Prefrences</a></li>
          <li><a href="#">Purchase</a></li>
        </ul>
        <ul class="footer-box">
          <li class="link_name">Books</li>
          <li><a href="#">Computer Science</a></li>
          <li><a href="#">ECS</a></li>
          <li><a href="#">AIDS</a></li>
          <li><a href="#">Mechanical</a></li>
        </ul>
       
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2024 <a href="#">The Book Store.</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
        </div>
    )
}
export default Footer;
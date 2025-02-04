import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section class="footer-container">
        <div className="footer-row">
          <div class="footer-col">
            <h4>Info</h4>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Compressions</li>
              <li>Customers</li>
              <li>Service</li>
              <li>Collection</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-list">
              <li>Free Designs</li>
              <li>Latest Designs</li>
              <li>Themes</li>
              <li>Popular Designs</li>
              <li>Art Skills</li>
              <li>New Uploads</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="footer-list">
              <li>Customer Agreement</li>
              <li>Privacy Policy</li>
              <li>GDPR</li>
              <li>Security</li>
              <li>Testimonials</li>
              <li>Media Kit</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>

            <div className="icons">
              <Link to="/Contact">
                <button className="footer-contact-button">Contact</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

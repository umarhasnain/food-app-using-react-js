import React from "react";
import "./footer.css";
import Button from "../Botton/Button";
import { iconButtonText, iconButtonText1 } from "../../utils/constant/iconButtonText";
import IconButton from "../iconButton/iconButton";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div>
        <div>
          <h1>
            <img src="public\assets\imgs\logo.png" alt="" />
          </h1>
        </div>
        <div>
        <div className="icon-wrapper">
          <IconButton data={iconButtonText}/>
          <IconButton data={iconButtonText1}/>

        </div>
        </div>
      </div>
      <div className="footer-list">
        <ul>
          <li className="footer-list-heading">Quick Links </li>
          <li>Features </li>
          <li>Food Menu </li>
          <li>Offer </li>
          <li>Review</li>
          <li>Rider </li>
        </ul>
      </div>
      <div className="footer-list">
        <ul>
          <li className="footer-list-heading">Get to know us</li>
          <li> Gift Cards</li>
          <li> DoorDash Stories</li>
          <li> Linkedin</li>
          <li> Glassdor</li>
          <li> Accessibility</li>
        </ul>
      </div>
      <div className="footer-list">
        <ul>
          <li className="footer-list-heading"> News</li>
          <li> Blog</li>
          <li> FAQ</li>
          <li> Lift Media</li>
          <li>Press </li>
          <li> Press Kit</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Footer;

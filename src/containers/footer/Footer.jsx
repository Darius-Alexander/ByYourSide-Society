import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="byyourside_footer section_padding">
      <div className="byyourside_footer-heading">
        <h1 className="gradient_text">
          Join us in making a difference – together we can create a brighter future!
        </h1>
      </div>
      <div className="byyourside_footer-btn">
        <p>Donate Now</p>
      </div>
      <div className="byyourside_footer-links">
        <div className="byyourside_footer-links_logo">
          <img src={logo} alt="logo"/>
          <p>ByYourSide Society, all rights reserved</p>
        </div>
        <div className="byyourside_footer-links_div">
          <h4>Links</h4>
          <p>Socials</p>
          <p>Events</p>
          <p>Donate</p>
          <p>Contact</p>
        </div>
        <div className="byyourside_footer-links_div">
          <h4>Organization</h4>
          <p>About Us</p>
          <p>Our Team</p>
          <p>Privacy</p>
        </div>
        <div className="byyourside_footer-links_div">
          <h4>Get in touch</h4>
          <p>Email: Buyoursidesociety@gmail.com</p>
          <p>Address: 5288 Joyce St Vancouver, BC V5R 6C9</p>
        </div>
      </div>
      <div className="byyourside_footer-copyright">
        <p>© 2026 ByYourSide Society. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer

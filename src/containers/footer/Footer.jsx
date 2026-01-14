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
        </div>
        <div className="byyourside_footer-links_div">
          <h4>Organization</h4>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfMCZMJendPzbibU-I_YAZBHymW2lKr6-pmZihGRlGcp_GIQ/viewform">Join Our Team!</a>
          <a href="https://docs.google.com/document/d/1ScvvgBndZybkC6hnh9oqpws8J5jvzX-YDEdOShl5HqM/edit?usp=sharing">Position Handbook</a>
        </div>
        <div className="byyourside_footer-links_div">
          <h4>Get in touch</h4>
          <p>Email: Byyoursidesociety@gmail.com</p>
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

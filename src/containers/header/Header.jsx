import React from 'react'
import './header.css'
import ByYourSide from '../../assets/logo.svg'


const Header = () => {
  return (
    <div className="byyourside_header section_padding" id="home">
      <div className ="byyourside_header-content">
        <h1 className="gradient_text">
          Assisting and Empowering for a Brighter Tomorrow
        </h1>
        <p> ByYourSide Society is a youth-led compassionate initiative dedicated 
            to uplifting the less fortunate in Vancouver and the lower mainland. Committed
            to fostering positive transformation, it brings hope, support, and change to 
            the local community, embodying solidarity and progress for all.
        </p>
        <div className="byyourside_header-content_input">
          <input type="email" placeholder="Enter your email" />
          <button type="button">Subscribe to our Newsletter</button>
        </div>
      </div>
      <div className="byyourside_header-image">
        <img src={ByYourSide} alt="ByYourSide Society" />
      </div>
    </div>
  )
}

export default Header

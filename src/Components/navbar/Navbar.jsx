import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="byyourside_navbar">
      <div className="byyourside_navbar-links">
        <div className="byyourside_navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="byyourside_navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#initiatives">Initiatives</a></p>
          <p><a href="#partners">Partners</a></p>
          <p><a href="#team">Team</a></p>
        </div>
      </div>
      <div className="byyourside_navbar-donate">
        <button type="button">Donate!</button>
      </div>
    </div>
  )
}

export default Navbar

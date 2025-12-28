import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>  
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#initiatives">Initiatives</a></p>
    <p><a href="#partners">Partners</a></p>
    <p><a href="#team">Team</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="byyourside_navbar">
      <div className="byyourside_navbar-links">
        <div className="byyourside_navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="byyourside_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="byyourside_navbar-donate">
        <button type="button">Donate!</button>
      </div>
      <div className="byyourside_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="byyourside_navbar-menu_container scale-up-center"> 
            <div className="byyourside_navbar-menu-container-links">
              <Menu />
              <div className="byyourside_navbar-menu_container-links-donate">
                <button type="button">Donate!</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

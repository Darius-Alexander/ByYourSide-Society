import { useState } from 'react' // React hook for managing component state
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri' // Importing menu icons from react-icons library
import './navbar.css'
import logo from '../../assets/logo.svg'


// Menu component for navigation links, returns resuable JSX
// Links are anchor tags pointing to different sections of the same page
// (indicated by the # symbol in the href attribute instead of a URL)
const Menu = () => (
  // react fragment to group multiple elements without adding extra nodes to the DOM
  <>  
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#initiatives">Initiatives</a></p>
    <p><a href="#partners">Partners</a></p>
    <p><a href="#team">Team</a></p>
  </>
)

// Navbar component for the website's navigation bar
const Navbar = () => {
  // State variable to track whether the mobile menu is open or closed
  // useState hook initializes toggleMenu to false (menu closed)
  // setToggleMenu is the function to update toggleMenu state
  const [toggleMenu, setToggleMenu] = useState(false);
  
  // JSX returned by the Navbar component that is the UI for the navigation bar
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
        {/* Ternary operator: Conditionally renders either close or menu icon based on toggleMenu state
            If toggleMenu is true, display RiCloseLine (X icon) that closes the menu
            If toggleMenu is false, display RiMenu3Line (hamburger icon) that opens the menu
            onClick handlers use arrow functions to toggle the state when icons are clicked */}
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        
        {/* Logical AND operator: Only renders dropdown menu container if toggleMenu is true
            && operator short-circuits: if toggleMenu is false, the entire expression returns false and nothing renders
            This creates the show/hide effect for the mobile menu dropdown */}
        {toggleMenu && (
          <div className="byyourside_navbar-menu_container scale-up-center"> 
            <div className="byyourside_navbar-menu-container-links">
              {/* Menu component invocation: Renders the Menu component (defined at top) with all navigation links */}
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

export default Navbar // Makes Navbar component available for import in other files

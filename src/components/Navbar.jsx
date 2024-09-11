import React, { useState } from 'react';
import Logo from "../assets/logo_background.png";
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import '../style/Navbar.css';
import { contacts_images } from '../assets/contacts/contacts';

function Navbar() {
  const [showRotatePpot, setShowRotatePpot] = useState(true);
  const [showPortfolioLinks, setShowPortfolioLinks] = useState(false);
  const [showAboutMeLinks, setShowAboutMeLinks] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  
  const location = useLocation(); // Get the current route

  const handleMainPageHover = () => {
    setShowRotatePpot(true);
    setShowPortfolioLinks(false);
    setShowAboutMeLinks(false);
    setShowEmail(false);
  };

  const handlePortfolioHover = () => {
    setShowRotatePpot(false);
    setShowPortfolioLinks(true);
    setShowAboutMeLinks(false);
    setShowEmail(false);
  };

  const handleAboutMeHover = () => {
    setShowRotatePpot(false);
    setShowPortfolioLinks(false);
    setShowAboutMeLinks(true);
    setShowEmail(false);
  };

  const handleContactHover = () => {
    setShowRotatePpot(false);
    setShowPortfolioLinks(false);
    setShowAboutMeLinks(false);
    setShowEmail(true);
  };

  return (
    <div className='navbar'>
      {/* Left Side - Logo */}
      <div className='leftSide'>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Middle Part - Main navigation */}
      <div className='middle'>
        <Link
          to="/"
          onMouseEnter={handleMainPageHover}
          className={location.pathname === "/" ? "active-link" : ""}
        >
          Main Page
        </Link>
        <Link
          to="/portfolio"
          onMouseEnter={handlePortfolioHover}
          className={location.pathname.startsWith("/portfolio") ? "active-link" : ""}
        >
          Portfolio
        </Link>
        <Link
          to="/about"
          onMouseEnter={handleAboutMeHover}
          className={location.pathname === "/about" ? "active-link" : ""}
        >
          About Me
        </Link>
        <Link
          to="/contacts"
          onMouseEnter={handleContactHover}
          className={location.pathname === "/contacts" ? "active-link" : ""}
        >
          Contact
        </Link>
      </div>

      {/* Right Side - Vertical Line */}
      <div className="vertical-line"></div>

      {/* Right Side */}
      <div className='rightSide'>
        {showRotatePpot && <span className="rotate-ppot">Rotate the pot</span>}
        
        {/* Portfolio Submenu */}
        {showPortfolioLinks && (
          <div className="portfolio-submenu">
            <Link to="/certv">Volunteering</Link>
            <Link to="/competitions">Competitions</Link>
            <Link to="/cert">Certificates</Link>
            <Link to="/projects">Projects</Link>
          </div>
        )}

        {/* About Me Submenu */}
        {showAboutMeLinks && (
          <div className="aboutme-submenu">
            <a href="https://github.com/leeeeffff" target="_blank" rel="noopener noreferrer">
              <img src={contacts_images.github} alt="Github1" className="github1" />
            </a>
            <a href="https://www.instagram.com/h._yuh/" target="_blank" rel="noopener noreferrer">
              <img src={contacts_images.insta} alt="Insta1" className="insta1" />
            </a>
            <a href="https://au.linkedin.com/in/chang-hyun-lee-0aa445254" target="_blank" rel="noopener noreferrer">
              <img src={contacts_images.linkedin} alt="Linkedin1" className="linkedin1" />
            </a>
          </div>
        )}

        {/* Email on Contact Hover */}
        {showEmail && (
          <div className="email-display">
            <span>krleepi@gmail.com</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

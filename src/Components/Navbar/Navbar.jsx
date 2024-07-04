import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/5e387f889619c72979b2eee3_favicon.png';

import Home from '../Home/Home';
import About from '../About/About';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar  ${scroll ? 'navbar-scroll' : ''}`} >
      <div className="navbar-left">
        <img src={logo} alt='#' className="navbar-logo"/>
        <div className="navbar-brand">Crypto Hub</div>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          ☰
        </button>
      </div>
      
      <div className="navbar-links">
        <a href="#home" className="navbar-item"><Link to='Home' smooth={true} offset={0} duration={500}>Home</Link></a>
        <a href="#about" className="navbar-item"><Link to='About' smooth={true} offset={0} duration={500}>About</Link></a>
        <a href="#Service" className="navbar-item"><Link to='Service' smooth={true} offset={0} duration={500}>Services</Link></a>
        <a href="#contact" className="navbar-item"><Link to='Contact'  smooth={true} offset={0} duration={500}>Contact</Link></a>
      </div>
      
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <a href="#home" className="dropdown-item"><Link to='Home' smooth={true} offset={0} duration={500}>Home</Link></a>
        <a href="#about" className="dropdown-item"><Link to='About' smooth={true} offset={0} duration={500}>About</Link></a>
        <a href="#contact" className="dropdown-item"><Link to='Service' smooth={true} offset={0} duration={500}>Services</Link></a>
        <a href="#contact" className="dropdown-item"><Link to='Contact' smooth={true} offset={0} duration={500}>Contact</Link></a>
      </div>
    </nav>
  );
};

export default Navbar;

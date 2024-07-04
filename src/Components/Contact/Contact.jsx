import React from "react";
import './Contact.css'
import { Link } from 'react-scroll'; 
const Contact = () => {
  return (
    <div className="container-fluid footer" id="Contact">
      <div className="row p-5">
        <div className="col-md-4">
          <h2 className="logo">Crypto Hub</h2>
          <p>
            One of the most reliable projects in is the trade of crypto<br/>
            currency, which popular among investors and brokers. Lorem ipsum
            dolor sit amet, eu duo invenire volutpat urbanitas, ut mutat inermis
            duo, qui dicat vocent ei. Eos no tollit mollis dignissim.
          </p>
        </div>
        <div className="col-md-4">
          <h2>Contact info</h2>
          <p>Email: support@example.com</p>
          <p>Phone: +1(495) 259 1578</p>
          <p>Location: New York, USA </p>
        </div>
        <div className="col-md-4">
        <div className="navbar-links-1">
        <a href="#home" className="navbar-item"><Link to='Home' smooth={true} offset={0} duration={500}>Home</Link></a>
        <a href="#about" className="navbar-item"><Link to='About' smooth={true} offset={0} duration={500}>About</Link></a>
        <a href="#Service" className="navbar-item"><Link to='Service' smooth={true} offset={0} duration={500}>Services</Link></a>
        <a href="#contact" className="navbar-item">Contact</a>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

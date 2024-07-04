/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom'; // Ensure ReactDOM is imported to render the component
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import Sponsor from './Components/Sponsors/Sponsor';
import Contact from './Components/Contact/Contact';

// Define a functional component to render the Navbar
function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Service/>
      <Sponsor/>
      <Contact/>
    </div>
  );
}

// Use ReactDOM to render the App component
ReactDOM.render(<App />, document.getElementById('root'));

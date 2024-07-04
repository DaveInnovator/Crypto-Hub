import React from "react";
import "./About.css";
const About = () => {
  return (
    <div
      className="container-fluid bg-light p-5 
    aos-init aos-animate
    
    "
      data-aos="fade-right"
   id="About" >
      <div className="row">
        <div className="col-md-6 left">
          <img
            src="https://wp.dreamitsolution.net/cryptobit/trading/wp-content/uploads/2022/04/04_Crypto-Trading-9.png"
            alt=""
          />
        </div>
        <div className="col-md-6 mt-4">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            beatae eum qui aliquid? Iste saepe eaque accusantium cum placeat
            deleniti velit consequuntur, possimus distinctio, soluta quibusdam
            quia beatae quis natus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sapiente numquam sit quidem similique accusamus libero
            deserunt et. Expedita, aut voluptates? Possimus, vitae autem! Vel
            dolores hic quos repudiandae at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

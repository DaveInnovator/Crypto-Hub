import React from 'react'
import Hero_image from '../Assets/Hero.png'
import Frame from '../Assets/64a92cfc28069a8bf06c9e7c_Frame%201171276146.png'
import line from '../Assets/64a95bf2d4272d7f7a89a4d9_Frame%202%20(1).png'
import horizon from '../Assets/64aef96005709a4ec64b9da2_Frame%202.png'
import './Home.css'
const Home = () => {
  return (
    <div className='container hero data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"' id='Home'>
<div className="row">
  <div className="col-md-6 left-col">
  <h1>Streamlining Life 
    <br/>Sciences <span>Transactions</span></h1>
  <p className='mt-3'>Recapturing lost revenue by creating industry-wide alignment, accuracy, and automated settlement</p>
  </div>
  <div className="col-md-6 right-col">
<img src={Hero_image} alt="" />
  </div>
</div>

<div className="row desc-contain">
  <div className="col-md-2 desc">
<img src={Frame} alt="" />
<p>the largest crypto-space<br/ >in africa</p>
  </div>
  <div className="col-md-3 line-div">
    <img className='line' src={line} alt="" />
    <img className='horizon' src={horizon} alt="" />
  </div>
  <div className="col-md-3 last-text">
    <p>Maximizing profits and making trading simple easy and interesting</p>
  </div>
</div>

    </div>
  )
}

export default Home
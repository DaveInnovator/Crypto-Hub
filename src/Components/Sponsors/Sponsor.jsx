import React from 'react'
import './Sponsor.css'
import sponsor_1 from '../Assets/Sponsor/64a964101d3884c026858b8b_5ec80df9fe416e381243dfea_Cardinal%20Health%20Logo2%201.png'
import sponsor_2 from '../Assets/Sponsor/64a96410fb7bf4cdf759111e_Frame%201171276111.png'
import sponsor_3 from '../Assets/Sponsor/64a96410fb7bf4cdf7591121_Frame%201171276114.png'
import sponsor_4 from '../Assets/Sponsor/64a9641108bfaa50ceb43754_Frame%201171276120.png'
const Sponsor = () => {
  return (
    <div className='container mt-5'>

        <div className="row">
<div className="col-md-3">
    <img src={sponsor_1} alt="" />
</div>
<div className="col-md-3">
    <img src={sponsor_2} alt="" />
</div>
<div className="col-md-3">
<img src={sponsor_3} alt="" />
</div>
<div className="col-md-3">
    <img src={sponsor_4} alt="" />
</div>
        </div>
    </div>
  )
}

export default Sponsor
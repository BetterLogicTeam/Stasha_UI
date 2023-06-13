import React from 'react'
import './Stasha_Academy.css'
import cap from '../Assets/cap.svg'

function Stasha_Academy() {
  return (

    <div className="container-fluid  accdmi_bbg">
        <div className="row p-md-5 mx-0 mx-md-5 p-0 ">

<div className="col-12 col-md-5 just_cap_btn  ">

<button className="acdmi_btn">Get Start </button>

</div>

<div className="col-md-7 col-12 pahra_btuon d-flex gap-4   on_mobile  ">
<div>
<h5 className='accdmi_h5 text-end '> Stasha Academy  </h5>
<p className='accdmi_pp'> 
Stasha Crypto Academy is your gateway to mastering the <br /> 
<p className='text-end'>

world of cryptocurrencies and blockchain technology. 
</p>
</p>
</div>
<div>

<img src={cap} className='' alt="img" />
</div>

</div>


        <a href="http://" className='lern_maore'> Learn More </a>
        </div>
        
    </div>
    
    )
}

export default Stasha_Academy
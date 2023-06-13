import React from 'react'
import './AcceptCrypto.css'
import { BiRightArrowAlt} from 'react-icons/bi';
import screen from "../Assets/sreen.png";


function AcceptCrypto() {
  return (

    

    <div className="container-fluid accept_main_bg">
      

      <div className="row accept_bg  p-md-5 mx-md-5 p-0 mx-0">
            <div className="col-12 col-md-6">
            <h5 className='accept_h4'>
    Accept crypto payments <br /> globally with StashaPay 

    </h5>

<p className='accrpt_pp mt-3'> Enjoy bordeless payments with Stasha Pay. Our solutionis user  <br />friendly, fast and secure.</p>


<a  href=" " className='get_bton mt-4'>  Get Started <BiRightArrowAlt /> </a>
            </div>
            <div className="col-12 col-md-6 ">


<img src={screen} alt="img" />


            </div>
        </div>

       </div>
   
   
    
   

    
    
   

  )
}

export default AcceptCrypto
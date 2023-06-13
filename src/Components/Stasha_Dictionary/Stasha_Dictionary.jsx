import React from 'react'
import './Stasha_Dictionary.css'
import book from '../Assets/book.svg'
import { BiRightArrowAlt} from 'react-icons/bi';


function Stasha_Dictionary() {
  return (
   <div className="container-fluid dictionay_bg">

    <div className="row p-md-5 mx-0 mx-md-5 p-0 ">
        <div className=" col-md-7 col-12 on_mobile  d-flex">
 

<div>
    <img src={book} alt="" />
</div>

<div className='ms-4'>
    <h5 className='dictionary_h5'>Stasha Dictionary</h5>
    <p className='dictionary_pa'>Discover the language of the crypto world with  <br />the Stasha Crypto Dictionary.</p>
</div>

        </div>

        <div className="  col-12 col-md-5  just_cap_btn col-md-5 d-flex  justify-content-end">

<button className="acdmi_btn  justify-content-end">Get Start </button>

</div>

<a href="http://" className='diction_learn mt-5 d-flex  justify-content-end'>Learn More  <BiRightArrowAlt  className='m-1'/>  </a>
    </div>
   </div>
  )
}

export default Stasha_Dictionary
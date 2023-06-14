import React from 'react'
import './Stasha_Dictionary.css'
import book from '../Assets/book.svg'
import { BiRightArrowAlt} from 'react-icons/bi';


function Stasha_Dictionary() {
  return (
   <div className="container-fluid dictionay_bg">

    <div className="row p-md-3 m-0 p-0 ">
        <div className=" col-md-7 col-12 on_mobile  d-flex">
 

<div className='text-center text-md-start'>
    <img src={book} className='' alt="" />
</div>

<div className='ms-4'>
    <h5 className='dictionary_h5 text-center text-md-start'>Stasha Dictionary</h5>
    <p className='dictionary_pa text-center text-md-start'>Discover the language of the crypto world with  <br />the Stasha Crypto Dictionary.</p>
</div>

        </div>

        <div className="  col-12 col-md-5  just_cap_btn col-md-5 d-flex text-center text-md-end justify-content-center  justify-content-md-end">

<button className="acdmi_btn">View Dictionary </button>

</div>

<a href="http://" className='diction_learn mt-5 d-flex  justify-content-end'>Learn More  <BiRightArrowAlt  className='m-1'/>  </a>
    </div>
    <div className='line_thori' ></div>

   </div>
  )
}

export default Stasha_Dictionary
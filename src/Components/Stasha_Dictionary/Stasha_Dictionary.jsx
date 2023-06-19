import React from 'react'
import './Stasha_Dictionary.css'
import book from '../Assets/book.svg'
import { BiRightArrowAlt} from 'react-icons/bi';


function Stasha_Dictionary() {
  return (
   <div className=" dictionay_bg">
   <div className="container">

    <div className="row py-md-3 m-0 p-0 ">
        <div className=" col-lg-7 col-12 on_mobile  d-flex">
 

<div className='text-center text-md-start'>
    <img src={book} className='' alt="" />
</div>

<div className='ms-0 ms-md-4    '>
    <h5 className='dictionary_h5 text-center text-md-start'>Stasha Dictionary</h5>
    <p className='dictionary_pa text-center text-md-start'>Discover the language of the crypto world with  <br />the Stasha Crypto Dictionary.</p>
</div>

        </div>

        <div className="  col-12 col-lg-5  just_cap_btn col-md-5 d-flex text-center text-md-end justify-content-center  justify-content-md-end">

<button className="acdmi_btn d-none d-md-block">View Dictionary </button>

</div>

<p href="http://" className='diction_learn text-center text mt-4 mt-md-0 d-flex justify-content-md-end  justify-content-center'>Learn More  <BiRightArrowAlt  className='m-1'/>  </p>
   <div className='d-flex justify-content-center mb-5'>

<button className="acdmi_btn d-block d-md-none">View Dictionary </button>
   </div>
    </div>
    <div className='line_thori' ></div>
   </div>


   </div>
  )
}

export default Stasha_Dictionary
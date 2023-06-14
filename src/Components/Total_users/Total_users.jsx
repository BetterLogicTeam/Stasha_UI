import React from 'react'
import "./Total_users.css"
import card_img from "../Assets/card_img.png"
import card_imgg from "../Assets/card_s.png"
import {MdArrowBackIosNew} from "react-icons/md"

export default function Total_users() {
  return (
    <div className='total_users_main'>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 mt-3 mt-md-0">
                <h3 className='total_user_para'>Join the thriving Stasha community today and be a part of this exciting journey. </h3>
          <hr className='zllf' />
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
                <h3 className='total_user_para'>Revolutionizing the way decentralized <br /> systems operate. </h3>
          <hr className='zllf' />
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
                <h3 className='total_user_para'>Ensuring cost-effective and efficient blockchain transactions. </h3>
          <hr className='zllf' />
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
                <h3 className='total_user_para'>With cutting-edge encryption, advanced authentication, and secure key management. </h3>
          <hr className='zllf' />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 mt-3 mt-md-0">
          <div className="card-type flex-column">
          <p>Total Users</p>
          <h2 className='colo'>10,000 +</h2>

          </div>
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
             <div className="card-type">
                <img src={card_img} alt="" />
                <p className='ms-3'>Our Technology</p>
             </div>
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
            <div className="card-type flex-column">
          <p>Avg. transaction fee</p>
          <h2 className='colo'> <MdArrowBackIosNew className='clo'></MdArrowBackIosNew> $0.02</h2>

          </div>
            </div>
            <div className="col-md-3 mt-3 mt-md-0">
            <div className="card-type">
                <img src={card_imgg} alt="" />
                <p className='ms-3'>Our Security</p>
             </div>
            </div>
        </div>
    </div>
    
   
    </div>
  )
}

import React from 'react'
import "./JoinOurCommunity.css"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

export default function JoinOurCommunity() {
  return (
    <div className='main_join_comm_bg'>
    <div className="container-fluid">
        <div className="join_us">
            <div className="text_content text-start">
                <h1>Join Our Community</h1>
                <p>Join the Stasha community and be part of the decentralized revolution.</p>
            </div>
            <div className="soicaali_">
            <div className="d-flex mt-3 mt-md-0 justify-content-center gap-4">
              <div className="social_icons_main">
                <FaTelegramPlane className="icon_size"></FaTelegramPlane>
              </div>
              <div className="social_icons_main">
                <AiOutlineTwitter className="icon_size"></AiOutlineTwitter>
              </div>
              <div className="social_icons_main">
                <FaFacebookF className="icon_size"></FaFacebookF>
              </div>
              <div className="social_icons_main">
                <AiFillInstagram className="icon_size"></AiFillInstagram>
              </div>
            </div>
            </div>
        </div>
    </div>

    </div>
  )
}

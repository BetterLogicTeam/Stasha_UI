import React from "react";
import "./Partners.css"
import yaho from "../Assets/yaho.png"
import market from "../Assets/market.svg"
import bloom from "../Assets/bloom.svg"
import tech from "../Assets/tech.svg"
import nas from "../Assets/nas.svg"

export default function Partners() {
  return (
    <div className="main_partner_bg" id="Partner">
      <div className="container">
        <div className="partners_box">
          <h1 className="partners_heading">Official Partners</h1>
          <div className="d-flex justify-content-center partners_logi">
            <img className="mbl_size" src={yaho} alt="" />
            <img className="mbl_size" src={market} alt="" />
            <img className="mbl_size" src={bloom} alt="" />
            <img className="mbl_size" src={tech} alt="" />
            <img className="mbl_size" src={nas} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

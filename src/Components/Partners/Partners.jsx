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
      <div className="container-fluid">
        <div className="partners_box">
          <h1 className="partners_heading">Official Partners</h1>
          <div className="d-flex justify-content-center partners_logi">
            <img src={yaho} alt="" />
            <img src={market} alt="" />
            <img src={bloom} alt="" />
            <img src={tech} alt="" />
            <img src={nas} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

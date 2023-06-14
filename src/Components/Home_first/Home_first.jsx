import React from "react";
import "./Home_first.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import home_img from "../Assets/home_img.gif";
export default function Home_first() {
  return (
    <div className="home_first_bg" id="Home">
      <div className="home_lwer_clr"></div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h1 className="main_home_heading">
              Unleashing the power of blockchain for a better tomorrow.
            </h1>
            <p className="home_tet">
              Embrace a World of Infinite Possibilities in Blockchain Innovation
              and Empowerment for a Brighter Future!
            </p>
            <div className="home_buttos d-flex gap-3 align-items-center mt-5 flex-column flex-md-row">
              <button className="ex_button">Explore Ecosystem</button>
              <h6 className="get_text mt-3 mt-md-0">
                Get Started with Building{" "}
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>{" "}
              </h6>
            </div>
          </div>
          <div className="col-md-5">
            <img src={home_img} className="w-100   animmma" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

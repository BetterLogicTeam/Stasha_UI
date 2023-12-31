import React from "react";
import "./Home_first.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import home_img from "../Assets/home_img.gif";
export default function Home_first() {
  return (
    <div className="home_first_bg" id="Home">
      <div className="home_lwer_clr"></div>
      <div className="container">
        <div className="row ">
        {/* home main left side heading  */}
          <div className="col-md-7">
            <h1 className="main_home_heading mb-0">
              Unleashing the power of blockchain for a better tomorrow.
            </h1>
            <p className="home_tet mb-0 py-5">
              Embrace a World of Infinite Possibilities in Blockchain Innovation
              and Empowerment for a Brighter Future!
            </p>
            <div className="home_buttos d-none  d-md-flex gap-3 align-items-center  flex-column flex-md-row">
              <button className="ex_button">Explore Ecosystem</button>
              <h6 className="get_text mt-3 mt-md-0">
                Get Started with Building{" "}
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>{" "}
              </h6>
            </div>
          </div>

          {/* gif of the home page   */}
          <div className="col-md-5">
            <img src={home_img}  className="w-100   animmma" alt="" />
            <div className="home_buttos d-block d-md-none  d-flex gap-3 align-items-center  flex-column flex-md-row">
              <h6 className="get_text mt-3 mt-md-0">
                Get Started with Building{" "}
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>{" "}
              </h6>
              <button className="ex_button">Explore Ecosystem</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

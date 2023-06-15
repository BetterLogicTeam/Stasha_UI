import React from "react";
import "./Stasha_Academy.css";
import cap from "../Assets/cap.png";

function Stasha_Academy() {
  return (
    <div className=" accdmi_bbg">
      <div className="container">
        <div className="row align-items  ">
          <div className="col-12 text-center text-md-start col-md-4 just_cap_btn  ">
            <button className="acdmi_btn ">Get Start </button>
          </div>

          <div className="col-md-8 col-12 pahra_btuon d-flex gap-4 justify-content-center  justify-content-md-end  on_mobile  ">
            <div>
              <h5 className="accdmi_h5 text-center text-md-end ">
                {" "}
                Stasha Academy{" "}
              </h5>
              <p className="accdmi_pp text-center text-md-end">
                Stasha Crypto Academy is your gateway to mastering the
                <p className="text-center text-md-end">
                  world of cryptocurrencies and blockchain technology.
                </p>
              </p>
            </div>
            <div className="text-center">
              <img src={cap} className="" alt="img" />
            </div>
          </div>

          <a href="http://" className="lern_maore ">
            {" "}
            Learn More{" "}
          </a>
        </div>
      </div>
      <div className="line_thori"></div>
    </div>
  );
}

export default Stasha_Academy;

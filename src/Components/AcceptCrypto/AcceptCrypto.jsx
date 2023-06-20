import React from "react";
import "./AcceptCrypto.css";
import { BiRightArrowAlt } from "react-icons/bi";
import screen from "../Assets/macs.png";

function AcceptCrypto() {
  return (
    <div className=" accept_main_bg">
      <div className="container">
        <div className="row p-3 accept_bg   p-0 mx-0">
        {/* text side of the page  */}
          <div className="col-12 col-md-6">
            <h5 className="accept_h4">
              Accept crypto payments <br /> globally with StashaPay
            </h5>

            <p className="accrpt_pp mt-3">
              {" "}
              Enjoy bordeless payments with Stasha Pay. Our solutionis user{" "}
              <br />
              friendly, fast and secure.
            </p>

            <p href=" " className="get_bton text-center text-md-start  mt-4">
              {" "}
              Get Started <BiRightArrowAlt />{" "}
            </p>
          </div>

          {/* image of the page  */}
          <div className="col-12 col-md-6 ">
            <img src={screen} className="respo" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcceptCrypto;
